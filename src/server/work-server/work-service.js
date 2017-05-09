'use strict';

const request = require('request');

class workService{

    static get(callback){

            callback (request('http://apidv.almundo.it:8080/api/tasques/tasks',
                {
                    headers: {
                        'X-Apikey': '5512c8d59932b3da984cc7de'
                    }
                }, function (error, res, body){
                   if(error){
                        return error;
                   }else{
                       console.log(res.body);
                       return res.body;
                   }
            }));
        }

}

module.exports = workService;
