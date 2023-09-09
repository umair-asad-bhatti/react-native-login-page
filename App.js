
import Login from './src/screens/login';
import { View, StatusBar, StyleSheet } from 'react-native';
export default function App() {

  return (
    <View style={styles.container} >
      <StatusBar />
      <Login />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
  },
})

