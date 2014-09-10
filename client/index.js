(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope',  function($scope){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100, isZombie:false};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;


    $scope.setPlayer = function(num){
      $scope['player' + num]=this.p;
    };

    $scope.fight = function(){
      var attPlayer1 = Math.floor(Math.random() * $scope.player1.weapon.damage)+1,
          attPlayer2 = Math.floor(Math.random() * $scope.player2.weapon.damage)+1,
          turn = Math.floor(Math.random() * 2)+1;

      if(turn !== 1){
        $scope.player1.health -= attPlayer2;
        $scope.player2.health -= attPlayer1;
      }else{
        $scope.player2.health -= attPlayer1;
        $scope.player1.health -= attPlayer2;
      }
      if(($scope.player1.health < 0) && !$scope.player1.isZombie){
        $scope.player1.isZombie = true;
      }

      if(($scope.player2.health < 0) && !$scope.player2.isZombie){
        $scope.player2.isZombie = true;
      }

    };

    $scope.addWeapon= function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };
    $scope.addPet= function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };
    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };
  }]);
})();

