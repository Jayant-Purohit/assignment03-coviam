(function(){

	function model(id){


		this.data = [];
		};



		model.prototype.add = function(ar){
			_t=this;
			_t.data = ar;

			console.log(_t.data);

		}

		model.prototype.getData = function(){
			_t=this;
			return _t.data;

		}
	window.model = model;

})();


