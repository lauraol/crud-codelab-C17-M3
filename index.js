const express = require('express');
const port = 3000;

const app = express();

app.use(express.json());

const termos = [
  {
    id: 1,
    termo: 'Javascript',
    descricao:
      'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
    logo: './assets/images/js.png',
    ano_de_criacao: '1995',
  },
  {
    id: 2,
    termo: 'Python',
    descricao:
      'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
    logo: './assets/images/python.png',
    ano_de_criacao: '1991',
  },
  {
    id: 3,
    termo: 'Java',
    descricao:
      'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.',
    logo: './assets/images/java.png',
    ano_de_criacao: '1991',
  },
];

app.get('/termos/pega-todos-os-termos', (req, res) => {
  res.send(termos);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
