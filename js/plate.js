function toSearch() {
	location.href='file:///Users/audylebovitz/Desktop/Microbiome/foodsearch.html';
}

function toAnalysis() {
	location.href='file:///Users/audylebovitz/Desktop/Microbiome/analysis.html';
}

function getCookie(tag){
	var pairs = document.cookie.split('; ');
	for(var i = 0; i < pairs.length; i++){
		var data = pairs[i].split('=');
		if(data[0] == tag){
			return data[1];
		}
	}
	return '';
}

function setCookie(tag, param){
	document.cookie = tag + "=" + param;
}

var plate_string = atob(getCookie('plate_list'));

if(plate_string == ''){
	// set default cookie with empty array
	setCookie('plate_list', '');
}
else{
	document.getElementById('empty').style.visibility = 'hidden';
	// extract data from cookie
	var html = "";
	var split_array = plate_string.split('~');
	for(var i = 0; i < split_array.length; i++){
		var e = split_array[i].split('$');
		if(e.length == 3){
			html += "<div id=" + e[0] + " class='food'>";
			html += "<div class='name'>" + e[1] + "</div>";
			html += "<div class='cat'>" + e[2] + "</div>";
			html += "</div>";
		}
		else{
			var group_name = e[0];
			for(var j = 1; j < e.length; j += 3){
				var s = e.slice(j, j + 3);
				html += "<div id=" + s[0] + " class='food'>";
				html += "<div class='name'>" + s[1] + "</div>";
				html += "<div class='cat'>" + s[2] + "</div>";
				html += "</div>";
			}
		}
	}
	document.getElementById("plate").innerHTML = html;
	console.log(html);
}

console.log('ccc')