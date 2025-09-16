// screens/SportFritid/ExploreScreen.js
import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { g } from '../../styles/styles';
import { SPORTS } from '../../data/sports';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={g.screen}>
      <Text style={g.title}>Vælg sportsgren</Text>

      <View style={g.flex1}>
        <FlatList
          data={SPORTS}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={g.sportRow}
          contentContainerStyle={g.sportListContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={g.sportChip}
              onPress={() => navigation.navigate('FacilityDetails', { sportId: item.id })}
            >
              <Text style={g.sportIcon}>{item.icon}</Text>
              <Text style={g.sportName}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      <View style={[g.progressBar, g.progressBarCentered]}>
        <View style={g.progressFlow}>
          <Text style={g.progressLabelActive}>Sport</Text>
          <Text style={g.progressDivider}>›</Text>
          <Text style={g.progressLabel}>Venue</Text>
          <Text style={g.progressDivider}>›</Text>
          <Text style={g.progressLabel}>Book</Text>
        </View>
      </View>
    </View>
  );
}