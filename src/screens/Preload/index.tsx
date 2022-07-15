import { ActivityIndicator, Alert, Button, SafeAreaView, Text } from 'react-native'
import {styles} from './styles'
import React, { useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { useStateValue } from '../../contexts/StateContext'

export const Preload = () => {
  const navigation = useNavigation()
  const {state, dispatch} = useStateValue()

  const checkLogin = async () => {
    const token = await api.geToken()
    if (token) {
      const response = await api.validateToken()
      if (response.error === '') {
        dispatch({
          type: 'SET_USER',
          payload: {
            user: response.user
          }
        })
        navigation.reset({

          routes:[{name: 'ChooseProperty'}]
        })
      } else {
        Alert.alert(response.error)
        dispatch({
          type: 'SET_TOKEN',
          payload: {
            token: ''
          }
        })
        navigation.reset({

          routes:[{name: 'SignIn'}]
        })
      }
    } else {
      navigation.reset({
        routes:[{name: 'SignIn'}]
      })
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])
  
  const handleLogout = async () => {
    await api.logout()
    navigation.reset({
      routes:[{name: 'SignIn'}]
    })
  }

  return (   
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={'large'} color='#8863E6'/>
      <Button title='aaa' onPress={handleLogout}/>
    </SafeAreaView>
  )
}