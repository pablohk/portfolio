const logoPath = [
  "./media/img/angular-logo.png",
  "./media/img/broadcasting-logo.png",
  "./media/img/CSS3-logo.png",
  "./media/img/HTML5-logo.png",
  "./media/img/mysql-logo.png",
  "./media/img/Java-logo.png",
  "./media/img/js-logo.png",
  "./media/img/mongodb-logo.png",
  "./media/img/node-logo.png",
];
$(document).ready(function() {
  loadLogos(logoPath);

// Update the logos img each 2 seconds
  //let Idmix = setInterval(mix, 1000 * 2);
  showDetails();
  // END document ready
});

// Shuffle the logos show in header tag
function logoShuffle() {
  loadLogos(_.shuffle(logoPath));
}

// Show / hide  the previous DOM elements of clicked element
function showDetails() {
  $('.exp-show').click(function(e) {
    e.preventDefault();
    let el = $(this).text();
    el = el === "Show details......" ? "Hide......" : "Show details......";
    $(this).html(el);
    $(this).prev().toggle();
  });
}

// Show  the Contact DOM elements
function showContact() {
  $('#contact').css('visibility','visible');
}

//  Change random 2 elements in array and show all of them on the front
function mix() {
  //let rdm = (()=>Math.floor(Math.random()*logoPath.length));
  let rdm = function() {
    return Math.floor(Math.random() * logoPath.length);
  };
  let initial = rdm(),final = rdm();
  let initialEl = $('header .logo:nth-child(' + (initial + 1) + ')');
  let finalEl = $('header .logo:nth-child(' + (final + 1) + ')');
  initialEl.attr('src', logoPath[final]);
  finalEl.attr('src', logoPath[initial]);
}

// Load logos on the front
function loadLogos(arr) {
  $("header .logo").each(function(index) {
    $(this).attr('src', arr[index]);
  });
}
