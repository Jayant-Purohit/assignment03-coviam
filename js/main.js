(function() {
	function APP(app,id) {
		app.view = new view(id);
		app.model = new model(id);
		app.controller = new controller(app.view, app.model);

	}
	window.form_1 = window.form_1 || {};
	APP(window.form_1,'cnt1');
	// initilize app


})();


