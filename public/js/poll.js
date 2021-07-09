const makePercent = (num1, num2) => {
    return Math.round(
        100 * ((num1 * 1) / (num1 * 1 + num2 * 1))
            ? 100 * ((num1 * 1) / (num1 * 1 + num2 * 1))
            : 0
    );
};

document.querySelectorAll('.yes-btn').forEach((n) => {
    n.addEventListener('click', async (e) => {
        const target = e.currentTarget;

        const res = await fetch(
            '/api/polls/' + target.getAttribute('data-poll-id'),
            {
                method: 'PUT',
                body: JSON.stringify({
                    vote_yes:
                        target.getAttribute('data-yes') * 1 + 1
                            ? target.getAttribute('data-yes') * 1 + 1
                            : 1,
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        );

        console.log(res);

        const parent = target.parentNode;

        const yes = target.getAttribute('data-yes') * 1 + 1;
        const no = target.nextElementSibling.getAttribute('data-no') * 1;

        const yesPercent = makePercent(yes, no);
        const noPercent = makePercent(no, yes);

        parent.classList.remove('flex');
        parent.classList.add('hidden');
        parent.nextElementSibling.firstElementChild.firstElementChild.setAttribute(
            'style',
            `width:${yesPercent}%`
        );
        parent.nextElementSibling.lastElementChild.firstElementChild.setAttribute(
            'style',
            `width:${noPercent}%`
        );
        parent.nextElementSibling.classList.remove('hidden');
        parent.nextElementSibling.classList.add('flex');
    });
});

document.querySelectorAll('.no-btn').forEach((n) => {
    n.addEventListener('click', async (e) => {
        const target = e.currentTarget;

        const res = await fetch(
            '/api/polls/' + target.getAttribute('data-poll-id'),
            {
                method: 'PUT',
                body: JSON.stringify({
                    vote_no:
                        target.getAttribute('data-no') * 1 + 1
                            ? target.getAttribute('data-no') * 1 + 1
                            : 1,
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        );

        console.log(res);

        const parent = target.parentNode;

        const yes = target.previousElementSibling.getAttribute('data-yes') * 1;
        const no = target.getAttribute('data-no') * 1 + 1;

        const yesPercent = makePercent(yes, no);
        const noPercent = makePercent(no, yes);

        parent.classList.remove('flex');
        parent.classList.add('hidden');
        parent.nextElementSibling.firstElementChild.firstElementChild.setAttribute(
            'style',
            `width:${yesPercent}%`
        );
        parent.nextElementSibling.lastElementChild.firstElementChild.setAttribute(
            'style',
            `width:${noPercent}%`
        );
        parent.nextElementSibling.classList.remove('hidden');
        parent.nextElementSibling.classList.add('flex');
    });
});
