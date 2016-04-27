$(document).ready(function(){
	
	$("#foreground").hover(function() {$("#title").fadeIn(1000);}
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
			if($("#container").position().top <= 200) {
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
		if($("#container").position().top <= 200 ) {
			console.log($("#title").position().top)
	        {return;}
	    } else { 
	        $("#container").animate({
	            top: "22%",
	        },
	        { "duration": 800, 
	          "easing": "linear" }
	        );
	        // $("#title").css({
	        // 	"transition:": "background-color .5s ease-in-out",
	        // 	"width":"100%",
	        // 	"left":"0px"
	        // });
	        $("#options").fadeIn(1000);
    	}

    $("#login").hover(
		function() {
	    		$("#login").css({
				transition: 'background-color .5s ease-in-out',
			    "background-color": "",
			    "background-color": "rgba(255,255,255,.4)",
				"cursor": "pointer"});
	    	},
		function() {$("#login").css({
			transition: 'background-color .5s ease-in-out',
		    "background-color": "",
		    "background-color": "rgba(0,0,0,0)"});}
		// function(){$(this).animate({width: 400px, height:400px}, 1000);},        
	 //    function(){$(this).animate({width: 200px, height:200px}, 1000);}
	);

	$("#instr").hover(
		function() {
	    		$("#instr").css({
				transition: 'background-color .5s ease-in-out',
			    "background-color": "",
			    "background-color": "rgba(255,255,255,.4)",
				"cursor": "pointer"});
	    	},
		function() {$("#instr").css({
			transition: 'background-color .5s ease-in-out',
		    "background-color": "",
		    "background-color": "rgba(0,0,0,0)"});}
		// function(){$(this).animate({width: 400px, height:400px}, 1000);},        
	 //    function(){$(this).animate({width: 200px, height:200px}, 1000);}
	);

    $("#about").hover(
		function() {
	    		$("#about").css({
				transition: 'background-color .5s ease-in-out',
			    "background-color": "",
			    "background-color": "rgba(255,255,255,.4)",
				"cursor": "pointer"});
	    	},
		function() {$("#about").css({
			transition: 'background-color .5s ease-in-out',
		    "background-color": "",
		    "background-color": "rgba(0,0,0,0)"});}
		// function(){$(this).animate({width: 400px, height:400px}, 1000);},        
	 //    function(){$(this).animate({width: 200px, height:200px}, 1000);}
	 );

	});
});