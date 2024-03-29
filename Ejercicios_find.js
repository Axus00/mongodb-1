db.createCollection('users');// Se crea colección

db.users.insertMany([
    
    {
        name: "Fernando",
        lastName: "Gómez",
        age: 23,
        country: "España",
        email: "fjgt2000@gmail.com",
        salary: 5000,
        height: 170,
        weight: 145
    },
    {
        name: "Sofia",
        lastName: "Silva",
        age: 27,
        country: "Argentina",
        email: "sofia.silva@example.com",
        salary: 5500,
        height: 165,
        weight: 58
    },
    {
        name: "Diego",
        lastName: "González",
        age: 32,
        country: "España",
        email: "diego.gonzalez@example.com",
        salary: 6000,
        height: 180,
        weight: 80
    },
    {
        name: "Isabella",
        lastName: "Fernandez",
        age: 24,
        country: "México",
        email: "isabella.fernandez@example.com",
        salary: 5200,
        height: 160,
        weight: 55
    },
    {
        name: "Liam",
        lastName: "Smith",
        age: 29,
        country: "Estados Unidos",
        email: "liam.smith@example.com",
        salary: 6200,
        height: 175,
        weight: 70
    },
    {
        name: "Elena",
        lastName: "Moreno",
        age: 26,
        country: "Chile",
        email: "elena.moreno@example.com",
        salary: 5300,
        height: 170,
        weight: 63
    },
    {
        name: "Lucas",
        lastName: "Martinez",
        age: 31,
        country: "Brasil",
        email: "lucas.martinez@example.com",
        salary: 5800,
        height: 175,
        weight: 75
    },
    {
        name: "Emma",
        lastName: "Rodriguez",
        age: 28,
        country: "Australia",
        email: "emma.rodriguez@example.com",
        salary: 5700,
        height: 165,
        weight: 60
    },
    {
        name: "Mateo",
        lastName: "Perez",
        age: 30,
        country: "Colombia",
        email: "mateo.perez@example.com",
        salary: 5400,
        height: 170,
        weight: 70
    },
    {
        name: "Valentina",
        lastName: "López",
        age: 25,
        country: "Uruguay",
        email: "valentina.lopez@example.com",
        salary: 5100,
        height: 160,
        weight: 55
    },
    {
        name: "Alexander",
        lastName: "Ramirez",
        age: 33,
        country: "Perú",
        email: "alexander.ramirez@example.com",
        salary: 6100,
        height: 180,
        weight: 78
    },
    {
        name: "Mia",
        lastName: "Gomez",
        age: 29,
        country: "Italia",
        email: "mia.gomez@example.com",
        salary: 5900,
        height: 170,
        weight: 65
    },
    {
        name: "Daniel",
        lastName: "Hernandez",
        age: 26,
        country: "Francia",
        email: "daniel.hernandez@example.com",
        salary: 5600,
        height: 175,
        weight: 72
    },
    {
        name: "Ava",
        lastName: "Diaz",
        age: 28,
        country: "Canadá",
        email: "ava.diaz@example.com",
        salary: 5800,
        height: 165,
        weight: 62
    },
    {
        name: "Lucía",
        lastName: "Torres",
        age: 27,
        country: "Alemania",
        email: "lucia.torres@example.com",
        salary: 5500,
        height: 170,
        weight: 64
    },
    {
        name: "David",
        lastName: "Vargas",
        age: 31,
        country: "Inglaterra",
        email: "david.vargas@example.com",
        salary: 6000,
        height: 178,
        weight: 77
    },
    {
        name: "Sara",
        lastName: "Suarez",
        age: 29,
        country: "Portugal",
        email: "sara.suarez@example.com",
        salary: 5700,
        height: 165,
        weight: 59
    },
    {
        name: "Juan",
        lastName: "Fernandez",
        age: 30,
        country: "China",
        email: "juan.fernandez@example.com",
        salary: 5900,
        height: 172,
        weight: 68
    },
    {
        name: "Valeria",
        lastName: "Martínez",
        age: 26,
        country: "Japón",
        email: "valeria.martinez@example.com",
        salary: 5600,
        height: 168,
        weight: 63
    },
    {
        name: "Samuel",
        lastName: "López",
        age: 28,
        country: "Corea del Sur",
        email: "samuel.lopez@example.com",
        salary: 5800,
        height: 176,
        weight: 71
    },
    {
        name: "Camila",
        lastName: "García",
        age: 29,
        country: "Rusia",
        email: "camila.garcia@example.com",
        salary: 6000,
        height: 170,
        weight: 67
    },
    {
        name: "José",
        lastName: "Sánchez",
        age: 27,
        country: "India",
        email: "jose.sanchez@example.com",
        salary: 5500,
        height: 175,
        weight: 72
    }
]);

db.users.find();

//Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({age: {$gte: 18}});

//Obtener todos los usuarios que sean de Londres o de París.
db.users.find({
    $or: [
        {country: "Italia"},
        {country: "París"}
    ]
});

//Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({
    $and:[
        {salary: {$gt: 2500}},
        {age: {$lte: 30}}
    ]
});

//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({
    $and: [
        {country: "España"},
        {salary: {$gte: 3000}}
    ]
});

//Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({
    $and: [
        {age: {$gt: 25}},
        {age: {$lt: 35}}
    ]
});

//Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({country: {$ne:"Estados Unidos"}})

//Obtener a todos los usuarios que sean de Italia y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({
    $and:[
        {country: {$eq: "Italia"}},
        {salary: {$gte: 2500}}
    ]
});

//Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({
    $and:[
        {country: {$eq: "Australia"}},
        {weight: {$gt:140}}
    ]
});

//Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({
    country: {$ne: "París"}
});

//Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
    $or: [
        {salary: {$lte: 5000}},
        {age: {$gte: 40}}
    ]
});

//Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({
    $and: [
        {country: "Canadá"},
        {salary: {$gte: 4000}}
    ],
    $or: [
        {height: {$gte: 160}}
    ]
});

//Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({
    $and: [
        {country: {$eq: "Italia"}},
        {age: {$gte: 20}},
        {age: {$lte: 30}}
    ]
});

//Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({
    email: {$exists: true} 
});

//Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({
    $and: [
        {country: {$eq: "Colombia"}},
        {salary: {$gte: 3000}},
        {salary: {$lte: 5000}}
    ]
});

//Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({
    $and: [
        {country: "Brasil"},
        {weight: {$lte: 120}}
    ],
    $or: [
        {weight: {$gte: 140}}
    ]
});

//Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({
    $or: [
        {country: "Argentina"},
        {country: "Chile"}
    ],
    $and: [
        {age: {$lte: 25}}
    ] 
});

//Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({
    country: {$ne: ("España", "México")},
    $and: [
        {salary: {$lte: 3000}}
    ]
});

//Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({
    country: {$eq: "Alemania"},
    $and: [
        {salary: {$lte: 4000}}
    ],
    $or: [
        {age: {$gte: 35}}
    ]
});

//Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({
    country: {$ne: "Colombia"},
    $and: [
        {height: {$lte: 170}}
    ]
});

//Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({
    country: {$eq: "India"},
    $and: [
        {salary: {$exists: true}}
    ]
});