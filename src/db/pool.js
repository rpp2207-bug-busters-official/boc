const { Pool } = require('pg');

module.exports = new Pool({
    host: 'ec2-34-210-26-94.us-west-2.compute.amazonaws.com',
    port: 5432,
    database: 'tarry',
    user: 'jackbossert',
    password: 'boss'
});