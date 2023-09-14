import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ExpressTutorial', {
	useNewUrlParser: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
	res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Node and Express server is running on port ${PORT}`)
);
