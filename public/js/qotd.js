const subBtn = document.querySelector('#submit')

const commentFormHandler = async (event) => {
    event.preventDefault();

    const user_id = event.target.getAttribute('data-userid')
    const daily_id = event.target.getAttribute('data-dq')
    const comment = document.querySelector('#comment').value

    console.log(user_id, daily_id, comment);

    if (user_id && daily_id && comment) {
        const response = await fetch('/api/comments/', {
            method: 'post',
            body: JSON.stringify({ user_id, daily_id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/qotd');
        } else {
            alert(response.statusText);
        }
    }
};
subBtn.addEventListener('click', (e) => { commentFormHandler(e) })




