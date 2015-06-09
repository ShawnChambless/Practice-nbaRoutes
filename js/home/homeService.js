var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

    this.getAllData = function() {
        var dfd = $q.defer();
        var promiseGroup = {
            utahjazz: teamService.getTeamData('utahjazz'),
            miamiheat: teamService.getTeamData('miamiheat'),
            losangeleslakers: teamService.getTeamData('losangeleslakers')
        };
        $q.all(promiseGroup)
        .then(function(response) {
            console.log(response);
            dfd.resolve(response);
        });
        return dfd.promise;
    };


});
