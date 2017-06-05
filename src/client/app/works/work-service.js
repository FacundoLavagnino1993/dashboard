//const request = require('request');

(function(){
    'use strict';
     angular
         .module('works')
         .service('workService', workService);


     function workService($http) {

         this.getWorks = function () {

             return $http.get('/workList')
                 .then(function (res){
                     return res.data;
                 }, function (err){
                     return err;
                 });

         };

         this.getWorksPaginated = function (data){

            return $http.post('/pagination',data)
                 .then(function (res){
                     return res.data;
                 },function(err){
                     return err;
                 })
         };

        /* this.setReserve = function(data){
             return $http.post('/reserve',data)
                 .then(function(res){
                     return res.data;
                 }, function (err){
                     return err;
                 });
         };*/




     }
})();