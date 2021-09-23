# p2-iproject-server
Individual Portfolio Server

# Cheats-chat

## User

### Create User 
* URL
    > /register
* Method
    > Post
* URL Params
    > None
* Validation
    > name: required
    > email: required
    > password: required
    > gender: required
    > state: required

* Success Response (201)
    ```json
    {
        "id": "<your account id",
        "name": "<your registered name>",
        "email": "your account email"
    }
    ```
* Error Validation Response (400)
    ```json
    {
        "message": ["<error message>"]
    }
    ```

### Login
* URL 
    > /login
* Method
    > Post
* Url Params
    > None
* Validation
    > email: required
    > password: required
* Success Response (200)
    ```json
    { 
        "access_token": "<your access token>",
        "id": "<account id>",
        "name": "<account name>",
        "email": "<account email>"
    }
    ```
* Error Authentication Response (401)
    ```json
    {
        "message": ["wrong Username/password"]
    }
    ```

### Google Sign In
* URL 
    > /users/authGoogle
* Method
    > Post
* Url Params
    > None
* Success Response (200)
    ```json
    { 
        "access_token": "<your access token>",
        "id": "<account id>",
        "name": "<account name>",
        "email": "<account email>"
    }
    ```
* Error Response (500)
    ```json
    {
        "message": ["Internal Server Error"]
    }
    ```

## Chat

### Create Conversation
* URL
    > /conversation/create
* Method
    > Post
* URL Params
    > None
* Request Header
    ```json
    {
        "access_token": "<your access token>" 
    }
    ```
* Success Response (201)
    ```json
    {
        "message": "success created/updated conversation"
    }
    ```
* Error Validation Response (400)
    ```json
    {
        "message": "<error message>"
    }
    ```

### Delete Conversation
* URL
    > /conversation/delete
* Method
    > Delete
* URL Params
    > None
* Request Header
    ```json
    {
        "access_token": "<your access token>" 
    }
    ```
* Success Response (200)
    ```json
    {
        "message": "success delete conversation with id <conversationId>"
    }
    ```
* Error Validation Response (400)
    ```json
    {
        "message": "<error message>"
    }
    ```

### Delete Conversation
* URL
    > /conversation/send
* Method
    > Post
* URL Params
    > None
* Request Header
    ```json
    {
        "access_token": "<your access token>" 
    }
    ```
* Success Response (200)
    ```json
    {
        "data": "<messageId>"
    }
    ```
* Error Validation Response (400)
    ```json
    {
        "message": "<error message>"
    }
    ```

## Foursquare
### Get Venue List
* URL
    > /hotel/list
* Method
    > get
* URL Params
    > None
* Request Header
    ```json
    {
        "access_token": "<your access token>" 
    }
    ```
* Success Response (200)
    ```json
    {
    "reasons": {
      "count": 0,
      "items": [
        {
          "summary": "This spot is popular",
          "type": "general",
          "reasonName": "globalInteractionReason"
        }
      ]
    },
    "venue": {
      "id": "54892023498e681ec5e65dd2",
      "name": "Ivory by Ayola Hotel",
      "contact": {
        
      },
      "location": {
        "address": "Jalan Bahureksa No.3",
        "lat": -6.905102540903393,
        "lng": 107.61394720494661,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": -6.905102540903393,
            "lng": 107.61394720494661
          }
        ],
        "distance": 131,
        "postalCode": "40115",
        "cc": "ID",
        "city": "Bandung",
        "state": "Jawa Barat",
        "country": "Indonesia",
        "formattedAddress": [
          "Jalan Bahureksa No.3",
          "Bandung",
          "Jawa Barat 40115",
          "Indonesia"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1fa931735",
          "name": "Hotel",
          "pluralName": "Hotels",
          "shortName": "Hotel",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "tipCount": 0,
        "usersCount": 0,
        "checkinsCount": 0,
        "visitsCount": 0
      },
      "beenHere": {
        "count": 0,
        "lastCheckinExpiredAt": 0,
        "marked": false,
        "unconfirmedCount": 0
      },
      "photos": {
        "count": 0,
        "groups": [
          
        ]
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": [
          
        ]
      }
    },
    "referralId": "e-0-54892023498e681ec5e65dd2-0"
  },
    ```
* Error Validation Response (400)
    ```json
    {
        "message": "<error message>"
    }
    ```
