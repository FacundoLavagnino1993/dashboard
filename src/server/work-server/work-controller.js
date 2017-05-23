'use strict';

const worksService = require('./work-service');

class workController{

    static getWorks(req,res){
        worksService.get()
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.status(err.code).json(err);
            });

    }

    static postReserve(req,res){
        worksService.Reserve(req)
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.json(err.data);
                //res.status(err.code).json(err);
            })
    }

}

module.exports = workController;