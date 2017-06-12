(function(){
    'use strict';
    angular
        .module('works')
        .component('worksRoot', {
            controller: WorksRootController,
            templateUrl: "works/works-root.html"
            });

    WorksRootController.$inject = ['workService','$scope'];

        function WorksRootController(workService,$scope){

            let _self = this;
            this.data = {currentPage : 1};


            this.$onInit = function(){
                    workService.getWorks()
                        .then(function done(res){
                            _self.works = res;
                            _self.itemsListHandler();
                        }, function fail(error){
                            console.log(error);
                        });
                    _self.filters = {
                        "_id": ""
                    };
            };
/*
            this.worksPaginated = function(data){
                _self.data = data;
                workService.getWorksPaginated(data)
                    .then(function done(res){
                        _self.works.body = res.body;
                        _self.itemsListHandler();
                }, function fail(error){
                    console.log(error);
                });

            };*/

        /*   setInterval(function(){

                workService.getWorksPaginated(_self.data)
                    .then(function done(res){
                        _self.works.body = res.body;
                    }, function fail(error){
                        console.log(error);
                    });
                console.log("refresh page "+_self.data.currentPage);
                return _self.works;
            },5000);*/

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

            this.itemsListHandler = function(){
                if (_self.works) {

                    setInterval(()=>{
                        angular.forEach(_self.works.body, function (element) {
                            if(document.getElementById(element.cart.cart_id) == null){
                                return;
                            }else{
                                _self.release_timer_snoozed(element);
                            }
                        });
                    },1000);

                }
            };

            this.listIsEmpty = function(){

                if(!(document.getElementById('element'))){
                    _self.listEmpty = true;
                    document.getElementById('msg-empty-list').style.display = "inline";

                }else{
                    document.getElementById('msg-empty-list').style.display = "none";

                }
            };

            this.release_timer_snoozed = function(element) {

                if(element.state.type == 'SNOOZED'){
                    document.getElementById(element.cart.cart_id)
                        .innerHTML = moment(moment(element.state.release_time) - moment()).format('h:mm:ss');
                }else{
                    return;
                }
            };
        }
})();