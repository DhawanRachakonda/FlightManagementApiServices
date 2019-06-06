const aircraftDetails = [
    {
        name: "ATR123",
        fleetCount: 50,
    },
    {
        name: 'ATR1234',
        fleetCount: 35,
    },
];

module.exports = {
    python: [...aircraftDetails],
    ruby: [...aircraftDetails],
    pearl: [...aircraftDetails],
    go: [...aircraftDetails],
}