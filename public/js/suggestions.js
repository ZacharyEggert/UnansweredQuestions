$(document).ready(function () {
    $('select')
        .change(function () {
            $(this)
                .find('option:selected')
                .each(function () {
                    var optionValue = $(this).attr('value');
                    if (optionValue) {
                        $('.box2')
                            .not('.' + optionValue)
                            .hide();
                        $('.' + optionValue).show();
                    } else {
                        $('.box2').hide();
                    }
                });
        })
        .change();
});

document.querySelector('#suggestion').addEventListener('click', async (e) => {
    e.preventDefault();
    const sugg_type = document.querySelector('#suggestion-type').options[
        document.querySelector('#suggestion-type').selectedIndex
    ].value;
    const name = document.querySelector('#phil-name').value;
    const quote = document.querySelector('#quote').value;
    const question = document.querySelector('#quest').value;
    const quotephilname = document.querySelector('#q-phil-name').value;

    const response = await fetch('/api/suggestions', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            sugg_type,
            name,
            quote,
            question,
            quotephilname,
        }),
    });

    if (response.ok) {
        window.location.assign('/');
    }
});
