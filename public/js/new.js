const newFormHandler = async function (event) {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post_title"]').value;
  const contents = document.querySelector('textarea[name="comments"]').value;
  
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      post_title,
      contents
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.href = ('/dashboard');
};

document.getElementById('new-post-btn').addEventListener('click', function (event) {
  console.log('clicked');
  var blogPost = document.getElementById('blogPost')
  blogPost.classList.remove("hide")
  console.log(event.target);
  event.target.classList.add("hide")
});


document.getElementById('new-post-form').addEventListener('submit', newFormHandler)