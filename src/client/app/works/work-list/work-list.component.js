(function(){
    'use strict';
    angular
        .module('works')
        .component('workList',{
            controller: listController,
            bindings:{
              works : '<',
              itemReserve : '&',
              filters : '<',
            },
            require:{
                worksRootController : '^worksRoot'
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

    function listController() {

        let self = this;
        //orderList
        let orderDes = true;
        //paginator
        this.currentPage = 0;
        this.pages = [];

        this.$onInit = function(){

        };

        this.$onChanges = function(){

            self.confiPages();

        };

     /*   this.setTimer = function() {

            if(self.items_snoozed){
                angular.forEach(self.works.body,function(element){

                     if(element.state.type == 'SNOOZED'){
                         console.log(element.state.release_time);
                     }
                });


                countDown = setInterval(function () {
                    self.count--;

                     for(let i=0; i < self.items_snoozed.length; i++){
                     timer_result[i] = moment(items_timer_snoozed[i]) - moment();
                     }
                     document.querySelectorAll('.snoozed')
                     .forEach(function(item){
                     item.innerHTML = moment(timer_result[0]).format('H : mm : ss');
                     });


                    if (self.count == 0)
                        clearInterval(countDown);
                }, 1000);
            }

        };*/


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
                        orderDes=true;
                    }

                    break;

                case "type":

                    if(orderDes){

                        this.works.body.sort(function(a,b){
                        if(a.state.type < b.state.type)
                            return -1;
                        if(a.state.type > b.state.type)
                            return 1;
                        if(a.state.type == b.state.type)
                            return 0;
                    });
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
                        orderDes=true;
                    }

                    break;

            }
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
            let data = {"currentPage":index};
            self.worksRootController.worksPaginated(data);


        };
    }

})();