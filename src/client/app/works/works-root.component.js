(function(){
    'use strict';
    angular
        .module('works')
        .component('worksRoot', {
            controller: worksRootController,
            templateUrl: "works/works-root.html"
            });

    worksRootController.$inject = ['workService'];

        function worksRootController(workService){

            let _self = this;

            this.$onInit = function(){

                    workService.getWorks()
                        .then(function done(res){

                          _self.works = JSON.parse(res);
                          //  _self.works = res;
                            console.log('api obj');

                        }, function fail(error){
                            console.log(error);
                        });

                    _self.filters = {
                        "_id": "",
                    };


            };




       /*    setInterval(function(){
                workService.getWorks()
                    .then(function done(res){
                        _self.works = res;
                    }, function fail(error){
                        console.log(error);
                    });
                console.log("refresh ok");
                return _self.works;
            },120000);*/

            this.sendReserve = function(data){

                if(!this.validateReserve(data.reserve.cart_id))
                {
                    workService.setReserve(data)
                        .then(function done(res) {
                            console.log(res.status);
                        }, function fail(error){
                            console.log(error);
                        });
                }
                else{
                    alert("La tarea ya esta reservada!");
                }

            };

            this.validateReserve = function(reserve){
                let validate = false;

                angular.forEach(_self.works.body,function(value){
                    if(value.cart.cart_id == reserve){
                        if(value.state.type == "RESERVED")
                            validate = true;
                    }
                });

                return validate;
            }



        }
})();