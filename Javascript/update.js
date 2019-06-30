function update_post(){
	var uuid =  document.getElementById("uid_post").value;
  var subject =  document.getElementById("subject").value;
  var description =  document.getElementById("description").value;
	const url = "http://127.0.0.1:5984/blogposts/"+uuid
	fetch(url)
  	.then(function(response) {
    return response.json();
  	})
  	.then(function(jsonResponse) {
  		var revision = jsonResponse['_rev']
      var name = jsonResponse['name']
      var email = jsonResponse['email']
      var upvote = jsonResponse['upvote']
      var downvote = jsonResponse['downvote']
  		var xhr = new XMLHttpRequest();
  		xhr.open("PUT", "http://localhost:5984/blogposts/" + uuid + "?rev=" + revision, true,"admin","admin");
		  xhr.withCredentials = true;
		  xhr.send(JSON.stringify({
        "name": name,
        "email": email,
        "upvote": upvote,
        "downvote": downvote,        
        "subject": subject,
        "description": description
      }));
		  alert("Blog post updated!")
  	}); 
}


