import React from 'react';
import Slider from '@react-native-community/slider';

import { StyleSheet } from 'react-native';

export function UISlider({ size, value, position, set }: {
  size: number;
  value: number;
  position: 'top' | 'bottom' | 'left' | 'right';
  set: React.Dispatch<React.SetStateAction<number>>;
}) {
  const styles = StyleSheet.create({
    top: {
      width: size,
      height: 40,
      top: -40,
      transform: [{ rotate: '-180deg' }],
    },
    bottom: {
      width: size,
      height: 40,
      bottom: -40,
    },
    left: {
      width: size,
      height: 40,
      right: (size / 2) + 20,
      top: (size / 2) - 20,
      transform: [{ rotate: '90deg' }],
    },
    right: {
      width: size,
      height: 40,
      left: (size / 2) + 20,
      top: (size / 2) - 20,
      transform: [{ rotate: '-90deg' }],
    },
  })

  return (
    <Slider
      style={[{ position: 'absolute', zIndex: 99 }, styles[position]]}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#000000"
      maximumTrackTintColor="#000000"
      thumbTintColor="#000000"
      onValueChange={set}
      value={value}
      vertical={position === 'top' || position === 'bottom' ? false : true}
    />
  );
}

