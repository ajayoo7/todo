$(document).ready(function(){


	// Define function to add tasks to list
	function addTodo(){
		if($('input').val().trim() == "") {
			// Show error message
			$('.error').fadeIn(200);
			} else {
			// Hide error message
			$('.error').hide();

			// Get input value
			var $todo = $('input').val(); 

			// Create new list item
			var $newListItem = $('<li class="todo">' + $todo + '<span>' + 
			'<a href="#" class="check">' + '<i class="fa fa-check fa-lg"></i>' + '</a>' +
			'<a href="#" class="delete-todo">' + '<i class="fa fa-trash-o fa-lg"></i>' + '</a>' + 
			'</span>' + '</li>');

			// Add list item to end of list
			var $addListItem = $('ul').append($newListItem);
			
		
			// Hide list item before fading it into view
			$newListItem.hide().fadeIn(500);

			// Refocus input box for next task
			$('input').val("").focus();
		}
	};

	// Clear error message when 'x' icon is clicked
	$('i.fa-times').on('click', function(){
		$('.error').hide();
	});
	
	
	
	
	// Call addTodo function when enter key is pressed
	$(document).on('keypress', function(e){
		if(e.which == 13) {
			addTodo();
		}
	});
	
	
	
// Call addTodo function on click
	$('.add-todo').on('click', addTodo);


	
	

	// Clear typed text and refocus input box
	$('.clear-text').on('click', function(e) {
		e.preventDefault();
		$('input').val("").focus();
	});


	// Mark list item complete
	$(document).on('click', '.check', function(e){
		e.preventDefault();
		$(this).closest('li').toggleClass('complete');
	});


	// Delete list item
	$(document).on('click', '.delete-todo' , function(e){
		e.preventDefault();
		$(this).closest('li').fadeOut(500, function(){
			$(this).remove();
		});
	});

});