db.auth('adminuser', 'password123')

db = db.getSiblingDB('test-database')

db.createUser(
   {
     user: "asad",
     pwd: "asad123",
     roles: [ "readWrite", "dbAdmin" ]
   })

db.users.insert([
        { "email": "mustaqeem@gmail.com",
        "screenName": "Auto",
        "firstName": "Doe",
        "lastName": "John",
        "password": "lpc123",
        "confirmPassword": ""
        },
        { "email": "shakeel@gmail.com",
        "screenName": "SEARCH",
        "firstName": "Shakeel",
        "lastName": "John",
        "password": "abc123^^",
        "confirmPassword": ""
        }])
