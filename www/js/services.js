angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
  {
    "_id": "58f91990d179d300051d3feb",
    "ano": 2014,
    "semestre": 2,
    "periodo": "2014|2",
    "descricao": "ADS3N14/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Projeto de Desenvolvimento",
    "descricaoReduzidaDisciplina": "Proj.Dese.",
    "notas": {
      "parciais": [],
      "conceito": "A"
    },
    "faltas": {
      "total": "12"
    }
  },
  {
    "_id": "58f91990d179d300051d3fec",
    "ano": 2014,
    "semestre": 2,
    "periodo": "2014|2",
    "descricao": "ADS3N14/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Engenharia de Software II",
    "descricaoReduzidaDisciplina": "ENG.SOF II",
    "notas": {
      "parciais": [
        {
          "descricao": "Trabalho Fase 1",
          "descricaoReduzida": "TF 1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Prova P1",
          "descricaoReduzida": "P1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Trabalho Fase 2",
          "descricaoReduzida": "TF2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Prova P2",
          "descricaoReduzida": "P2",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "A"
        }
      ],
      "conceito": "A"
    },
    "faltas": {
      "total": "8"
    }
  },
  {
    "_id": "58f91990d179d300051d3ff8",
    "ano": 2014,
    "semestre": 2,
    "periodo": "2014|2",
    "descricao": "ADS3N14/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Empreendedorismo",
    "descricaoReduzidaDisciplina": "Empreen",
    "notas": {
      "parciais": [],
      "conceito": "B"
    },
    "faltas": {
      "total": "4"
    }
  },
  {
    "_id": "58f91990d179d300051d3ff9",
    "ano": 2014,
    "semestre": 2,
    "periodo": "2014|2",
    "descricao": "ADS3N14/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Segurança de Sistemas",
    "descricaoReduzidaDisciplina": "SegSist",
    "notas": {
      "parciais": [],
      "conceito": "C"
    },
    "faltas": {
      "total": "1"
    }
  },
  {
    "_id": "58f91990d179d300051d3ff1",
    "ano": 2014,
    "semestre": 2,
    "periodo": "2014|2",
    "descricao": "ADS3N14/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Gerência de Projetos",
    "descricaoReduzidaDisciplina": "G.P.",
    "notas": {
      "parciais": [
        {
          "descricao": "Liderança",
          "descricaoReduzida": null,
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Projeto - Grupo",
          "descricaoReduzida": "Prj. Grupo",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Projeto - Individual",
          "descricaoReduzida": "Prj.Indiv.",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Avaliação Escrita",
          "descricaoReduzida": "Av. Escr.",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Participação em Aula",
          "descricaoReduzida": "Particip.",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação Escrita",
          "descricaoReduzida": "Rec. Escr.",
          "ordemParcial": 6,
          "valorAvaliacaoParcial": "SC"
        }
      ],
      "conceito": "B"
    },
    "faltas": {
      "total": "6"
    }
  },
  {
    "_id": "58f91990d179d300051d4002",
    "ano": 2015,
    "semestre": 2,
    "periodo": "2015|2",
    "descricao": "ADS5N15/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Algoritmos e Programação III",
    "descricaoReduzidaDisciplina": "ALPROIII",
    "notas": {
      "parciais": [],
      "conceito": "A"
    },
    "faltas": {
      "total": "8"
    }
  },
  {
    "_id": "58f91990d179d300051d402b",
    "ano": 2015,
    "semestre": 2,
    "periodo": "2015|2",
    "descricao": "ADS5N15/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Engenharia de Software III",
    "descricaoReduzidaDisciplina": "EngSoft3",
    "notas": {
      "parciais": [],
      "conceito": "B"
    },
    "faltas": {
      "total": "20"
    }
  },
  {
    "_id": "58f91990d179d300051d3ffa",
    "ano": 2015,
    "semestre": 2,
    "periodo": "2015|2",
    "descricao": "ADS5N15/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Programação para Internet II",
    "descricaoReduzidaDisciplina": "PI-II",
    "notas": {
      "parciais": [
        {
          "descricao": "Trabalho 1",
          "descricaoReduzida": "T1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do Trabalho 1",
          "descricaoReduzida": "RecT1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 2",
          "descricaoReduzida": "T2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do Trabalho 2",
          "descricaoReduzida": "RecT2",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 3",
          "descricaoReduzida": "T3",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Recuperação do Trabalho 3",
          "descricaoReduzida": "RecT3",
          "ordemParcial": 6,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Exercícios e Participação",
          "descricaoReduzida": "EP",
          "ordemParcial": 7,
          "valorAvaliacaoParcial": "B"
        }
      ],
      "conceito": "B"
    },
    "faltas": {
      "total": "14"
    }
  },
  {
    "_id": "58f91990d179d300051d4004",
    "ano": 2015,
    "semestre": 1,
    "periodo": "2015|1",
    "descricao": "ADS4N15/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Interface Homem Computador",
    "descricaoReduzidaDisciplina": "IHC",
    "notas": {
      "parciais": [
        {
          "descricao": "Trabalhos em aula",
          "descricaoReduzida": "TA",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Participação em aula",
          "descricaoReduzida": "PA",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Trabalho final",
          "descricaoReduzida": "TF",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "A"
        }
      ],
      "conceito": "A"
    },
    "faltas": {
      "total": "9"
    }
  },
  {
    "_id": "58f91990d179d300051d400e",
    "ano": 2015,
    "semestre": 1,
    "periodo": "2015|1",
    "descricao": "ADS4N15/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Programação para Internet II",
    "descricaoReduzidaDisciplina": "PI-II",
    "notas": {
      "parciais": [
        {
          "descricao": "Entrega 1 - Front-end: JSF e Managed Beans",
          "descricaoReduzida": "E1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Entrega 2 - Persistência: JPA e mapeamentos",
          "descricaoReduzida": "E2",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "C"
        },
        {
          "descricao": "Entrega 3 - Web Services:  SOAP e REST",
          "descricaoReduzida": "E3",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Atividades em aulas, andamento do projeto e resultado final",
          "descricaoReduzida": "AN",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        }
      ],
      "conceito": "D"
    },
    "faltas": {
      "total": "28"
    }
  },
  {
    "_id": "58f91990d179d300051d4018",
    "ano": 2015,
    "semestre": 1,
    "periodo": "2015|1",
    "descricao": "ADS4N15/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Algoritmos e Programação III",
    "descricaoReduzidaDisciplina": "ALPROIII",
    "notas": {
      "parciais": [
        {
          "descricao": "Revisão de Lógica",
          "descricaoReduzida": "T1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Criação de Classes Simples",
          "descricaoReduzida": "T2",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Orientação a Objetos",
          "descricaoReduzida": "OO",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Algoritmos",
          "descricaoReduzida": "AL",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Estruturas de Dados",
          "descricaoReduzida": "ED",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "SC"
        }
      ],
      "conceito": "SC"
    },
    "faltas": {
      "total": "52"
    }
  },
  {
    "_id": "58f91990d179d300051d4023",
    "ano": 2015,
    "semestre": 1,
    "periodo": "2015|1",
    "descricao": "ADS4N15/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Laboratório de Programação II",
    "descricaoReduzidaDisciplina": "LAB.PROGII",
    "notas": {
      "parciais": [
        {
          "descricao": "Trabalho 1",
          "descricaoReduzida": "T1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Recuperação do T1",
          "descricaoReduzida": "RecT1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "C"
        },
        {
          "descricao": "Trabalho 2",
          "descricaoReduzida": "T2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do T2",
          "descricaoReduzida": "RecT2",
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 3",
          "descricaoReduzida": "T3",
          "ordemParcial": 5,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Recuperação do T3",
          "descricaoReduzida": "RecT3",
          "ordemParcial": 6,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Exercícios e Participação",
          "descricaoReduzida": "EP",
          "ordemParcial": 7,
          "valorAvaliacaoParcial": "C"
        }
      ],
      "conceito": "B"
    },
    "faltas": {
      "total": "16"
    }
  },
  {
    "_id": "58f91990d179d300051d4003",
    "ano": 2016,
    "semestre": 2,
    "periodo": "2016|2",
    "descricao": "ADS6N16/2A (FACULDADE POA) ",
    "descricaoDisciplina": "Gestão da TI",
    "descricaoReduzidaDisciplina": "GTI2014",
    "notas": {
      "parciais": [],
      "conceito": "S/C"
    },
    "faltas": {
      "total": "24"
    }
  },
  {
    "_id": "58f91990d179d300051d4017",
    "ano": 2016,
    "semestre": 2,
    "periodo": "2016|2",
    "descricao": "ADS6N16/2A (FACULDADE POA) ",
    "descricaoDisciplina": "TCC I",
    "descricaoReduzidaDisciplina": "TCC-I",
    "notas": {
      "parciais": [],
      "conceito": "A"
    },
    "faltas": {
      "total": "12"
    }
  },
  {
    "_id": "58f91990d179d300051d402c",
    "ano": 2016,
    "semestre": 1,
    "periodo": "2016|1",
    "descricao": "ADS6N16/1A (FACULDADE POA) ",
    "descricaoDisciplina": "TCC I",
    "descricaoReduzidaDisciplina": "TCC-I",
    "notas": {
      "parciais": [],
      "conceito": "S/C"
    },
    "faltas": {
      "total": "12"
    }
  },
  {
    "_id": "58f91990d179d300051d4008",
    "ano": 2016,
    "semestre": 1,
    "periodo": "2016|1",
    "descricao": "ADS6N16/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Tópicos Avançados em ADS",
    "descricaoReduzidaDisciplina": "TAemADS",
    "notas": {
      "parciais": [
        {
          "descricao": "Proposta de Pesquisa",
          "descricaoReduzida": "Proposta",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Realização da Pesquisa e Andamento - Parte1",
          "descricaoReduzida": "Check1",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Realização da Pesquisa e Andamento - Parte2",
          "descricaoReduzida": "Check2",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "A"
        },
        {
          "descricao": "Seminário com a apresentação final do trabalho",
          "descricaoReduzida": null,
          "ordemParcial": 4,
          "valorAvaliacaoParcial": "A"
        }
      ],
      "conceito": "A"
    },
    "faltas": {
      "total": "10"
    }
  },
  {
    "_id": "58f91990d179d300051d4013",
    "ano": 2016,
    "semestre": 1,
    "periodo": "2016|1",
    "descricao": "ADS6N16/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Qualidade de Software",
    "descricaoReduzidaDisciplina": "QualSoftw",
    "notas": {
      "parciais": [
        {
          "descricao": "Avaliação de Qualidade do Produto",
          "descricaoReduzida": "P1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "C"
        },
        {
          "descricao": "Avaliação de Qualidade do Processo",
          "descricaoReduzida": "P2",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "B"
        },
        {
          "descricao": "Trabalho de Qualidade de Software",
          "descricaoReduzida": "T1",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "C"
        }
      ],
      "conceito": "C"
    },
    "faltas": {
      "total": "20"
    }
  },
  {
    "_id": "58f91990d179d300051d401e",
    "ano": 2016,
    "semestre": 1,
    "periodo": "2016|1",
    "descricao": "ADS6N16/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Sistemas Distribuídos",
    "descricaoReduzidaDisciplina": "SIST.DISTR",
    "notas": {
      "parciais": [
        {
          "descricao": "Trabalho 1",
          "descricaoReduzida": "T1",
          "ordemParcial": 1,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Trabalho 2",
          "descricaoReduzida": "T2",
          "ordemParcial": 2,
          "valorAvaliacaoParcial": "SC"
        },
        {
          "descricao": "Participação",
          "descricaoReduzida": "P",
          "ordemParcial": 3,
          "valorAvaliacaoParcial": "D"
        }
      ],
      "conceito": "S/C"
    },
    "faltas": {
      "total": "30"
    }
  },
  {
    "_id": "58f91990d179d300051d400d",
    "ano": 2017,
    "semestre": 1,
    "periodo": "2017|1",
    "descricao": "ADS6N17/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Gestão da TI",
    "descricaoReduzidaDisciplina": "GTI2014",
    "notas": {
      "parciais": [],
      "conceito": "S/C"
    },
    "faltas": {
      "total": "12"
    }
  },
  {
    "_id": "58f91990d179d300051d4022",
    "ano": 2017,
    "semestre": 1,
    "periodo": "2017|1",
    "descricao": "ADS6N17/1A (FACULDADE POA) ",
    "descricaoDisciplina": "Sistemas Distribuídos",
    "descricaoReduzidaDisciplina": "SIST.DISTR",
    "notas": {
      "parciais": [],
      "conceito": "S/C"
    },
    "faltas": {
      "total": "5"
    }
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
