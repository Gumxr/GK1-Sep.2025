import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { g } from '../../styles/styles';
import { useBookings } from '../../store/bookings';

const fmt = (iso, time) => {
  try {
    const d = new Date(iso);
    const dStr = d.toLocaleDateString('da-DK', { weekday:'short', day:'numeric', month:'short' });
    return `${dStr} kl. ${time}`;
  } catch { return `${iso} kl. ${time}`; }
};

export default function PreviousScreen() {
  const { bookings, remove, clear, ready } = useBookings();

  if (!ready) {
    return (
      <SafeAreaView style={g.safe}>
        <View style={[g.screen, g.center]}>
          <Text>Indlæser…</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={g.safe}>
      <View style={g.screen}>
        <Text style={g.title}>Mine bookinger</Text>

        {bookings.length === 0 ? (
          <View style={g.emptyCard}>
            <Text style={g.textMuted}>Ingen bookinger endnu.</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={bookings}
              keyExtractor={(b) => b.id}
              contentContainerStyle={{ paddingBottom: 16 }}
              renderItem={({ item }) => (
                <View style={g.bookingCard}>
                  <View style={g.rowBetween}>
                    <Text style={g.bookingTitle}>{item.venueName}</Text>
                    <View style={g.badge}><Text>{item.price} kr./t</Text></View>
                  </View>
                  <Text style={g.textMuted}>{item.city}</Text>
                  <Text style={{ marginTop: 6 }}>{fmt(item.dateISO, item.time)}</Text>

                  <View style={[g.rowBetween, { marginTop: 10 }]}>
                    <Pressable onPress={() => remove(item.id)}>
                      <Text style={{ color: '#ef4444', fontWeight: '700' }}>Slet</Text>
                    </Pressable>
                    <View />
                  </View>
                </View>
              )}
            />

            <Pressable onPress={clear} style={{ alignSelf: 'center', marginTop: 4 }}>
              <Text style={{ color: '#6b7280' }}>Ryd alle</Text>
            </Pressable>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
