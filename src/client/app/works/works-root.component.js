(function(){
    angular
        .module('works')
        .component('worksRoot', {
            controller: worksRootController,
            templateUrl: "works/works-root.html"
            });

    worksRootController.$inject = ['workService'];

        function worksRootController(workService){

            var _self = this;

            this.$onInit = function(){
                workService.getWorks()
                    .then(function done(res){
                        _self.works = res;
                    }, function fial(error){
                        console.log(error);
                    });
                return _self.works;
            }
        }
})();