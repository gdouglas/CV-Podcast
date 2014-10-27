document.addEventListener( "DOMContentLoaded", function() {
// create our popcorn instance
var pop = Popcorn( "#video" );

pop.timeline({
        start: 1,
        target: "timeline",
        title: "This is a title",
        text: "this is some interesting text that goes inside",
        innerHTML: "Click here for <a href='http://www.google.ca'>Google</a>" ,
        direction: "up"
      })
      .timeline({
        start: 3,
        target: "timeline",
        title: "double as interesting",
        text: "this is some interesting text that goes inside",
        innerHTML: "Maybe a button? <button onClick=\"window.location.href='http://www.google.com'\">Click Me</button>",
        direction: "up"
      })
     .timeline({
        start: 5,
        end: 700,
        target: "timeline",
        title: "3x as interesting",
        text: "this is some interesting text that goes inside",
        innerHTML: "",
        direction: "up"
      })
      .timeline({
        start: 15,
        target: "timeline",
        title: "Abe's PBL Group",
        text: "Check out Abes Group",
        innerHTML: "",
        direction: "up"
      })
      .timeline({
        start: 37,
        end: 42,
        target: "timeline",
        title: "I love country roads",
        text: "<a href=\"#\"><img src=\"http://freebigpictures.com/wp-content/uploads/2009/09/country-road.jpg\" style='width:150px; height:auto;'></a>",
        innerHTML: "",
        direction: "up"
      })
      .timeline({
        start: 50,
        end: 65,
        target: "timeline",
        title: "Timing in the heart",
        text: "<a href=\"#\"><img src=\"images/conduction-times.gif\" style='width:150px; height:auto;'></a>",
        innerHTML: "",
        direction: "up"
      })
      .timeline({
        start: 87,
        target: "timeline",
        text: "Action potentials are very fast.",
        innerHTML: "",
        direction: "up"
      });            
// play video
pop.play();
}, false);