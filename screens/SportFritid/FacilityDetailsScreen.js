// screens/SportFritid/FacilityDetailsScreen.js
import React, { useMemo } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { g } from '../../styles/styles';
import PrimaryButton from '../../components/PrimaryButton';
import { getVenuesBySport, sortByDistance } from '../../data/venues';
import { SPORTS } from '../../data/sports';

export default function FacilityDetailsScreen({ route, navigation }) {
  const { sportId } = route.params || {};

  const sport = SPORTS.find(s => s.id === sportId);
  const sportName = sport?.name ?? 'Sport';

  const venues = useMemo(() => {
    const list = getVenuesBySport(sportId);
    return sortByDistance(list);
  }, [sportId]);

  const renderItem = ({ item }) => (
    <View style={g.venueCard}>
      <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={g.venueImage}
      />

      <View style={g.venueBody}>
        <Text style={g.venueName}>{item.name}</Text>

        <View style={g.venueMetaRow}>
          <Text style={g.venueMeta}>{item.city} • {item.distanceKm} km</Text>
          <View style={g.pricePill}>
            <Text>{item.pricePerHour} kr./t</Text>
          </View>
        </View>

        <View style={g.actionsRow}>
          <PrimaryButton
            title="Se detaljer"
            onPress={() => navigation.navigate('Booking', { venueId: item.id })}
            style={g.half}
          />
          <PrimaryButton
            title="Vælg tid"
            onPress={() => navigation.navigate('Booking', { venueId: item.id })}
            style={g.half}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={g.screen}>
      {/* Nu viser vi den valgte sportsgren i stedet for “Vælg bane” */}
      <Text style={g.title}>{sportName}</Text>

      <FlatList
        data={venues}
        keyExtractor={(v) => v.id}
        renderItem={renderItem}
        contentContainerStyle={g.venueListContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={g.text}>Ingen baner fundet.</Text>}
      />

      {/* Fremdriftslinje i bunden – Venue aktiv */}
      <View style={[g.progressBar, g.progressBarCentered]}>
        <View style={g.progressFlow}>
          <Text style={g.progressLabel}>Sport</Text>
          <Text style={g.progressDivider}>›</Text>
          <Text style={g.progressLabelActive}>Venue</Text>
          <Text style={g.progressDivider}>›</Text>
          <Text style={g.progressLabel}>Book</Text>
        </View>
      </View>
    </View>
  );
}