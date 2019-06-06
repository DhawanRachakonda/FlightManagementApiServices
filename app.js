const express = require('express');
const db = require('./db/SampleData');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

// Get all flights.
app.get('/api/getFlights', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Flight details retrieved successfully',
        data: [...db[req.query.db]],
    });
});

// Add a flight
app.post('/api/flight', (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            success: 'false',
            message: 'Name is required',
        });
    } else if(!req.body.fleetCount) {
        return res.status(400).send({
            success: 'false',
            message: 'Fleet Count is required',
        });
    }
    const flight = {
        name: req.body.name,
        fleetCount: req.body.fleetCount,
    };
    db[req.query.db].push(flight);
    return res.status(201).send({
        success: 'true',
        message: 'Flight added successfully',
        data: [...db[req.query.db]],
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});