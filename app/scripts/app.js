// require("./landing");
// require("./collection");
 //require("./album");
// require("./profile");

angular.module("BlocJams", ["ui.router"]).config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });

   $stateProvider.state("album", {
      url: "/album",
      controller: "Album",
      templateUrl: "/templates/album.html"
   });
 }]);
 
 // This is a cleaner way to call the controller than crowding it on the module definition.
 angular.module("BlocJams").controller('Landing.controller', ['$scope', function($scope) {
  console.log("Landing.controller");
  $scope.mainText = "Bloc Jams";
  $scope.subText = "Turn the music up!";

  $scope.subTextClicked = function(){
    $scope.subText += "!";
  };

  var shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

  $scope.mainTextClicked = function () {
    shuffle($scope.albumURLs);
  };

    $scope.albumURLs = [
       '/images/album-placeholders/album-1.jpg',
       '/images/album-placeholders/album-2.jpg',
       '/images/album-placeholders/album-3.jpg',
       '/images/album-placeholders/album-4.jpg',
       '/images/album-placeholders/album-5.jpg',
       '/images/album-placeholders/album-6.jpg',
       '/images/album-placeholders/album-7.jpg',
       '/images/album-placeholders/album-8.jpg',
       '/images/album-placeholders/album-9.jpg',
    ];

 }]);