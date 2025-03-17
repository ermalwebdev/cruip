export function setupVideoPlayer(videoId, posterPath) {
  const player = videojs(videoId, {
    controls: true,
    autoplay: false,
  });

  player.poster(posterPath);

  document.addEventListener("DOMContentLoaded", function (e) {
    player.on("loadedmetadata", function () {
      const mainVideoDuration = player.cache_.duration;
      let finalDuration = mainVideoDuration / 60;
      document.querySelector(
        ".vjs-icon-placeholder"
      ).textContent = `Watch Demo - ${(finalDuration.toFixed(2) - 0.3)
        .toString()
        .replace(".", ":")}`;
    });
  });
  return player;
}
