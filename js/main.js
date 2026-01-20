document.addEventListener("DOMContentLoaded", () => {
  const backgroundMusic = document.getElementById("background-music");
  const muteButton = document.getElementById("mute-button");

  if (backgroundMusic && muteButton) {
    // Intenta reproducir considerando políticas del navegador
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Audio iniciado correctamente");
        })
        .catch(() => {
          backgroundMusic.muted = true;
          muteButton.textContent = "Unmute";
          console.warn("Autoplay bloqueado por navegador");
        });
    }

    muteButton.addEventListener("click", () => {
      backgroundMusic.muted = !backgroundMusic.muted;
      muteButton.textContent = backgroundMusic.muted ? "Unmute" : "Mute";

      if (!backgroundMusic.muted && backgroundMusic.paused) {
        backgroundMusic
          .play()
          .catch((e) => console.error("Error reproduciendo:", e));
      }
    });

    muteButton.textContent = backgroundMusic.muted ? "Unmute" : "Mute";
  } else {
    console.warn("Elementos de audio no encontrados");
  }
});
