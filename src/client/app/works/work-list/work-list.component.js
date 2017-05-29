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

        //orderList
        let orderDes = true;
        //timer
        let countDown;
        self.itemTask = [];
        //paginator
        self.currentPage = 0;
        self.itemsPerPage = 5;
        self.pages = [];

        this.$onInit = function(){

        };

        this.$onChanges = function(){

            self.confiPages();

        };

        this.timer = function(){
            let count = 50;
            let now = moment();


            countDown=setInterval(function(){
                count--;
                if(document.getElementById('timer'))
                    document.getElementById('timer').innerHTML = 0;
                if(count==0)
                    clearInterval(countDown);
            },1000);
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