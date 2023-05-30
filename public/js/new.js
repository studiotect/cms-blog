const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.href = ('/dashboard');
  document.location.replace('/thisroutedoesntexist');
};

document.getElementById('new-post-form').addEventListener('click', function () {
  console.log('clicked');
  newFormHandler();
});


