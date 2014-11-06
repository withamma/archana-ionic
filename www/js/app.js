// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app;

app = angular.module('ionic-app', ['ionic', 'ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller("MainCtrl", function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.toggleRightSideMenu = function() {
        $ionicSideMenuDelegate.toggleRight();
    };
});

app.controller("IndexCtrl", function($scope, $cordovaFile) {
    $cordovaFile.checkFile("file:///android_asset/www/index.json").then(function(result) {
        $scope.item = "SUCCESS!";
    }, function(err) {
        $scope.item = "FAILURE!;
    });
});