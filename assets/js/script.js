$(document).ready(function(){
	
	// Question 4
	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$("#bench-img").hover(function() {$("#title").fadeIn(1000);}
		// function(){$(this).animate({width: 400px, height:400px}, 1000);},        
	 //    function(){$(this).animate({width: 200px, height:200px}, 1000);}
	 );



	// $("#title").hover(function() {$("#title").animate({
	//     top: "+=50"
	// 	}
	// 	2000);}
	// );

	

	// why isn't the pointer to hand thing working???
	$("#title").hover(
		function() {
			if($("#title").position().top <= 100) {
				$("#title").css({
				transition: 'background-color .5s ease-in-out',
			    "background-color": "",
			    "background-color": "rgba(0,0,0,.8)",
				"cursor:": "hand"});
	    	} else {
	    		$("#title").css({
				transition: 'background-color .5s ease-in-out',
			    "background-color": "",
			    "background-color": "rgba(0,0,0,.4)",
				"cursor:": "pointer"});
	    	}},
		function() {$("#title").css({
			transition: 'background-color .5s ease-in-out',
		    "background-color": "",
		    "background-color": "rgba(0,0,0,.8)",
			"cursor:": "hand"});}
		// function(){$(this).animate({width: 400px, height:400px}, 1000);},        
	 //    function(){$(this).animate({width: 200px, height:200px}, 1000);}
	 );

	$("#title").click(function() {
		if($("#title").position().top <= 100 ) {
			console.log($("#title").position().top)
	        {return;}
	    } else { 
	        $("#title").animate({
	            top: '-=200'
	        },
	        { "duration": 1000, 
	          "easing": "linear" }
	        );
	        $("#options").fadeIn(1000);
    	}


	 //  	$( "#title" ).animate({
		//     top: "+=200",
		// }, 1000);
	});
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
	// $("#submit-button").click(function() {$("#modal-container").hide();})
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	// $("#cancel-button").click(function() {$("#modal-container").hide();})
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	// $("#modal-overlay").click(function() {$("#modal-container").hide();})
});