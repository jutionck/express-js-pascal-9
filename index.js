const express = require('express');
const uuid = require('uuid');
const app = express();
const port = 8181;
app.use(express.json());
app.get('/employee', (req, res) => {
    // /employee?q=ABC&page=1&sortBy=id&sort=asc
    req.query.name ? res.json({ message: `GET Employee by name ${req.query.name}`}) : res.json({message: uuid.v4()})
});

app.get('/employee/:id', (req, res) => {
    console.log(`/employee/1`)
    // localhost:8181/employee/1
    const id = req.params.id
    res.json({message: `GET Employee by ID ${id}`});
});

app.post('/employee', (req, res) => {
    res.json(req.body);
});

app.delete('/employee/:id', (req, res) => {
    res.end('DELETE Employee');
});
app.put('/employee', (req, res) => {
    res.end('PUT Employee');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
