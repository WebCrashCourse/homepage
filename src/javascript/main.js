$(document).ready(function () {
  var heroEl = $('.hero')
  heroEl.removeClass('is-loading')
  heroEl.addClass('is-loaded')

  heroEl.vide({
    mp4: 'assets/video/For_Wes.mp4',
    webm: 'assets/video/For_Wes.webm',
    ogv: 'assets/video/For_Wes.ogv',
    poster: 'assets/images/For_Wes.jpg'
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
