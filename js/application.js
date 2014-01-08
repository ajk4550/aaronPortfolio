$(document).ready(function() {
	$(".social-icon").mouseenter(function() {
		$(this).css("opacity", 1);
	}).mouseleave(function() {
		$(this).css("opacity", 0.5);
	});

		$("#navigation").mouseenter(function() {
			if ($(document).scrollTop() < 450) {
				$("#navigation").removeClass("navbar-transparent", 500);
			}
	}).mouseleave(function() {
			if ($(document).scrollTop() < 450) {
				$("#navigation").addClass("navbar-transparent", 500);
			}
	});
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	// Used for showing the circles
	if (y > 300) {
		$("#section1").fadeIn();
	}
	else {
		// Fade out
		$("#section1").fadeOut();
	}
	if (y > 450) {
		$("#navigation").removeClass("navbar-static-top navbar-transparent").css("margin-top", "-50px").animate({"top" : "50px"},"slow").addClass("navbar-fixed-top");
		$("#section1").css("margin-top", "110px");
	}
	else{		
		$("#navigation").removeClass("navbar-fixed-top").addClass("navbar-static-top navbar-transparent");
		$("#section1").css("margin-top", "40px");
		$("#footer").fadeIn("slow");
	}

	if (y > 450 && y < 1200) {
		$("#footer").fadeOut("slow");
	}

	// Used for displaying the next line 
	if (y > 600) {
		$("#section2").fadeIn();
    
	}
	else {
		// Fade out
		$("#section2").fadeOut();
	}

		// Used for displaying the next line 
	if (y > 1000) {
		$("#section3").fadeIn();
	}
	else {
		// Fade out
		$("#section3").fadeOut();
	}
	if (y > 1200) {
		$("#footer").fadeIn().addClass("navbar-static-bottom");
	}
	
});
