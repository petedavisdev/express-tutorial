import { ContactSchema } from '../models/crmModel';
import mongoose from 'mongoose';

const Contact = mongoose.model('Contact', ContactSchema);

export async function addNewContact(req, res) {
	const newContact = new Contact(req.body);

	try {
		const contact = await newContact.save();
		res.json(contact);
	} catch (err) {
		res.send(err);
	}
}

export async function getContacts(req, res) {
	try {
		const contacts = await Contact.find({});
		res.json(contacts);
	} catch (err) {
		res.send(err);
	}
}

export async function getContactsWithId(req, res) {
	try {
		const contact = await Contact.findById(req.params.contactId);
		res.json(contact);
	} catch (err) {
		res.send(err);
	}
}

export async function updateContact(req, res) {
	try {
		const contact = await Contact.findOneAndUpdate(
			{ _id: req.params.contactId },
			req.body,
			{ new: true }
		);
		res.json(contact);
	} catch (err) {
		res.send(err);
	}
}

export async function deleteContact(req, res) {
	try {
		const message = await Contact.deleteOne({ _id: req.params.contactId });
		res.send(message);
	} catch (err) {
		res.send(err);
	}
}
