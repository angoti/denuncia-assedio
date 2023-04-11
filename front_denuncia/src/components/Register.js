import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import { useForm, Controller } from 'react-hook-form'

export function Register() {
  const { control, handleSubmit, formState: { erros } } = useForm({})

  function handleRegisterUser(data) {
    console.log(data)
  }

  return (
    <View>
      <Controller
        control={control}
        name="userName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Name'
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Email'
          />
        )}
      />

      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Phone'
          />
        )}
      />


      <TouchableOpacity style={styles.button}  onPress={handleSubmit(handleRegisterUser)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "purple",
    padding: 20,
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 20
},
buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
},


input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},

})