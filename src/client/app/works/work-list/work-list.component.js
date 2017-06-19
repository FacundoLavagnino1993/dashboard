(function(){
    'use strict';
    angular
        .module('works')
        .component('workList',{
            controller: ListController,
            bindings:{
              works : '<',
              filters : '<',
              listEmpty : '<',
              tasksPaginated : '<',
              tasksFiltered : '<',
              pagination : '<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: "works/work-list/work-list.html"
        })
        .filter('startFromGrid',function(){
                return function (works,start){
                    if(works){
                        start = +start;
                      return works.slice(start);
                     }
                 }
        });

    ListController.$inject = ['$scope'];

    function ListController($scope) {

        let self = this;
        //orderList
        let orderDown = false;
        //paginator
        this.currentPage = 0;


        this.$onChanges = ()=>{

            self.confiPages();
        };

        this.refreshPage = ()=>{
            self.pagination.pages = [];
            self.tasksPaginated = [];
            self.works = [];
            document.getElementById('msg-loading').style.display = "inline";
            self.WorksRootController.getTasks();
        };

        this.itemIsEmpty = (item)=>{

            if(!(item)){
                item = "-";
                return item;
            }
            return item;

        };


        this.orderBy = (action)=>{
            if(self.WorksRootController.optimized)
                orderDown === false ? orderTasksDown(self.tasksFiltered,action) : orderTasksUp(self.tasksFiltered,action);
            else
                orderDown === false ? orderTasksDown(self.works.body,action) : orderTasksUp(self.works.body,action);
        };

        let orderTasksDown =(tasks,action)=>{
            switch (action){

                case 'id':
                    tasks.sort(function(a,b){
                        if(a.cart.cart_id < b.cart.cart_id)
                            return -1;
                        if(a.cart.cart_id > b.cart.cart_id)
                            return 1;
                        if(a.cart.cart_id == b.cart.cart_id)
                            return 0;
                    });
                    break;

                case 'status':
                    tasks.sort(function(a,b){
                        if(a.cart.status < b.cart.status)
                            return -1;
                        if(a.cart.status > b.cart.status)
                            return 1;
                        if(a.cart.status == b.cart.status)
                            return 0;
                    });
                    break;

                case 'channel':
                    tasks.sort(function(a,b){
                        if(a.cart.source.channel < b.cart.source.channel)
                            return -1;
                        if(a.cart.source.channel > b.cart.source.channel)
                            return 1;
                        if(a.cart.source.channel == b.cart.source.channel)
                            return 0;
                    });
                    break;

                case 'country':
                    tasks.sort(function(a,b){
                        if(a.cart.source.country < b.cart.source.country)
                            return -1;
                        if(a.cart.source.country > b.cart.source.country)
                            return 1;
                        if(a.cart.source.country == b.cart.source.country)
                            return 0;
                    });
                    break;

                case 'agent':
                    tasks.sort(function(a,b){
                        if(a.state.user_id < b.state.user_id)
                            return -1;
                        if(a.state.user_id > b.state.user_id)
                            return 1;
                        if(a.state.user_id == b.state.user_id)
                            return 0;
                    });
                    break;

                case 'dateCreation':
                    tasks.sort(function(a,b) {
                        if (a.cart.creation_date < b.cart.creation_date)
                            return -1;
                        if (a.cart.creation_date > b.cart.creation_date)
                            return 1;
                        if (a.cart.creation_date == b.cart.creation_date)
                            return 0;
                    });
                    break;

                case 'product':
                    tasks.sort(function(a,b){
                        if(a.cart.reservations[0].product < b.cart.reservations[0].product)
                            return -1;
                        if(a.cart.reservations[0].product > b.cart.reservations[0].product)
                            return 1;
                        if(a.cart.reservations[0].product == b.cart.reservations[0].product)
                            return 0;
                    });
                    break;

                case 'stage':
                    tasks.sort(function(a,b){
                        if(a.cart.stage < b.cart.stage)
                            return -1;
                        if(a.cart.stage > b.cart.stage)
                            return 1;
                        if(a.cart.stage == b.cart.stage)
                            return 0;
                    });
                    break;

                case 'availability':
                    tasks.sort(function(a,b){
                        if(a.state.type < b.state.type)
                            return -1;
                        if(a.state.type > b.state.type)
                            return 1;
                        if(a.state.type == b.state.type)
                            return 0;
                    });
                    break;

                case 'typeTask':
                    tasks.sort(function(a,b){
                        if(a.type < b.type)
                            return -1;
                        if(a.type > b.type)
                            return 1;
                        if(a.type == b.type)
                            return 0;
                    });
                    break;
            }
            self.WorksRootController.renderTasks(tasks);
            orderDown=true;
        };

        let orderTasksUp =(tasks,action)=>{
            switch(action){

                case 'id':
                    tasks.sort(function(a,b){
                        if(a.cart.cart_id > b.cart.cart_id)
                            return -1;
                        if(a.cart.cart_id < b.cart.cart_id)
                            return 1;
                        if(a.cart.cart_id == b.cart.cart_id)
                            return 0;
                    });
                    break;

                case 'status':
                    tasks.sort(function(a,b){
                        if(a.cart.status > b.cart.status)
                            return -1;
                        if(a.cart.status < b.cart.status)
                            return 1;
                        if(a.cart.status == b.cart.status)
                            return 0;
                    });
                    break;

                case 'channel':
                    tasks.sort(function(a,b){
                        if(a.cart.source.channel > b.cart.source.channel)
                            return -1;
                        if(a.cart.source.channel < b.cart.source.channel)
                            return 1;
                        if(a.cart.source.channel == b.cart.source.channel)
                            return 0;
                    });
                    break;

                case 'country':
                    tasks.sort(function(a,b){
                        if(a.cart.source.country > b.cart.source.country)
                            return -1;
                        if(a.cart.source.country < b.cart.source.country)
                            return 1;
                        if(a.cart.source.country == b.cart.source.country)
                            return 0;
                    });
                    break;

                case 'agent':
                    tasks.sort(function(a,b){
                        if(a.state.user_id > b.state.user_id)
                            return -1;
                        if(a.state.user_id < b.state.user_id)
                            return 1;
                        if(a.state.user_id == b.state.user_id)
                            return 0;
                    });
                    break;

                case 'dateCreation':
                    tasks.sort(function(a,b){
                        if(a.cart.creation_date > b.cart.creation_date)
                            return -1;
                        if(a.cart.creation_date < b.cart.creation_date)
                            return 1;
                        if(a.cart.creation_date == b.cart.creation_date)
                            return 0;
                    });
                    break;

                case 'product':
                    tasks.sort(function(a,b){
                        if(a.cart.reservations[0].product > b.cart.reservations[0].product)
                            return -1;
                        if(a.cart.reservations[0].product < b.cart.reservations[0].product)
                            return 1;
                        if(a.cart.reservations[0].product == b.cart.reservations[0].product)
                            return 0;
                    });
                    break;

                case 'stage':
                    tasks.sort(function(a,b){
                        if(a.cart.stage > b.cart.stage)
                            return -1;
                        if(a.cart.stage < b.cart.stage)
                            return 1;
                        if(a.cart.stage == b.cart.stage)
                            return 0;
                    });
                    break;

                case 'availability':
                    tasks.sort(function(a,b){
                        if(a.state.type > b.state.type)
                            return -1;
                        if(a.state.type < b.state.type)
                            return 1;
                        if(a.state.type == b.state.type)
                            return 0;
                    });
                    break;

                case 'typeTask':
                    tasks.sort(function(a,b){
                        if(a.type > b.type)
                            return -1;
                        if(a.type < b.type)
                            return 1;
                        if(a.type == b.type)
                            return 0;
                    });
                    break;
            }
            self.WorksRootController.renderTasks(tasks);
            orderDown=false;
        };

        this.confiPages = ()=>{

            if(self.works){
                let totalPages = self.works.offset.size;
                let i=1;
                while(i <= totalPages)
                {
                    self.pagination.pages.push(i);
                    i++;
                }
            }
        };





    }

})();