(function(){
  var angular = require('angular');
  var app = angular.module('myApp');

  app.controller('myController',function(){
    this.lastName = 'Smith';
    this.firstName = 'Sara';
  });

  app.directive('myNavBar',function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/navbar.html'
    };
  });

  app.directive('storyToTell', function(){
    return {
      restrict: 'EA',
      scope: {
        firstName: '='
      },
      templateUrl: 'templates/story.html',
      controller: 'myController',
      controllerAs: 'mine'
    };
  });
})();
