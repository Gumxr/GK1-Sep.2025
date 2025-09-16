import React from 'react';
import { View, Text } from 'react-native';
import { g } from '../../styles/styles';

export default function ProfileScreen() {
  return (
    <View style={[g.screen, g.center]}>
      <Text style={g.title}>Profil</Text>
    </View>
  );
}