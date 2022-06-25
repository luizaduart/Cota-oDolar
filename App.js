import React, {useState} from'react';
import { StyleSheet , Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Dolar from './components/Dolar';
import Api from'./components/Api';



export default function App() {
  const [dolar, setDolar] = useState(0);
  async function converteDolar(){
    const response = await Api.get('json/last/USD-BRL');
    setDolar(response.data.USDBRL);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Cotação do Dólar para Real</Text>
         <TouchableOpacity style={styles.botao} onPress={converteDolar}>
          <Text style={styles.textoBotao}>Dólar para Real</Text>
        </TouchableOpacity>
        <Dolar data={dolar}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 400,
    height:350,
    backgroundColor: 'rgba(50,0,150,0.3)'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao:{
    borderWidth: 1 ,
    textAlign:'center',
    width: 200,
    borderRadius: 10,
    marginBottom: 10,
    height: 40,
    backgroundColor: '#000',
  },
  textoBotao:{
    fontSize:22,
    color: '#fff',
    margin: 2,
  }
});
