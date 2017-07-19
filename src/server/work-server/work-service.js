'use strict';

const request = require('request');


class workService {


    static pagination(){
        return {
            "limit":10,
            "currentPage":1};
    };

    static tasks() {
        let tasks = {
            "body": [{
                "id": 40343,
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
                            "from_date": "2017-07-29T00:00:00",
                            "to_date": "2017-08-08T00:00:00",
                            "refundable": false,
                            "reservation_id": "a087b12d-348f-44ce-855d-ace26444aa8e"
                        },
                        {
                            "pnr": "Q57GLO",
                            "product": "FLIGHT",
                            "status": "ERROR",
                            "refunds": [],
                            "payments": [
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                },
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                },
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                },
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                },
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                }
                            ],
                            "from_date": "2017-07-28T12:45:00",
                            "to_date": "2017-08-09T11:05:00",
                            "expiration_date": "2017-07-04T09:02:00",
                            "validating_carrier": "LA",
                            "reservation_id": "a667e7f3-3484-4ac8-add1-668224d36b84"
                        },
                        {
                            "pnr": "ARG|1317380|4|13|2017-07-28|2017-08-09",
                            "product": "TRAVEL_ASSISTANCE",
                            "status": "ERROR",
                            "refunds": [],
                            "payments": [
                                {
                                    "type": "CREDIT_CARD",
                                    "provider": "ALMUNDO"
                                }
                            ],
                            "from_date": "2017-07-28T00:00:00",
                            "to_date": "2017-08-09T00:00:00",
                            "reservation_id": "801ff396-0256-4a39-9f95-6cd8d544a4a5"
                        }
                    ],
                    "stage": "PAYMENT",
                    "status": "ERROR",
                    "substatus": "TC_REJECTED",
                    "creation_date": "2017-07-03T12:03:22",
                    "source": {
                        "channel": "WEB",
                        "country": "ARG",
                        "brand": "ALMUNDO"
                    },
                    "cart_id": "J4O-3J3-KZZ"
                },
                "type": "COLLECTION_RECOVERY_CC_REJECTED",
                "state": {
                    "@class": "com.almundo.tasques.api.model.state.Snoozed",
                    "type": "SNOOZED",
                    "user_id": "218080",
                    "release_time": "2017-07-04T17:51:00"
                },
                "creation_date": "2017-07-03T12:03:36.137Z"
            },{
                "id": 15,
                "cart": {
                    "reservations": [
                        {
                            "pnr": "77-764535",
                            "product": "HOTEL",
                            "status": "OK",
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
                            "from_date": "2017-09-09T00:00:00",
                            "to_date": "2017-09-10T00:00:00",
                            "reservation_id": "67d3ee01-30fa-4422-8f9d-ce8973f79019"
                        }
                    ],
                    "stage": "INVOICE",
                    "status": "PENDING",
                    "creation_date": "2017-05-02T20:04:12",
                    "source": {
                        "channel": "WEB",
                        "country": "ARG",
                        "brand": "PATAGONIA"
                    },
                    "cart_id": "J27-ZFC-Z1K"
                },
                "type": "INVOICE_PENDING",
                "state": {
                    "@class": "com.almundo.tasques.api.model.state.Available",
                    "type": "AVAILABLE"
                },
                "creation_date": "2017-05-02T20:04:30.962Z"
            },
                {
                    "id": 553,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "JXVMVZ",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-26T13:45:00",
                                "to_date": "2017-06-01T16:00:00",
                                "emission_date": "2017-05-03T14:05:54",
                                "expiration_date": "2017-05-05T11:39:00",
                                "reservation_id": "23a362d4-3034-411b-99db-1528a11b9f36"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-03T14:05:37",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J29-220-C4W"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-03T14:05:53.718Z"
                },
                {
                    "id": 694,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "4POBMC",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-14T20:00:00",
                                "to_date": "2017-05-16T14:15:00",
                                "emission_date": "2017-05-03T16:26:25",
                                "expiration_date": "2017-05-04T00:00:00",
                                "reservation_id": "8e26afd1-7f9f-4eec-9cb3-10b0aab58263"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-03T16:26:09",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J29-72S-9WI"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-03T16:26:25.561Z"
                },
                {
                    "id": 1099,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "KMJFT6",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-06T08:50:00",
                                "to_date": "2017-06-11T10:05:00",
                                "emission_date": "2017-05-03T22:21:58",
                                "expiration_date": "2017-05-05T11:39:00",
                                "reservation_id": "05ba8ab0-ef3e-49e4-ba5a-3a0381fc25a5"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-03T22:21:21",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J29-JRJ-SMZ"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-03T22:21:57.773Z"
                },
                {
                    "id": 2014,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "251-215947",
                                "product": "HOTEL",
                                "status": "OK",
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
                                "from_date": "2017-07-17T00:00:00",
                                "to_date": "2017-07-26T00:00:00",
                                "reservation_id": "eba0e3b3-6c6f-42dc-893a-e9315b45b527"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-04T21:59:40",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2A-YFL-W3Q"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-04T22:00:00.723Z"
                },
                {
                    "id": 2462,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "CPRHWF",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-07T09:05:00",
                                "to_date": "2017-05-11T14:29:00",
                                "emission_date": "2017-05-05T16:13:52",
                                "expiration_date": "2017-05-05T23:59:00",
                                "reservation_id": "4929d46e-74d4-4e8a-b5bf-93399f4aa188"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-05T16:13:19",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-1HU-LXY"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-05T16:13:52.454Z"
                },
                {
                    "id": 2497,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "O736AM",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-23T17:50:00",
                                "to_date": "2017-07-08T11:20:00",
                                "emission_date": "2017-05-05T16:55:41",
                                "expiration_date": "2017-05-08T04:26:00",
                                "reservation_id": "ae80db78-68a3-4650-939b-82ae70162e15"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-05T16:26:12",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-1YI-9FM"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-05T16:55:41.082Z"
                },
                {
                    "id": 2540,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "O9JT48",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-09T08:30:00",
                                "to_date": "2017-05-09T10:05:00",
                                "emission_date": "2017-05-05T17:42:12",
                                "expiration_date": "2017-05-07T11:39:00",
                                "reservation_id": "f603acc9-da77-4cf9-880a-3d9796cb1fe4"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-05T17:20:07",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-3VU-YXS"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-05T17:42:11.833Z"
                },
                {
                    "id": 2546,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "OB98PG",
                                "product": "FLIGHT",
                                "status": "OK",
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
                                "from_date": "2017-05-09T10:50:00",
                                "to_date": "2017-05-17T15:05:00",
                                "emission_date": "2017-05-05T17:55:49",
                                "expiration_date": "2017-05-07T11:39:00",
                                "reservation_id": "f08e632f-d209-4b84-9af2-992b743cd4e5"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-05T17:55:14",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-54Z-07M"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-05T17:55:48.974Z"
                },
                {
                    "id": 2559,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "B28DQNCFU78L",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-08T00:00:00",
                                "to_date": "2017-05-09T00:00:00",
                                "reservation_id": "66264562-9ab4-43fa-8d96-bfd7d00a37d9"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-05T18:09:48",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-5NU-JSO"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-05T18:10:32.301Z"
                },
                {
                    "id": 2722,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "GQCUBK",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-08-10T20:50:00",
                                "to_date": "2017-08-13T23:45:00",
                                "emission_date": "2017-05-05T20:42:58",
                                "expiration_date": "2017-05-06T23:59:00",
                                "reservation_id": "bd8a02bb-cdb4-4746-904e-a803de564eb8"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-05T20:42:41",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-B4A-NFI"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-05T20:42:57.68Z"
                },
                {
                    "id": 3013,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "NMLOUO",
                                "product": "FLIGHT",
                                "status": "OK",
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
                                "from_date": "2017-10-28T08:30:00",
                                "to_date": "2017-11-01T13:50:00",
                                "emission_date": "2017-05-06T02:03:11",
                                "expiration_date": "2017-05-06T23:59:00",
                                "reservation_id": "3727a638-d9f9-46ff-9c75-18144026cbd4"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-06T02:02:38",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2C-MJQ-N6D"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-06T02:03:11.331Z"
                },
                {
                    "id": 4378,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "77-766186",
                                "product": "HOTEL",
                                "status": "OK",
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
                                "from_date": "2018-01-19T00:00:00",
                                "to_date": "2018-01-24T00:00:00",
                                "reservation_id": "165e9d8b-ab6f-4930-9069-8ddf152408f3"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-08T03:25:49",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2F-KEL-57T"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-08T03:26:12.512Z"
                },
                {
                    "id": 5274,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "UHEQL9",
                                "product": "FLIGHT",
                                "status": "OK",
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
                                "from_date": "2017-06-16T14:55:00",
                                "to_date": "2017-06-20T15:25:00",
                                "emission_date": "2017-05-08T19:09:51",
                                "expiration_date": "2017-05-10T11:39:00",
                                "reservation_id": "8196b4cb-8845-4b54-9661-fdab347dd1bc"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-08T19:09:15",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2G-I3Q-QDP"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-09T13:38:21.05Z"
                },
                {
                    "id": 5366,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "NYCXCL",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-07-17T00:00:00",
                                "to_date": "2017-07-26T00:00:00",
                                "reservation_id": "1c65f840-c8f5-4172-b050-482908b5ef88"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-06T20:10:51",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2D-PFB-EZB"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-09T15:11:27.599Z"
                },
                {
                    "id": 5799,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "2TPMWG",
                                "product": "HOTEL",
                                "status": "OK",
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
                                "from_date": "2017-10-01T00:00:00",
                                "to_date": "2017-10-02T00:00:00",
                                "reservation_id": "f9f73aa5-247d-4d29-85ea-c996e9a22c11"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-07T18:11:16",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2F-0LF-VAX"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-09T22:52:24.672Z"
                },
                {
                    "id": 6412,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "KPL9N6",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-19T14:15:00",
                                "to_date": "2017-05-19T16:14:00",
                                "emission_date": "2017-05-10T21:24:54",
                                "expiration_date": "2017-05-12T11:39:00",
                                "reservation_id": "bfa006d7-f199-4b54-8717-5bd01f8d0a87"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-10T21:24:37",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2J-HTJ-4WM"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-10T21:24:53.857Z"
                },
                {
                    "id": 7411,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "N5K5BU",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-08T08:35:00",
                                "to_date": "2017-06-14T20:35:00",
                                "emission_date": "2017-05-12T02:44:42",
                                "expiration_date": "2017-05-13T11:39:00",
                                "reservation_id": "4aa09ae7-c85e-4405-8263-db3c1ea04a60"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-12T01:55:09",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2L-6X8-6GD"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-12T02:44:42.252Z"
                },
                {
                    "id": 7864,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "284627638",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-09-23T00:00:00",
                                "to_date": "2017-09-24T00:00:00",
                                "reservation_id": "6482749b-73ab-4615-83a5-1941622ef867"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-12T21:04:50",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2M-BZW-C7P"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-12T21:05:13.147Z"
                },
                {
                    "id": 8187,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "284639601",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-23T00:00:00",
                                "to_date": "2017-05-25T00:00:00",
                                "reservation_id": "17a7f37f-e89e-456b-9347-4cdc118516d2"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-13T02:47:32",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2M-O8M-4SQ"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-13T02:47:54.272Z"
                },
                {
                    "id": 8845,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "R47DRG",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-28T07:50:00",
                                "to_date": "2017-06-01T06:45:00",
                                "emission_date": "2017-05-14T01:01:44",
                                "expiration_date": "2017-05-15T11:39:00",
                                "reservation_id": "08c69809-fd10-4380-b085-7868f14bc0cb"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-14T01:01:25",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2N-ZVU-U7T"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-14T01:01:43.718Z"
                },
                {
                    "id": 9005,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "SBRLH9",
                                "product": "FLIGHT",
                                "status": "OK",
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
                                "from_date": "2017-05-16T07:00:00",
                                "to_date": "2017-05-16T08:15:00",
                                "emission_date": "2017-05-14T15:34:37",
                                "expiration_date": "2017-05-16T04:00:00",
                                "reservation_id": "66761e3b-ac5d-4a24-a811-dc7d3cd77630"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-14T15:34:03",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2O-V23-6WW"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-14T15:34:36.821Z"
                },
                {
                    "id": 9167,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "EE27XK",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CASH",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2018-03-26T11:05:00",
                                "to_date": "2018-04-02T21:50:00",
                                "reservation_id": "1bdb0caa-4672-485f-93b8-9e686170798a"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-14T18:24:50",
                        "source": {
                            "channel": "RETAIL",
                            "country": "MEX",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J2P-15U-UQE"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-14T18:34:43.947Z"
                },
                {
                    "id": 9506,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "297-132194",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-12T00:00:00",
                                "to_date": "2017-06-14T00:00:00",
                                "reservation_id": "8be986d4-1b84-4883-9612-75e0b21a76b9"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-14T23:59:07",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2P-D3Q-MYN"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-14T23:59:28.295Z"
                },
                {
                    "id": 9630,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5PNM6J",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-20T00:00:00",
                                "to_date": "2017-06-22T00:00:00",
                                "reservation_id": "dfabebdb-067c-499f-b283-9144d0b70028"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-15T02:22:20",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2P-I7X-AMU"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-15T02:22:23.072Z"
                },
                {
                    "id": 10172,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "U5VYO3",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-08-01T08:30:00",
                                "to_date": "2017-08-07T19:30:00",
                                "emission_date": "2017-05-15T13:28:03",
                                "expiration_date": "2017-05-18T01:17:00",
                                "reservation_id": "3df52e0f-1561-4500-86bf-e1914bb546e7"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-15T13:17:28",
                        "source": {
                            "channel": "CCR",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J2Q-5M8-TUB"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-15T13:28:02.787Z"
                },
                {
                    "id": 10201,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "PJDZ1D",
                                "product": "HOTEL",
                                "status": "OK",
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
                                "from_date": "2017-07-20T00:00:00",
                                "to_date": "2017-07-25T00:00:00",
                                "reservation_id": "d5c40790-1ed7-45fa-a8cd-9fadd79d92c1"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-15T13:37:22",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J2Q-6BY-Q7H"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-15T13:37:41.375Z"
                },
                {
                    "id": 16055,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "JAKA4H",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-25T09:00:00",
                                "to_date": "2017-05-29T08:15:00",
                                "emission_date": "2017-05-17T22:49:52",
                                "expiration_date": "2017-05-19T11:39:00",
                                "reservation_id": "1bedc1b0-6a31-4203-9a87-90147962af31"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-17T02:23:11",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J2S-D4L-EUH"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-17T22:49:51.942Z"
                },
                {
                    "id": 17874,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "22264279 / QLDF289564 - 010/22264279",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-22T00:00:00",
                                "to_date": "2017-05-24T00:00:00",
                                "reservation_id": "e9409808-29c5-4ea4-80d7-8bce0090f538"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-19T01:18:13",
                        "source": {
                            "channel": "MOBILE",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J2V-5OV-SKF"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-19T01:26:17.089Z"
                },
                {
                    "id": 21725,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "ABH24H",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2018-01-04T09:20:00",
                                "to_date": "2018-01-11T14:15:00",
                                "reservation_id": "207a1c20-eaa9-4fe1-924e-a5af532b03dd"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-20T01:36:13",
                        "source": {
                            "channel": "WEB",
                            "country": "COL",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J2W-LRU-VMK"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-23T17:40:01.314Z"
                },
                {
                    "id": 22618,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "KRFEEG",
                                "product": "FLIGHT",
                                "status": "OK",
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
                                "from_date": "2017-07-18T14:05:00",
                                "to_date": "2017-07-21T17:35:00",
                                "emission_date": "2017-05-24T19:51:31",
                                "expiration_date": "2017-05-25T23:59:00",
                                "reservation_id": "9a999e0f-d5c8-4345-93ab-63ad2bdcc430"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-24T13:13:49",
                        "source": {
                            "channel": "CCR",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J33-0G8-5HP"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-24T19:51:30.798Z"
                },
                {
                    "id": 23554,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "Q8H37L",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-02T00:00:00",
                                "to_date": "2017-06-04T00:00:00",
                                "reservation_id": "16895925-21ec-4cd2-b3be-b31aa253038c"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-25T22:52:50",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J35-0KT-8RJ"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-25T22:52:50.281Z"
                },
                {
                    "id": 23577,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "N6J5WT",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "TODO_PAGO"
                                    }
                                ],
                                "from_date": "2017-11-19T09:00:00",
                                "to_date": "2017-11-19T10:30:00",
                                "emission_date": "2017-05-25T23:18:41",
                                "expiration_date": "2017-05-28T11:18:00",
                                "reservation_id": "e5f1481d-c742-493d-94c4-fbb9bd5669d4"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-25T23:18:21",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J35-1HG-5VC"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-25T23:18:41.413Z"
                },
                {
                    "id": 23722,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "ZHPYS9",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-07-04T00:00:00",
                                "to_date": "2017-07-08T00:00:00",
                                "reservation_id": "0fd05c01-6cad-4159-8670-9ce9858aa87f"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-26T02:02:10",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J35-7CC-H4M"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-26T02:02:11.297Z"
                },
                {
                    "id": 24400,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "120140320",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-07-28T00:00:00",
                                "to_date": "2017-07-31T00:00:00",
                                "reservation_id": "939cdb88-0860-4747-9b1f-32d9aec0a141"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-27T00:17:08",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J36-J0Z-CTP"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-27T00:17:07.889Z"
                },
                {
                    "id": 24496,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "PIQ6X9",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2018-03-24T12:05:00",
                                "to_date": "2018-04-08T00:20:00",
                                "emission_date": "2017-05-27T03:13:57",
                                "expiration_date": "2017-05-30T03:13:00",
                                "reservation_id": "47b3a2d5-44ff-4409-916e-b466b7baa956"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-27T03:13:10",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J36-PBC-Q1R"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-27T03:13:57.238Z"
                },
                {
                    "id": 25999,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "UZ4THK",
                                "product": "FLIGHT",
                                "status": "OK",
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
                                "from_date": "2017-08-30T20:45:00",
                                "to_date": "2017-09-04T20:25:00",
                                "emission_date": "2017-05-29T20:12:15",
                                "expiration_date": "2017-05-31T11:39:00",
                                "reservation_id": "78ba23d4-47cf-4ad4-aae5-9ba606587ea2"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-29T20:11:35",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3A-KKO-M6C"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-29T20:12:14.754Z"
                },
                {
                    "id": 26484,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "3NRYX3",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "refund_date": "2017-05-29T19:49:44"
                                    }
                                ],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-06-02T00:00:00",
                                "to_date": "2017-06-07T00:00:00",
                                "reservation_id": "66df2c27-80f9-4afd-b7c0-9ae185682ac8"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-23T22:51:21",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J32-5N4-B1L"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T12:52:39.87Z"
                },
                {
                    "id": 26793,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "1XC3S4",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    },
                                    {
                                        "type": "TRANSFER",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-05-24T00:00:00",
                                "to_date": "2017-05-25T00:00:00",
                                "reservation_id": "67e9c8db-2e14-440a-915b-c28e332337b7"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-22T20:55:15",
                        "source": {
                            "channel": "CCR",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J30-M24-17Y"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T19:31:03.494Z"
                },
                {
                    "id": 26886,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "235-3962305",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-09-25T00:00:00",
                                "to_date": "2017-09-28T00:00:00",
                                "reservation_id": "ebcfc01f-7427-43ed-a41a-39033e362f98"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-05-30T21:19:20",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3C-2FU-MKT"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-05-30T21:19:20.548Z"
                },
                {
                    "id": 28072,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "285728327",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO"
                                    }
                                ],
                                "from_date": "2017-07-23T00:00:00",
                                "to_date": "2017-07-30T00:00:00",
                                "reservation_id": "86b3c756-9659-4224-962c-5b02d54e56dc"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-01T12:43:34",
                        "source": {
                            "channel": "CCR",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3E-EW8-L1A"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-01T13:45:03.385Z"
                },
                {
                    "id": 28122,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "1JV33X",
                                "product": "HOTEL",
                                "status": "OK",
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
                                "from_date": "2017-06-08T00:00:00",
                                "to_date": "2017-06-11T00:00:00",
                                "reservation_id": "d5a5c8f2-0f12-438b-b6b5-48e2aae48748"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-01T15:05:31",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3E-JYU-IXB"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-01T15:05:51.145Z"
                },
                {
                    "id": 28163,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "ML8W3A",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-01T15:53:25"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-01T15:53:04"
                                    }
                                ],
                                "from_date": "2017-06-05T23:25:00",
                                "to_date": "2017-06-07T20:50:00",
                                "emission_date": "2017-06-01T15:55:16",
                                "expiration_date": "2017-06-04T02:26:00",
                                "reservation_id": "33bc17b8-9a32-4ee7-9649-22afc8e69241"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-01T14:26:02",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3E-IJX-PGG"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-01T15:55:15.769Z"
                },
                {
                    "id": 31596,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "5935bed9e4b0636886b9628e",
                                "product": "TRAVEL_ASSISTANCE",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "TODO_PAGO",
                                        "payment_date": "2017-06-05T20:27:53"
                                    }
                                ],
                                "from_date": "2017-08-26T00:00:00",
                                "to_date": "2017-09-02T00:00:00",
                                "reservation_id": "ed004388-b39e-4d2f-93fc-5c8ce788577c"
                            },
                            {
                                "pnr": "V89TSU",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "TODO_PAGO",
                                        "payment_date": "2017-06-05T20:27:53"
                                    }
                                ],
                                "from_date": "2017-08-26T12:35:00",
                                "to_date": "2017-09-03T00:50:00",
                                "emission_date": "2017-06-05T20:28:43",
                                "expiration_date": "2017-06-08T08:27:00",
                                "reservation_id": "a45ee379-89ec-4e10-b5b3-ad2b84bfae77"
                            },
                            {
                                "pnr": "121050467",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "TODO_PAGO",
                                        "payment_date": "2017-06-05T20:27:53"
                                    }
                                ],
                                "from_date": "2017-08-26T00:00:00",
                                "to_date": "2017-09-02T00:00:00",
                                "reservation_id": "07ba6005-6b1d-49e1-8bb0-e2b68daa09db"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-05T20:28:21",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3K-L8U-RNU"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T20:28:42.877Z"
                },
                {
                    "id": 31597,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "V85RM5",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T20:28:29"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T20:28:51"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T20:28:29"
                                    }
                                ],
                                "from_date": "2017-07-21T09:10:00",
                                "to_date": "2017-07-30T11:00:00",
                                "emission_date": "2017-06-05T20:29:12",
                                "expiration_date": "2017-06-07T11:39:00",
                                "reservation_id": "64e59b09-cb78-464f-b8d7-c7d7305cae6d"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-05T20:27:58",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3K-L8R-PEE"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T20:29:12.299Z"
                },
                {
                    "id": 31598,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "V6FXOI",
                                "product": "CAR",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T19:51:26"
                                    }
                                ],
                                "from_date": "2017-06-09T12:00:00",
                                "to_date": "2017-06-11T08:00:00",
                                "emission_date": "2017-06-05T19:51:29",
                                "expiration_date": "2017-06-11T00:00:00",
                                "reservation_id": "b3678e02-c596-4c48-b97c-e8c74d1eda68"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-05T19:51:05",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3K-JXF-Y9E"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T20:29:15.889Z"
                },
                {
                    "id": 31599,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "V5RL2Z",
                                "product": "CAR",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T19:39:48"
                                    }
                                ],
                                "from_date": "2017-06-13T11:00:00",
                                "to_date": "2017-06-18T16:00:00",
                                "emission_date": "2017-06-05T19:39:51",
                                "expiration_date": "2017-06-18T00:00:00",
                                "reservation_id": "1ffc201f-a79c-4529-931c-27dbfe3a3fd2"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-05T19:39:26",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3K-JIG-BEA"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T20:29:29.75Z"
                },
                {
                    "id": 31600,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "R79ZE9",
                                "product": "CAR",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CASH",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T19:42:19"
                                    }
                                ],
                                "from_date": "2017-09-16T11:00:00",
                                "to_date": "2017-09-23T10:00:00",
                                "emission_date": "2017-06-05T19:42:37",
                                "expiration_date": "2017-09-23T00:00:00",
                                "reservation_id": "3afa47a4-1843-4ec3-9632-84b641fd2e0c"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-03T20:53:15",
                        "source": {
                            "channel": "RETAIL",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3H-R9O-1ME"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T20:29:54.25Z"
                },
                {
                    "id": 31602,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "34HJNH",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T20:35:14"
                                    }
                                ],
                                "from_date": "2017-06-10T00:00:00",
                                "to_date": "2017-06-11T00:00:00",
                                "reservation_id": "92669e7c-8501-418c-8f18-810bc82d3652"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-05T20:35:14",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3K-LIA-ISX"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T20:35:17.743Z"
                },
                {
                    "id": 31817,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "WWV2Q6",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-05T23:51:40"
                                    }
                                ],
                                "from_date": "2017-12-22T00:00:00",
                                "to_date": "2017-12-27T00:00:00",
                                "reservation_id": "654ec372-1f8b-4986-a05a-9f8861297f8c"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-05T23:51:40",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3K-SIW-G6K"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-05T23:51:47.908Z"
                },
                {
                    "id": 31995,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "O8SC79",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-06T01:51:46"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-06T02:20:52"
                                    }
                                ],
                                "from_date": "2017-10-28T08:15:00",
                                "to_date": "2017-11-06T21:25:00",
                                "emission_date": "2017-06-06T02:21:14",
                                "expiration_date": "2017-06-06T00:00:00",
                                "reservation_id": "48b88138-2995-4f6f-9b00-c6fffd19a5ab"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-06T01:51:47",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3K-WTA-LIN"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-06T02:21:13.723Z"
                },
                {
                    "id": 32897,
                    "cart": {
                        "reservations": [
                            {
                                "product": "FLIGHT",
                                "status": "ERROR",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-07T00:49:48"
                                    }
                                ],
                                "from_date": "2017-06-14T22:10:00",
                                "to_date": "2017-06-14T23:05:00",
                                "reservation_id": "ad225181-5ccd-4251-a2f1-08987de1b778"
                            }
                        ],
                        "stage": "BOOKING",
                        "status": "ERROR",
                        "creation_date": "2017-06-06T18:50:42",
                        "source": {
                            "channel": "MOBILE",
                            "country": "COL",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3L-X7P-QSM"
                    },
                    "type": "BOOKING_ERROR_FLIGHT",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-07T00:49:54.883Z"
                },
                {
                    "id": 33095,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "KL9XEN",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-07T12:39:45"
                                    }
                                ],
                                "from_date": "2017-08-30T05:30:00",
                                "to_date": "2017-08-30T07:01:00",
                                "emission_date": "2017-06-07T12:40:06",
                                "expiration_date": "2017-06-09T11:39:00",
                                "reservation_id": "1b9c8c98-3ba8-43b8-a3d0-06e0070f4ada"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-07T12:39:46",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3M-ZED-CKG"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-07T12:40:06.086Z"
                },
                {
                    "id": 33569,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "7RDQL6",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-07T21:21:27"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-07T21:21:49"
                                    }
                                ],
                                "from_date": "2017-06-20T13:55:00",
                                "to_date": "2017-08-05T21:10:00",
                                "emission_date": "2017-06-07T21:22:13",
                                "expiration_date": "2017-06-08T00:00:00",
                                "reservation_id": "3d0a1888-471d-4d7b-8759-a503b6d341a8"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-07T20:49:33",
                        "source": {
                            "channel": "RETAIL",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3N-GWA-JXN"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-07T21:22:13.042Z"
                },
                {
                    "id": 33723,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "KQ7NCN",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-07T23:20:11"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-07T23:19:51"
                                    }
                                ],
                                "from_date": "2017-10-05T17:30:00",
                                "to_date": "2017-12-06T15:00:00",
                                "emission_date": "2017-06-07T23:20:31",
                                "expiration_date": "2017-06-10T02:17:00",
                                "reservation_id": "36f3ac8c-70d5-437a-accb-b4e838cb96fd"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-07T14:17:56",
                        "source": {
                            "channel": "CCR",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3N-2WL-CBI"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-07T23:20:31.235Z"
                },
                {
                    "id": 34053,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "79PXZE",
                                "product": "FLIGHT",
                                "status": "MANUAL",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "TODO_PAGO",
                                        "payment_date": "2017-06-08T13:49:29"
                                    }
                                ],
                                "from_date": "2017-06-09T06:20:00",
                                "to_date": "2017-06-12T01:15:00",
                                "expiration_date": "2017-06-08T00:00:00",
                                "reservation_id": "caad31a8-6f3a-4f4f-84f2-785c0bcf1210"
                            }
                        ],
                        "stage": "REFUND",
                        "status": "MANUAL",
                        "creation_date": "2017-06-08T13:49:36",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3O-HC2-REE"
                    },
                    "type": "REFUND_TODOPAGO",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-08T14:02:48.676Z"
                },
                {
                    "id": 34062,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "TQF7Z3",
                                "product": "HOTEL",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "TRANSFER",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-01T03:00:00"
                                    },
                                    {
                                        "type": "TRANSFER",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-08T14:12:38"
                                    }
                                ],
                                "from_date": "2017-07-03T00:00:00",
                                "to_date": "2017-07-12T00:00:00",
                                "reservation_id": "99727468-43e4-4372-8495-f72ba976b34a"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-06T14:06:33",
                        "source": {
                            "channel": "RETAIL",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3L-N28-PGY"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-08T14:12:41.432Z"
                },
                {
                    "id": 34153,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "L564VS",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-08T16:10:59"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-08T16:10:37"
                                    }
                                ],
                                "from_date": "2017-09-25T07:25:00",
                                "to_date": "2017-10-03T23:25:00",
                                "emission_date": "2017-06-08T16:16:16",
                                "expiration_date": "2017-06-09T11:39:00",
                                "reservation_id": "cc60af75-7a2a-4f8e-b727-408657aceadc"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-07T18:47:35",
                        "source": {
                            "channel": "RETAIL",
                            "country": "ARG",
                            "brand": "ALMUNDO"
                        },
                        "cart_id": "J3N-CJC-WLJ"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-08T16:16:16.316Z"
                },
                {
                    "id": 34215,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "MZK8GO",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-08T17:17:44"
                                    }
                                ],
                                "from_date": "2017-06-19T14:25:00",
                                "to_date": "2017-06-19T16:15:00",
                                "emission_date": "2017-06-08T17:18:00",
                                "expiration_date": "2017-06-11T05:17:00",
                                "reservation_id": "480d5abb-bf93-4b2a-a86e-9e226cf3ef03"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-08T17:17:44",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3O-ORQ-PSH"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-08T17:17:59.973Z"
                },
                {
                    "id": 34239,
                    "cart": {
                        "reservations": [
                            {
                                "pnr": "N2FWNN",
                                "product": "FLIGHT",
                                "status": "OK",
                                "refunds": [],
                                "payments": [
                                    {
                                        "type": "REWARDS",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-08T17:33:53"
                                    },
                                    {
                                        "type": "CREDIT_CARD",
                                        "provider": "ALMUNDO",
                                        "payment_date": "2017-06-08T17:34:13"
                                    }
                                ],
                                "from_date": "2017-09-23T07:00:00",
                                "to_date": "2017-10-01T23:50:00",
                                "emission_date": "2017-06-08T17:34:33",
                                "expiration_date": "2017-06-10T11:39:00",
                                "reservation_id": "b6e313fb-79f2-44cd-a15b-f15f108a9ca2"
                            }
                        ],
                        "stage": "INVOICE",
                        "status": "PENDING",
                        "creation_date": "2017-06-08T17:33:53",
                        "source": {
                            "channel": "WEB",
                            "country": "ARG",
                            "brand": "PATAGONIA"
                        },
                        "cart_id": "J3O-PCG-4SN"
                    },
                    "type": "INVOICE_PENDING",
                    "state": {
                        "@class": "com.almundo.tasques.api.model.state.Available",
                        "type": "AVAILABLE"
                    },
                    "creation_date": "2017-06-08T17:34:33.113Z"
                }
            ]
        };
        return tasks;
    }


    static apiTasks(){

        return new Promise((fulfill, reject) => {
            request('http://apidv.almundo.it:8080/api/tasques/tasks',
                {headers: {'X-Apikey': '5512c8d59932b3da984cc7de'}},
                function (error, res, body) {
                    if (error){
                        reject(error);
                    }else {

                        let tasks = JSON.parse(body);

                            fulfill(tasks);
                    }
                });
        });
    }

   /* static apiTasks(){

        return new Promise((fulfill, reject) => {
            let tasks = workService.tasks();
                fulfill(tasks);
                });
     //   });
    }*/


        static releaseTasks(data){
            return new Promise((fulfill, reject) => {
                request('http://apist.almundo.it:8080/api/tasques/tasks/data.id',
                    {method:'PUT',
                     body: {
                         "user_id":data.user_id,
                         "event_type": "RELEASE"
                     },
                     headers: {'X-Apikey': '5512c8d59932b3da984cc7de'},
                     json: true
                    },
                    function (error, res, body) {
                        if (error){
                            reject(error);
                        }else {
                            fulfill(data);
                        }
                    });
            });
        }
}

module.exports = workService;
