import Activity from './Activity.js';

var activities = [
  {
    "id": "UNhsuZmtqGA5X5_3_pGYUw",
    "alias": "tacos-y-birria-la-unica-los-angeles",
    "name": "Tacos y Birria La Unica",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Ih0E6hGhNoLW9DZhjQQylg/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/tacos-y-birria-la-unica-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 594,
    "categories": [
      {
        "alias": "tacos",
        "title": "Tacos"
      },
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.0225263,
      "longitude": -118.21662562882352
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$",
    "location": {
      "address1": "2840 E Olympic Blvd",
      "address2": null,
      "address3": null,
      "city": "Los Angeles",
      "zip_code": "90023",
      "country": "US",
      "state": "CA",
      "display_address": [
        "2840 E Olympic Blvd",
        "Los Angeles, CA 90023"
      ]
    },
    "phone": "+13237154025",
    "display_phone": "(323) 715-4025",
    "distance": 10584.355978976957
  },
  {
    "id": "Zv6pQP12TsaqfQfLBHhOiQ",
    "alias": "happy-ice-los-angeles",
    "name": "Happy Ice",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/RblPjBItqVJdsZAEm_j10Q/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/happy-ice-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 364,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "shavedice",
        "title": "Shaved Ice"
      },
      {
        "alias": "icecream",
        "title": "Ice Cream & Frozen Yogurt"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.083387,
      "longitude": -118.349637
    },
    "transactions": [
      "delivery"
    ],
    "price": "$",
    "location": {
      "address1": "7324 Melrose Ave",
      "address2": null,
      "address3": null,
      "city": "Los Angeles",
      "zip_code": "90046",
      "country": "US",
      "state": "CA",
      "display_address": [
        "7324 Melrose Ave",
        "Los Angeles, CA 90046"
      ]
    },
    "phone": "+12158003965",
    "display_phone": "(215) 800-3965",
    "distance": 3555.9059634708
  },
  {
    "id": "WiTMRukKmLARoEoKdrV6Qg",
    "alias": "okamoto-kitchen-los-angeles-2",
    "name": "Okamoto Kitchen",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Bn0PXvhUM9RLSOqnZyebYQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/okamoto-kitchen-los-angeles-2?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 659,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "japanese",
        "title": "Japanese"
      }
    ],
    "rating": 4,
    "coordinates": {
      "latitude": 34.14851997958463,
      "longitude": -118.43272332797397
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$$",
    "location": {
      "address1": null,
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "91423",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 91423"
      ]
    },
    "phone": "+18183739767",
    "display_phone": "(818) 373-9767",
    "distance": 14089.939630919853
  },
  {
    "id": "FWBeF6g78wwphRkG64ngvA",
    "alias": "babys-badass-burgers-los-angeles",
    "name": "Baby's Badass Burgers",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/TQuNNHBWwz-iL0m0MpeYdg/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/babys-badass-burgers-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 782,
    "categories": [
      {
        "alias": "burgers",
        "title": "Burgers"
      },
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      }
    ],
    "rating": 4,
    "coordinates": {
      "latitude": 34.08841,
      "longitude": -118.37783
    },
    "transactions": [],
    "price": "$$",
    "location": {
      "address1": "",
      "address2": "",
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90069",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90069"
      ]
    },
    "phone": "+18779622297",
    "display_phone": "(877) 962-2297",
    "distance": 6311.81210658909
  },
  {
    "id": "xZbX6QhqyA3brRFbLfRqdg",
    "alias": "maravilla-latin-cuisine-los-angeles-3",
    "name": "Maravilla Latin Cuisine",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/iwbxDa4ANC69OD46Y6nAig/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/maravilla-latin-cuisine-los-angeles-3?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 244,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "latin",
        "title": "Latin American"
      }
    ],
    "rating": 5,
    "coordinates": {
      "latitude": 34.2569465637207,
      "longitude": -118.419013977051
    },
    "transactions": [],
    "price": "$$",
    "location": {
      "address1": null,
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "91331",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 91331"
      ]
    },
    "phone": "+13107606918",
    "display_phone": "(310) 760-6918",
    "distance": 23844.11253683315
  },
  {
    "id": "_hNZAVJRYGHFOKYw0Nxzig",
    "alias": "the-original-herbivore-los-angeles",
    "name": "The Original Herbivore",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/LUMY2qq8TIIAioQpSTrAaQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-original-herbivore-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 222,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "vegan",
        "title": "Vegan"
      },
      {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.0621508684619,
      "longitude": -118.31330426353583
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$$",
    "location": {
      "address1": "3959 Wilshire Blvd",
      "address2": "Ste B9",
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90010",
      "country": "US",
      "state": "CA",
      "display_address": [
        "3959 Wilshire Blvd",
        "Ste B9",
        "Los Angeles, CA 90010"
      ]
    },
    "phone": "+12135683305",
    "display_phone": "(213) 568-3305",
    "distance": 746.5867538902629
  },
  {
    "id": "ok9xITiw71d5Ifj--fCBPA",
    "alias": "marciano-art-foundation-los-angeles-2",
    "name": "Marciano Art Foundation",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/IwgzHYoVMHOAPD0ONMU_eA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/marciano-art-foundation-los-angeles-2?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 207,
    "categories": [
      {
        "alias": "artmuseums",
        "title": "Art Museums"
      }
    ],
    "rating": 4,
    "coordinates": {
      "latitude": 34.06213,
      "longitude": -118.32329
    },
    "transactions": [],
    "location": {
      "address1": "4357 Wilshire Blvd",
      "address2": "",
      "address3": null,
      "city": "Los Angeles",
      "zip_code": "90010",
      "country": "US",
      "state": "CA",
      "display_address": [
        "4357 Wilshire Blvd",
        "Los Angeles, CA 90010"
      ]
    },
    "phone": "",
    "display_phone": "",
    "distance": 217.0944827710304
  },
  {
    "id": "PyivZWrHyYv4JQd9qGGrjw",
    "alias": "tokyo-style-food-truck-and-catering-los-angeles-2",
    "name": "Tokyo Style Food Truck and Catering",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/C09PbqFDB89xLhJH7uEsVQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/tokyo-style-food-truck-and-catering-los-angeles-2?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 207,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "japanese",
        "title": "Japanese"
      },
      {
        "alias": "asianfusion",
        "title": "Asian Fusion"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 33.97363,
      "longitude": -118.24989
    },
    "transactions": [],
    "price": "$$",
    "location": {
      "address1": null,
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90001",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90001"
      ]
    },
    "phone": "+13105916226",
    "display_phone": "(310) 591-6226",
    "distance": 12305.625781423201
  },
  {
    "id": "yUby10MR8wNU5jmYe_lRUg",
    "alias": "photocreds-los-angeles",
    "name": "PhotoCreds",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6CAydwVcYXPTAZgnM6972Q/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/photocreds-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 91,
    "categories": [
      {
        "alias": "photoboothrentals",
        "title": "Photo Booth Rentals"
      },
      {
        "alias": "desserts",
        "title": "Desserts"
      }
    ],
    "rating": 5,
    "coordinates": {
      "latitude": 34.18591,
      "longitude": -118.38516
    },
    "transactions": [],
    "location": {
      "address1": null,
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "91606",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 91606"
      ]
    },
    "phone": "+13234490247",
    "display_phone": "(323) 449-0247",
    "distance": 15349.944091589463
  },
  {
    "id": "AWQELVqEeeCbstdp8PUVYg",
    "alias": "the-ppong-los-angeles-2",
    "name": "The Ppong",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Li5i5N_Y7VwLTsJvLA2pKw/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-ppong-los-angeles-2?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 227,
    "categories": [
      {
        "alias": "korean",
        "title": "Korean"
      },
      {
        "alias": "chinese",
        "title": "Chinese"
      },
      {
        "alias": "soup",
        "title": "Soup"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.062044,
      "longitude": -118.3146891
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$$",
    "location": {
      "address1": "4003 Wilshire Blvd",
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90010",
      "country": "US",
      "state": "CA",
      "display_address": [
        "4003 Wilshire Blvd",
        "Los Angeles, CA 90010"
      ]
    },
    "phone": "+12135683953",
    "display_phone": "(213) 568-3953",
    "distance": 618.4737503662548
  },
  {
    "id": "Ln9OuzUwCQEcUytof5YiOw",
    "alias": "cafe-americano-los-angeles",
    "name": "Cafe Americano",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/tk76wNEsRWfBNHXzBojwzQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/cafe-americano-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 196,
    "categories": [
      {
        "alias": "coffee",
        "title": "Coffee & Tea"
      },
      {
        "alias": "bakeries",
        "title": "Bakeries"
      },
      {
        "alias": "desserts",
        "title": "Desserts"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.0621282911555,
      "longitude": -118.314654231283
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$$",
    "location": {
      "address1": "4003 Wilshire Blvd",
      "address2": "Ste G",
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90010",
      "country": "US",
      "state": "CA",
      "display_address": [
        "4003 Wilshire Blvd",
        "Ste G",
        "Los Angeles, CA 90010"
      ]
    },
    "phone": "+12134273637",
    "display_phone": "(213) 427-3637",
    "distance": 622.5067445368068
  },
  {
    "id": "wt2KkurQF6nGv-KPdYjYmA",
    "alias": "dotys-tacos-gardena",
    "name": "Doty's Tacos",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZCiFgJbVG3nu-kAZwra8fA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/dotys-tacos-gardena?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 265,
    "categories": [
      {
        "alias": "mexican",
        "title": "Mexican"
      },
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      }
    ],
    "rating": 4,
    "coordinates": {
      "latitude": 33.9005754171619,
      "longitude": -118.326611867643
    },
    "transactions": [],
    "price": "$",
    "location": {
      "address1": "14415 Crenshaw Blvd",
      "address2": "",
      "address3": "",
      "city": "Gardena",
      "zip_code": "90249",
      "country": "US",
      "state": "CA",
      "display_address": [
        "14415 Crenshaw Blvd",
        "Gardena, CA 90249"
      ]
    },
    "phone": "+13102207685",
    "display_phone": "(310) 220-7685",
    "distance": 17910.43045125408
  },
  {
    "id": "xOYjHmazeteBLYyu6H1Epw",
    "alias": "taqueria-la-plebe-and-more-northridge",
    "name": "Taqueria La Plebe and More",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/4nQ0DY3uc928y5aDIbXDZA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/taqueria-la-plebe-and-more-northridge?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 137,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "mexican",
        "title": "Mexican"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.22702,
      "longitude": -118.53646
    },
    "transactions": [],
    "price": "$",
    "location": {
      "address1": "8619 Reseda Blvd",
      "address2": null,
      "address3": "",
      "city": "Northridge",
      "zip_code": "91324",
      "country": "US",
      "state": "CA",
      "display_address": [
        "8619 Reseda Blvd",
        "Northridge, CA 91324"
      ]
    },
    "phone": "+17479989481",
    "display_phone": "(747) 998-9481",
    "distance": 27021.274905048565
  },
  {
    "id": "jljq3PO3l-0zEdCDirweQA",
    "alias": "stopbye-café-los-angeles-3",
    "name": "StopBye Café",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/N8lC91iWojyBtREH6Gvt2A/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/stopbye-caf%C3%A9-los-angeles-3?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 85,
    "categories": [
      {
        "alias": "asianfusion",
        "title": "Asian Fusion"
      },
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "indonesian",
        "title": "Indonesian"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.00455,
      "longitude": -118.26009
    },
    "transactions": [],
    "price": "$$",
    "location": {
      "address1": null,
      "address2": null,
      "address3": null,
      "city": "Los Angeles",
      "zip_code": "90011",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90011"
      ]
    },
    "phone": "+14244565533",
    "display_phone": "(424) 456-5533",
    "distance": 8319.774223452625
  },
  {
    "id": "dPgVG1nGSUONC0IViu5Phg",
    "alias": "mariscos-los-lechugas-los-angeles",
    "name": "Mariscos Los Lechugas",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Pr0VB80nXTRNPeIWp-V9WQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/mariscos-los-lechugas-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 78,
    "categories": [
      {
        "alias": "seafood",
        "title": "Seafood"
      },
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "cocktailbars",
        "title": "Cocktail Bars"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.08928,
      "longitude": -118.16793
    },
    "transactions": [
      "delivery"
    ],
    "price": "$",
    "location": {
      "address1": "5244 S Huntington Dr",
      "address2": "",
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90032",
      "country": "US",
      "state": "CA",
      "display_address": [
        "5244 S Huntington Dr",
        "Los Angeles, CA 90032"
      ]
    },
    "phone": "+13235373234",
    "display_phone": "(323) 537-3234",
    "distance": 14455.543633162386
  },
  {
    "id": "dvRoSS5y3-zuNsnQdRf49w",
    "alias": "postcards-central-american-soul-food-los-angeles",
    "name": "Postcards Central American Soul Food",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8O_95n6htKytOpchlrpW7g/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/postcards-central-american-soul-food-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 134,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "soulfood",
        "title": "Soul Food"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.0387725830078,
      "longitude": -118.26114654541
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$$",
    "location": {
      "address1": "",
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90015",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90015"
      ]
    },
    "phone": "+13108010441",
    "display_phone": "(310) 801-0441",
    "distance": 5580.8995529348895
  },
  {
    "id": "pKGSYYij_CO-LWowNbafIQ",
    "alias": "tumaca-truck-los-angeles",
    "name": "Tumaca Truck",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Q3t5xAw2cL7gB8m6uiN9_w/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/tumaca-truck-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 57,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }
    ],
    "rating": 5,
    "coordinates": {
      "latitude": 34.00566,
      "longitude": -118.25849
    },
    "transactions": [],
    "price": "$",
    "location": {
      "address1": "",
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90011",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90011"
      ]
    },
    "phone": "+12134214073",
    "display_phone": "(213) 421-4073",
    "distance": 8319.774223452625
  },
  {
    "id": "c0qq9fAvd8YQRJd2ZWxaIg",
    "alias": "bake-some-noise-los-angeles-2",
    "name": "Bake Some Noise",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/KH2B5Ww1aTLYMvvBuGNqfQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/bake-some-noise-los-angeles-2?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 35,
    "categories": [
      {
        "alias": "bakeries",
        "title": "Bakeries"
      },
      {
        "alias": "desserts",
        "title": "Desserts"
      }
    ],
    "rating": 5,
    "coordinates": {
      "latitude": 34.06211747214704,
      "longitude": -118.31574660450138
    },
    "transactions": [],
    "location": {
      "address1": "",
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90010",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90010"
      ]
    },
    "phone": "+12132490199",
    "display_phone": "(213) 249-0199",
    "distance": 522.3003071365914
  },
  {
    "id": "DFAtaOjN8SjNr2uy0zoKgw",
    "alias": "east-los-tacos-los-angeles",
    "name": "East Los Tacos",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/5dsW06kPIExPrshcIT2XRA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/east-los-tacos-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 187,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "tacos",
        "title": "Tacos"
      }
    ],
    "rating": 4,
    "coordinates": {
      "latitude": 34.040480183102865,
      "longitude": -118.16907339058622
    },
    "transactions": [
      "delivery",
      "pickup"
    ],
    "price": "$",
    "location": {
      "address1": "4500 E Cesar E Chavez Ave",
      "address2": null,
      "address3": null,
      "city": "Los Angeles",
      "zip_code": "90022",
      "country": "US",
      "state": "CA",
      "display_address": [
        "4500 E Cesar E Chavez Ave",
        "Los Angeles, CA 90022"
      ]
    },
    "phone": "+13235083092",
    "display_phone": "(323) 508-3092",
    "distance": 14226.917151830998
  },
  {
    "id": "Qh-R8EGDLQZFwwdApN0Kvw",
    "alias": "the-fix-on-wheels-los-angeles",
    "name": "The Fix on Wheels",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/k9W_y2DdI6K3WtXcFSceqQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-fix-on-wheels-los-angeles?adjust_creative=fX-U_A0AWYJW_coI4ItEZg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fX-U_A0AWYJW_coI4ItEZg",
    "review_count": 93,
    "categories": [
      {
        "alias": "foodtrucks",
        "title": "Food Trucks"
      },
      {
        "alias": "burgers",
        "title": "Burgers"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 34.02911,
      "longitude": -118.28306
    },
    "transactions": [],
    "price": "$$",
    "location": {
      "address1": null,
      "address2": null,
      "address3": "",
      "city": "Los Angeles",
      "zip_code": "90007",
      "country": "US",
      "state": "CA",
      "display_address": [
        "Los Angeles, CA 90007"
      ]
    },
    "phone": "+13233255573",
    "display_phone": "(323) 325-5573",
    "distance": 4906.111148449467
  }
]
export default function ActivityList(props) {
  return (
    <div className="activity-list">
      Activity List
      {activities.map((activity) => {
        return (
          <Activity action={activity} key="me"/>
        );
      })}
    </div>
  )
}