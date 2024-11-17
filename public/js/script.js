document.getElementById('signForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userEmail = document.getElementById('userEmail').value;
    
    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch('/api/send-signing-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Signing link sent to your email!');
      } else {
        alert('Error sending signing link: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Request failed', error);
      alert('Error sending signing link.');
    }
  });
  