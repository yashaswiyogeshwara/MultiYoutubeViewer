function onClientLoad() {
    gapi.client.setApiKey("AIzaSyAopzUJBrVaD7ncUFeREkAaPMYRH4-O22Y");
    gapi.client.load("youtube", "v3", onYouTubeLoaded);
}

function onYouTubeLoaded() {
    var request = gapi.client.youtube.search.list({
        q: 'goomer',
        type: 'video',
        part: 'snippet',
        maxResults:6
    });
    request.execute(function (response) {
        for (var vds in response.items) {
            createYouTubeFrame(response.items[vds].id["videoId"]);
        }
    });
}

function createYouTubeFrame(videoId) {
    var src = "https://www.youtube.com/embed/" + videoId;
    var ifm = document.createElement('iframe');
    ifm.setAttribute('width', 420);
    ifm.setAttribute('height', 360);
    ifm.setAttribute('src', src);
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.appendChild(ifm);
}