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
                        }, function fail(error){
                            console.log(error);
                        });

                    _self.filters = {
                        "_id": "",
                    };


                    return _self.works;
                };


    /*
           setInterval(function(){

                workService.getWorks()
                    .then(function done(res){
                        _self.works = JSON.parse(res);
                    }, function fail(error){
                        console.log(error);
                    });

                return _self.works;
            },20000);
*/
            this.sendReserve = function(data){
                console.log(data);
                workService.setReserve(data)
                    .then(function done(res) {
                        console.log(res.status);
                    }, function fail(error){
                    console.log(error);
                });
            };

        }
})();