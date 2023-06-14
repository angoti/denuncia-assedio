import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/styles';

GoogleSignin.configure({
  webClientId:
    '829208944695-43u8nvtkbtnufrm6pto7r7pk4do2u4a4.apps.googleusercontent.com',
});

export const logOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

function SignInScreen({signIn}) {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  async function onGoogleButtonPress() {
    setIsSigninInProgress(true);
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Light}
        onPress={() => onGoogleButtonPress().then(user => signIn(user.user))}
        disabled={isSigninInProgress}
      />
    </View>
  );
}

export default SignInScreen;