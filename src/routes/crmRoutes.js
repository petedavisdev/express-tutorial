import {
	addNewContact,
	deleteContact,
	getContacts,
	getContactsWithId,
	updateContact,
} from '../controllers/crmController';

export function crmRoutes(app) {
	app.route('/contact')
		.get((req, res, next) => {
			//middleware
			console.log(`Request from ${req.originalUrl}`);
			console.log(`Request from ${req.method}`);
			next();
		}, getContacts)

		.post(addNewContact);

	app.route('/contact/:contactId')
		.get(getContactsWithId)
		.put(updateContact)
		.delete(deleteContact);
}
