(()=>{
    'use strict';
    angular
        .module('works')
        .component('worksRoot', {
            controller: WorksRootController,
            templateUrl: "works/works-root.html"
            });

    WorksRootController.$inject = ['workService','$scope'];

        function WorksRootController(workService){

            let _self = this;
            this.data = {currentPage : 1};
            this.loading = true;
            this.optimized = false;
            this.tasksPaginated=[];
            this.tasksFiltered=[];

            this.pagination = {
                limit: 10,
                currentPage: 1,
                pages:[]
            };

            this.filters = {
                "_id": ""
            };

            this.$onInit = ()=>{
                _self.getTasks();
            };


            this.renderTasks = (tasks)=>{
                _self.pagination.pages = [];
                _self.tasksPaginated = [];
                _self.tasksPaginated = tasks.slice((_self.works.limit*_self.works.offset.currentPage)-_self.works.limit,(_self.works.limit*_self.works.offset.currentPage));
                _self.optimazerTasksMemory(tasks);
            };


            this.getTasks = ()=>{
                _self.loading = true;

                workService.getWorks()
                    .then(function done(res){
                        _self.works = {
                            limit : _self.pagination.limit,
                            offset :{
                                currentPage: _self.pagination.currentPage,
                                bodyLength: res.body.length,
                                size: Math.ceil(res.body.length/_self.pagination.limit),
                            },
                            body : res.body
                        };
                        _self.loading = false;
                        _self.itemsListHandler();
                        _self.renderTasks(_self.works.body);
                    }, function fail(error){
                        console.log(error);
                    });
            };;

            this.itemsListHandler = ()=>{
                document.getElementById('msg-loading').style.display = "inline";
                if (_self.works) {
                    document.getElementById('msg-loading').style.display = "none";
                    setInterval(()=>{
                        angular.forEach(_self.works.body, function (element) {
                            if(document.getElementById(element.cart.cart_id) === null){
                                return;
                            }else{
                                _self.release_timer_snoozed(element);
                            }
                        });
                    },1000);

                }
            };

            this.listIsEmpty = ()=>{

                if(!(document.getElementById('element')) && !(_self.loading)){
                    _self.listEmpty = true;
                    document.getElementById('msg-empty-list').style.display = "inline";

                }else{
                    document.getElementById('msg-empty-list').style.display = "none";

                }
            };

            this.release_timer_snoozed = (element)=> {

                if(element.state.type === 'SNOOZED'){
                    document.getElementById(element.cart.cart_id)
                        .innerHTML = moment(moment(element.state.release_time) - moment()).format('h:mm:ss');
                }else{
                    return;
                }
            };

            this.optimazerTasksMemory = (tasks)=>{
                if(tasks.length < _self.works.body.length){
                    _self.tasksFiltered = tasks;
                    _self.optimized = true;
                }
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
        }
})();