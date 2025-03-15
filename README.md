# Toy object With CRUD, MVC Pattern
This is toy project for testing REST API, CRUD Methods with MVC Pattern.

# CRUD

## GET
```
// in the browser
http://localhost:3000/api/v1/toys
http://localhost:3000/api/v1/toys/newID
```

##POST
```
// in terminal
curl -X POST "http://localhost:3000/api/v1/toys" \
     -H "Content-Type: application/json" \
     -d '{"name": "Pokemon Card Pack", "price": 12.99}'
```