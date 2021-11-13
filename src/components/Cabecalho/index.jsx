import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './styles';

function Cabecalho() {
  return (
    <View style={styles.containerCabecalho}>
      <Image
        style={styles.foto}
        source={{ uri: 'https://github.com/FabioRocha231.png' }}
      />
      <Text style={styles.nome}>Fabio HR Filho</Text>
      <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
    </View>
  );
}

export { Cabecalho };
