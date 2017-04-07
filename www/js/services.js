angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Projeto de Desenvolvimento",
      "faltas": 12
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Gerência de Projetos",
      "faltas": 6
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Engenharia de Software II",
      "faltas": 8
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Segurança de Sistemas",
      "faltas": 1
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Empreendedorismo",
      "faltas": 4
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Programação para Internet II",
      "faltas": 28
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 2,
      "disciplina": "Algoritmos e Programação III",
      "faltas": 8
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Interface Homem Computador",
      "faltas": 9
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Algoritmos e Programação III",
      "faltas": 52
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Laboratório de Programação II",
      "faltas": 16
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 2,
      "disciplina": "Engenharia de Software III",
      "faltas": 20
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 2,
      "disciplina": "Programação para Internet II",
      "faltas": 14
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "Tópicos Avançados em ADS",
      "faltas": 10
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "Qualidade de Software",
      "faltas": 20
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "Sistemas Distribuídos",
      "faltas": 30
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 2,
      "disciplina": "TCC I",
      "faltas": 12
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 2,
      "disciplina": "Gestão da TI",
      "faltas": 24
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "TCC I",
      "faltas": 12
    },
    {
      "cursoId": 365,
      "ano": 2017,
      "semestre": 1,
      "disciplina": "Gestão da TI",
      "faltas": 4
    },
    {
      "cursoId": 365,
      "ano": 2017,
      "semestre": 1,
      "disciplina": "Sistemas Distribuídos",
      "faltas": 8
    }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Notas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var notas = [
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Projeto de Desenvolvimento",
      "conceito": "A",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Segurança de Sistemas",
      "conceito": "C",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Empreendedorismo",
      "conceito": "B",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Gerência de Projetos",
      "conceito": "B",
      "parciais": [
        {
          "descricao": "Liderança",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Projeto - Grupo",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Projeto - Individual",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Avaliação Escrita",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Participação em Aula",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação Escrita",
          "ordemParcial": 6,
          "valorAvaliacaoParcial": "SC"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2014,
      "semestre": 2,
      "disciplina": "Engenharia de Software II",
      "conceito": "A",
      "parciais": [
        {
          "descricao": "Trabalho Fase 1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Prova P1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Trabalho Fase 2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Prova P2",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "A"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 2,
      "disciplina": "Engenharia de Software III",
      "conceito": "B",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 2,
      "disciplina": "Algoritmos e Programação III",
      "conceito": "A",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Laboratório de Programação II",
      "conceito": "B",
      "parciais": [
        {
          "descricao": "Trabalho 1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Recuperação do T1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "C"
        },
        {
          "descricao": "Trabalho 2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do T2",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 3",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do T3",
          "ordemParcial": 6,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Exercícios e Participação",
          "ordemParcial": 7,
          "valorAvaliacaoParcial": "C"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Programação para Internet II",
      "conceito": "D",
      "parciais": [
        {
          "descricao": "Entrega 1 - Front-end: JSF e Managed Beans",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Entrega 2 - Persistência: JPA e mapeamentos",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "C"
        },
        {
          "descricao": "Entrega 3 - Web Services:  SOAP e REST",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Atividades em aulas, andamento do projeto e resultado final",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Algoritmos e Programação III",
      "conceito": "SC",
      "parciais": [
        {
          "descricao": "Revisão de Lógica",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Criação de Classes Simples",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Orientação a Objetos",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Algoritmos",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Estruturas de Dados",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "SC"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 1,
      "disciplina": "Interface Homem Computador",
      "conceito": "A",
      "parciais": [
        {
          "descricao": "Trabalhos em aula",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Participação em aula",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Trabalho final",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "A"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2015,
      "semestre": 2,
      "disciplina": "Programação para Internet II",
      "conceito": "B",
      "parciais": [
        {
          "descricao": "Trabalho 1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do Trabalho 1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do Trabalho 2",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 3",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Recuperação do Trabalho 3",
          "ordemParcial": 6,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Exercícios e Participação",
          "ordemParcial": 7,
          "valorAvaliacaoParcial": "B"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "TCC I",
      "conceito": "3",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 2,
      "disciplina": "Gestão da TI",
      "conceito": "2",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 2,
      "disciplina": "TCC I",
      "conceito": "0",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "Qualidade de Software",
      "conceito": "1",
      "parciais": [
        {
          "descricao": "Avaliação de Qualidade do Produto",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "C"
        },
        {
          "descricao": "Avaliação de Qualidade do Processo",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Trabalho de Qualidade de Software",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "C"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "Tópicos Avançados em ADS",
      "conceito": "1",
      "parciais": [
        {
          "descricao": "Proposta de Pesquisa",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Realização da Pesquisa e Andamento - Parte1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Realização da Pesquisa e Andamento - Parte2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Seminário com a apresentação final do trabalho",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "A"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2016,
      "semestre": 1,
      "disciplina": "Sistemas Distribuídos",
      "conceito": "3",
      "parciais": [
        {
          "descricao": "Trabalho 1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 2",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Participação",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "D"
        }
      ]
    },
    {
      "cursoId": 365,
      "ano": 2017,
      "semestre": 1,
      "disciplina": "Gestão da TI",
      "conceito": "0",
      "parciais": []
    },
    {
      "cursoId": 365,
      "ano": 2017,
      "semestre": 1,
      "disciplina": "Sistemas Distribuídos",
      "conceito": "0",
      "parciais": []
    }
  ];

  return {
    all: function() {
      return notas;
    },
    remove: function(chat) {
      notas.splice(notas.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < notas.length; i++) {
        if (notas[i].id === parseInt(chatId)) {
          return notas[i];
        }
      }
      return null;
    }
  };
});
