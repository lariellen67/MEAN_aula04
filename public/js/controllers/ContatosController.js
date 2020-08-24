angular.module('ifsp').controller('ContatosController', function ($scope) {
  $scope.total = 0;
  $scope.incrementa = function () {
    $scope.total++;
  };

  $scope.contatos = [
    { _id: 1, nome: 'Larissa Marques', email: 'larissa.marques@ifsp.edu.br' },
    { _id: 2, nome: 'Daniel Samarone', email: 'daniel.samarone@ifsp.edu.br' },
    { _id: 3, nome: 'Gabriela Mota', email: 'gabriela.mota@ifsp.edu.br' },
    { _id: 4, nome: 'Rodrigo Inoue', email: 'rodrigo.inoue@ifsp.edu.br' },
  ];

  $scope.filter = '';
});
