(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filters',{
            controller:FiltersController,
            bindings:{
              works:'<',
              tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filters.html',
        });

        function FiltersController(){

            let self = this;
            this.filtered = false;
            let result = [];


            this.sendTasks = (tasks, filterOf)=>{

                tasks.forEach(function(element){
                    self.tasksFiltered.push(element);
                });



               /* if(!self.filtered){

                    self.tasksFiltered = tasks;
                    this.filtered = true;
                }*/


                /*switch (filterOf){
                    case 'id':
                            idResult = tasks;
                        break;
                    case 'state':
                            stateResult = tasks;
                        break;

                }

                self.tasksFiltered.equals = (idResult,stateResult)=>{

                }*/


               // self.WorksRootController.renderTasks(self.tasksFiltered);
                self.works.offset.size = Math.ceil(self.tasksFiltered.length/self.works.limit);
            }
        }
})();