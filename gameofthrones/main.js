(function() {  

    for (var j = 1; j < 23; j++){
    var url = "https://www.anapioficeandfire.com/api/characters?page=" + j + "&pageSize=50";

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
                if (charlist.aliases.length != 1){
                    $leftdiv.append("<li><a>" + charlist.name + " also known as " + charlist.aliases[0] +'</a></li>');
                } else {
                $leftdiv.append("<li><a>" + charlist.name +'</a></li>');
                }
            }
        }
        for (var i = 26; i < 50; i++){
            var charlist = response[i];
            if (charlist.name != "" || charlist.name != undefined){
                var $chardiv = $('#chardiv');
                if (charlist.aliases.length != 1){
                    $chardiv.append("<li><a>" + charlist.name + " also known as " + charlist.aliases[0] +'</a></li>');
                } else {
                    $chardiv.append("<li><a>" + charlist.name + '</a></li>');
                }
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
    }
})();