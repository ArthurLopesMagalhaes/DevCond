import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5f6FA',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 250,
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: '#000',
    fontSize: 15,
    padding: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#8863E6',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  textButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: "bold",
  }
})