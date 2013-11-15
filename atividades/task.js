addEventListener('message', function(e){
	setTimeout(function(){
		postMessage(e.data);
	}, 3000)
}, false);