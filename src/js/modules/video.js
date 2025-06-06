const youtubeScriptTag = document.createElement("script");
youtubeScriptTag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(youtubeScriptTag);

window.onYouTubeIframeAPIReady = () => {
  const player = new YT.Player("player", {
    videoId: "orbr-C3gYKk",
    playerVars: {
      controls: 0,
    },
    events: {
      onReady: (event) => {
        const youtubeSlide = document.getElementById("youtube-slide");
        let isVideoPlaying = false;

        youtubeSlide.addEventListener("click", () => {
          if (isVideoPlaying) {
            event.target.stopVideo();
          } else {
            event.target.playVideo();
          }

          isVideoPlaying = !isVideoPlaying;
        });
      },
    },
  });
};
