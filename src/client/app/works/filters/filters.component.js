(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filters',{
            controller:FiltersController,
            bindings:{
              works:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filters.html',
        });

        FiltersController.$inject = ['workService'];

        function FiltersController(workService){

            let self = this;

            let id = '';
            let status = '';
            let stage = '';
            let available = '';
            let _from = null;
            let _to = moment()._d;
            let date= {
                _from,
                _to
            };
            let tasks;

            this.refreshPage = ()=>{

                self.WorksRootController.loading = true;
                self.WorksRootController.tasksPaginated = [];
                //self.pagination.pages = [];
                document.getElementById('paginator').style.display = "none";
                document.getElementById('msg-loading').style.display = "inline";
                workService.getWorks()
                .then(function done(res){
                    self.WorksRootController.works = {
                        limit : self.WorksRootController.pagination.limit,
                        offset :{
                            currentPage: self.WorksRootController.pagination.currentPage,
                            bodyLength: res.body.length,
                            size: Math.ceil(res.body.length/self.WorksRootController.pagination.limit),
                        },
                        body : res.body
                    };
                    document.getElementById('paginator').style.display = "inline";
                    self.works = self.WorksRootController.works;
                    self.WorksRootController.loading = false;
                    self.WorksRootController.itemsListHandler();
                    self.sendTasks();


                }, function fail(error){
                    console.log(error);
                });

            };

            this.resetFilter = ()=>{

                document.getElementById("id").value='';
                document.getElementById("state").value='';
                document.getElementById("stage").value='';
                document.getElementById("availability").value='';
                document.getElementById("dateFrom").value='';
                document.getElementById("dateTo").value='';
                self.setValues('reset','');
            };

            this.sendTasks = ()=>{

                tasks = self.filterTasks();

                self.WorksRootController.setPage(1);
                self.WorksRootController.comboPages = 1;
                self.WorksRootController.confiPages();
                self.works.offset.size = Math.ceil(tasks.length/self.works.limit);

                self.WorksRootController.renderTasks(tasks);


            };

            this.setValues = (key,value)=>{

                switch (key){
                    case 'id':
                        id = value;
                        break;
                    case 'state':
                        status = value;
                        break;
                    case 'stage':
                        stage = value;
                        break;
                    case 'availability':
                        available = value;
                        break;
                    case 'date':
                        date = value;
                        break;
                    case 'reset':
                        id = value;
                        status = value;
                        stage = value;
                        available = value;
                        date._from = null;
                        break;

                }

                self.sendTasks();
            };

            this.filterTasks = ()=>{

                tasks = self.works.body.filter((item)=>{

                    if((item.cart.cart_id.toLowerCase().indexOf(id.toLowerCase()) != -1)
                        &&
                        (item.cart.status.toLowerCase().indexOf(status.toLowerCase()) != -1)
                        &&
                        (item.cart.stage.toLowerCase().indexOf(stage.toLowerCase()) != -1)
                        &&
                        (item.state.type.toLowerCase().indexOf(available.toLowerCase()) != -1)){
                        if(date._from === null){
                            return item;
                        }
                        else if((moment(item.cart.creation_date) >= moment(date._from))&&(moment(item.cart.creation_date) <= moment(date._to))){
                            return item;
                        }
                    }
                });

                return tasks;
            }
        }
})();