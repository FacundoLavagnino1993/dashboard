'use strict';

const request = require('request');


class workService {


    static get() {
        /*
        return new Promise((fulfill, reject) => {
            request('http://apist.almundo.it:8080/api/tasques/tasks',
                {headers: {'X-Apikey': '5512c8d59932b3da984cc7de'}},
                function (error, res, body) {
                    if (error){
                        reject(error);
                    }else {
                        fulfill(body);
                    }
                });
        });*/



               this.workJson = {"tasks":[{"cart":{"reservations":[{"pnr":"ALM123DEV","product":"HOTEL","status":"OK","refunds":[],"payments":[{"type":"REWARDS","provider":"ALMUNDO"}],"from_date":"2017-05-02T00:00:00","to_date":"2017-05-03T00:00:00","reservation_id":"beb4e959-9742-47bf-9fdd-73979aba84d1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-04-28T18:47:47","source":{"channel":"WEB","country":"ARG","brand":"PATAGONIA"},"cart_id":"J22-6XQ-PRS"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"RESERVED"},"creation_date":"2017-04-28T18:47:48.534Z"},{"cart":{"reservations":[{"pnr":"PNR-1-1","product":"CAR","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"TODO_PAGO"}],"from_date":"2018-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"RESERVATION-1-1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-11-03T20:34:20","source":{"channel":"SUCURSAL","country":"ARG","brand":"ALMUNDO"},"cart_id":"IJC-YUT-IFI"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"RESERVED"},"creation_date":"2017-05-08T13:54:09.968Z"},{"cart":{"reservations":[{"pnr":"UIKOMM","product":"FLIGHT","status":"OK","refunds":[],"payments":[{"type":"CASH","provider":"ALMUNDO"},{"type":"CREDIT_CARD","provider":"ALMUNDO"}],"from_date":"2018-01-03T05:45:00","to_date":"2018-02-23T07:55:00","emission_date":"2017-04-26T15:12:08","expiration_date":"2017-04-27T23:59:00","cancel_date":"2017-04-26T15:10:41","reservation_id":"035ba0ab-cb01-479e-8818-c1011de95cd6"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-04-26T14:42:51","source":{"channel":"RETAIL","country":"ARG","brand":"ALMUNDO"},"cart_id":"J1Z-3AU-0HO"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"RESERVED"},"creation_date":"2017-04-26T15:12:07.813Z"},{"cart":{"reservations":[{"pnr":"AALD-D","product":"FLIGHT","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"MERCADO_PAGO"}],"from_date":"2017-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"IQ8-EDQ-1GW"}],"stage":"INVOICE","status":"PENDING","substatus":"READY_FOR_PAYMENT","creation_date":"2017-11-03T19:34:20","source":{"channel":"WEB","country":"ARG","brand":"ALMUNDO"},"cart_id":"IQ8-EDQ-1GW"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-05-02T14:04:29.957Z"},{"cart":{"reservations":[{"pnr":"PNR-1-1","product":"CAR","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"TODO_PAGO"}],"from_date":"2018-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"RESERVATION-1-1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-11-03T20:34:20","source":{"channel":"SUCURSAL","country":"ARG","brand":"ALMUNDO"},"cart_id":"IVM-BBF-CHC"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-05-05T20:37:57.676Z"},{"cart":{"reservations":[{"pnr":"PNR-1-1","product":"CAR","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"TODO_PAGO"}],"from_date":"2018-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"RESERVATION-1-1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-11-03T20:34:20","source":{"channel":"SUCURSAL","country":"ARG","brand":"ALMUNDO"},"cart_id":"IJ3-6MK-OTV"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-05-08T15:29:38.844Z"},{"cart":{"reservations":[{"pnr":"NV9HXN","product":"FLIGHT","status":"OK","refunds":[],"payments":[{"type":"REWARDS","provider":"ALMUNDO"}],"from_date":"2017-04-30T12:45:00","to_date":"2017-04-30T22:15:00","emission_date":"2017-04-28T21:23:36","expiration_date":"2017-04-29T00:00:00","reservation_id":"42e9cb1d-e0ac-43ba-a095-70df2f7ab883"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-04-28T21:23:08","source":{"channel":"WEB","country":"ARG","brand":"PATAGONIA"},"cart_id":"J22-CHD-BAW"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-04-28T21:23:36.299Z"},{"cart":{"reservations":[{"pnr":"PNR-1-1","product":"CAR","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"TODO_PAGO"}],"from_date":"2018-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"RESERVATION-1-1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-11-03T20:34:20","source":{"channel":"SUCURSAL","country":"ARG","brand":"ALMUNDO"},"cart_id":"IMF-6H1-B1U"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"SNOOZED"},"creation_date":"2017-05-08T13:40:57.188Z"},{"cart":{"reservations":[{"pnr":"779OLA","product":"FLIGHT","status":"MANUAL","refunds":[],"payments":[{"type":"CREDIT_CARD","provider":"TODO_PAGO"}],"from_date":"2017-07-17T19:00:00","to_date":"2017-07-24T14:55:00","expiration_date":"2017-05-11T00:00:00","cancel_date":"2017-05-11T19:16:23","reservation_id":"ba803a72-e511-426e-83ce-90e21359c0d8"}],"stage":"REFUND","status":"MANUAL","creation_date":"2017-05-10T14:30:50","source":{"channel":"WEB","country":"ARG","brand":"ALMUNDO"},"cart_id":"J2J-317-S6O"},"type":"REFUND_TODOPAGO","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-05-11T19:17:05.535Z"},{"cart":{"reservations":[{"pnr":"PNR-1-1","product":"CAR","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"TODO_PAGO"}],"from_date":"2018-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"RESERVATION-1-1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-11-03T20:34:20","source":{"channel":"SUCURSAL","country":"ARG","brand":"ALMUNDO"},"cart_id":"IB4-5YH-YNM"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-05-08T15:29:15.513Z"},{"cart":{"reservations":[{"pnr":"PNR-1-1","product":"CAR","status":"MANUAL","refunds":[{"type":"CASH","provider":"TODO_PAGO","refund_date":"2017-11-03T19:34:20"}],"payments":[{"type":"CASH","provider":"TODO_PAGO"}],"from_date":"2018-02-03T19:34:20","to_date":"2018-02-03T19:34:20","reservation_id":"RESERVATION-1-1"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-11-03T20:34:20","source":{"channel":"SUCURSAL","country":"ARG","brand":"ALMUNDO"},"cart_id":"IFE-JT9-J9A"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-05-05T20:35:00.646Z"},{"cart":{"reservations":[{"pnr":"NV9N6E","product":"FLIGHT","status":"OK","refunds":[],"payments":[{"type":"REWARDS","provider":"ALMUNDO"}],"from_date":"2017-05-03T06:05:00","to_date":"2017-05-04T09:10:00","emission_date":"2017-04-29T02:39:01","expiration_date":"2017-04-29T00:00:00","reservation_id":"f4b6a0a0-4a36-4a04-9619-95324ea2ede3"}],"stage":"INVOICE","status":"PENDING","creation_date":"2017-04-29T02:38:34","source":{"channel":"WEB","country":"ARG","brand":"PATAGONIA"},"cart_id":"J22-NR2-5LR"},"type":"INVOICE_PENDING","state":{"@class":"com.almundo.tasques.api.model.state.Available","type":"AVAILABLE"},"creation_date":"2017-04-29T02:39:01.891Z"}]}

         return new Promise((fulfill, reject) => {

            fulfill(this.workJson);
        })
    }

    static Reserve(reserve){

        return new Promise((fulfill,reject) =>{
            request('http://apist.almundo.it:8080/api/tasques/tasks/reserve',{
                method:'POST',
                body: reserve.body.reserve,
                headers : {'X-Apikey': '5512c8d59932b3da984cc7de', 'Content-Type' : 'application/json'},
                json: true
            },(error, res, body)=>{
                if(error)
                    reject(error);

                fulfill(body);
            })
        })

    }
}

module.exports = workService;
