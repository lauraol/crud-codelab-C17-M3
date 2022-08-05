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

const findAllTermosService = () => {
  return termos;
};

const findByIdTermoService = (parametroId) => {
  return termos.find((termo) => termo.id === parametroId);
};

const createTermoService = (newTermo) => {
  const newId = termos.length + 1;
  newTermo.id = newId;
  termos.push(newTermo);
  return newTermo;
};

const editTermoService = (id, termoEdit) => {
  termoEdit['id'] = id;
  const termoIndex = termos.findIndex((termo) => termo.id == id);
  termos[termoIndex] = termoEdit;
};

const deleteTermoService = (id) => {
  const termoIndex = termos.findIndex((termo) => termo.id == id);
  return termos.splice(termoIndex, 1);
};

module.exports = {
  findAllTermosService,
  findByIdTermoService,
  createTermoService,
  editTermoService,
  deleteTermoService,
};
