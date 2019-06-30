function submit_by_id() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var description = document.getElementById("description").value;
var xhr = new XMLHttpRequest();
var uuid = generate_uuid()


if (name == "")                                  
{ 
   window.alert("Please enter your name."); 
   name.focus(); 
   return false; 
} 

if (email == "")                                  
{ 
   window.alert("Please enter your email."); 
   name.focus(); 
   return false; 
} 

if (subject == "")                                  
{ 
   window.alert("Please enter the subject."); 
   name.focus(); 
   return false; 
} 

if (description == "")                                  
{ 
   window.alert("Please enter the description."); 
   name.focus(); 
   return false; 
} 

xhr.open("PUT", "http://localhost:5984/blogposts/" + uuid, true,"admin","admin");
xhr.withCredentials = true;
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "name": name,
    "email": email,
    "subject": subject,
    "upvote": 0,
    "downvote": 0,
    "description": description
}));
alert("Retain this id for future updates to blog posts:"+uuid)
}

function generate_uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



