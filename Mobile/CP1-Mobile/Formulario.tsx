import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { produtoSchema } from './schema';
import { Produto } from './types';

interface Props {
  onCadastrar: (produto: Produto) => void;
  onIrParaListagem: () => void;
}

export default function Formulario({ onCadastrar, onIrParaListagem }: Props) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [ativo, setAtivo] = useState(false);

  const cadastrar = async () => {
    const novo: Produto = {
      id: Number(id),
      nome,
      preco: Number(preco),
      estoque: Number(estoque),
      ativo,
    };

    try {
      await produtoSchema.validate(novo);

      onCadastrar(novo);

      setId('');
      setNome('');
      setPreco('');
      setEstoque('');
      setAtivo(false);

      Alert.alert('Sucesso', 'Cadastrado!');
    } catch (err: any) {
      Alert.alert('Erro', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Id" value={id} onChangeText={setId} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Preço" value={preco} onChangeText={setPreco} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Estoque" value={estoque} onChangeText={setEstoque} keyboardType="numeric" />

      <View style={styles.switchRow}>
        <Text>Ativo:</Text>
        <Switch value={ativo} onValueChange={setAtivo} />
      </View>

      <Pressable style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={onIrParaListagem}>
        <Text style={styles.btnText}>Ir para Listagem</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'blue',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});