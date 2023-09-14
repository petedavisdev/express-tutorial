import { ContactSchema } from '../models/crmModel';
import mongoose from 'mongoose';

const Contact = mongoose.model('Contact', ContactSchema);

export async function addNewContact(req, res) {
	let newContact = new Contact(req.body);

	try {
		const contact = await newContact.save();
		res.json(contact);
	} catch (err) {
		res.send(err);
	}

	newContact.save((err, contact) => {
		if (err) {
		}
	});
}
