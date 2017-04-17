var requestUrl = "http://139.199.196.101:8080/test/getData";

function getData(method, url,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystateschange = function() {
		if (xhr.readyStates == 4) {
			if (xhr.status == 200) {
				var dataArr = JSON.parse(xhr.responseText).rows;
				callback && callback(dataArr);
			}
		}
	}

	xhr.open(method,url,true);
	xhr.send()
}

function dataParse(dataArr) {
	dataArr.sort(function(a, b) {
		return a.sort - b.sort
	})
	return dataArr;
}

function createElement(dataArr) {
	for (var i = 0; i < dataArr.length; i++) {
		if (dataArr[i].isad) {
			var $searchContent = $('<div class="search-row da-search-row"></div>');
		} else {
			var $searchContent = $('<div class="search-row"></div>');
		}

		$('.search-wrap').append($searchContent)

		var searchHead = $('<h2 class="search-tit"><a href="' + dataArr[i].href + '"></a></h2>');

		var $searchContentWrap = $('<div class="content-wrap clearfix"></div>');

		$searchContent.append($searchHead).append($searchContentWrap)

		if (dataArr[i].img) {
			var $contentImg = $('<img class="cont-img fl" src="' + dataArr[i].img + '" >');
			var $infoWarp = $('<div class="info-wrap fl"></div>')

			$searchContentWrap.append($contentImg).append($infoWarp)

		} else {
			var $infoWarp = $('<div class="info-wrap big-info-wrap fl"></div>')

			$searchContentWrap.append($infoWarp)

		}
		var $info = $('<div class="info">' + dataArr[i].cont +'</div>');
		var $footer = $('<div class="footer"></div>');

		$infoWarp.append($info).append($footer)

		var $infoLink = $('<span class="info-link">' + dataArr[i].targetUrl +'</span>');
		var $infoTriangle = $('<span class="info-triangle"></span>');

		$footer.append($infoLink).append($infoTriangle)

		if (dataArr[i].commit) {
			var $infoComment = $('<span class="info-comment">' + dataArr[i].commit + '</span>');

			$footer.append($infoComment)
		}

		$infoTriangle.on('click', function(ev) {
			ev.stopPropagation();

			console.log($('.dialog'))

			if ($('.dialog').length) {
				$('.dialog'.remove());
			}

			var left = $(this).offset().left;
			var top = $(this).offset().top;

			$('<div class="dialog"></div>').css({
				width:'74px',
				height:'112px',
				backgroundColor:'red',
				position:'absolute',
				top:top + 10,
				left:left - 30
			}).appendTo($('body'));

			$(document).on('click',function() {
				$('.dialog').remove();
			});
		})
	}
}	

getData('get', requestUrl,function(dataArr) {
	var new dataParse(dataArr)
});

