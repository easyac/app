angular.module('starter.services', [])


  .service('AuthService', function($q, $http, USER_ROLES, API_URL) {
    var LOCAL_TOKEN_KEY = '6wnk6myVEw5nZ4D4YrLff3gnCER3RB4L';
    var username = '';
    var isAuthenticated = false;
    var role = '';
    var authToken;

    function useCredentials(token) {
      isAuthenticated = true;
      role = USER_ROLES.admin;
      $http.defaults.headers.Authorization = 'Bearer ' + token;
    }

    function loadUserCredentials() {
      var token = localStorage.getItem(LOCAL_TOKEN_KEY);
      if (token) {
        useCredentials(token);
      }
    }

    function storeUserCredentials(token) {
      localStorage.setItem(LOCAL_TOKEN_KEY, token);
      useCredentials(token);
    }

    function hasToken(){
      return (window.localStorage[LOCAL_TOKEN_KEY]) ? true : false;
    }

    function destroyUserCredentials() {
      authToken = undefined;
      username = '';
      isAuthenticated = false;
      $http.defaults.headers.Authorization = undefined;
      window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    }

    var login = function(data) {
     return $q(function(resolve, reject) {
        $http({
          method : 'POST',
          url : API_URL + '/user/auth',
          data : data
        }).then(function(res){
          if(res.status === 200 && res.data.token){
            storeUserCredentials(res.data.token);
            resolve('Login success.');
          }else{
            reject('Login Failed.');
          }
        })
        .catch(function(){
          reject('err');
        });
      });
    };

    var create = function(data) {
     return $q(function(resolve, reject) {
        $http({
          method : 'POST',
          url : API_URL + '/user',
          data : data
        }).then(function(res){
          console.log(res);
          if(res.status === 200 && res){
            resolve('Login success.');
          }else{
            reject('Login Failed.');
          }
        })
        .catch(function(){
          reject('err');
        });
      });
    };

    var logout = function() {
      destroyUserCredentials();
    };

    var isAuthorized = function(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
    };

    loadUserCredentials();

    return {
      login: login,
      create: create,
      loadUserCredentials : loadUserCredentials,
      destroyUserCredentials: destroyUserCredentials,
      logout: logout,
      isAuthorized: isAuthorized,
      isAuthenticated: function() {return isAuthenticated;},
      username: function() {return username;},
      role: function() {return role;},
      hasToken : hasToken
    };
  })


.factory('Disciplinas', function() {
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
    }
  };
})
