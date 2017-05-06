//const request = require('request');

(function(){
    'use strict';
     angular
         .module('works')
         .service('workService', workService);

     //workService.$inject = ['$http'];
     function workService($http) {

         this.getWorks = function () {
             /*return $http.get('http://apidv.almundo.it:8080/api/tasques/tasks',
              {
              headers: {
              'X-Apikey' : '5512c8d59932b3da984cc7de'
              }

              }).then(function (res){
              return res.data;
              }, function (err){
              console.log('error' + err.message());
              });
              */
              return $http.get('https://api.github.com/users/fi').then(function (res){
                  console.log(res.data);
                  return res.data;
              }, function (err){
                  console.log('error' + err.message());
              });
             /*return request('https://api.github.com/users/fi', function (error, response) {
                 console.log('error:', error); // Print the error if one occurred
                 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

             });*/

         }
     }
})();