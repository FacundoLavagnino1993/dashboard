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
            let count = 0;
            this.data = {currentPage : 1};
            this.$onInit = function(){

                    workService.getWorks()
                        .then(function done(res){
                          //_self.works = JSON.parse(res);
                            _self.works = res;
                            _self.release_timer_snoozed();
                        }, function fail(error){
                            console.log(error);
                        });
                    _self.filters = {
                        "_id": ""
                    };

            };

            this.worksPaginated = function(data){
                _self.data = data;
                workService.getWorksPaginated(data)
                    .then(function done(res){
                        _self.works.body = res.body;
                        _self.release_timer_snoozed();
                }, function fail(error){
                    console.log(error);
                });

            };

           setInterval(function(){
               //debugger
               //console.log(_self.data);
                workService.getWorksPaginated(_self.data)
                    .then(function done(res){
                        _self.works.body = res.body;
                    _self.release_timer_snoozed();
                    }, function fail(error){
                        console.log(error);
                    });
                console.log("refresh ok");
                return _self.works;
            },5000);

        /*    this.sendReserve = function(data){

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

            };*/

          /*  this.validateReserve = function(reserve){
                let validate = false;

                angular.forEach(_self.works.body,function(value){
                    if(value.cart.cart_id == reserve){
                        if(value.state.type == "RESERVED")
                            validate = true;
                    }
                });

                return validate;
            }*/

            this.release_timer_snoozed = function() {

                if (_self.works) {
                    setInterval(()=>{
                        angular.forEach(_self.works.body, function (element) {
                            count ++;
                            if(element.state.type == 'SNOOZED'){
                                document.getElementById(element.cart.cart_id)
                                    .innerHTML = moment(moment(element.state.release_time) - moment()).format('h:mm:ss');
                            }
                        });
                    },1000);

                }
            };
        }
})();