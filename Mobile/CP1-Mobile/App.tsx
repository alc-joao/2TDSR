import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Formulario from './Formulario';
import Listagem from './Listagem';
import { Produto } from './types';

export default function App() {
  const [tela, setTela] = useState<'formulario' | 'listagem'>('formulario');
  const [lista, setLista] = useState<Produto[]>([]);

  const cadastrar = (produto: Produto) => {
    setLista((prev) => [...prev, produto]);
  };

  const remover = (id: number) => {
    setLista((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>
          {tela === 'formulario' ? 'Cadastro de Produto' : 'Lista de Produtos'}
        </Text>
      </View>

      <View style={styles.baixo}>
        {tela === 'formulario' ? (
          <Formulario
            onCadastrar={cadastrar}
            onIrParaListagem={() => setTela('listagem')}
          />
        ) : (
          <Listagem
            lista={lista}
            onIrParaFormulario={() => setTela('formulario')}
            onRemover={remover}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  topo: {
    flex: 2,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },

  baixo: {
    flex: 8,
    backgroundColor: '#f2f2f2',
  },
});