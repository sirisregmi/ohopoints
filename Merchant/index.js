import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

import routes from './src/routes'

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('App is working'))
app.use('/api/v1', routes)

app.listen(process.env.PORT, () => {
    console.log(`Example app listenting on port ${process.env.PORT}`);
})

module.exports = {
    app
}