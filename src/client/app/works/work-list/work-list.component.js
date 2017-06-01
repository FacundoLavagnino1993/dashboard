(function(){
    'use strict';
    angular
        .module('works')
        .component('workList',{
            controller: listController,
            bindings:{
              works : '<',
              itemReserve : '&',
              filters : '<'
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
        let check = true;
        //orderList
        let orderDes = true;
        //timer
        let countDown;
        let items_timer_snoozed = [];
        let timer_result = [];
        this.count = 150;
        //paginator
        this.currentPage = 0;
        this.itemsPerPage = 5;
        this.pages = [];


        this.$onInit = function(){

        };

        this.$onChanges = function(){

            self.confiPages();

        };



        this.release_snoozed_timer = function() {

            self.now = moment();

            countDown = setInterval(function () {
                self.count--;
                if(document.getElementsByClassName('snoozed')){

                    for(let i=0; i < items_timer_snoozed.length; i++){
                        timer_result[i] = moment(items_timer_snoozed[i]) - moment();
                    }

                    document.querySelectorAll('.snoozed')
                        .forEach(function(item){
                            console.log(document.querySelectorAll('.snoozed').length);
                            item.innerHTML = moment(timer_result[1]).format('H:mm:ss');
                        });

                }
                if (self.count == 0)
                    clearInterval(countDown);
            }, 1000);

        };


        this.itemIsEmpty = function (item){
            if(!(item)){
                item = "-";
                return item;
            }
            return item;
        };

        this.itemSnoozedHandler = function (){
            if(check){
                self.works.body.forEach(function(element){
                   if(element.state.type == 'SNOOZED'){
                       items_timer_snoozed.push(element.state.release_time);
                   }
                });
                check = false;
            }

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

                let items = self.works.body.length;
                let totalPages = Math.ceil(items/self.itemsPerPage);

                let startPage, endPage;

                if(totalPages <=10){
                    startPage = 1;
                    endPage = totalPages;
                }else{
                    if(self.currentPage <= 6){
                        startPage = 1;
                        endPage = 10;
                    } else if(self.currentPage +4 >= totalPages){
                        startPage = totalPages - 9;
                        endPage = totalPages;
                    } else{
                        startPage = self.currentPage = -5;
                        endPage = self.currentPage +4;
                    }
                }
                let i=1;

                while(i <= endPage)
                {
                    self.pages.push(i);
                    i++;
                }
            }
        };

        self.setPage = function(index){

            self.currentPage = index-1;
        };
    }

})();