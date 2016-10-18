$(document).ready(function () {
  $('.hero').removeClass('is-loading')

  $('.hero').vide({
    mp4: 'assets/video/For_Wes.mp4',
    webm: 'assets/video/For_Wes.webm',
    ogv: 'assets/video/For_Wes.ogv',
    poster: 'assets/images/hero.jpg'
  }, {
    volume: 0,
    playbackRate: 0.65,
    muted: true,
    loop: true,
    autoplay: true,
    posterType: 'jpg',
    resizing: true
  })
})
