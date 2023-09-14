import { addNewContact } from '../controllers/crmController';

export default function routes(app) {
	app.route('/contact')
		.get(
			(req, res, next) => {
				//middleware
				console.log(`Request from ${req.originalUrl}`);
				console.log(`Request from ${req.method}`);
				next();
			},
			(req, res) => res.send('GET request successful')
		)

		.post(addNewContact);

	app.route('/contact/:contactId')
		.put((req, res) => res.send('PUT request successful'))

		.delete((req, res) => res.send('DELETE request successful'));
}
