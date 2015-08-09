// Window load event used just in case window height is dependant upon images
var $jq = jQuery.noConflict(true);

function stickyFoot() {
  var dist = $jq("#main-panel").outerHeight() + $jq("#page-head").outerHeight();
  if(dist > $jq(window).height()) {
    $jq("footer").css({top : dist + "px"});
    $jq("footer").css({bottom : "initial"});
  } else {
    $jq("footer").css({bottom : "0px"});
    $jq("footer").css({top : "initial"});
  }
}

function updateExecutors() {
  $jq('#executors th.pane a.model-link').css('max-width',$jq("#side-panel").width() - 15);
}

$jq(document).ready(function() {
  stickyFoot();
  updateExecutors();

  //hook into build executor update
  _refreshPart = window.refreshPart;
  window.refreshPart = function(id, url) {
    _refreshPart(id, url);
    if(id == 'executors') updateExecutors();
  }
});

$jq(window).resize(function() {
  stickyFoot();
  updateExecutors();
});

$jq(document).scroll(function() {
  stickyFoot();
});

