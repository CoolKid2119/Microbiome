function showVideo() {
  document.getElementById("video").style.display = "block"; 
}

document.getElementById('video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
    	location.href='https://coolkid2119.github.io/Microbiome/plate.html';
    }