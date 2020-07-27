require('dotenv').config();
const CORS = require('cors');
const EXPRESS = require('express');
const EXPRESS_JWT = require('express-jwt');
const MORGAN = require('morgan');
const ROWDY_LOGGER = require('rowdy-logger');

const APP = EXPRESS();
const ROWDY_RESULTS = ROWDY_LOGGER.begin(APP);

APP.use(CORS());
APP.use(MORGAN('dev'));
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

APP.use('/auth', EXPRESS_JWT({
    secret: process.env.JWT_SECRET,
    algorithm: ['HS256']
}).unless({
    path: [
        { url: '/auth/login', methods: ['POST'] },
        { url: '/auth/signup', methods: ['POST'] }
    ]
}), require('./controllers/auth'));

APP.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
});

APP.listen(process.env.PORT, () => {
    console.log(`Chilling out on PORT ${process.env.PORT}`);
    ROWDY_RESULTS.print();
});