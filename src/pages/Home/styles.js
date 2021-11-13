import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#E7E7E7',
  },
  cardHeader: {},
  cardContent: {
    marginTop: 10,
    alignItems: 'center',
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export { styles };
