
import { ScrollView, StyleSheet, Text, View, Image, Alert, TouchableOpacity, StatusBar } from 'react-native';
import { TextInput } from 'react-native';
export default function App() {
  const handlepress = () => {
    console.log("login button is pressed")
    Alert.alert('Login', 'You pressed the login button', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView >
        <View style={styles.logo_container}>
          <Image resizeMode='contain' style={styles.logo_image} source={require('./assets/logo.svg')} />
          <Text style={styles.logo_text}>Login</Text>
        </View>
        <View style={styles.inputs_container}>
          <View style={styles.input_view}>
            <Text style={styles.input_label}>Enter Email</Text>
            <TextInput selectionColor={'black'} placeholder='Email*' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.input_label}>Enter Password</Text>
            <TextInput selectionColor={'black'} placeholder='Password*' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.input_view}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlepress}
            >
              <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    marginTop: '25%',
    backgroundColor: 'white',
    justifyContent: 'center',
    gap: 30

  },

  logo_container: {
    flex: 0.2,
    color: 'white',
    marginBottom: 40,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_text: {
    fontSize: 40,
    color: '#3B3C36'
  },
  logo_image: { width: 120, height: 120 },
  inputs_container: {
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    gap: 10
  },
  input_view: {
    width: '70%',
    // backgroundColor:'red'
  },
  input_label:{
    marginBottom:5
  },

  input: {
    borderRadius: 4,
    width: '100%',
    borderColor: '#0d6efd',
    borderWidth: 1,
    padding: 5,

  },

  button: {
    padding: 1,
    backgroundColor: '#0d6efd',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 4,
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    width: '100%',


  },
  button_text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'

  }
});
