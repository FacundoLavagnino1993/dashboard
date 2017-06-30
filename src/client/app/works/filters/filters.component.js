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

        function FiltersController(){

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

            this.sendTasks = (key, value)=>{

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
                }


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

                self.WorksRootController.setPage(1);
                self.WorksRootController.comboPages = 1;
                self.WorksRootController.confiPages();
                self.works.offset.size = Math.ceil(tasks.length/self.works.limit);
                console.log('filter' + self.works.offset.size);
                self.WorksRootController.renderTasks(tasks);


            }


        }
})();