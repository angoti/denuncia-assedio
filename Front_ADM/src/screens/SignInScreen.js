import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';


GoogleSignin.configure({
  webClientId:
    '829208944695-43u8nvtkbtnufrm6pto7r7pk4do2u4a4.apps.googleusercontent.com',
});

export const logOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error, "Erro aqui logOut");
  }
};

export const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInrSilently();
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export default function SignInScreen({ signIn }) {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  async function onGoogleButtonPress() {
    setIsSigninInProgress(true);
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 25}}>
        <Text style={{fontSize: 25, fontWeight: "bold"}}>Login</Text>
      </View>
      <View>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Light}
          onPress={() => onGoogleButtonPress().then(user => signIn(user.user))}
          disabled={isSigninInProgress}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "red"

  },
  button: {
    borderWidth: 1,
    width: 150,

  }
})