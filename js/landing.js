function showVideo() {
	var elem = document.getElementById("video");
  	//document.getElementById("video").style.display = "block";

	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	}
	else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	}
	else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
	else if (elem.msRequestFullscreen) { 
		elem.msRequestFullscreen();
	}

	elem.play();

	document.getElementById("video").addEventListener('ended',myHandler,false);
		function myHandler(e) {
			location.href='file:///Users/audylebovitz/Desktop/Microbiome/plate.html';
    	}
}