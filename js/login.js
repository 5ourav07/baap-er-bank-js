document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'user@gmail.com' && password === '1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Wrong Password')
    }
})