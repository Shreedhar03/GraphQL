const users = [
    {
        id: "1",
        name: "Shreedhar",
        username: "shrie",
        age: 20,
        nationality: "INDIA",
        friends: [
            {
                id: "2",
                name: "Crutika",
                username: "kittttto",
                age: 17,
                nationality: "INDIA"
            },
            {
                id: "3",
                name: "Yash",
                username: "yasssh",
                age: 29,
                nationality: "USA"
            }
        ]
    },
    {
        id: "2",
        name: "Crutika",
        username: "kittttto",
        age: 17,
        nationality: "INDIA"
    },
    {
        id: "3",
        name: "Yash",
        username: "yasssh",
        age: 29,
        nationality: "USA"
    },
    {
        id: "4",
        name: "Gaurav",
        username: "gau",
        age: 19,
        nationality: "NEPAL"
    }
]

const movies = [
    {
        "id": "1",
        "name": "The Avengers",
        "year": 2012,
        "oscarReceived": true
    },
    {
        "id": "2",
        "name": "Avengers: Age of Ultron",
        "year": 2015,
        "oscarReceived": false
    },
    {
        "id": "3",
        "name": "Avengers: Infinity War",
        "year": 2018,
        "oscarReceived": false
    },
    {
        "id": "4",
        "name": "Avengers: Endgame",
        "year": 2019,
        "oscarReceived": true
    },
    {
        "id": "5",
        "name": "Avengers: Age of Heroes",
        "year": 2023,
        "oscarReceived": true
    },
    {
        "id": "6",
        "name": "Avengers: United",
        "year": 2021,
        "oscarReceived": false
    }
]

module.exports = { users, movies }