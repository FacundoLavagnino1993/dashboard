'use strict';

const worksService = require('./work-service');

class workController{

    static getTasks(req, res){
        worksService.getAll()
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.status(err.code).json(err);
            });

    }

    static getWorksPaginated(req,res){

        worksService.getPaginationResult(req)
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.statusCode(err.code);
            });
    }

   /* static postReserve(req,res){
        worksService.Reserve(req)
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.json(err.data);
                //res.status(err.code).json(err);
            })
    }*/

}

module.exports = workController;