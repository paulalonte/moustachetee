$(document).ready(function(){
	console.log('ready');

	//hide all tee sizes by default
	hideAllTees();

	var aryBtnSizes = $('.button-sizes');

	var smallCount = 0;
	var mediumCount = 0;
	var largeCount = 0;
	var selectedSize = "";
	var sizeValue = "";
	var totalItems = 0;
	var isSelectedSize = false;
	var isItemAdded = false;

	$('.button-sizes').click(function(){
		removeActive();
		$(this).toggleClass('size-selected');

		isSelectedSize = true;

		sizeValue = $(this).val();
		var sizeLabel;

		selectedSize = sizeValue;

		switch(sizeValue) {
			case "small":
				sizeLabel = "S";
			break;

			case "medium":
				sizeLabel = "M";
			break;

			case "large":
				sizeLabel = "L";
			break;
		}

		$('.error').css('display', 'none');

		console.log(smallCount);
		$('.size-label').text(sizeLabel);
	});

	$('.button-add-to-cart').click(function(){

		//add items only if user selects a size
		//if no size selected throw error
		if(isSelectedSize) {
			isItemAdded = true;

			switch(sizeValue) {
				case "small":
					smallCount++;
					showTee('.small-tee');
					$('.small-tee .item-count').text(smallCount);
				break;

				case "medium":
					mediumCount++;
					showTee('.medium-tee');
					$('.medium-tee .item-count').text(mediumCount);
				break;

				case "large":
					largeCount++;
					showTee('.large-tee');
					$('.large-tee .item-count').text(largeCount);
				break;
			}

			totalItems++;

			console.log(totalItems);

			$('.nav-item-cart-count').text(totalItems);
		} else {
			$('.error').css('display', 'block');
		}
			
	})

	$('#myCart').mouseover(function(){
		//only when item is added
		if(isItemAdded) {
			$('.cart-details-container').css('display', 'block');
			$('nav a').addClass('hovercart');
		}
		
	})

	$('#myCart').mouseout(function(){
		$('.cart-details-container').css('display', 'none');
		$('nav a').removeClass('hovercart');
	})

	function showTee($classname) {
		$($classname).css('display', 'flex');
	}

	function hideAllTees() {
		$('.small-tee').css('display', 'none');
		$('.medium-tee').css('display', 'none');
		$('.large-tee').css('display', 'none');
	}

	function removeActive(){
        for(i=0; i < aryBtnSizes.length;i++){
            $(aryBtnSizes[i]).removeClass("size-selected");
        }
    }
})
