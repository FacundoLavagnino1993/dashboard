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
        });

    function listController() {
        let orderDes = true;
        let count = 5;
        let countDown;



        this.$onInit = function(){
        };


        this.timer = function(){

            countDown = setInterval(function () {
                count--;
                if(count==0){
                    clearInterval(countDown);
                }
                console.log(count);
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
                            this.works.tasks.sort(function(a,b){
                                    if(a.cart.cart_id < b.cart.cart_id)
                                        return -1;
                                    if(a.cart.cart_id > b.cart.cart_id)
                                        return 1;
                                    if(a.cart.cart_id == b.cart.cart_id)
                                        return 0;
                                });
                               orderDes=false;
                        }else{
                            this.works.tasks.sort(function(a,b){
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
                        this.works.tasks.sort(function(a,b){
                            if(a.cart.status < b.cart.status)
                                return -1;
                            if(a.cart.status > b.cart.status)
                                return 1;
                            if(a.cart.status == b.cart.status)
                                return 0;
                        });
                        orderDes=false;
                    }else{
                        this.works.tasks.sort(function(a,b){
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
                        this.works.tasks.sort(function(a,b){
                            if(a.cart.source.channel < b.cart.source.channel)
                                return -1;
                            if(a.cart.source.channel > b.cart.source.channel)
                                return 1;
                            if(a.cart.source.channel == b.cart.source.channel)
                                return 0;
                        });
                        orderDes=false;
                    }else{
                        this.works.tasks.sort(function(a,b){
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
                        this.works.tasks.sort(function(a,b){
                            if(a.cart.source.country < b.cart.source.country)
                                return -1;
                            if(a.cart.source.country > b.cart.source.country)
                                return 1;
                            if(a.cart.source.country == b.cart.source.country)
                                return 0;
                        });
                        orderDes=false;
                    }else{
                        this.works.tasks.sort(function(a,b){
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
                        this.works.tasks.sort(function(a,b){
                            if(a.state.user_id < b.state.user_id)
                                return -1;
                            if(a.state.user_id > b.state.user_id)
                                return 1;
                            if(a.state.user_id == b.state.user_id)
                                return 0;
                        });
                        orderDes=false;
                    }else{
                        this.works.tasks.sort(function(a,b){
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
                        this.works.tasks.sort(function(a,b) {
                            if (a.cart.creation_date < b.cart.creation_date)
                                return -1;
                            if (a.cart.creation_date > b.cart.creation_date)
                                return 1;
                            if (a.cart.creation_date == b.cart.creation_date)
                                return 0;
                        });
                        orderDes=false;
                    }else{
                        this.works.tasks.sort(function(a,b){
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

                        this.works.tasks.sort(function(a,b){
                        if(a.state.type < b.state.type)
                            return -1;
                        if(a.state.type > b.state.type)
                            return 1;
                        if(a.state.type == b.state.type)
                            return 0;
                    });
                        orderDes=false;
                    }else{
                        this.works.tasks.sort(function(a,b){
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



    }

})();