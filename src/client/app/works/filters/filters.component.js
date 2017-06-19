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
            let idResult =[];
            let stateResult =[];
            let stageResult =[];
            let availableResult =[];
            let dateResult =[];


            this.sendTasks = (tasks, filterOf)=>{


                if(!self.filtered){
                    self.tasksFiltered = tasks;
                    this.filtered = true;
                }

                switch (filterOf){

                    case 'id':
                            idResult = tasks;
                        break;
                    case 'state':
                            stateResult = tasks;
                            console.log(stateResult.length);
                        break;
                    case 'stage':
                             stageResult = tasks;
                        break;
                    case 'availability':
                             availableResult = tasks;
                        break;
                    case 'date':
                             dateResult = tasks;
                        break;
                }




                self.tasksFiltered = tasks;
                self.WorksRootController.setPage(1);
                self.WorksRootController.renderTasks(self.tasksFiltered);*/
                self.works.offset.size = Math.ceil(self.tasksFiltered.length/self.works.limit);
            }
        }
})();