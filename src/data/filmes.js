export const moeda = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const filmes = [
  { id: 1, titulo: 'Bad Boys', genero: 'Ação/Comédia', preco: 11.99, imagem: 'bad-boys.jpg' },
  { id: 2, titulo: 'Bad Boys II', genero: 'Ação/Comédia', preco: 11.99, imagem: 'bad-boys-2.jpg' },
  { id: 3, titulo: 'O Exterminador do Futuro', genero: 'Ação/Ficção científica', preco: 9.99, imagem: 'exterminador-1.jpg' },
  { id: 4, titulo: 'O Exterminador do Futuro 2: O Julgamento Final', genero: 'Ação/Ficção científica', preco: 9.99, imagem: 'exterminador-2.jpg' },
  { id: 5, titulo: 'O Máskara', genero: 'Comédia/Ação', preco: 12.99, imagem: 'o-mascara.jpg' },
  { id: 6, titulo: 'Debi & Lóide: Dois Idiotas em Apuros', genero: 'Comédia/Comédia maluca', preco: 15.99, imagem: 'debi-e-loide.jpg' },
  { id: 7, titulo: 'Pânico', genero: 'Terror/Mistério', preco: 12.99, imagem: 'panico.jpg' },
  { id: 8, titulo: 'Pânico 2', genero: 'Terror/Mistério', preco: 10.99, imagem: 'panico-2.jpg' },
  { id: 9, titulo: 'A Hora do Pesadelo', genero: 'Terror/Crime', preco: 14.99, imagem: 'hora-do-pesadelo.jpg' },
  { id: 10, titulo: 'A Hora do Pesadelo 2: A Vingança de Freddy', genero: 'Terror/Crime', preco: 12.99, imagem: 'hora-do-pesadelo-2.jpg' },
  { id: 11, titulo: 'Titanic', genero: 'Romance/Aventura', preco: 8.99, imagem: 'titanic.jpg' },
  { id: 12, titulo: 'Meu Primeiro Amor', genero: 'Infantil/Romance', preco: 12.99, imagem: 'meu-primeiro-amor.jpg' },
  { id: 13, titulo: 'De Volta para o Futuro', genero: 'Ficção científica/Comédia', preco: 9.99, imagem: 'de-volta-pro-futuro.jpg' },
  { id: 14, titulo: 'De Volta para o Futuro 2', genero: 'Ficção científica/Infantil', preco: 12.99, imagem: 'de-volta-pro-futuro-2.jpg' },
  { id: 15, titulo: 'De Volta para o Futuro 3', genero: 'Faroeste/Infantil', preco: 14.99, imagem: 'de-volta-pro-futuro-3.jpeg' },
  { id: 16, titulo: 'Corra que a Polícia Vem Aí!', genero: 'Comédia/Ação', preco: 12.99, imagem: 'corra-que-a-policia-vem-ai.jpg' },
  { id: 17, titulo: 'Corra que a Polícia Vem Aí 2½', genero: 'Comédia/Crime', preco: 14.99, imagem: 'corra-que-a-policia-vem-ai-2.jpg' },
  { id: 18, titulo: 'Corra que a Polícia Vem Aí! 33 1/3 - O Insulto Final', genero: 'Comédia/Crime', preco: 14.99, imagem: 'corra-que-a-policia-vem-ai-3.jpg' },
]
