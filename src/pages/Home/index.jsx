import React from 'react';

import { View, Text } from 'react-native';
import { styles } from './styles';

import { Cabecalho } from '../../components/Cabecalho';
import { Icones } from '../../components/Icones';
import { Card } from '../../components/Card';

function Home() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Icones />
      <Card title="Experiência profissional">
        <Text style={styles.cardContentText}>Sushi Cheff</Text>
        <Text style={styles.cardContentText}>Respositor de Mercadorias</Text>
        <Text style={styles.cardContentText}>Atendente de telemarketing</Text>
      </Card>

      <Card title="Formação Academica">
        <Text style={styles.cardContentText}>
          Desenvolvimento mobile com ReactNative e redux
        </Text>
        <Text style={styles.cardContentText}>Javascript de A a Z</Text>
        <Text style={styles.cardContentText}>
          Desenvolvimento Web completo - Origamid
        </Text>
      </Card>
    </View>
  );
}

export { Home };
