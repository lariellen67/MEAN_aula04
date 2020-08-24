angular.module('ifsp').controller('CursosController', function ($scope) {
  $scope.total = 0;
  $scope.incrementa = function () {
    $scope.total++;
  };

  $scope.cursos = [
    {
      _id: 1,
      nome: 'Análise e Desenvolvimento de Sistemas',
      coord: 'thiago.homem@ifsp.edu.br',
    },
    { _id: 2, nome: 'Gestão Pública', coord: 'felipe.basile@ifsp.edu.br' },
    { _id: 3, nome: 'Letras', coord: 'theresa@ifsp.edu.br' },
    {
      _id: 4,
      nome: 'Engenharia da Produção',
      coord: 'rita@ifsp.edu.br',
    },
  ];

  $scope.filter = '';
});
