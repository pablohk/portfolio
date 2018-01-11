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
  //let idlogoMix=setInterval(logoShuffle, 1000*2 );
  //let Idmix=setInterval(mix, 1000*2 );
  // END document ready
});

function logoShuffle() {
  loadLogos(_.shuffle(logoPath));
}

function mix(){
  let rdm = (()=>Math.floor(Math.random()*logoPath.length));
  let initial = rdm(), final = rdm();
  let initialEl = $('header .logo:nth-child('+(initial +1)+')');
  let finalEl=$('header .logo:nth-child('+(final +1)+')');
  initialEl.attr('src', logoPath[final]);
  finalEl.attr('src', logoPath[initial]);
}

function loadLogos(arr){
  $("header .logo").each(function(index){
    $(this).attr('src',arr[index]);
  });
}
