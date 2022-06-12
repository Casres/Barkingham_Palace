async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="post-name"]').value;
    const breed = document.querySelector('input[name="post-breed"]').value;
    const size = document.querySelector('input[name="post-size"]').value;
    const description = document.querySelector('input[name="post-description"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        breed,
        size,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  