import { SPORT_IMAGES } from './sports';

// 10 VENUES pr. sport – Indre KBH + Vestegnen (mock, ca.-afstande)
export const VENUES = [
  // Padel (s1)
  { id: 'v001', sportId: 's1', name: 'Ørestad Padel – Bane 1', city: 'Ørestad', pricePerHour: 330, distanceKm: 6.0, image: SPORT_IMAGES.s1, slots: ['16:30', '17:30', '19:00'] },
  { id: 'v002', sportId: 's1', name: 'Amager Padel Center – Bane 2', city: 'Amager', pricePerHour: 320, distanceKm: 5.2, image: SPORT_IMAGES.s1, slots: ['17:00', '18:00', '19:30'] },
  { id: 'v003', sportId: 's1', name: 'Nørrebro Padel – Court A', city: 'Nørrebro', pricePerHour: 340, distanceKm: 4.1, image: SPORT_IMAGES.s1, slots: ['16:00', '17:30', '18:30'] },
  { id: 'v004', sportId: 's1', name: 'Vesterbro Padel – Court 1', city: 'Vesterbro', pricePerHour: 345, distanceKm: 3.8, image: SPORT_IMAGES.s1, slots: ['17:15', '18:15', '19:15'] },
  { id: 'v005', sportId: 's1', name: 'Frederiksberg Padelhal – Bane 3', city: 'Frederiksberg', pricePerHour: 350, distanceKm: 3.9, image: SPORT_IMAGES.s1, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v006', sportId: 's1', name: 'Valby Padel Club – Court 2', city: 'Valby', pricePerHour: 325, distanceKm: 4.6, image: SPORT_IMAGES.s1, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v007', sportId: 's1', name: 'Nordhavn Padel – Court 4', city: 'Nordhavn', pricePerHour: 355, distanceKm: 5.0, image: SPORT_IMAGES.s1, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v008', sportId: 's1', name: 'Glostrup Padel – Bane 1', city: 'Glostrup', pricePerHour: 320, distanceKm: 1.5, image: SPORT_IMAGES.s1, slots: ['17:30', '18:30', '20:00'] },
  { id: 'v009', sportId: 's1', name: 'Brøndby Padel – Court 2', city: 'Brøndby', pricePerHour: 335, distanceKm: 4.9, image: SPORT_IMAGES.s1, slots: ['17:00', '18:00', '19:30'] },
  { id: 'v010', sportId: 's1', name: 'Rødovre Padel – Court 1', city: 'Rødovre', pricePerHour: 315, distanceKm: 5.2, image: SPORT_IMAGES.s1, slots: ['16:30', '17:30', '18:30'] },

  // Fodbold (s2)
  { id: 'v011', sportId: 's2', name: 'Fælledparken – Bane 1', city: 'Østerbro', pricePerHour: 300, distanceKm: 4.2, image: SPORT_IMAGES.s2, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v012', sportId: 's2', name: 'Valby Idrætspark – Kunstgræs 2', city: 'Valby', pricePerHour: 320, distanceKm: 4.8, image: SPORT_IMAGES.s2, slots: ['16:30', '17:30', '19:00'] },
  { id: 'v013', sportId: 's2', name: 'Østerbro Stadion – Træningsbane', city: 'Østerbro', pricePerHour: 310, distanceKm: 4.5, image: SPORT_IMAGES.s2, slots: ['17:15', '18:15', '19:15'] },
  { id: 'v014', sportId: 's2', name: 'Frederiksberg Stadion – Kunstgræs', city: 'Frederiksberg', pricePerHour: 330, distanceKm: 3.7, image: SPORT_IMAGES.s2, slots: ['17:00', '18:00', '20:00'] },
  { id: 'v015', sportId: 's2', name: 'Sundby Idrætspark – Bane 3', city: 'Amager', pricePerHour: 300, distanceKm: 5.6, image: SPORT_IMAGES.s2, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v016', sportId: 's2', name: 'Nørrebroparken – 7M Bane', city: 'Nørrebro', pricePerHour: 280, distanceKm: 4.0, image: SPORT_IMAGES.s2, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v017', sportId: 's2', name: 'Glostrup Idrætspark – Hal A', city: 'Glostrup', pricePerHour: 250, distanceKm: 0.8, image: SPORT_IMAGES.s2, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v018', sportId: 's2', name: 'Brøndby Stadion – Træning', city: 'Brøndby', pricePerHour: 340, distanceKm: 4.4, image: SPORT_IMAGES.s2, slots: ['17:30', '18:30', '20:00'] },
  { id: 'v019', sportId: 's2', name: 'Albertslund Stadion – Kunstgræs', city: 'Albertslund', pricePerHour: 290, distanceKm: 3.6, image: SPORT_IMAGES.s2, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v020', sportId: 's2', name: 'Rødovre – 7M Bane A', city: 'Rødovre', pricePerHour: 270, distanceKm: 5.1, image: SPORT_IMAGES.s2, slots: ['16:30', '17:30', '18:30'] },

  // Svømning (s3)
  { id: 'v021', sportId: 's3', name: 'Bellahøj Svømmestadion – Bane 1', city: 'Bellahøj', pricePerHour: 190, distanceKm: 4.9, image: SPORT_IMAGES.s3, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v022', sportId: 's3', name: 'Frederiksberg Svømmehal – Bane 2', city: 'Frederiksberg', pricePerHour: 185, distanceKm: 3.3, image: SPORT_IMAGES.s3, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v023', sportId: 's3', name: 'Øbrohallen – Bane 3', city: 'Østerbro', pricePerHour: 180, distanceKm: 4.6, image: SPORT_IMAGES.s3, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v024', sportId: 's3', name: 'DGI Byen – Vandkultur – Bane 2', city: 'Vesterbro', pricePerHour: 200, distanceKm: 2.9, image: SPORT_IMAGES.s3, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v025', sportId: 's3', name: 'Sundby Bad – Bane 1', city: 'Amager', pricePerHour: 170, distanceKm: 6.2, image: SPORT_IMAGES.s3, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v026', sportId: 's3', name: 'Valby Vandkulturhus – Bane 2', city: 'Valby', pricePerHour: 175, distanceKm: 4.8, image: SPORT_IMAGES.s3, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v027', sportId: 's3', name: 'Rødovre Svømmehal – Bane 2', city: 'Rødovre', pricePerHour: 170, distanceKm: 5.3, image: SPORT_IMAGES.s3, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v028', sportId: 's3', name: 'Hvidovre Svømmehal – Bane 3', city: 'Hvidovre', pricePerHour: 165, distanceKm: 6.1, image: SPORT_IMAGES.s3, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v029', sportId: 's3', name: 'Tårnby Svømmehal – Bane 1', city: 'Tårnby', pricePerHour: 160, distanceKm: 7.9, image: SPORT_IMAGES.s3, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v030', sportId: 's3', name: 'Kastrup Svømmehal – Bane 2', city: 'Kastrup', pricePerHour: 160, distanceKm: 9.0, image: SPORT_IMAGES.s3, slots: ['17:00', '18:00', '19:00'] },

  // Badminton (s4)
  { id: 'v031', sportId: 's4', name: 'Frederiksberg Badminton – Bane 1', city: 'Frederiksberg', pricePerHour: 210, distanceKm: 3.2, image: SPORT_IMAGES.s4, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v032', sportId: 's4', name: 'DGI Byen – Badminton 3', city: 'Vesterbro', pricePerHour: 220, distanceKm: 3.0, image: SPORT_IMAGES.s4, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v033', sportId: 's4', name: 'Østerbrohallen – Bane 2', city: 'Østerbro', pricePerHour: 200, distanceKm: 4.6, image: SPORT_IMAGES.s4, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v034', sportId: 's4', name: 'Bellahøj Hallen – Bane 4', city: 'Bellahøj', pricePerHour: 205, distanceKm: 4.9, image: SPORT_IMAGES.s4, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v035', sportId: 's4', name: 'Ryparken – Badminton 5', city: 'Ryparken', pricePerHour: 200, distanceKm: 5.1, image: SPORT_IMAGES.s4, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v036', sportId: 's4', name: 'Valbyhallen – Bane 3', city: 'Valby', pricePerHour: 195, distanceKm: 4.8, image: SPORT_IMAGES.s4, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v037', sportId: 's4', name: 'Rødovrehallen – Bane 1', city: 'Rødovre', pricePerHour: 190, distanceKm: 5.2, image: SPORT_IMAGES.s4, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v038', sportId: 's4', name: 'Hvidovre Badminton – Bane 2', city: 'Hvidovre', pricePerHour: 200, distanceKm: 6.0, image: SPORT_IMAGES.s4, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v039', sportId: 's4', name: 'Glostrup Badminton – Bane 4', city: 'Glostrup', pricePerHour: 205, distanceKm: 1.7, image: SPORT_IMAGES.s4, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v040', sportId: 's4', name: 'Albertslund Badminton – Bane 6', city: 'Albertslund', pricePerHour: 195, distanceKm: 3.8, image: SPORT_IMAGES.s4, slots: ['17:15', '18:15', '19:15'] },

  // Basket (s5)
  { id: 'v041', sportId: 's5', name: 'DGI Byen – Basket Court A', city: 'Vesterbro', pricePerHour: 260, distanceKm: 2.9, image: SPORT_IMAGES.s5, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v042', sportId: 's5', name: 'Vesterbrohallen – Court 1', city: 'Vesterbro', pricePerHour: 255, distanceKm: 3.3, image: SPORT_IMAGES.s5, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v043', sportId: 's5', name: 'Østerbrohuset – Court 2', city: 'Østerbro', pricePerHour: 250, distanceKm: 4.7, image: SPORT_IMAGES.s5, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v044', sportId: 's5', name: 'Grøndal Multicenter – Court 4', city: 'Grøndal', pricePerHour: 270, distanceKm: 5.0, image: SPORT_IMAGES.s5, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v045', sportId: 's5', name: 'Bellahøj – Court 1', city: 'Bellahøj', pricePerHour: 255, distanceKm: 4.9, image: SPORT_IMAGES.s5, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v046', sportId: 's5', name: 'Valbyhallen – Court 2', city: 'Valby', pricePerHour: 245, distanceKm: 4.8, image: SPORT_IMAGES.s5, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v047', sportId: 's5', name: 'Rødovrehallen – Court B', city: 'Rødovre', pricePerHour: 240, distanceKm: 5.2, image: SPORT_IMAGES.s5, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v048', sportId: 's5', name: 'Hvidovre Hallen – Court A', city: 'Hvidovre', pricePerHour: 240, distanceKm: 6.0, image: SPORT_IMAGES.s5, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v049', sportId: 's5', name: 'Brøndby Hallen – Court 2', city: 'Brøndby', pricePerHour: 250, distanceKm: 4.4, image: SPORT_IMAGES.s5, slots: ['18:00', '19:00', '20:00'] },
  { id: 'v050', sportId: 's5', name: 'Frederiksberg – Center Court', city: 'Frederiksberg', pricePerHour: 265, distanceKm: 3.5, image: SPORT_IMAGES.s5, slots: ['17:15', '18:15', '19:15'] },

  // Håndbold (s6)
  { id: 'v051', sportId: 's6', name: 'Bellahøj Hallen – Håndbold', city: 'Bellahøj', pricePerHour: 240, distanceKm: 4.9, image: SPORT_IMAGES.s6, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v052', sportId: 's6', name: 'Frederiksberg Hallen – Håndbold', city: 'Frederiksberg', pricePerHour: 245, distanceKm: 3.4, image: SPORT_IMAGES.s6, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v053', sportId: 's6', name: 'Ryparken – Hal 2 (Håndbold)', city: 'Ryparken', pricePerHour: 235, distanceKm: 5.0, image: SPORT_IMAGES.s6, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v054', sportId: 's6', name: 'Grøndal – Hal 3 (Håndbold)', city: 'Grøndal', pricePerHour: 240, distanceKm: 5.2, image: SPORT_IMAGES.s6, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v055', sportId: 's6', name: 'Valbyhallen – Håndbold', city: 'Valby', pricePerHour: 235, distanceKm: 4.7, image: SPORT_IMAGES.s6, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v056', sportId: 's6', name: 'Rødovre – Håndbold', city: 'Rødovre', pricePerHour: 230, distanceKm: 5.1, image: SPORT_IMAGES.s6, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v057', sportId: 's6', name: 'Hvidovre – Håndbold', city: 'Hvidovre', pricePerHour: 230, distanceKm: 6.1, image: SPORT_IMAGES.s6, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v058', sportId: 's6', name: 'Brøndby – Håndbold', city: 'Brøndby', pricePerHour: 240, distanceKm: 4.5, image: SPORT_IMAGES.s6, slots: ['17:30', '18:30', '20:00'] },
  { id: 'v059', sportId: 's6', name: 'Glostrup – Håndbold', city: 'Glostrup', pricePerHour: 225, distanceKm: 1.9, image: SPORT_IMAGES.s6, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v060', sportId: 's6', name: 'Tingbjerg Hallen – Håndbold', city: 'Tingbjerg', pricePerHour: 235, distanceKm: 5.5, image: SPORT_IMAGES.s6, slots: ['16:45', '17:45', '18:45'] },

  // Golf (s7)
  { id: 'v061', sportId: 's7', name: 'Royal Golf Center – Range', city: 'Ørestad', pricePerHour: 280, distanceKm: 6.8, image: SPORT_IMAGES.s7, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v062', sportId: 's7', name: 'Vallensbæk Golfklub – Par 3', city: 'Vallensbæk', pricePerHour: 220, distanceKm: 6.1, image: SPORT_IMAGES.s7, slots: ['16:40', '17:20', '18:00'] },
  { id: 'v063', sportId: 's7', name: 'Hedeland Golfklub – Tee 1', city: 'Hedehusene', pricePerHour: 260, distanceKm: 11.0, image: SPORT_IMAGES.s7, slots: ['16:10', '17:10', '18:10'] },
  { id: 'v064', sportId: 's7', name: 'Copenhagen Golf Center – Tee 2', city: 'Amager', pricePerHour: 270, distanceKm: 7.0, image: SPORT_IMAGES.s7, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v065', sportId: 's7', name: 'Kokkedal Golf – Range' , city: 'Kokkedal', pricePerHour: 290, distanceKm: 21.0, image: SPORT_IMAGES.s7, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v066', sportId: 's7', name: 'Brøndby Golf – Tee 2', city: 'Brøndby', pricePerHour: 240, distanceKm: 5.8, image: SPORT_IMAGES.s7, slots: ['16:00', '17:00', '18:00'] },
  { id: 'v067', sportId: 's7', name: 'Glostrup Golf – Putting Green', city: 'Glostrup', pricePerHour: 210, distanceKm: 2.0, image: SPORT_IMAGES.s7, slots: ['16:15', '17:15', '18:15'] },
  { id: 'v068', sportId: 's7', name: 'Frederiksberg Pitch & Putt', city: 'Frederiksberg', pricePerHour: 230, distanceKm: 3.6, image: SPORT_IMAGES.s7, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v069', sportId: 's7', name: 'Amager Golf Træning', city: 'Amager', pricePerHour: 240, distanceKm: 6.5, image: SPORT_IMAGES.s7, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v070', sportId: 's7', name: 'Indre By – Urban Putting', city: 'København K', pricePerHour: 220, distanceKm: 2.5, image: SPORT_IMAGES.s7, slots: ['16:45', '17:45', '18:45'] },

  // Volleyball (s8)
  { id: 'v071', sportId: 's8', name: 'DGI Byen – Volleyball', city: 'Vesterbro', pricePerHour: 220, distanceKm: 3.0, image: SPORT_IMAGES.s8, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v072', sportId: 's8', name: 'Frederiksberg Hallen – Volleyball', city: 'Frederiksberg', pricePerHour: 210, distanceKm: 3.4, image: SPORT_IMAGES.s8, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v073', sportId: 's8', name: 'Østerbrohallen – Volleyball', city: 'Østerbro', pricePerHour: 215, distanceKm: 4.6, image: SPORT_IMAGES.s8, slots: ['17:15', '18:15', '19:15'] },
  { id: 'v074', sportId: 's8', name: 'Nørrebrohallen – Volleyball', city: 'Nørrebro', pricePerHour: 205, distanceKm: 4.1, image: SPORT_IMAGES.s8, slots: ['16:45', '17:45', '18:45'] },
  { id: 'v075', sportId: 's8', name: 'Bellahøj – Volleyball', city: 'Bellahøj', pricePerHour: 210, distanceKm: 4.9, image: SPORT_IMAGES.s8, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v076', sportId: 's8', name: 'Valbyhallen – Volleyball', city: 'Valby', pricePerHour: 200, distanceKm: 4.8, image: SPORT_IMAGES.s8, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v077', sportId: 's8', name: 'Rødovre – Volleyball', city: 'Rødovre', pricePerHour: 195, distanceKm: 5.2, image: SPORT_IMAGES.s8, slots: ['17:00', '18:00', '19:00'] },
  { id: 'v078', sportId: 's8', name: 'Hvidovre – Volleyball', city: 'Hvidovre', pricePerHour: 195, distanceKm: 6.0, image: SPORT_IMAGES.s8, slots: ['16:30', '17:30', '18:30'] },
  { id: 'v079', sportId: 's8', name: 'Grøndal – Volleyball', city: 'Grøndal', pricePerHour: 205, distanceKm: 5.1, image: SPORT_IMAGES.s8, slots: ['17:15', '18:15', '19:15'] },
  { id: 'v080', sportId: 's8', name: 'Amagerhallen – Volleyball', city: 'Amager', pricePerHour: 210, distanceKm: 6.3, image: SPORT_IMAGES.s8, slots: ['17:00', '18:00', '19:00'] },
];

// Helpers
export const getVenuesBySport = (sportId) =>
  VENUES.filter(v => v.sportId === sportId);

export const getVenueById = (venueId) =>
  VENUES.find(v => v.id === venueId) || null;

export const sortByDistance = (venues) =>
  [...venues].sort((a, b) => a.distanceKm - b.distanceKm);