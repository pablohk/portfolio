$(document).ready(function() {

const logoPath =[
  "./media/img/angular-logo.png" ,
  "./media/img/broadcasting-logo.png" ,
  "./media/img/CSS3-logo.png" ,
  "./media/img/HTML5-logo.png" ,
  "./media/img/Java-logo.png" ,
  "./media/img/js-logo.png" ,
  "./media/img/mongodb-logo.png" ,
  "./media/img/mysql-logo.png",
  "./media/img/node.png",
];

var logoSuffle=suffle(logoPath);
logoSuffle.forEach((e,idx)=>{
  $('#logo-top-left').attr('src',logoPath[random(logoPath.length-1)]);
  });
});

function suffle(){}
function random(size){
  return Math.floor(Math.random()*(size));
}
