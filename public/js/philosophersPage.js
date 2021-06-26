$('.card').on('click', function () {
    var profInfo = $(this).children('.details').children('h2').text();
    var imgInfo = $(this).children('.imgBx').children('img').attr('src');
    console.log(profInfo);
    var profUrl = './philosopher-profile.html?' + profInfo + '&' + imgInfo;
    window.location.assign(profUrl);
});
