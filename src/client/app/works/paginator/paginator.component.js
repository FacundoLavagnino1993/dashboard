(function(){
    'use strict';
    angular
        .module('paginator')
        .factory('PagerService',PagerService)
        .component('paginator',{
            controller: paginatorController,
            bindings:{
                works : '<',
                worksFiltered : '<'
            },
            templateUrl:'works/paginator/paginator.html'
        });

        function paginatorController(PagerService){

            let _self = this;
            _self.pager = {};
            _self.setPage = setPage;

            this.$onInit = function(){


            };

            this.$onChanges = function(){

                if(this.works){
                     console.log(_self.works.tasks.length);
                    _self.setPage(1);
                }

            };


            function setPage(page){

                if(page < 1 || page > _self.pager.totalPages){
                    return;
                }

                _self.pager = PagerService.getPager(_self.works.tasks.length, page);
                debugger;
                _self.works = _self.works.tasks.slice(_self.pager.startIndex,_self.pager.endIndex);

            }

        }

        function PagerService(){

            let service = {};

            service.getPager = getPager;

            return service;

            function getPager(totalItems, currentPage){


                let pageSize = 1;

                //Total de paginas
                let totalPages = Math.ceil(totalItems/ pageSize);


                let startPage;
                let endPage;

                if(totalPages <= 10) {
                    startPage = 1;
                    endPage = totalPages;
                }else{
                    if(currentPage <=6){
                        startPage = 1;
                        endPage = 10;
                    } else if(currentPage + 4 >= totalPages){
                        startPage = totalPages - 9;
                        endPage = totalPages;
                    } else{
                        startPage = currentPage -5;
                        endPage = currentPage + 4;
                    }
                }
                let startIndex = (currentPage - 1) * pageSize;
                debugger;
                let endIndex = Math.min(startIndex + pageSize - 1, totalItems -1);

                let pages = _.range(startPage, endPage + 1);

                return {
                    totalItems:totalItems,
                    currentPage:currentPage,
                    pageSize:pageSize,
                    totalPages:totalPages,
                    startPage: startPage,
                    endIndex: endIndex,
                    pages:pages
                }
            }
        }


})();