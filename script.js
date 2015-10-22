$(document).ready(function(){
	newGrid(16);
	$('.square').on('mouseenter', function(){
		$(this).addClass('hover');
	});
	//button to make a new grid asking user how many square per size
	$('#button').on('click', function(){
		var row = prompt("How many squares per side?");
		while(row < 1 || row > 64 || isNaN(row)){
			row = prompt("Pick a number between 1 and 64!")
		}
		$('.grid').empty();
		newGrid(row);
		$('.square').on('mouseenter', function(){			
			$(this).addClass('hover');
		});
	});
	//button to clear the grid
	$('#clear').on('click', function(){
		$('.square').removeClass('hover');
	});
	//button to remove border of the grid
	$('#border').on('click', function(){
		$('.square').toggleClass('removeBorder');
		$('.grid').toggleClass('border');
	});
});
function newGrid(row) {
	for(var i = 1; i <= row; i++){
			$('.grid').prepend('<div class="row"></div>')
	};
	for (var j = 1; j <= row; j++){
			$('.row').prepend('<div class="square"></div>');
	};
	$('.square').height($('.square').width());
	$('.grid').height($('.grid').width());
	$('.grid').removeClass('border');
}