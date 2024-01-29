// ATV1
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, Alert, TextInput, TouchableHighlight } from 'react-native';

const logo = require('./assets/reactNative.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Espaço de preenchimento superior branco */}
        <View style={styles.paddingTop}></View>

        {/* Conteúdo Principal */}
        <View style={styles.conteudo}>
          {/* View IMAGEM */}
          <View style={styles.styleImage}>
            <Image source={logo} style={{ width: 300, height: 300, borderRadius: 200, borderColor:'#ecffff', borderWidth:5 }}></Image>
          </View>
          {/* View FRASE DE LOGIN */}
          <View style={styles.container2}>
            <Text style={{ color: '#ecffff', fontSize: 20 }}>Faça Login para navegar no Sistema</Text>
          </View>

          <View style={styles.line}></View>
          {/* View INPUTTEXT */}
          <View style={styles.positionInput}>
            <Text style={styles.labelInput}>Usuário</Text>
            <TextInput placeholder='E-mail' style={styles.input}></TextInput>
            <Text style={styles.labelInput}>Senha</Text>
            <TextInput placeholder='Senha' secureTextEntry={true} style={styles.input}></TextInput>
          </View>

          {/* BOTÃO */}
          <TouchableHighlight
            style={styles.customButton}
            underlayColor="#424a81"
            onPress={() => Alert.alert('Aviso!', 'Botão "CADASTRAR" Pressionado!', [
              {
                text: 'Cancelar',
                onPress: () => console.log('Botão cancelar pressionado!')
              },
              {
                text: 'Cadastrar',
                onPress: () => console.log('Cadastro gerado com sucesso!')
              }
            ])}
          >
            <Text style={styles.customButtonText}>Cadastrar</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  paddingTop: {
    paddingTop: Platform.OS === 'android' ? 32 : 0,
    backgroundColor: '#ecffff',
  },
  conteudo: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage: {
    alignContent: 'center',
    alignItems: 'center',
    top: -90
  },
  container2: {
    alignContent: 'center',
    alignItems: 'center',
    bottom:44
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 200,
    backgroundColor: '#e7dbdf'
  },
  labelInput: {
    color: '#ecffff',
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  line:{
    width: '85%',
    backgroundColor: '#ecffff',
    height: 3,
    margin: 10,
    bottom:50,
    borderRadius: 200
  },
  positionInput:{
    bottom:30
  },
  customButton: {
    backgroundColor: '#f69513',
    borderRadius: 200,
    marginTop: 10,
    width:200,
    height:44,
    justifyContent: 'center'
  },
  customButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecffff', // Cor do texto do botão
    textAlign: 'center',
  },
});
