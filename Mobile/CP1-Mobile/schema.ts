import * as yup from 'yup';

export const produtoSchema = yup.object({
  id: yup.number().required('Id obrigatório'),
  nome: yup.string().required('Nome obrigatório'),
  preco: yup.number().required('Preço obrigatório'),
  estoque: yup.number().required('Estoque obrigatório'),
  ativo: yup.boolean().required(),
});