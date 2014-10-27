document.addEventListener("DOMContentLoaded", function () {

/*
	var wrapper = Popcorn.HTMLVimeoVideoElement( "#video" ),
		currentTime;
	

	wrapper.src = "http://player.vimeo.com/video/102282423?portrait=0&amp;color=ffffff";

	var pop = Popcorn( wrapper );
*/



	var pop = Popcorn.vimeo(
    	'#video',
    	'http://player.vimeo.com/video/102282423?portrait=0&amp;color=ffffff');
	
	pop.footnote({
		start: 443,
		text: "<p><strong>Further Learning:</strong> - Lecture 5 – Tachycardia & Re-Entry - Medical Science Journal – “Understanding & Treating Cardiovascular Conditions”, 2004</p>",
		target: "footnote-div"
	}).footnote({
		start: 443,
		text: "<p><a href=\"#\" seekTo=\"443\" id=\"clicky\" class=\"time\">7:23</a><strong>Remember:</strong> Hypertrophy refers to the number of myofibrils increasing. This causes myocytes to increase in size but now quantity.</p>",
		target: "footnote-div"
	}).footnote({
		start: 425,
		text: "<p><a href=\"#\" seekTo=\"425\" id=\"clicky\" class=\"time\">7:05</a>Stenosis can be caused by aging or a malformed valve. Explore the different types of stenosis <a href=\"http://www.heart.org/HEARTORG/Conditions/More/HeartValveProblemsandDisease/Problem-Heart-Valve-Stenosis_UCM_450369_Article.jsp\" target=\"_blank\">here</a>.</p>",
		target: "footnote-div"
	}).footnote({
		start: 404,
		text: "<p><a href=\"#\" seekTo=\"404\" id=\"clicky\" class=\"time\">6:44</a><em>Ischemia:</em> A restriction in blood supply to tissue and causing a deficiency in oxygen and glucose required for cellular metabolism.</p>",
		target: "footnote-div"
	}).footnote({
		start: 340,
		text: "<p><a href=\"#\" seekTo=\"340\" id=\"clicky\" class=\"time\">5:40</a>Aneurysm: A localized bulge in the wall of a bloodvessel (think dilation).</p>",
		target: "footnote-div"
	}).footnote({
		start: 296,
		text: "<p><a href=\"#\" seekTo=\"296\" id=\"clicky\" class=\"time\">4:56</a>The total wire force changes in order to maintain the force equilibrium of the vertical components.</p>",
		target: "footnote-div"
	}).footnote({
		start: 226,
		text: "<p><a href=\"#\" seekTo=\"226\" id=\"clicky\" class=\"time\">3:46</a>When would the heart’s wall thickness increase? Stay tuned…</p>",
		target: "footnote-div"
	}).footnote({
		start: 116,
		text: "<p><a href=\"#\" seekTo=\"116\" id=\"clicky\" class=\"time\">1:56</a>In this case, equilibrium also exists in the horizontal direction.</p>",
		target: "footnote-div"
	}).footnote({
		start: 43,
		text: "<p><a href=\"#\" seekTo=\"43\" id=\"clicky\" class=\"time\">0:43</a>Force arrows indicate both the direction of stress and type of stress occurring. Learn more <a href=\"http://en.wikipedia.org/wiki/Stress_%28mechanics%29\" target= \"_blank\">here</a>.</p>",
		target: "footnote-div"
	}).footnote({
		start: 0,
		text: "<p>Look here for helpful learning tips during the podcast.</p>",
		target: "footnote-div"
	});
	
/*

	pop.on( "timeupdate", function() {
	    console.log( this.currentTime() );
	    currentTime = this.currentTime;
	});
	
	function createEvent(begin, end, current){
		interval = begin-current;
		window.setTimeout(alert, interval);
	}

	function alert(){
		alert("this is happening");
	}

	//createEvent(1, 5, 10);
	window.setTimeout(alert,10);
*/
	//pop.play();
	if (window.addEventListener){
    window.addEventListener('message', handleMsg, false);
	}
	else {
	    window.attachEvent('onmessage', handleMsg, false);
	}

function handleMsg(event) {
    var data = JSON.parse(event.data);
    if(data.event) {
        console.log(event);
    }      
}

function postToiFrame(action, val) {
    var data = { method: action };
    data.value = val;
    console.log(data);
    $("#video iframe")[0].contentWindow.postMessage(JSON.stringify(data), "https://player.vimeo.com/video/102282423");

}

$("a").click(function() {
    postToiFrame("seekTo", $(this).attr('seekTo'));
    return false;
});
});//]]>  

