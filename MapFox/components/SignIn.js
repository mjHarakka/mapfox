import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

//console.log(auth);

/*
const SignIn = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    //const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //console.log('Subscriber: ', subscriber)
    //return subscriber; // unsubscribe on unmount
    console.log(auth);
  }, []);

  //if (initializing) return null;

  if (initializing) return (
      <View>
          <Text>Initializing</Text>
      </View>
  )

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Text>Welcome user.email</Text>
    </View>
  );
}
*/

export default SignIn;