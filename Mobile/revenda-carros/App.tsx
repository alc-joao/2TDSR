import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [fabricante, setFabricante] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');

  const cadastrarVeiculo = () => {
    Alert.alert(
      'Cadastro realizado',
      `Fabricante: ${fabricante}\nModelo: ${modelo}\nPreço: ${preco}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* PARTE DE CIMA (30%) */}
      <View style={styles.topo}>
        <View style={styles.tituloBox}>
          <Text style={styles.titulo}>Concessionária de Veículos</Text>
        </View>

        <Text style={styles.carro}>🚗</Text>
      </View>

      {/* PARTE DE BAIXO (70%) */}
      <View style={styles.baixo}>
        <View style={styles.form}>
          <Text style={styles.label}>Fabricante:</Text>
          <TextInput
            style={styles.input}
            value={fabricante}
            onChangeText={setFabricante}
          />

          <Text style={styles.label}>Modelo:</Text>
          <TextInput
            style={styles.input}
            value={modelo}
            onChangeText={setModelo}
          />

          <Text style={styles.label}>Preço:</Text>
          <TextInput
            style={styles.input}
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.botao} onPress={cadastrarVeiculo}>
            <Text style={styles.textoBotao}>Cadastrar / Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topo: {
    flex: 3, // 30%
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloBox: {
    backgroundColor: '#6c8cd5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  carro: {
    fontSize: 80,
  },

  baixo: {
    flex: 7, // 70%
    backgroundColor: '#8bb9d6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    width: '80%',
  },

  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#2f62d6',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});