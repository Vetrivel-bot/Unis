import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import AuthContext from '../context/AuthContext';

export default function SettingsScreen() {
  const { setUser } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={() => setUser(null)} />
    </View>
  );
}
