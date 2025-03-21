# Toy object CRUD API (MVC Pattern) 
This is a simple toy project for testing RESTful API funcionality, implementing **CRUD operations** using the **MVC architecture** in Node.js and Express  
[Github](https://github.com/co24428/CRUD_MVC_Toy)

---

## Features
- RESTful API built with Express
- Organized using the MVC (Model-View-Controller) pattern
- Supports full CRUD operations for Toy and Player objects
- JSON-based data persistence (using local files)
- Easy to test with curl or browser

---

# CRUD Endpoint

## GET: Fetch Data
```
// in the browser
http://localhost:3000/api/v1/toys
http://localhost:3000/api/v1/toys/3 // get an item using its id (in this case, 3)

// in terminal
curl -X GET "http://localhost:3000/api/v1/toys"
curl -X GET "http://localhost:3000/api/v1/players"

```

## POST: Create New Data
```
// in terminal
curl -X POST "http://localhost:3000/api/v1/toys" \
     -H "Content-Type: application/json" \
     -d '{"name": "Pokemon Card Pack", "price": 12.99}'

curl -X POST "http://localhost:3000/api/v1/players" \
     -H "Content-Type: application/json" \
     -d '{"firstname": "Paul", "lastname": "Smith", "age": 30, "team": "Julius"}'
```

## PATCH: Update existing Data
```
// in terminal
curl -X PATCH "http://localhost:3000/api/v1/toys/4" \
     -H "Content-Type: application/json" \
     -d '{"description": "Does Patch work?", "price": 360.00}'

curl -X PATCH "http://localhost:3000/api/v1/players/3" \
     -H "Content-Type: application/json" \
     -d '{"age": 399, "team": "Juliuss"}'
```

## DELETE: Remove Data
```
// in terminal
curl -X DELETE "http://localhost:3000/api/v1/toys/4"

curl -X DELETE "http://localhost:3000/api/v1/players/3"
```