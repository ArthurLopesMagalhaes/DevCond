import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = 'https://api.b7web.com.br/devcond/api'

const request = async (
  method: string, 
  endpoint: string, 
  params: object, 
  token: string | null = null
  ) => {
    method = method.toLowerCase()
    let fullUrl = `${baseUrl}${endpoint}`
    let body = null

    switch (method) {
      case 'get':
        let queryString = new URLSearchParams(params.toString()).toString()
        fullUrl += `?${queryString}`
        break;
      case 'post':
      case 'put':
      case 'delete':
        body = JSON.stringify(params)
      default:
        break;
    }

    let headers: any = {'Content-Type': 'application/json'}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    let req = await fetch(fullUrl, {
      method,
      headers,
      body
    })

    const json = req.json()
    return json

  }

export const api = {
  geToken: async () => {
    return await AsyncStorage.getItem('@token')
  },
  validateToken: async () => {
    let token = await AsyncStorage.getItem('@token')
    let json = await request('post', '/auth/validate', {}, token)
    return json
  },
  login: async (cpf: string, password: string) => {
    const json = await request('post', '/auth/login', {cpf, password})
    return json
  },
  logout: async () => {
    let token = await AsyncStorage.getItem('@token')
    const json = await request('post', '/auth/logout', {}, token)
    await AsyncStorage.removeItem('@token')
    return json
  }
}