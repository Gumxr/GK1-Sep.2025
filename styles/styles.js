import { StyleSheet } from 'react-native';

export const colors = {
  bg: '#fff',
  text: '#111',
  card: '#f2f2f7',
  primary: '#0a84ff',
  muted: '#6b7280',
  border: '#e5e7eb',
};

export const g = StyleSheet.create({
  // Layout
  screen: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  center: { alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  flex1: { flex: 1 },

  // Text
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginVertical: 12, color: colors.text },
  text: { fontSize: 16, color: colors.text },
  textMuted: { color: colors.muted },
  semibold: { fontWeight: '600' },

  // Cards & Buttons
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 12, marginVertical: 8 },
  btn: { backgroundColor: colors.primary, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },

  // Explore: grid af sportsgrene
  sportListContent: { paddingVertical: 12 },
  sportRow: { justifyContent: 'space-between', marginBottom: 12 },
  sportChip: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 6,
  },
  sportIcon: { fontSize: 28, marginBottom: 6 },
  sportName: { fontSize: 16, fontWeight: '600', color: colors.text },

  // Fremdriftslinje i bunden
  progressBar: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  progressBarCentered: { alignItems: 'center' },
  progressFlow: { flexDirection: 'row', alignItems: 'center' },
  progressLabel: { fontSize: 14, color: colors.muted },
  progressLabelActive: { fontSize: 14, color: colors.primary, fontWeight: '700' },
  progressDivider: { marginHorizontal: 8, color: colors.muted, fontSize: 14 },

  // (valgfrit) profil-badge hvis du får brug for det et andet sted
  profileBadge: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: colors.card,
    alignItems: 'center', justifyContent: 'center',
  },

  venueListContent: { paddingBottom: 12 },
  venueCard: { borderRadius: 12, backgroundColor: colors.card, marginBottom: 12, overflow: 'hidden' },
  venueImage: { width: '100%', height: 140 },
  venueBody: { padding: 12 },
  venueName: { fontSize: 16, fontWeight: '700', color: colors.text },
  venueMetaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 },
  venueMeta: { fontSize: 14, color: colors.muted },
  actionsRow: { flexDirection: 'row', gap: 8, marginTop: 10 },
  half: { flex: 1 },
  pricePill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, backgroundColor: colors.border },

  // Sektionstitler
  sectionTitle: { fontSize: 16, fontWeight: '700', marginTop: 8, marginBottom: 6, color: colors.text },

  // Chips (dato + tid)
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: 14, color: colors.text },
  chipTextActive: { color: '#fff', fontWeight: '700' },

  // Cards på Booking
  summaryCard: { backgroundColor: colors.card, borderRadius: 12, padding: 12, marginBottom: 12 },

  // Knap-tilstande
  btnDisabled: { opacity: 0.5 },

  // Safe area wrapper
  safe: { flex: 1, backgroundColor: colors.bg },

  // Sticky progress bar i bunden
  progressSticky: { marginTop: 'auto' },

  // Bookings (empty + list)
  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  bookingCard: { backgroundColor: colors.card, borderRadius: 12, padding: 12, marginBottom: 10 },
  bookingTitle: { fontSize: 16, fontWeight: '700', color: colors.text },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, backgroundColor: colors.border },


});