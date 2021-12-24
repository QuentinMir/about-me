const $lgContainerPS = document.getElementById("inline-gallery-containerPS");

const $lgContainerAI = document.getElementById("inline-gallery-containerAI");

const $lgContainerAE = document.getElementById("inline-gallery-containerAE");

const inlineGallery = lightGallery($lgContainerPS, {
  container: $lgContainerPS,
  dynamic: true,

  hash: false,

  closable: false,

  showMaximizeIcon: true,

  appendSubHtmlTo: ".lg-item",

  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [
    {
      src: "img/gorille.jpg",
      responsive: "img/gorille.jpg",
      thumb: "img/gorille.jpg",
    },
    {
      src: "img/gorille-2.jpg",
      responsive: "img/gorille-2.jpg",
      thumb: "img/gorille-2.jpg",
    },
    {
      src: "img/DBE.jpg",
      responsive: "img/DBE.jpg",
      thumb: "img/DBE.jpg",
    },
    {
      src: "img/DBE-2.jpg",
      responsive: "img/DBE-2.jpg",
      thumb: "img/DBE-2.jpg",
    },
    {
      src: "img/dual-light.jpg",
      responsive: "img/dual-light.jpg",
      thumb: "img/dual-light.jpg",
    },
    {
      src: "img/cosmic.jpg",
      responsive: "img/cosmic.jpg",
      thumb: "img/cosmic.jpg",
    },
    {
      src: "img/flod.jpg",
      responsive: "img/flod.jpg",
      thumb: "img/flod.jpg",
    },
    {
      src: "img/coco.jpg",
      responsive: "img/coco.jpg",
      thumb: "img/coco.jpg",
    },
    {
      src: "img/coco-hallo.jpg",
      responsive: "img/coco-hallo.jpg",
      thumb: "img/coco-hallo.jpg",
    },
    {
      src: "img/anniversary.jpg",
      responsive: "img/anniversary.jpg",
      thumb: "img/anniversary.jpg",
    },
    {
      src: "img/heavy-lights.jpg",
      responsive: "img/heavy-lights.jpg",
      thumb: "img/heavy-lights.jpg",
    },
  ],

  thumbWidth: 60,
  thumbHeight: "40px",
  thumbMargin: 4,
});

const inlineGallery2 = lightGallery($lgContainerAI, {
  container: $lgContainerAI,
  dynamic: true,

  hash: false,

  closable: false,

  showMaximizeIcon: true,

  // appendSubHtmlTo: ".lg-item",

  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [
    {
      src: "img/mockup-app.jpg",
      responsive: "img/mockup-app.jpg",
      thumb: "img/mockup-app.jpg",
    },
    {
      src: "img/flat-icons.jpg",
      responsive: "img/flat-icons.jpg",
      thumb: "img/flat-icons.jpg",
    },
    {
      src: "img/RX.jpg",
      responsive: "img/RX.jpg",
      thumb: "img/RX.jpg",
    },
    {
      src: "img/RX-2.jpg",
      responsive: "img/RX-2.jpg",
      thumb: "img/RX-2.jpg",
    },
    {
      src: "img/RX-3.jpg",
      responsive: "img/RX-3.jpg",
      thumb: "img/RX-3.jpg",
    },
    {
      src: "img/degrad-forme.jpg",
      responsive: "img/degrad-forme.jpg",
      thumb: "img/degrad-forme.jpg",
    },
    {
      src: "img/menu-cocktail.jpg",
      responsive: "img/menu-cocktail.jpg",
      thumb: "img/menu-cocktail.jpg",
    },
    {
      src: "img/x-bleu.jpg",
      responsive: "img/x-bleu.jpg",
      thumb: "img/x-bleu.jpg",
    },
    {
      src: "img/x-couleur.jpg",
      responsive: "img/x-couleur.jpg",
      thumb: "img/x-couleur.jpg",
    },
    {
      src: "img/arctic-Kiwi.jpg",
      responsive: "img/arctic-Kiwi.jpg",
      thumb: "img/arctic-Kiwi.jpg",
    },
  ],

  thumbWidth: 60,
  thumbHeight: "40px",
  thumbMargin: 4,
});

const inlineGallery3 = lightGallery($lgContainerAE, {
  container: $lgContainerAE,
  dynamic: true,

  hash: false,

  closable: false,

  showMaximizeIcon: true,

  // appendSubHtmlTo: ".lg-item",

  plugins: [lgThumbnail, lgVideo],
  dynamicEl: [
    {
      src: "https://youtu.be/qTiE3j3jHZ8",
      responsive: "https://youtu.be/qTiE3j3jHZ8",
      thumb: "https://img.youtube.com/vi/qTiE3j3jHZ8/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/B9iYEhemYzc",
      responsive: "https://youtu.be/B9iYEhemYzc",
      thumb: "https://img.youtube.com/vi/B9iYEhemYzc/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/366XZrOU17s",
      responsive: "https://youtu.be/366XZrOU17s",
      thumb: "https://img.youtube.com/vi/366XZrOU17s/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/195ZjqI-UjU",
      responsive: "https://youtu.be/195ZjqI-UjU",
      thumb: "https://img.youtube.com/vi/195ZjqI-UjU/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/D7AGR46pKeU",
      responsive: "https://youtu.be/D7AGR46pKeU",
      thumb: "https://img.youtube.com/vi/D7AGR46pKeU/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/bHFfrgF5FS0",
      responsive: "https://youtu.be/bHFfrgF5FS0",
      thumb: "https://img.youtube.com/vi/bHFfrgF5FS0/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/ll04Q4tO03Q",
      responsive: "https://youtu.be/ll04Q4tO03Q",
      thumb: "https://img.youtube.com/vi/ll04Q4tO03Q/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/wjnQU6-u17Y",
      responsive: "https://youtu.be/wjnQU6-u17Y",
      thumb: "https://img.youtube.com/vi/wjnQU6-u17Y/maxresdefault.jpg",
    },
    {
      src: "https://youtu.be/dfzrW8xUyz8",
      responsive: "https://youtu.be/dfzrW8xUyz8",
      thumb: "https://img.youtube.com/vi/dfzrW8xUyz8/maxresdefault.jpg",
    },
  ],

  thumbWidth: 60,
  thumbHeight: "40px",
  thumbMargin: 4,
});

setTimeout(() => {
  inlineGallery.openGallery();
  inlineGallery2.openGallery();
  inlineGallery3.openGallery();
}, 200);
