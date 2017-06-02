'use strict';

const request = require('request');


class workService {


    static get() {

        const self = this;
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
                this.responsePaginated = ()=>{

                    let limit =4;
                    let page=4;

                    return {
                        limit: limit,
                        offset: {
                            currentPage: page,
                            size: self.totalPages(limit)
                        },
                        content: self.elementsPaginated(limit,page)
                    }
                };

                this.totalPages = (limit)=>{
                    let totalItems = self.works.body.length;
                    return Math.ceil(totalItems/limit);
                };

                this.elementsPaginated = (limit,page)=>{
                    return self.works.body.slice((limit*page)-limit,(limit*page))
                };

                this.works = {
            "body": [{
                "id": 810,
                "cart": {
                    "reservations": [
                        {
                            "product": "HOTEL",
                            "status": "ERROR",
                            "refunds": [],
                            "payments": [
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                }
                            ],
                            "from_date": "2017-06-23T00:00:00",
                            "to_date": "2017-06-24T00:00:00",
                            "reservation_id": "b2bca45b-93c0-41d3-831e-017b95c87a05"
                        }
                    ],
                    "stage": "PAYMENT",
                    "status": "ERROR",
                    "substatus": "TC_REJECTED",
                    "creation_date": "2017-05-24T21:29:48",
                    "source": {
                        "channel": "WEB",
                        "country": "MEX",
                        "brand": "ALMUNDO"
                    },
                    "cart_id": "J33-I68-G4L"
                },
                "type": "COLLECTION_RECOVERY",
                "state": {
                    "@class": "com.almundo.tasques.api.model.state.Available",
                    "type": "AVAILABLE"
                },
                "creation_date": "2017-05-24T21:29:51.743Z"
            },
                {
                    "id": 814,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "NCDE7D",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-07-12T08:10:00",
                                "to_date": "2017-07-19T10:50:00",
                                "emission_date": "2017-05-26T12:19:16",
                                "expiration_date": "2017-05-27T00:00:00",
                                "reservation_id": "5435c650-8a4b-4635-bf8b-8f448546bdf7"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-26T12:18:43",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "SUPERVIELLE"
                        },
                        "cart_id": "J35-TCV-5KQ"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-26T12:19:15.85Z"
                },
                {
                    "id": 834,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "PNR-JMETER-TEST",
                                "product": "FLIGHT",
                                "status": "MANUAL",
                                "refunds": [
                                    {
                                        "type": "CASH",
                                        "provider": "MERCADO_PAGO",
                                        "refund_date": "2017-11-03T19:34:20"
                                    }
                                ],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "MERCADO_PAGO",
                                        "payment_date": "2017-05-22T19:34:20"
                                    }
                                ],
                                "from_date": "2018-02-03T19:34:20",
                                "to_date": "2018-02-03T19:34:20",
                                "reservation_id": "RESERVATION-JMETER-TEST"
                            }
                        ],
                        "stage": "BSP",
                        "status": "MANUAL",
                        "creation_date": "2017-11-03T19:34:20",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "CART-JMETER-TEST"
                    },
                    "type": "AIR_TICKET_REFUND_MANUAL",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-26T14:09:27.058Z"
                },
                {
                    "id": 838,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "24K4US",
                                "product": "FLIGHT",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-03-20T12:10:00",
                                "to_date": "2016-03-24T02:48:00",
                                "expiration_date": "2015-12-30T11:39:00",
                                "reservation_id": "f67fc569-6c81-451c-af44-7acc2ac5fd44"
                            }
                        ],
                        "stage": "REFUND",
                        "status": "MANUAL",
                        "creation_date": "2015-12-28T18:20:22",
                        "source": {
                            "channel": "WEB",
                            "country": "MEX",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "IIQ-AHY-YPZ"
                    },
                    "type": "REFUND_COLLECTION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Snoozed",
                        "type": "SNOOZED",
                        "user_id": "218080",
                        "release_time": "2017-06-02T00:29:08"
                    },
                    "creation_date": "2017-05-26T15:43:51.98Z"
                },
                {
                    "id": 940,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "NCDFNI",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-09T07:25:00",
                                "to_date": "2017-06-09T08:45:00",
                                "emission_date": "2017-05-26T16:04:18",
                                "expiration_date": "2017-05-29T00:00:00",
                                "reservation_id": "48c0ce4c-a0ec-4850-bc09-986ede710b2b"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-26T16:03:47",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "SUPERVIELLE"
                        },
                        "cart_id": "J36-1EH-I0J"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-26T16:04:17.642Z"
                },
                {
                    "id": 944,
                    "cart": {
                        "reservations": [
                            {
                                "product": "HOTEL",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-09-05T00:00:00",
                                "to_date": "2017-09-12T00:00:00",
                                "reservation_id": "15f54903-8d16-4d07-893f-3a800cf39015"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-26T19:39:25",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J36-93R-WIL"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-26T19:39:30.62Z"
                },
                {
                    "id": 951,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "ALM123DEV",
                                "product": "HOTEL",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-07-12T00:00:00",
                                "to_date": "2017-07-18T00:00:00",
                                "reservation_id": "857c9529-c3cf-4007-85da-4a52ac77fcf0"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-29T15:56:28",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3A-BGT-UIK"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-29T15:56:30.199Z"
                },
                {
                    "id": 958,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "23IDOI",
                                "product": "FLIGHT",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-09T10:45:00",
                                "to_date": "2017-07-18T10:35:00",
                                "expiration_date": "2017-04-22T11:39:00",
                                "reservation_id": "51be6205-15f6-4cc3-a5fc-29cc3a0df29b"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-29T21:06:02",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J20-MGF-MG1"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-29T21:06:03.328Z"
                },
                {
                    "id": 959,
                    "cart": {
                        "reservations": [
                            {
                                "product": "HOTEL",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-10-09T00:00:00",
                                "to_date": "2017-10-16T00:00:00",
                                "reservation_id": "bf4ce33c-0feb-48e2-9124-4a2289249983"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-29T23:23:21",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3A-RFI-SVS"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-29T23:23:23.356Z"
                },
                {
                    "id": 962,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "23IDOI",
                                "product": "FLIGHT",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-09T10:45:00",
                                "to_date": "2017-07-18T10:35:00",
                                "expiration_date": "2017-04-22T11:39:00",
                                "reservation_id": "f7517d2b-dc3d-4e55-8be0-c8f2b59f8c6c"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-30T14:08:22",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J20-MGF-MG3"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T14:08:22.427Z"
                },
                {
                    "id": 965,
                    "cart": {
                        "reservations": [
                            {
                                "product": "HOTEL",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-11-13T00:00:00",
                                "to_date": "2017-11-20T00:00:00",
                                "reservation_id": "7f9b88b4-75ca-4380-a8f0-e46124a72e11"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-30T14:35:59",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3B-O16-KZT"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T14:36:01.033Z"
                },
                {
                    "id": 967,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "NCF2YA",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-08-22T07:05:00",
                                "to_date": "2017-08-27T10:25:00",
                                "expiration_date": "2017-05-31T00:00:00",
                                "reservation_id": "29f5cdb3-5bcc-4462-a5ab-078482e6bb6c"
                            }
                        ],
                        "stage": "PAYMENT",
                        "status": "ERROR",
                        "substatus": "TC_REJECTED",
                        "creation_date": "2017-05-30T15:56:16",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3B-QWB-GGY"
                    },
                    "type": "COLLECTION_RECOVERY",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T15:56:31.561Z"
                },
                {
                    "id": 984,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "258-468717",
                                "product": "HOTEL",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-01-27T00:00:00",
                                "to_date": "2017-01-28T00:00:00",
                                "reservation_id": "88f704d3-e2be-4bc4-a329-34d3aeb2dc86"
                            }
                        ],
                        "stage": "FRAUD",
                        "status": "MANUAL",
                        "creation_date": "2017-05-30T19:24:08",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-205"
                    },
                    "type": "FRAUD_REVISION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:24:07.659Z"
                },
                {
                    "id": 994,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T19:46:29",
                                "reservation_id": "5b023f64-3d28-4b1c-ac0d-da3e59058849"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T19:46:04",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-108"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:46:28.87Z"
                },
                {
                    "id": 999,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T19:50:45",
                                "reservation_id": "cf62cc51-970e-4957-95b7-5562308daecb"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T19:49:40",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-109"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:50:45.524Z"
                },
                {
                    "id": 1001,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T19:53:15",
                                "reservation_id": "2f1ca88d-7acf-4428-adad-2c8270f276dd"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T19:51:32",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-110"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:53:14.797Z"
                },
                {
                    "id": 1003,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "reservation_id": "4f76b4f8-84b0-4893-b1fd-09cca6078953"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "MANUAL",
                        "creation_date": "2017-05-30T19:57:08",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-111"
                    },
                    "type": "CANCELED_COLLECTION_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:57:08.363Z"
                },
                {
                    "id": 1006,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T19:58:30",
                                "reservation_id": "46cdaa4f-0594-4219-b4e9-f73cef73c798"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T19:57:55",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-112"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:58:29.788Z"
                },
                {
                    "id": 1017,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T20:31:11",
                                "reservation_id": "50443a2d-5bae-4b5e-adca-c9a902dd755d"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:29:32",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-216"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:31:11.401Z"
                },
                {
                    "id": 1019,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T20:34:08",
                                "reservation_id": "40c83002-fcc8-4c37-b8b9-994912ec59fc"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:32:35",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-217"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:34:07.974Z"
                },
                {
                    "id": 1020,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "reservation_id": "1d1fda9a-878c-40c5-8872-bdf9c7e2e537"
                            }
                        ],
                        "stage": "PAYMENT",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:35:59",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-218"
                    },
                    "type": "COLLECTION_RECOVERY",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:35:58.804Z"
                },
                {
                    "id": 1021,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "reservation_id": "533e3293-a7a2-41c9-905a-3d1a5c69b21d"
                            }
                        ],
                        "stage": "PAYMENT",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:38:14",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-219"
                    },
                    "type": "COLLECTION_RECOVERY",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:38:13.994Z"
                },
                {
                    "id": 1022,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "reservation_id": "a88a5a1d-fe0f-457a-a3e8-1594f663dea6"
                            }
                        ],
                        "stage": "PAYMENT",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:42:39",
                        "source": {
                            "channel": "CCR",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-220"
                    },
                    "type": "COLLECTION_RECOVERY",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:42:38.946Z"
                },
                {
                    "id": 1023,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "reservation_id": "3f489c2c-0e29-4d10-9a01-b1dadf6d338a"
                            }
                        ],
                        "stage": "PAYMENT",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:44:35",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-221"
                    },
                    "type": "COLLECTION_RECOVERY",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:44:34.864Z"
                },
                {
                    "id": 1029,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "cancel_date": "2017-05-30T20:57:18",
                                "reservation_id": "6dcdd210-caa1-4bf6-89ba-1b620fad9d1d"
                            }
                        ],
                        "stage": "CANCEL",
                        "status": "ERROR",
                        "creation_date": "2017-05-30T20:55:19",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-225"
                    },
                    "type": "CANCEL_PROVIDER_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T20:57:18.563Z"
                },
                {
                    "id": 1030,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5RDNBL",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2016-08-31T12:45:00",
                                "to_date": "2016-09-14T19:28:00",
                                "expiration_date": "2016-08-27T11:39:00",
                                "reservation_id": "7f238d3f-4036-40ba-a85d-95d90b22d9c2"
                            }
                        ],
                        "stage": "REFUND",
                        "status": "MANUAL",
                        "creation_date": "2017-05-30T21:17:08",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "AAA-BBB-226"
                    },
                    "type": "REFUND_COLLECTION",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T21:17:08.224Z"
                }
            ]};

               /* this.getTasks = ()=>{
                    return {"limit":10,
                        "_offset":Math.ceil(26/10),
                        "body": [{
                            "id": 810,
                            "cart": {
                                "reservations": [
                                    {
                                        "product": "HOTEL",
                                        "status": "ERROR",
                                        "refunds": [],
                                        "payments": [
                                            {
                                                "type": "CREDIT_CARD",
                                                "provider": "ALMUNDO"
                                            }
                                        ],
                                        "from_date": "2017-06-23T00:00:00",
                                        "to_date": "2017-06-24T00:00:00",
                                        "reservation_id": "b2bca45b-93c0-41d3-831e-017b95c87a05"
                                    }
                                ],
                                "stage": "PAYMENT",
                                "status": "ERROR",
                                "substatus": "TC_REJECTED",
                                "creation_date": "2017-05-24T21:29:48",
                                "source": {
                                    "channel": "WEB",
                                    "country": "MEX",
                                    "brand": "ALMUNDO"
                                },
                                "cart_id": "J33-I68-G4L"
                            },
                            "type": "COLLECTION_RECOVERY",
                            "state": {
                                "@class": "com.almundo.tasques.api.model.state.Available",
                                "type": "AVAILABLE"
                            },
                            "creation_date": "2017-05-24T21:29:51.743Z"
                        },
                            {
                                "id": 814,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "NCDE7D",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "REWARDS",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-07-12T08:10:00",
                                            "to_date": "2017-07-19T10:50:00",
                                            "emission_date": "2017-05-26T12:19:16",
                                            "expiration_date": "2017-05-27T00:00:00",
                                            "reservation_id": "5435c650-8a4b-4635-bf8b-8f448546bdf7"
                                        }
                                    ],
                                    "stage": "INVOICE",
                                    "status": "PENDING",
                                    "creation_date": "2017-05-26T12:18:43",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "SUPERVIELLE"
                                    },
                                    "cart_id": "J35-TCV-5KQ"
                                },
                                "type": "INVOICE_PENDING",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-26T12:19:15.85Z"
                            },
                            {
                                "id": 834,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "PNR-JMETER-TEST",
                                            "product": "FLIGHT",
                                            "status": "MANUAL",
                                            "refunds": [
                                                {
                                                    "type": "CASH",
                                                    "provider": "MERCADO_PAGO",
                                                    "refund_date": "2017-11-03T19:34:20"
                                                }
                                            ],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "MERCADO_PAGO",
                                                    "payment_date": "2017-05-22T19:34:20"
                                                }
                                            ],
                                            "from_date": "2018-02-03T19:34:20",
                                            "to_date": "2018-02-03T19:34:20",
                                            "reservation_id": "RESERVATION-JMETER-TEST"
                                        }
                                    ],
                                    "stage": "BSP",
                                    "status": "MANUAL",
                                    "creation_date": "2017-11-03T19:34:20",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "CART-JMETER-TEST"
                                },
                                "type": "AIR_TICKET_REFUND_MANUAL",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-26T14:09:27.058Z"
                            },
                            {
                                "id": 838,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "24K4US",
                                            "product": "FLIGHT",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-03-20T12:10:00",
                                            "to_date": "2016-03-24T02:48:00",
                                            "expiration_date": "2015-12-30T11:39:00",
                                            "reservation_id": "f67fc569-6c81-451c-af44-7acc2ac5fd44"
                                        }
                                    ],
                                    "stage": "REFUND",
                                    "status": "MANUAL",
                                    "creation_date": "2015-12-28T18:20:22",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "MEX",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "IIQ-AHY-YPZ"
                                },
                                "type": "REFUND_COLLECTION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Snoozed",
                                    "type": "SNOOZED",
                                    "user_id": "218080",
                                    "release_time": "2017-06-02T00:29:08"
                                },
                                "creation_date": "2017-05-26T15:43:51.98Z"
                            },
                            {
                                "id": 940,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "NCDFNI",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "REWARDS",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-06-09T07:25:00",
                                            "to_date": "2017-06-09T08:45:00",
                                            "emission_date": "2017-05-26T16:04:18",
                                            "expiration_date": "2017-05-29T00:00:00",
                                            "reservation_id": "48c0ce4c-a0ec-4850-bc09-986ede710b2b"
                                        }
                                    ],
                                    "stage": "INVOICE",
                                    "status": "PENDING",
                                    "creation_date": "2017-05-26T16:03:47",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "SUPERVIELLE"
                                    },
                                    "cart_id": "J36-1EH-I0J"
                                },
                                "type": "INVOICE_PENDING",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-26T16:04:17.642Z"
                            },
                            {
                                "id": 944,
                                "cart": {
                                    "reservations": [
                                        {
                                            "product": "HOTEL",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-09-05T00:00:00",
                                            "to_date": "2017-09-12T00:00:00",
                                            "reservation_id": "15f54903-8d16-4d07-893f-3a800cf39015"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-26T19:39:25",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J36-93R-WIL"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-26T19:39:30.62Z"
                            },
                            {
                                "id": 951,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "ALM123DEV",
                                            "product": "HOTEL",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-07-12T00:00:00",
                                            "to_date": "2017-07-18T00:00:00",
                                            "reservation_id": "857c9529-c3cf-4007-85da-4a52ac77fcf0"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-29T15:56:28",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J3A-BGT-UIK"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-29T15:56:30.199Z"
                            },
                            {
                                "id": 958,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "23IDOI",
                                            "product": "FLIGHT",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                },
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-06-09T10:45:00",
                                            "to_date": "2017-07-18T10:35:00",
                                            "expiration_date": "2017-04-22T11:39:00",
                                            "reservation_id": "51be6205-15f6-4cc3-a5fc-29cc3a0df29b"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-29T21:06:02",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J20-MGF-MG1"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-29T21:06:03.328Z"
                            },
                            {
                                "id": 959,
                                "cart": {
                                    "reservations": [
                                        {
                                            "product": "HOTEL",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                },
                                                {
                                                    "type": "REWARDS",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-10-09T00:00:00",
                                            "to_date": "2017-10-16T00:00:00",
                                            "reservation_id": "bf4ce33c-0feb-48e2-9124-4a2289249983"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-29T23:23:21",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J3A-RFI-SVS"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-29T23:23:23.356Z"
                            },
                            {
                                "id": 962,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "23IDOI",
                                            "product": "FLIGHT",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                },
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-06-09T10:45:00",
                                            "to_date": "2017-07-18T10:35:00",
                                            "expiration_date": "2017-04-22T11:39:00",
                                            "reservation_id": "f7517d2b-dc3d-4e55-8be0-c8f2b59f8c6c"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-30T14:08:22",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J20-MGF-MG3"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T14:08:22.427Z"
                            },
                            {
                                "id": 965,
                                "cart": {
                                    "reservations": [
                                        {
                                            "product": "HOTEL",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-11-13T00:00:00",
                                            "to_date": "2017-11-20T00:00:00",
                                            "reservation_id": "7f9b88b4-75ca-4380-a8f0-e46124a72e11"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-30T14:35:59",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J3B-O16-KZT"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T14:36:01.033Z"
                            },
                            {
                                "id": 967,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "NCF2YA",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                },
                                                {
                                                    "type": "REWARDS",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-08-22T07:05:00",
                                            "to_date": "2017-08-27T10:25:00",
                                            "expiration_date": "2017-05-31T00:00:00",
                                            "reservation_id": "29f5cdb3-5bcc-4462-a5ab-078482e6bb6c"
                                        }
                                    ],
                                    "stage": "PAYMENT",
                                    "status": "ERROR",
                                    "substatus": "TC_REJECTED",
                                    "creation_date": "2017-05-30T15:56:16",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "J3B-QWB-GGY"
                                },
                                "type": "COLLECTION_RECOVERY",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T15:56:31.561Z"
                            },
                            {
                                "id": 984,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "258-468717",
                                            "product": "HOTEL",
                                            "status": "MANUAL",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2017-01-27T00:00:00",
                                            "to_date": "2017-01-28T00:00:00",
                                            "reservation_id": "88f704d3-e2be-4bc4-a329-34d3aeb2dc86"
                                        }
                                    ],
                                    "stage": "FRAUD",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-30T19:24:08",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-205"
                                },
                                "type": "FRAUD_REVISION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T19:24:07.659Z"
                            },
                            {
                                "id": 994,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T19:46:29",
                                            "reservation_id": "5b023f64-3d28-4b1c-ac0d-da3e59058849"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T19:46:04",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-108"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T19:46:28.87Z"
                            },
                            {
                                "id": 999,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T19:50:45",
                                            "reservation_id": "cf62cc51-970e-4957-95b7-5562308daecb"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T19:49:40",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-109"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T19:50:45.524Z"
                            },
                            {
                                "id": 1001,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T19:53:15",
                                            "reservation_id": "2f1ca88d-7acf-4428-adad-2c8270f276dd"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T19:51:32",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-110"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T19:53:14.797Z"
                            },
                            {
                                "id": 1003,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "reservation_id": "4f76b4f8-84b0-4893-b1fd-09cca6078953"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-30T19:57:08",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-111"
                                },
                                "type": "CANCELED_COLLECTION_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T19:57:08.363Z"
                            },
                            {
                                "id": 1006,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T19:58:30",
                                            "reservation_id": "46cdaa4f-0594-4219-b4e9-f73cef73c798"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T19:57:55",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-112"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T19:58:29.788Z"
                            },
                            {
                                "id": 1017,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T20:31:11",
                                            "reservation_id": "50443a2d-5bae-4b5e-adca-c9a902dd755d"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:29:32",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-216"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:31:11.401Z"
                            },
                            {
                                "id": 1019,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T20:34:08",
                                            "reservation_id": "40c83002-fcc8-4c37-b8b9-994912ec59fc"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:32:35",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-217"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:34:07.974Z"
                            },
                            {
                                "id": 1020,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "reservation_id": "1d1fda9a-878c-40c5-8872-bdf9c7e2e537"
                                        }
                                    ],
                                    "stage": "PAYMENT",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:35:59",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-218"
                                },
                                "type": "COLLECTION_RECOVERY",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:35:58.804Z"
                            },
                            {
                                "id": 1021,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "reservation_id": "533e3293-a7a2-41c9-905a-3d1a5c69b21d"
                                        }
                                    ],
                                    "stage": "PAYMENT",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:38:14",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-219"
                                },
                                "type": "COLLECTION_RECOVERY",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:38:13.994Z"
                            },
                            {
                                "id": 1022,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "reservation_id": "a88a5a1d-fe0f-457a-a3e8-1594f663dea6"
                                        }
                                    ],
                                    "stage": "PAYMENT",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:42:39",
                                    "source": {
                                        "channel": "CCR",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-220"
                                },
                                "type": "COLLECTION_RECOVERY",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:42:38.946Z"
                            },
                            {
                                "id": 1023,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "reservation_id": "3f489c2c-0e29-4d10-9a01-b1dadf6d338a"
                                        }
                                    ],
                                    "stage": "PAYMENT",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:44:35",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-221"
                                },
                                "type": "COLLECTION_RECOVERY",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:44:34.864Z"
                            },
                            {
                                "id": 1029,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "ERROR",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "cancel_date": "2017-05-30T20:57:18",
                                            "reservation_id": "6dcdd210-caa1-4bf6-89ba-1b620fad9d1d"
                                        }
                                    ],
                                    "stage": "CANCEL",
                                    "status": "ERROR",
                                    "creation_date": "2017-05-30T20:55:19",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-225"
                                },
                                "type": "CANCEL_PROVIDER_FLIGHT",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T20:57:18.563Z"
                            },
                            {
                                "id": 1030,
                                "cart": {
                                    "reservations": [
                                        {
                                            "pnr": "5RDNBL",
                                            "product": "FLIGHT",
                                            "status": "OK",
                                            "refunds": [],
                                            "payments": [
                                                {
                                                    "type": "CREDIT_CARD",
                                                    "provider": "ALMUNDO"
                                                }
                                            ],
                                            "from_date": "2016-08-31T12:45:00",
                                            "to_date": "2016-09-14T19:28:00",
                                            "expiration_date": "2016-08-27T11:39:00",
                                            "reservation_id": "7f238d3f-4036-40ba-a85d-95d90b22d9c2"
                                        }
                                    ],
                                    "stage": "REFUND",
                                    "status": "MANUAL",
                                    "creation_date": "2017-05-30T21:17:08",
                                    "source": {
                                        "channel": "WEB",
                                        "country": "ARG",
                                        "brand": "ALMUNDO"
                                    },
                                    "cart_id": "AAA-BBB-226"
                                },
                                "type": "REFUND_COLLECTION",
                                "state": {
                                    "@class": "com.almundo.tasques.api.model.state.Available",
                                    "type": "AVAILABLE"
                                },
                                "creation_date": "2017-05-30T21:17:08.224Z"
                            }
                        ]};
                };*/
               //getTasks

                return new Promise((fulfill,reject)=>{
                    fulfill(self.responsePaginated());
                 })
    }

   /* static Reserve(reserve){

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

    }*/
}

module.exports = workService;
