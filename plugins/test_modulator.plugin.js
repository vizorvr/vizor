g_Plugins["test_modulator"] = function(core) {
	var self = this;
	
	this.input_slots = [ { name: 'value', dt: core.datatypes.FLOAT } ];
	this.output_slots = [ { name: 'value', dt: core.datatypes.FLOAT } ];
	this.state = { input_val: 1.0, val: 1.0 };
	this.output_val = 1.0;
	
	this.create_ui = function()
	{
		var inp = $('<input type="text" value="1.0" style="width: 30px;" />');
		
		inp.change(function(e) {
			try { self.state.val = parseFloat(inp.val()); }
			catch(e) 
			{
				self.state.val = 1.0;
				inp.val('1.0');
			}
		});
		
		return inp;
	};
	
	this.update_input = function(index, data)
	{
		self.state.input_val = data;
	};	

	this.update_state = function(delta_t)
	{
		self.output_val = self.state.input_val * self.state.val;
	};
	
	this.update_output = function(index)
	{
		return self.output_val;
	};	
};
