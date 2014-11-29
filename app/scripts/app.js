// require("./landing");
// require("./collection");
 //require("./album");
// require("./profile");

var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: '/images/album-placeholder.png',
  songs: [
       { name: 'Blue', length: '4:26' },
       { name: 'Green', length: '3:14' },
       { name: 'Red', length: '5:01' },
       { name: 'Pink', length: '3:21'},
       { name: 'Magenta', length: '2:15'}
  ]
};



angular.module("BlocJams", ["ui.router"]).config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
 $stateProvider.state("landing", {
      url: "/landing",
      controller: "Landing",
      templateUrl: "/templates/landing.html"
   });

 $stateProvider.state("album", {
      url: "/album",
      controller: "Album",
      templateUrl: "/templates/album.html"
   });


 $stateProvider.state("collection", {
      url: "/collection",
      controller: "Collection",
      templateUrl: "/templates/collection.html"
   });
 }]);



 // This is a cleaner way to call the controller than crowding it on the module definition.
 angular.module("BlocJams").controller('Landing', ['$scope', function($scope) {
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



angular.module("BlocJams").controller("Collection", ["$scope", function ($scope) {
    $scope.albums = [];
   for (var i = 0; i < 33; i++) {
     $scope.albums.push(angular.copy(albumPicasso));
   }
}]);
