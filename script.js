const snapsImage = document.querySelector('img[alt="snaps"]');
const mangoImage = document.querySelector('img[alt="mango"]');
const fremImage = document.querySelector('img[alt="frem"]');
const olImage = document.querySelector('img[alt="øl"]');

// Add click event listeners to the specific images
snapsImage.addEventListener("click", () => {
  console.log("indeholder alkohol");
});

mangoImage.addEventListener("click", () => {
  console.log("alkoholfri");
});

fremImage.addEventListener("click", () => {
  console.log("alkoholfri");
});

olImage.addEventListener("click", () => {
  console.log("indeholder alkohol");
});
