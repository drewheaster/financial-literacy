
const apiKey = 'AIzaSyBbMX2clwf2JERc_kk8SbV72U6lsr1Tbg0';
const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLlv-v0mrsq3qJK_95hV7pxBDC_Crw7xUG&key=${apiKey}&maxResults=50`;
const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCT5tNhFbfQRXMkUzZE8XzyQ&key=${apiKey}`;

const handleVideoAppend = function(videos) {

    for ( let i = 0; i < videos.length; i++ ) {
        const newVideoCard = document.createElement('a');
        const newVideoCardImg = document.createElement('img');
        const newVideoDetails = document.createElement('div');
        const newVideoCardTitle = document.createElement('p');
        const newVideoCardChannelImg = document.createElement('img');
    
        newVideoCard.setAttribute("class", "youtube-video-container");
        newVideoCardImg.setAttribute("id", "thumbnail");
        newVideoCardImg.setAttribute("class", "youtube-video-img");

        newVideoCardTitle.setAttribute("id", "video-title");
        newVideoCardChannelImg.setAttribute("class", "youtube-video-img");
    
        const videoTitle = document.getElementById('video-title');
        const videoThumbnail = document.getElementById('thumbnail');
        const channelProfilePic = document.getElementById('channel-img');
        const youtubeVideo = document.getElementById('youtube-video');
        const youtubeScrollBar = document.getElementById("yt-scrollbar");
    
        youtubeScrollBar.appendChild(newVideoCard);
        newVideoCard.appendChild(newVideoCardImg);

        const videoUrl = videos[i].snippet.resourceId.videoId;
        videoTitle.textContent = videos[i].snippet.title;
        videoThumbnail.setAttribute("src", videos[i].snippet.thumbnails.maxres.url);
        newVideoCard.setAttribute("href", `https://www.youtube.com/watch?v=${videoUrl}`);
    }

}

fetch(playlistUrl)
    .then(response => response.json())
    .then(data => { 
        const videos = data.items;
        handleVideoAppend(videos);
    })

fetch(channelUrl)
    .then(response => response.json())
    .then(data => {
        channelProfilePic.setAttribute("src", data.items[0].snippet.thumbnails.high.url)
    })

    