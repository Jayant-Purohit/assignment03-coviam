(function(){

	function controller(view, model){
		var _t = this;
		this.view = view;
		this.model = model;
		this.view.bind('submit', function(ev){
			_t.callsubmithandller(ev);
		});
	}
	// add handlers to events
	controller.prototype.callsubmithandller = function(ev) {
		var _t=this;
		this.Save(ev);
		this.writeData();
	};



	// function to save data and draw data to view
	controller.prototype.Save = function(ev){
		_t=this;
		var ar =[{"id": 1 ,
				"name" : event.target.username.value ,
				"email" : event.target.email.value ,
				"phno" : event.target.Phno.value ,
				"website" : event.target.website.value ,
				"dob" : event.target.dob.value
			}];
		_t.model.add(ar);
	};
	controller.prototype.writeData = function(){
			_t=this;
			var ar=[];
			ar = _t.model.getData();
			console.log(_t);
			this.view.draw(ar); 	
			
	};




	window.controller = controller;

})();


