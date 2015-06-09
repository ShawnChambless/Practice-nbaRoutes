var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allData){

    $scope.jazz = allData.utahjazz;
    $scope.heat = allData.miamiheat;
    $scope.lakers = allData.losangeleslakers;

});
