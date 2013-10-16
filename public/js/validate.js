function validate(){
	var $requiredField = $('.required-field'),
		goodFields = $requiredField.length + $('[id*=hfAnswer]').length,
		totalFieldsToValidate = goodFields;
	
	$requiredField.each(function(index, element){
		var $this = $(this);
		
		// VALIDATE EMAIL:
		if($this.hasClass('validate-email') && !validateEmail($this.val())){
			$this.addClass('error');
			goodFields--;
		} else
		// VALIDATE ZIP CODE:
		if($this.hasClass('validate-zip') && $this.val().length < 5 || $this.val() == '00000' || $this.val() == '11111' || $this.val() == '22222' || $this.val() == '33333' || $this.val() == '44444' || $this.val() == '55555' || $this.val() == '66666' || $this.val() == '77777' || $this.val() == '88888' || $this.val() == '99999'){
			$this.addClass('error');
			goodFields--;
		} else
		// VALIDATE CHECKBOX:
		if($this.hasClass('validate-checkbox')){
			if($this.attr('checked') != 'checked'){
				//$this.addClass('error');
				goodFields--;
			}
		} else
		// VALIDATE CHECKBOX GROUP:
		if($this.hasClass('validate-group')){
			var totalInputs = $this.find('input').size(),
				notChecked = totalInputs;
			$this.find('input').each(function(e){
				if($this.find('input').eq(e).attr('checked') == 'checked'){
					notChecked--;
				}
			});

			if(notChecked == totalInputs){
				$this.find('.validate-group-error').show();
				goodFields--;
			}
			
		} else 
		// VALIDATE SELECT DROPDOWNS:
		if($this.get(0).tagName == 'SELECT' && $this.val().length <= 1){
			$this.addClass('error');
			goodFields--;
		} else {
			if($this.val().length < 1){
				$this.addClass('error');
				goodFields--;
			}
		}
	});
	
	/*
	$('[id*=hfAnswer]').each(function(index, element){
		var $this = $(this),
			$question = $this.parents('.question-group');
		
		if($this.val() == '-1'){
			//console.log($this.attr('id'));
			$question.addClass('error');
			goodFields--;
		}
	});
	*/

	//console.log(goodFields,totalFieldsToValidate);
	if(goodFields == totalFieldsToValidate){
		return true;
	} else {
		alert('Please review all the errors in red.');
		$("html,body").animate({scrollTop:$('.copy-wrapper').offset().top},800,'easeOutExpo');
		return false;
	}
};

// Validate Email Function
function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}