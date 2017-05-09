'use strict';

const worksService = require('./work-service');

class workController{

    static getWorks(req,res){
        worksService.get(function(response){
            console.log(response);
            console.log(response.body);
            res.json(response);
        })

    }

}

module.exports = workController;