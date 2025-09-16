import React, { useMemo, useState } from 'react';
import { View, Text, Alert, Pressable } from 'react-native';
import { g } from '../../styles/styles';
import PrimaryButton from '../../components/PrimaryButton';
import { getVenueById } from '../../data/venues';
import { useBookings } from '../../store/bookings'; 


const fmtDate = (d) =>
  d.toLocaleDateString('da-DK', { weekday: 'short', day: 'numeric', month: 'short' });

export default function BookingScreen({ route, navigation }) {
  const { venueId } = route.params || {};
  const { add } = useBookings();                      


  const venue = getVenueById(venueId);
  const [selectedDate, setSelectedDate] = useState(null);   // ISO string
  const [selectedSlot, setSelectedSlot] = useState(null);   // "18:30"

  // Næste 7 dage
  const days = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return d;
    });
  }, []);

  if (!venue) {
    return (
      <View style={[g.screen, g.center]}>
        <Text style={g.text}>Kunne ikke finde banen.</Text>
      </View>
    );
  }

  
  const handleConfirm = async () => {
    const booking = {
      id: String(Date.now()),
      venueId: venue.id,
      venueName: venue.name,
      city: venue.city,
      price: venue.pricePerHour,
      dateISO: selectedDate,     // yyyy-mm-dd
      time: selectedSlot,        // "18:30"
      createdAt: new Date().toISOString(),
    };

    await add(booking);          // ⬅️ gem i storage

    const dateNice = new Date(selectedDate).toLocaleDateString('da-DK', {
      weekday: 'long', day: 'numeric', month: 'long'
    });

    Alert.alert(
      'Bekræftet',
      `Du har booket\n${booking.venueName}\n${dateNice} kl. ${booking.time}`,
      [{ text: 'OK', onPress: () => navigation.getParent()?.navigate('Bookinger') }]
    );
  };

  return (
    <View style={g.screen}>
      <Text style={g.title}>Vælg dato og tid</Text>

      {/* Resumé */}
      <View style={g.summaryCard}>
        <Text style={{ fontWeight: '700' }}>{venue.name}</Text>
        <Text style={g.textMuted}>
          {venue.city} • {venue.pricePerHour} kr./t
        </Text>
      </View>

      {/* Datoer */}
      <Text style={g.sectionTitle}>Dato</Text>
      <View style={g.chipsRow}>
        {days.map((d) => {
          const iso = d.toISOString().slice(0, 10); // yyyy-mm-dd
          const active = selectedDate === iso;
          return (
            <Pressable
              key={iso}
              style={[g.chip, active && g.chipActive]}
              onPress={() => setSelectedDate(iso)}
            >
              <Text style={[g.chipText, active && g.chipTextActive]}>{fmtDate(d)}</Text>
            </Pressable>
          );
        })}
      </View>

      {/* Tidspunkter */}
      <Text style={g.sectionTitle}>Tid</Text>
      <View style={g.chipsRow}>
        {(venue.slots || []).map((t) => {
          const active = selectedSlot === t;
          return (
            <Pressable
              key={t}
              style={[g.chip, active && g.chipActive]}
              onPress={() => setSelectedSlot(t)}
            >
              <Text style={[g.chipText, active && g.chipTextActive]}>{t}</Text>
            </Pressable>
          );
        })}
      </View>

      <PrimaryButton
        title="Bekræft booking"
        onPress={handleConfirm}
        disabled={!selectedDate || !selectedSlot}
        style={{ marginTop: 16 }}
      />

      {/* Fremdriftslinje – Book aktiv */}
      <View style={[g.progressBar, g.progressBarCentered]}>
        <View style={g.progressFlow}>
          <Text style={g.progressLabel}>Sport</Text>
          <Text style={g.progressDivider}>›</Text>
          <Text style={g.progressLabel}>Venue</Text>
          <Text style={g.progressDivider}>›</Text>
          <Text style={g.progressLabelActive}>Book</Text>
        </View>
      </View>
    </View>
  );
}