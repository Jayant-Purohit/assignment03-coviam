(function(){
	function view(id){
		var _t = this;
		this.cnt_id = id;
		this.cnt = document.getElementById(id);
		//elements
		this.elements = {
			FMDIV : _t.cnt.querySelector(".fm-cnt"), 
			FM : _t.cnt.querySelector("#myForm"),
			DVDIT : _t.cnt.querySelector(".fm-details")
		};
	}
	//binding events		
	view.prototype.bind = function(event,callback) {
		var _t=this;
		switch(event) {
			case "submit":
				this.elements.FM.addEventListener('submit', function(event) {
					_t=this;
					callback(event);

					event.preventDefault();
				});
			break; 
		}
	};
	// draw html
	view.prototype.draw = function(ar) {
		var _t=this;
		this.ar = ar;
		var htmltext= "";
		htmltext += "<h3> User Details </h3><table>";
		htmltext += "<tr><td>Your Name </td><td>: "+ar[0].name+"</td></tr>";
		htmltext += "<tr><td>Your Email </td><td>: "+ar[0].email+"</td></tr>";
		htmltext += "<tr><td>Your Number</td><td>: "+ar[0].phno+"</td></tr>";
		htmltext += "<tr><td>Your website </td><td>: "+ar[0].website+"</td></tr>";
		htmltext += "<tr><td>Your Date of birth</td><td>: "+ar[0].dob+"</td></tr>";
		htmltext += "</table>";


		_t.elements.DVDIT.innerHTML = htmltext;

		// toggle details and form
		$("#"+_t.cnt_id+" .fm-cnt").addClass("hide");
		$("#"+_t.cnt_id+" .fm-details").addClass("show");



	};
window.view = view;

})();
