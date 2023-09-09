
import { Button, StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
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
      <View style={styles.logo_container}>
        <Image source={require('./assets/favicon.png')} />
        <Text style={styles.logo_text}>Login</Text>
      </View>
      <View style={styles.inputs_container}>
        <View style={styles.input_view}>

          <Text style={styles.input_label}>Enter Email</Text>
          <TextInput placeholder='Email*' style={styles.input}>
          </TextInput>
        </View>
        <View style={styles.input_view}>
          <Text style={styles.input_label}>Enter Password</Text>
          <TextInput placeholder='Password*' style={styles.input}>
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




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    gap: 30,

  },

  logo_container: {
    flex: 0.2,
    color: 'white',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_text: {
    fontSize: 40,
    color: 'gray'
  },
  inputs_container: {
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    gap: 20
  },
  input_view: {
    width: '70%',
    // backgroundColor:'red'
  },
  input_label: {
    color: 'gray'
  },
  input: {
    marginTop: 10,
    borderRadius: 4,
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 2,
    padding: 5,
    color: 'gray'

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