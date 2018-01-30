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
  let Idmix = setInterval(mix, 1000 * 2);
  showDetails();
  markNavlink();
  scrollToSection();
  // END document ready
});

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
// function showContact() {
//   $('#contact').css('visibility', 'visible');
// }

//  Change random 2 elements in array and show all of them on the front
function mix() {
  let rdm = function() {
    return Math.floor(Math.random() * logoPath.length);
  };
  let initial = rdm(),
    final = rdm();
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

function markNavlink() {
  let sections = $('section'),nav = $('.nav-top');
  $(window).on('scroll', function() {
    let cur_pos = $(this).scrollTop();
    sections.each(function() {
      nav_height = nav.height();
      let top = $(this).offset().top - nav_height,
        bottom = top + $(this).height();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        let id = $(this).text().toLowerCase();
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });
}

function scrollToSection() {
  let navLink = $('.nav-top a');
  navLink.each(function() {
    $(this).click(function(e) {
      e.preventDefault();
      let nav_height=$('.nav-top').height();
      let id = '#'.concat($(this).text().toLowerCase());
      $('html,body').animate({
        scrollTop:$(id).offset().top-nav_height+2},2000);
    });
  });
}
