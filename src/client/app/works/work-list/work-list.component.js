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
        let check = false;
        //orderList
        let orderDes = true;
        //timer
        let countDown;
        let timer = [];
        let items_timer_snoozed = [];
        let timer_result = [];
        this.count = 1500;
        //paginator
        this.currentPage = 0;

        this.pages = [];

        this.$onInit = function(){

            this.release_snoozed_timer();

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
                            item.innerHTML = moment(timer_result[0]).format('H : mm : ss');
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
           // if(!check){
                console.log(1);
                self.works.body.forEach(function(element){
                   if(element.state.type == 'SNOOZED'){
                       items_timer_snoozed.push(element.state.release_time);
                   }
                });
            //    check = true;
            //}

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
      //          self.itemsPerPage = self.works.limit;
                let totalPages = self.works.offset.size;

                /*    let startPage, endPage;

               if(totalPages <=10){
                    startPage = 1;
                    endPage = totalPages;
                }else{
                    if(self.currentPage == 0){
                        startPage = 2;
                                  endPage = totalPages;
                    } else if(self.currentPage +4 >= totalPages){
                        startPage = totalPages - 9;
                        endPage = totalPages;
                    } else{
                       startPage = self.currentPage = -5;
                        endPage = self.currentPage +4;
                    }
                }*/
                let i=1;
                while(i <= totalPages)
                {
                    console.log(i);
                    self.pages.push(i);
                    i++;
                }
            }
        };

        this.setPage = function(index){

            self.works.offset.currentPage = index;
            console.log(self.works.offset.currentPage);
        };
    }

})();