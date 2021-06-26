function getRequest(searchTerm) {
    var params = {
        part: 'snippet',
        type: 'video',
        videoSyndicated: 'true',
        order: 'relevance',
        maxResults: 1,
        // key: "AIzaSyA-PERyp6RWtIztoWvv4dynZlpds03hj-o",
        key: 'AIzaSyBWH8ojYF9YRbijUhlBQeCjuLtH6SQTIzQ',
        q: searchTerm,
        safeSearch: 'none',
    };
    url = 'https://www.googleapis.com/youtube/v3/search';
    console.log('hello');

    $.getJSON(url, params, function (data) {
        showResults(data.items);
        console.log('bye');
    });
}

function showResults(results) {
    var html = '';
    console.log(results[0]);
    console.log(results[0].id.videoId);
    var videoId = results[0].id.videoId;
    console.log(videoId);
    var newSrc = 'https://www.youtube.com/embed/' + videoId;
    $('iframe').attr('src', newSrc);
    $('.video').attr('style', '');
}
