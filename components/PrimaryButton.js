import React from 'react';
import { Pressable, Text } from 'react-native';
import { g } from '../styles/styles';

export default function PrimaryButton({ title, onPress, style, disabled }) {
  return (
    <Pressable
      style={[g.btn, disabled && g.btnDisabled, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={g.btnText}>{title}</Text>
    </Pressable>
  );
}