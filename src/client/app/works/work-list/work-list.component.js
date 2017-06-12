(function(){
    'use strict';
    angular
        .module('works')
        .component('workList',{
            controller: ListController,
            bindings:{
              works : '<',
              itemReserve : '&',
              filters : '<',
              listEmpty : '<'
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
        let orderDes = true;
        //paginator
        this.currentPage = 0;
        this.pages = [];
        this.tasksBackup=[];


        this.$onChanges = function(){

            self.confiPages();
            if(self.works){
                this.tasksBackup = self.works.body.slice((self.works.limit*1)-self.works.limit,(self.works.limit*1));
            }

        };

        this.itemIsEmpty = function (item){


            if(!(item)){
                item = "-";
                return item;
            }
            return item;

        };

        this.orderBy = function(action){

            switch (action){
                case "id" :

                        if(orderDes){
                            this.works.body.sort(function(a,b){
                                    if(a.cart.cart_id < b.cart.cart_id)
                                        return -1;
                                    if(a.cart.cart_id > b.cart.cart_id)
                                        return 1;
                                    if(a.cart.cart_id == b.cart.cart_id)
                                        return 0;
                                });
                            self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                               orderDes=false;
                        }else{
                            this.works.body.sort(function(a,b){
                                if(a.cart.cart_id > b.cart.cart_id)
                                    return -1;
                                if(a.cart.cart_id < b.cart.cart_id)
                                    return 1;
                                if(a.cart.cart_id == b.cart.cart_id)
                                    return 0;
                            });
                            self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                            orderDes=true;
                        }
                    break;

                case "status" :

                    if(orderDes){
                        this.works.body.sort(function(a,b){
                            if(a.cart.status < b.cart.status)
                                return -1;
                            if(a.cart.status > b.cart.status)
                                return 1;
                            if(a.cart.status == b.cart.status)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.cart.status > b.cart.status)
                                return -1;
                            if(a.cart.status < b.cart.status)
                                return 1;
                            if(a.cart.status == b.cart.status)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }

                    break;
                case "channel":

                    if(orderDes){
                        this.works.body.sort(function(a,b){
                            if(a.cart.source.channel < b.cart.source.channel)
                                return -1;
                            if(a.cart.source.channel > b.cart.source.channel)
                                return 1;
                            if(a.cart.source.channel == b.cart.source.channel)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.cart.source.channel > b.cart.source.channel)
                                return -1;
                            if(a.cart.source.channel < b.cart.source.channel)
                                return 1;
                            if(a.cart.source.channel == b.cart.source.channel)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }

                    break;
                case "country":
                    if(orderDes){
                        this.works.body.sort(function(a,b){
                            if(a.cart.source.country < b.cart.source.country)
                                return -1;
                            if(a.cart.source.country > b.cart.source.country)
                                return 1;
                            if(a.cart.source.country == b.cart.source.country)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.cart.source.country > b.cart.source.country)
                                return -1;
                            if(a.cart.source.country < b.cart.source.country)
                                return 1;
                            if(a.cart.source.country == b.cart.source.country)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }

                    break;
                case "agent":
                    if(orderDes){
                        this.works.body.sort(function(a,b){
                            if(a.state.user_id < b.state.user_id)
                                return -1;
                            if(a.state.user_id > b.state.user_id)
                                return 1;
                            if(a.state.user_id == b.state.user_id)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.state.user_id > b.state.user_id)
                                return -1;
                            if(a.state.user_id < b.state.user_id)
                                return 1;
                            if(a.state.user_id == b.state.user_id)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }

                    break;
                case "dateCreation":
                    if(orderDes){
                        this.works.body.sort(function(a,b) {
                            if (a.cart.creation_date < b.cart.creation_date)
                                return -1;
                            if (a.cart.creation_date > b.cart.creation_date)
                                return 1;
                            if (a.cart.creation_date == b.cart.creation_date)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))

                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.cart.creation_date > b.cart.creation_date)
                                return -1;
                            if(a.cart.creation_date < b.cart.creation_date)
                                return 1;
                            if(a.cart.creation_date == b.cart.creation_date)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))

                        orderDes=true;
                    }

                    break;
                case "product":
                    if(orderDes){

                        this.works.body.sort(function(a,b){
                            if(a.cart.reservations[0].product < b.cart.reservations[0].product)
                                return -1;
                            if(a.cart.reservations[0].product > b.cart.reservations[0].product)
                                return 1;
                            if(a.cart.reservations[0].product == b.cart.reservations[0].product)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.cart.reservations[0].product > b.cart.reservations[0].product)
                                return -1;
                            if(a.cart.reservations[0].product < b.cart.reservations[0].product)
                                return 1;
                            if(a.cart.reservations[0].product == b.cart.reservations[0].product)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }
                    break;

                case "stage":
                    if(orderDes){

                        this.works.body.sort(function(a,b){
                            if(a.cart.stage < b.cart.stage)
                                return -1;
                            if(a.cart.stage > b.cart.stage)
                                return 1;
                            if(a.cart.stage == b.cart.stage)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.cart.stage > b.cart.stage)
                                return -1;
                            if(a.cart.stage < b.cart.stage)
                                return 1;
                            if(a.cart.stage == b.cart.stage)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }
                    break;
                case "availability":

                    if(orderDes){

                        this.works.body.sort(function(a,b){
                        if(a.state.type < b.state.type)
                            return -1;
                        if(a.state.type > b.state.type)
                            return 1;
                        if(a.state.type == b.state.type)
                            return 0;
                    });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.state.type > b.state.type)
                                return -1;
                            if(a.state.type < b.state.type)
                                return 1;
                            if(a.state.type == b.state.type)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }
                    break;
                case "typeTask":

                    if(orderDes){

                        this.works.body.sort(function(a,b){
                            if(a.type < b.type)
                                return -1;
                            if(a.type > b.type)
                                return 1;
                            if(a.type == b.type)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=false;
                    }else{
                        this.works.body.sort(function(a,b){
                            if(a.type > b.type)
                                return -1;
                            if(a.type < b.type)
                                return 1;
                            if(a.type == b.type)
                                return 0;
                        });
                        self.tasksBackup = self.works.body.slice((self.works.limit*self.works.offset.currentPage)-self.works.limit,(self.works.limit*self.works.offset.currentPage))
                        orderDes=true;
                    }
                    break;

            }
        };

        this.renderPages = function(){

        };

        this.confiPages = function(){

            if(self.works){
                let totalPages = self.works.offset.size;
                let i=1;
                while(i <= totalPages)
                {
                    self.pages.push(i);
                    i++;
                }
            }
        };

        this.setPage = function(index){

            self.works.offset.currentPage = index;
            self.tasksBackup = self.works.body.slice((self.works.limit*index)-self.works.limit,(self.works.limit*index))


        };


    }

})();