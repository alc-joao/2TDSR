import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Produto } from './types';

interface Props {
  produto: Produto;
  onRemover: (id: number) => void;
}

export default function Item({ produto, onRemover }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Campo1: {produto.nome}</Text>
        <Text style={styles.texto}>Campo2: R$ {produto.preco}</Text>
        <Text style={styles.texto}>Campo3: {produto.estoque}</Text>
      </View>

      <Pressable onPress={() => onRemover(produto.id)}>
        <Text style={styles.icon}>🗑️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texto: {
    fontSize: 16,
  },
  icon: {
    fontSize: 24,
  },
});