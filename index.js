import bodyParser from 'body-parser';
import { crmRoutes } from './src/routes/crmRoutes';
import express from 'express';
import mongoose from 'mongoose';
import { webRoutes } from './src/routes/webRoutes';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ExpressTutorial', {
	useNewUrlParser: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

crmRoutes(app);
webRoutes(app);

app.listen(PORT, () =>
	console.log(`Node and Express server is running on port ${PORT}`)
);
