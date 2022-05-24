import express from 'express';

const app = express();

const employees = [
    {
        "name": "Eltac",
        "id": 1,
        "job": "Software Engineer",
        "age": "22",
        "jobType": "Full Time",
        "salary": "10,000",
        "location": "Lagos"
    },
    {
        "name": "Vahid",
        "id": 2,
        "job": "Software Engineer",
        "age": "22",
        "jobType": "Full Time",
        "salary": "10,000",
        "location": "Lagos"
    },
    {
        "name": "John",
        "id": 3,
        "job": "Software Engineer",
        "age": "22",
        "jobType": "Full Time",
        "salary": "10,000",
        "location": "Lagos"
    },
    {
        "name": "Cavad",
        "id": 4,
        "job": "Software Engineer",
        "age": "22",
        "jobType": "Full Time",
        "salary": "10,000",
        "location": "Lagos"
    },
    {
        "name": "Ndidi",
        "id": 5,
        "job": "Software Engineer",
        "age": "22",
        "jobType": "Full Time",
        "salary": "10,000",
        "location": "Lagos"
    }
]

app.get('/all', (req, res) => {
    res.send(employees);
})


app.listen(3000, () => {
    console.log(`App is active in 3000`);
})