function delete_post(){
	var uuid =  document.getElementById("uid_post").value;
	const url = "http://127.0.0.1:5984/blogposts/"+uuid
	fetch(url)
  	.then(function(response) {
    return response.json();
  	})
  	.then(function(jsonResponse) {
  		var revision = jsonResponse['_rev']
  		var xhr = new XMLHttpRequest();
  		xhr.open("DELETE", "http://localhost:5984/blogposts/" + uuid + "?rev=" + revision, true,"admin","admin");
		xhr.withCredentials = true;
		xhr.send(null)
		alert("Blog post deleted!")
  	}); 
}
