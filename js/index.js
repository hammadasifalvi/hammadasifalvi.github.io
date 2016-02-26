var ref = new Firebase("https://fypvoicerobo.firebaseio.com/");

// Thanks to https://gist.github.com/hurjas/2660489#file-timestamp-js-L26


function postComment() {
  var name = document.getElementById("name").value,
      comment = document.getElementById("comment").value;
  

  if (name && comment) {
    ref.push({
      indexes: name,
      action: comment


    });
  }

  document.getElementById("name").value = '';
  document.getElementById("comment").value = '';
}

ref.on("child_added", function(snapshot) {
  var comment = snapshot.val();
  addComment(comment.name, comment.comment);
});

function addComment(name, comment) {
  var comments = document.getElementById("comments");
  comments.innerHTML = "<hr><h4>" + name + " says<span>" +  "</span></h4><p>" + comment + "</p>" + comments.innerHTML;
}


            