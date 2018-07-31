(function() {  


    var url = "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50";
    $.get(url)
    .done(function(response) {

		console.log(response);
        updateUISuccess(response)
		
    })
    .fail(function(error) {
        console.log(error);
        
        updateUIError()
			
	});

	//handle XHR success
	function updateUISuccess(response) {

        for (var i = 0; i < 25; i++){
            var charlist = response[i];
            if (charlist.name != "" || charlist.name != undefined){
                var $leftdiv = $('#leftdiv');
                $leftdiv.append("<li><a>" + charlist.name + '</a></li>');
            }
        }
        for (var i = 25; i < 500; i++){
            var charlist = response[i];
            if (charlist.name != "" || charlist.name != undefined){
                var $chardiv = $('#chardiv');
                $chardiv.append("<li><a>" + charlist.name + '</a></li>');
                
            }
        }
	}

	// handle XHR error
	function updateUIError() {
//		var weatherBox = document.getElementById("weather");
//		weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}

})();