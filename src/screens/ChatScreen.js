import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  function sendMessage() {
    if (!input) return;
    setMessages([...messages, { id: Date.now(), text: input }]);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatBox}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type message..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  chatBox: { flex: 1 },
  message: { backgroundColor: '#e5e5e5', margin: 5, padding: 8, borderRadius: 5 },
  inputContainer: { flexDirection: 'row', alignItems: 'center' },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 5,
    padding: 8,
    borderRadius: 5,
  },
});
