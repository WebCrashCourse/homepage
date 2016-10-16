$(document).ready(function () {
  $('.hero').vide({
    mp4: 'http://res.cloudinary.com/web-crash-course/video/upload/ac_none,q_100/v1476641122/For_Wes_dbxgqy.mp4',
    webm: 'http://res.cloudinary.com/web-crash-course/video/upload/ac_none,q_100/v1476641122/For_Wes_dbxgqy.webm',
    ogv: 'http://res.cloudinary.com/web-crash-course/video/upload/ac_none,q_100/v1476641122/For_Wes_dbxgqy.ogv',
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
