const apiKey = 'AIzaSyCNwPmkm_B_QTN-tv1zdCkxzYoZqeFvmYI';

const handleGetInvestingYouTube = function() {
    
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLlv-v0mrsq3qJK_95hV7pxBDC_Crw7xUG&key=${apiKey}&maxResults=50`;

    const handleVideoAppend = function(videos, newPic) {

        for ( let i = 0; i < videos.length; i++ ) {

            const videoUrl = videos[i].snippet.resourceId.videoId;

            const youtubeScrollBar = document.getElementById("investing-yt-scrollbar");

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
            newVideoTitleDiv.setAttribute("class", "youtube-video-title");
            newVideoCardTitle.setAttribute("id", "video-title");
            newVideoCardChannelImg.setAttribute("id", "channel-img");
            newVideoCardChannelImg.setAttribute("src", newPic);
        
            youtubeScrollBar.appendChild(newVideoCard);
            newVideoCard.appendChild(newVideoCardImg);
            newVideoCard.appendChild(newVideoDetails);
            newVideoDetails.appendChild(newVideoCardChannelImg);
            newVideoDetails.appendChild(newVideoTitleDiv);
            newVideoTitleDiv.appendChild(newVideoCardTitle);

            newVideoCardTitle.textContent = videos[i].snippet.title;

        }

    }

    const handleGetProfilePic = function() {

        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCT5tNhFbfQRXMkUzZE8XzyQ&key=${apiKey}`;

        return fetch(channelUrl)
            .then(response => response.json())
            .then(data => {
                const profileImage = data.items[0].snippet.thumbnails.high.url
                // const profilePic = document.getElementById("channel-img");
                // profilePic.setAttribute("src", profileImage);
                return profileImage;
            })

    }

    fetch(playlistUrl)
        .then(response => response.json())
        .then(data => { 
            const videos = data.items;
            handleGetProfilePic()
                .then(newPic => {
                    handleVideoAppend(videos, newPic);
                });
        })
};

const handleGetStocksYouTube = function() {
    
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLl_EHtw2h7QSPCKIDGme-kBgoCiFxUQ5Q&key=${apiKey}&maxResults=50`;

    const handleVideoAppend = function(videos, newPic) {

        for ( let i = 0; i < videos.length; i++ ) {

            const videoUrl = videos[i].snippet.resourceId.videoId;

            const youtubeScrollBar = document.getElementById("stocks-yt-scrollbar");

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
            newVideoTitleDiv.setAttribute("class", "youtube-video-title");
            newVideoCardTitle.setAttribute("id", "video-title");
            newVideoCardChannelImg.setAttribute("id", "channel-img");
            newVideoCardChannelImg.setAttribute("src", newPic);
        
            youtubeScrollBar.appendChild(newVideoCard);
            newVideoCard.appendChild(newVideoCardImg);
            newVideoCard.appendChild(newVideoDetails);
            newVideoDetails.appendChild(newVideoCardChannelImg);
            newVideoDetails.appendChild(newVideoTitleDiv);
            newVideoTitleDiv.appendChild(newVideoCardTitle);

            newVideoCardTitle.textContent = videos[i].snippet.title;

        }

    }

    const handleGetProfilePic = function() {

        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCK-aOjEvZNJl3HINja0gAiQ&key=${apiKey}`;

        return fetch(channelUrl)
            .then(response => response.json())
            .then(data => {
                const profileImage = data.items[0].snippet.thumbnails.high.url
                return profileImage;
            })

    }

    fetch(playlistUrl)
        .then(response => response.json())
        .then(data => { 
            const videos = data.items;
            handleGetProfilePic()
                .then(newPic => {
                    handleVideoAppend(videos, newPic);
                });
        })
};

const handleGetCryptoYouTube = function() {
    
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAAsdVgd9DsLLTBsIHEoE8VJzCdVBXYBE&key=${apiKey}&maxResults=50`;

    const handleVideoAppend = function(videos, newPic) {

        for ( let i = 0; i < videos.length; i++ ) {

            const videoUrl = videos[i].snippet.resourceId.videoId;

            const youtubeScrollBar = document.getElementById("crypto-yt-scrollbar");

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
            newVideoTitleDiv.setAttribute("class", "youtube-video-title");
            newVideoCardTitle.setAttribute("id", "video-title");
            newVideoCardChannelImg.setAttribute("id", "channel-img");
            newVideoCardChannelImg.setAttribute("src", newPic);
        
            youtubeScrollBar.appendChild(newVideoCard);
            newVideoCard.appendChild(newVideoCardImg);
            newVideoCard.appendChild(newVideoDetails);
            newVideoDetails.appendChild(newVideoCardChannelImg);
            newVideoDetails.appendChild(newVideoTitleDiv);
            newVideoTitleDiv.appendChild(newVideoCardTitle);

            newVideoCardTitle.textContent = videos[i].snippet.title;

        }

    }

    const handleGetProfilePic = function() {

        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCoaOxY9KWm_UIyp5FAZIfkA&key=${apiKey}`;

        return fetch(channelUrl)
            .then(response => response.json())
            .then(data => {
                const profileImage = data.items[0].snippet.thumbnails.high.url
                return profileImage;
            })

    }

    fetch(playlistUrl)
        .then(response => response.json())
        .then(data => { 
            const videos = data.items;
            handleGetProfilePic()
                .then(newPic => {
                    handleVideoAppend(videos, newPic);
                });
        })
};

const userInputEl = $("input[id='user-email']");
const emailModal = $("form[class='modal-content']");
const newsletterPopUp = $("div[class='modal']");

emailModal.on("submit", function(){
    localStorage.setItem("userEmail", userInputEl.val());
})

let prompt = setInterval(function(){
            if (localStorage.getItem("userEmail") !== null) {
                newsletterPopUp.removeClass('is-active');
                clearInterval(prompt);
            } else {
                newsletterPopUp.addClass('is-active')
            }
            }, 10000);

handleGetInvestingYouTube();
handleGetStocksYouTube();
handleGetCryptoYouTube();

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }
  
    function closeModal($el) {
        $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
    
        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });
  
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');
    
        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    document.addEventListener('keydown', (event) => {
        if(event.key === "Escape") {
            closeAllModals();
        } if(event.key === "Enter") {
            closeAllModals();
        }
    });
});