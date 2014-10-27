// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {

     // Create a popcorn instance by calling the Youtube player plugin
/*   var example = Popcorn.vimeo(
     '#video',
     'http://vimeo.com/103975643' );

   example.footnote({
     start: 2,
     text: "<H1>CV Podcast video example</h1>",
     target: "footnotediv"
   });
  example.footnote({
     start: 2,
     text: "<p>This video is from <a href='http://vimeo.com/103975643' target='_blank'>Vimeo</a></p>",
     target: "footnotediv"
   });
  example.footnote({
     start: 17,
     end: 27,
     text: "<p>Statue name is &quot;<strong>Truth is Beauty</strong>&quot;</p>",
     target: "footnotediv"
   });
  example.footnote({
     start: 20,
     end: 27.2,
     text: "<p>It stands 55 feet tall. <a href='http://wandering-through-time-and-place.me/2013/09/10/truth-is-beauty-a-55-foot-tall-woman-burning-man-2013/' target='_blank'>Read More</a></p>",
     target: "footnotediv"
   }); */ 

var wrapper = Popcorn.HTMLVimeoVideoElement( "#video" );

    wrapper.src = "http://vimeo.com/103975643";

    var pop = Popcorn( wrapper );

//    pop.footnote({
//      start: 1,
//      end: 5,
//      text: "Works with Vimeo!",
//      target: "footnotediv"
//    });
     pop.timeline({
     start: 1,
     target: "timeline",
     title: "This is a title",
     text: "this is some interesting text that goes inside",
     innerHTML: "Click here for <a href='http://www.google.ca'>Google</a>" ,
     direction: "up"
   });

    pop.play();

//$('#footnotediv *').delay(1000).animate({ opacity: 1 }, 700); 

   // play the video
  // example.play();

}, false);

