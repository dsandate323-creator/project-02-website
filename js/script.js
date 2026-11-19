document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("main img");

  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.title = "Click to view full screen";

    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      overlay.style.display = "flex";
      overlay.style.flexDirection = "column";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = "9999";
      overlay.style.cursor = "pointer";

      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.alt = img.alt;
      fullImg.style.maxWidth = "90%";
      fullImg.style.maxHeight = "80vh";
      fullImg.style.border = "2px solid #00FFFF";

      const caption = document.createElement("p");
      caption.textContent = img.alt + " (Click anywhere to close)";
      caption.style.color = "yellow";
      caption.style.marginTop = "15px";
      caption.style.fontWeight = "bold";

      overlay.appendChild(fullImg);
      overlay.appendChild(caption);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});