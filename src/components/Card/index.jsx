import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text>{title}</Text>
      </View>

      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

export { Card };
