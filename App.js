import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleTextField = (text, property) => {
    setForm((prevForm) => ({
      ...prevForm,
      [property]: text,
    }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <TextInput
        style={{
          backgroundColor: 'green',
          margin: 8,
          padding: 8,
          borderRadius: 8
        }}
        value={form.name}
        placeholder='Enter name'
        onChangeText={(e) => handleTextField(e, 'name')}
      />

      <TextInput
        style={{
          backgroundColor: 'green',
          margin: 8,
          padding: 8,
          borderRadius: 8
        }}
        value={form.email}
        placeholder='Enter email'
        onChangeText={(e) => handleTextField(e, 'email')}
      />

      <TextInput
        style={{
          backgroundColor: 'green',
          margin: 8,
          padding: 8,
          borderRadius: 8
        }}
        value={form.password}
        placeholder='Enter password'
        onChangeText={(e) => handleTextField(e, 'password')}
      />

      <TouchableOpacity
        onPress={() => {
          console.log(`name: ${form.name}`);
          console.log(`email: ${form.email}`);
          console.log(`password: ${form.password}`);
        }}
        style={{ backgroundColor: 'blue', borderRadius: 8, margin: 8, padding: 8, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Proceed</Text>
      </TouchableOpacity>

    </View>
  )
}

export default App