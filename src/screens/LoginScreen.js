import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AuthContext from '../context/AuthContext';

export default function LoginScreen() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Chat Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={() => setUser({ name: username })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
});
