document.getElementById('sendOtpButton').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    // Send OTP request
    fetch('http://localhost:3000/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          document.getElementById('otpSection').style.display = 'block';
        } else {
          alert(data.error);
        }
      });
  });

  document.getElementById('verifyOtpButton').addEventListener('click', () => {
    const otp = document.getElementById('otp').value.trim();
    if (!otp) {
      alert('Please enter the OTP.');
      return;
    }

    // Verify OTP request
    fetch('http://localhost:3000/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          window.location.href = 'create-list.html'; // Redirect to the list creation page
        } else {
          alert(data.error);
        }
      });
  });
