import React from 'react';
import { Text, View } from 'react-native';

const listaPets = [
  { nome: 'Totó', raca: 'Vira Lata', idade: 4, peso: 9.6, nomeDono: 'Nathalia Almeida' },
  { nome: 'Rex', raca: 'Pastor Alemão', idade: 7, peso: 23.8, nomeDono: 'Gabriel' },
  { nome: 'Suri', raca: 'Lhasa', idade: 9, peso: 7.0, nomeDono: 'Antonio' },
  { nome: 'Lassie', raca: 'Cockie', idade: 16, peso: 13.0, nomeDono: 'Antonio' },
];

export default function App() {
  const componentesPets: React.ReactNode[] = [];

  for (let i = 0; i < listaPets.length; i++) {
    const pet = listaPets[i];

    componentesPets.push(
      <View
        key={i}
        style={{
          backgroundColor: '#ffffff',
          padding: 16,
          marginBottom: 12,
          borderWidth: 1,
          borderColor: '#cccccc',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{pet.nome}</Text>
        <Text>Raça: {pet.raca}</Text>
        <Text>Idade: {pet.idade} anos</Text>
        <Text>Peso: {pet.peso} kg</Text>
        <Text>Dono: {pet.nomeDono}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#6681f7' }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
        Lista de Pets
      </Text>

      {componentesPets}
    </View>
  );
}