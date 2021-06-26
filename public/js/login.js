document.querySelector('#login').addEventListener('click', async (e) => {
    e.preventDefault();
    const user_name = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const response = await fetch('/api/user/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            user_name,
            password,
        }),
    });

    if (response.ok) {
        window.location.assign('/');
    }
});
document.querySelector('#signup').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#signupemail').value;
    const user_name = document.querySelector('#signupusername').value;
    const password = document.querySelector('#signuppassword').value;

    const response = await fetch('/api/user', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            email,
            user_name,
            password,
        }),
    });

    if (response.ok) {
        window.location.assign('/');
    }
});
