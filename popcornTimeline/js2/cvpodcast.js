/*based on SO answer http://stackoverflow.com/questions/13594552/change-embed-options-on-vimeo-when-using-popcorn-js/13601442#13601442*/
/*var video = Popcorn.HTMLVimeoVideoElement('#video');
video.src = 'https://player.vimeo.com/video/102282423';
var popcorn = Popcorn(video);*/


var wrapper = Popcorn.HTMLYouTubeVideoElement( "#video" );

    wrapper.src = "https://www.youtube.com/watch?v=cXppk2ZfKg8";

    var pop = Popcorn( wrapper );

    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with YouTube!",
      target: "footnote-div"
    });

    pop.play();