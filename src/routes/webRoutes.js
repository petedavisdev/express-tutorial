export function webRoutes(app) {
	app.route('/').get((req, res) => res.render('index', { hello: 'Boom!' }));

	app.route('/new').get((req, res) => res.render('new'));

	app.route('/:greeting').get((req, res) =>
		res.render('index', { hello: req.params.greeting })
	);
}
