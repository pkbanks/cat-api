
window.addEventListener('load', function(){
	var images = document.getElementsByTagName("img");
	for(image in images){
		image.onerror = function(){
			console.log("oops!  missing pic");	
		}
	}
	// images.forEach(function(element){
	// 	// element.onerror = function(){
	// 	// 	console.log("oops!  missing pic");	
	// 	// }
	// })

});
