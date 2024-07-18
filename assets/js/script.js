
const apiKey = '';
const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLlv-v0mrsq3qJK_95hV7pxBDC_Crw7xUG&key=${apiKey}&maxResults=50`;
const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCT5tNhFbfQRXMkUzZE8XzyQ&key=${apiKey}`;

const handleVideoAppend = function(videos) {

    for ( let i = 0; i < videos.length; i++ ) {
        const videoUrl = videos[i].snippet.resourceId.videoId;

        const youtubeScrollBar = document.getElementById("yt-scrollbar");

        const newVideoCard = document.createElement('a');
        const newVideoCardImg = document.createElement('img');
        const newVideoDetails = document.createElement('div');
        const newVideoCardTitle = document.createElement('p');
        const newVideoTitleDiv = document.createElement('div');
        const newVideoCardChannelImg = document.createElement('img');
    
        newVideoCard.setAttribute("class", "youtube-video-container");
        newVideoCard.setAttribute("target", "_blank");
        newVideoCard.setAttribute("href", `https://www.youtube.com/watch?v=${videoUrl}`);
        newVideoCardImg.setAttribute("id", "thumbnail");
        newVideoCardImg.setAttribute("class", "youtube-video-img");
        newVideoCardImg.setAttribute("src", videos[i].snippet.thumbnails.maxres.url);
        newVideoDetails.setAttribute("class", "youtube-video-details");
        newVideoCardChannelImg.setAttribute("id", "channel-img");
        newVideoTitleDiv.setAttribute("class", "youtube-video-title");
        newVideoCardTitle.setAttribute("id", "video-title");
    
        youtubeScrollBar.appendChild(newVideoCard);
        newVideoCard.appendChild(newVideoCardImg);
        newVideoCard.appendChild(newVideoDetails);
        newVideoDetails.appendChild(newVideoCardChannelImg);
        newVideoDetails.appendChild(newVideoTitleDiv);
        newVideoTitleDiv.appendChild(newVideoCardTitle);

        newVideoCardTitle.textContent = videos[i].snippet.title;
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

    