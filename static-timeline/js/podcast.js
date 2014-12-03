var foo = $('#status'),
    player = $('iframe'),
    url = window.location.protocol + player.attr('src').split('?')[0],
    playhead,
    times = [],
    item = 0;

document.addEventListener("DOMContentLoaded", function () {
    $("a").click(function() {
        postToiFrame("seekTo", $(this).attr('seekTo'));
        return false;
    });
});

/**************BEGIN VIMEO FUNCTIONS**************/

/*get Vimeo play time*/
var foo = $('#status');
var player = $('iframe');
var url = window.location.protocol + player.attr('src').split('?')[0];

$('.time').each(function(){
  $('#tVal').prepend("<p>"+$( this ).attr("seekto")+"</p>");  
});

function postToiFrame(action, val) {
  var data = { method: action };
  data.value = val;
  //console.log(data);
  $("#video iframe") [0].contentWindow.postMessage(JSON.stringify(data), "http://player.vimeo.com/video/111773854");
}



// Listen for messages from the player
if (window.addEventListener){
  window.addEventListener('message', onMessageReceived, false);
}
else {
  window.attachEvent('onmessage', onMessageReceived, false);
}

// Helper function for sending a message to the player
function post(action, value) {
  var data = {
    method: action
  };

  if (value) {
    data.value = value;
  }

  var message = JSON.stringify(data);
  player[0].contentWindow.postMessage(data, url);
}
function onReady() {
  foo.text('ready');
  post('addEventListener', 'finish');
  post('addEventListener', 'playProgress');
}
//create time data object
$('.time').each(function(){
  times.push($( this ).attr("seekto"));
});
function onPlayProgress(data){
  playHead = data.seconds;
  closest (playHead, times);
}
// Handle messages received from the player
function onMessageReceived(e) {
  var data = JSON.parse(e.data);

  switch (data.event) {
    case 'ready':
      onReady();
      break;
      
    case 'playProgress':
      onPlayProgress(data.data);
      break;

    case 'finish':
      onFinish();
      break;
  }
}
/**************END VIMEO FUNCTIONS**************/

/*get closest number*/
function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff <= diff) {
            diff = newdiff;
            curr = arr[val];
            if (diff <= 10){
              item = curr;
              addHighlight(curr);
            }else {
              if (item < num-10 || item > num+10){
              console.log ("inside if item is "+item+" and num is "+num);
                removeHighlight(curr);
              }
            }
        }
    }//end for
}//end closest
var icon = false;

function addHighlight(inx){
  $('.time').each(function(){
        var seekTo = $(this).attr('seekTo');
      if(seekTo === inx){
        //console.log(inx+"seek = "+seekTo);
        $(this).parent().addClass("current");
        if (icon == false){
          //console.log('icon = '+icon+" add Highlight");
          icon = true;
          $('.main-content').append("<a id='notification'><img class='animated zoomIn' src='./images/notification-icon.gif'></a>");
        }else if(icon ===true){
          //console.log(inx+"seek = "+seekTo);
          //removeHighlight(inx);
        }

        /*if ($('#notification').length != 0){
          console.log("length is true");
        }else{
          console.log("adding notification and length ="+$('#notification').length);
          $('.main-content').prepend("<a id='notification'><img src='./images/notification-icon.gif'></a>");
           //class='animated zoomIn'
        }*/



      }else{
        $(this).parent().removeClass("current");
      }
  });  
}//end addHighlight

function removeHighlight(inx){
  $('.time').each(function(){
        $(this).parent().removeClass("current");
        if (icon){
          $('#notification').remove();
          icon = false;
          //console.log('icon = '+icon+" remove Highlight");
        }
  });   
}//end removeHighlight


















/* not sure if I need this code in my DOM listener, don't think I do
    if (window.addEventListener){
    window.addEventListener('message', handleMsg, false);
    }
    else {
        window.attachEvent('onmessage', handleMsg, false);
    }

    function handleMsg(event) {
      var data = JSON.parse(event.data);
      if(data.event) {
        //console.log(event);
      }      
    }//end handleMsg

    function postToiFrame(action, val) {
        var data = { method: action };
        data.value = val;
        //console.log(data);
        $("#video iframe")[0].contentWindow.postMessage(JSON.stringify(data), "http://player.vimeo.com/video/102282423");

    }

    */