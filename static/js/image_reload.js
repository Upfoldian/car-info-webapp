function imageRefresh(img, timeout) {
	setTimeout(function() {
		var d = new Date;
		var http = img.src;
		if (http.indexOf("#d=") != -1) { http = http.split("#d=")[0]; } 

		img.src = http + '#d=' + d.getTime();
	}, timeout);
}