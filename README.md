# Toy object With CRUD, MVC Pattern
This is toy project for testing REST API, CRUD Methods with MVC Pattern.

# CRUD

## GET
```
// in the browser
http://localhost:3000/api/v1/toys
http://localhost:3000/api/v1/toys/3 // get an item using its id (in this case, 3)
http://localhost:3000/api/v1/toys/newID

// in terminal
curl -X GET "http://localhost:3000/api/v1/toys"
curl -X GET "http://localhost:3000/api/v1/players"

```

## POST
```
// in terminal
curl -X POST "http://localhost:3000/api/v1/toys" \
     -H "Content-Type: application/json" \
     -d '{"name": "Pokemon Card Pack", "price": 12.99}'

curl -X POST "http://localhost:3000/api/v1/players" \
     -H "Content-Type: application/json" \
     -d '{"firstname": "Paul", "lastname": "Smith", "age": 30, "team": "Julius"}'
```

## PATCH
```
// in terminal
curl -X PATCH "http://localhost:3000/api/v1/toys/1" \
     -H "Content-Type: application/json" \
     -d '{"description": "Does Patch work?", "price": 360.00}'

curl -X PATCH "http://localhost:3000/api/v1/players/3" \
     -H "Content-Type: application/json" \
     -d '{"age": 399, "team": "Juliuss"}'
```

## DELETE
```
// in terminal
curl -X DELETE "http://localhost:3000/api/v1/toys/4"

curl -X DELETE "http://localhost:3000/api/v1/players/3"
```