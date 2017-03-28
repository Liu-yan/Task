function a() {
	var xhr = new XMLHttpRequest();
	var showMessage = document.getElementById('showMessage');
	xhr.onreadystatechange = function() {
	 		if (xhr.readyState == 4 && xhr.status == 200) {
	 			console.log(JSON.parse(xhr.responseText));
	 			var data = JSON.parse(xhr.responseText);
	 			var newData = data.rows.sort(compare);
	 			console.log(newData);
				var aH3 = document.getElementsByTagName('h3');
				var aA = document.getElementsByClassName('a-one');
				var aAtwo= document.getElementsByClassName('a-two');
				var aP  = document.getElementsByTagName('p');				
				var aSpanTwo  = document.getElementsByClassName('span-two');
				var aImg  = document.getElementsByTagName('img');
				var oImg  = document.getElementsByClassName('img');
				for (var i = 0 ; i < data.rows.length; i++) {
					aH3[i].childNodes[0].innerHTML = newData[i].tit;
					aA[i].href = newData[i].href;
					aAtwo[i].href = newData[i].targetUrl;
					aAtwo[i].innerHTML= newData[i].targetUrl;
					aP[i].innerHTML = newData[i].cont;
					if (newData[i].cont == undefined) {
						aP[i].innerHTML = '';
					};
					aSpanTwo[i].innerHTML = newData[i].commit;
					if (newData[i].commit == undefined) {
						aSpanTwo[i].innerHTML = '';
					};
					aImg[i].src = newData[i].img;
					if (newData[i].img == undefined) {
						oImg[i].style.display = "none";
					}
					// oImg[i].style.display = "block";
				}

	 	}			
	}
	xhr.open("get", "http://139.199.196.101:8080/test/getData", true);
	xhr.send(null);
}
 a();

function compare(value1 ,value2) {
	if (value1.sort < value2.sort) {
		return -1;
	}
	else {
		return 1;		
	}
}

var aSpanOne = document.getElementsByClassName('span-one');
aSpanOne.onmouseover = function() {
	
}