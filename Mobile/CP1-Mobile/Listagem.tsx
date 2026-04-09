import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Item from './Item';
import { Produto } from './types';

interface Props {
  lista: Produto[];
  onIrParaFormulario: () => void;
  onRemover: (id: number) => void;
}

export default function Listagem({ lista, onIrParaFormulario, onRemover }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item produto={item} onRemover={onRemover} />}
      />

      <Pressable style={styles.btn} onPress={onIrParaFormulario}>
        <Text style={styles.btnText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  btn: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});