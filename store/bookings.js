import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingsContext = createContext();
const STORAGE_KEY = 'BOOKINGS_V1';

export function BookingsProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [ready, setReady] = useState(false);

  // load
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) setBookings(JSON.parse(raw));
      } catch {}
      setReady(true);
    })();
  }, []);

  // helpers
  const persist = async (next) => {
    setBookings(next);
    try { await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  };

  const add = async (booking) => persist([booking, ...bookings]);
  const remove = async (id) => persist(bookings.filter(b => b.id !== id));
  const clear = async () => persist([]);

  return (
    <BookingsContext.Provider value={{ bookings, add, remove, clear, ready }}>
      {children}
    </BookingsContext.Provider>
  );
}

export const useBookings = () => useContext(BookingsContext);