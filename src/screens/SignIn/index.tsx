import { ActivityIndicator, Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { api } from "../../services/api"
import { useStateValue } from "../../contexts/StateContext"

export const SignIn = () => {
  const navigation = useNavigation()
  const {state, dispatch} = useStateValue()

  const [cpf, setCpf] = useState('')
  const [password, setPasswowrd] = useState('')

  const handleLoginButton = async () => {
    if (cpf && password) {
      const response = await api.login(cpf, password)
      if (response.error === '') {
        dispatch({type: 'SET_TOKEN', payload: {token: response.token}})
        dispatch({type: 'SET_USER', payload: {user: response.user}})
        navigation.reset({
          routes: [{name: 'ChooseProperty'}]
        })
      } else {Alert.alert(response.error)}
    } else {
      Alert.alert('Preencha os campos')
    }
  }

  const handleRegisterButton = () => {
    navigation.navigate('SignUp')
  }

  return (   
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../../assets/undraw_home.png')} 
          resizeMode='contain'
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF" 
        keyboardType="numeric"
        value={cpf}
        onChangeText={txt => setCpf(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={txt => setPasswowrd(txt)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
        <Text style={styles.textButton}>
          ENTRAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegisterButton}>
        <Text style={styles.textButton}>
          CADASTRAR-SE
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}