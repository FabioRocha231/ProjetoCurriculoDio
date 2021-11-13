import React from 'react';
import { View, TouchableOpacity, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

function Icones() {
  return (
    <View>
      <View style={styles.redesSociais}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/FabioRocha231')}
        >
          <Icon name="github" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Rede social indisponivel')}
        >
          <Icon name="facebook" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/fabio-haroldo-862631209/',
            )
          }
        >
          <Icon name="linkedin" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { Icones };
