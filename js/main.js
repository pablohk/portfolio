const logoPath = [
  { src:"./media/img/angular-logo.png", title:"Angular"},
  { src: "./media/img/CSS3-logo.png", title:"CSS3"},
  { src: "./media/img/HTML5-logo.png", title:"HTML5"},
  { src: "./media/img/mysql-logo.png", title:"MySQL"},
  { src: "./media/img/Java-logo.png", title:"Java"},
  { src: "./media/img/js-logo.png", title:"JavaScript"},
  { src: "./media/img/mongodb-logo.png", title:"MongoDB"},
  { src: "./media/img/node-logo.png", title:"NodeJs"},
  { src: "./media/img/react-logo.png", title:"ReactJs"},
  { src: "./media/img/redux-logo.png", title:"Redux"},
  { src: "./media/img/git-logo.png", title:"Git"},
  { src: "./media/img/bot-logo.png", title:"ChatBot"},
  { src: "./media/img/heroku-logo.jpg", title:"Heroku"},
  { src: "./media/img/gcloud-logo.png", title:"Google Cloud"},
];

const education = [
  {
    logo: "./media/img/ironhacklogo.png",
    alt: "Ironhack_logo",
    date: "2017",
    title: {
      key: {
        es: "Título",
        en: "Title"
      },
      value: {
        es: "Desarrollador Web Full Stack",
        en: "Full Stack web Developer"
      }
    },
    college: {
      key: {
        es: "Escuela",
        en: "Collage"
      },
      value: {
        es: "Ironhack",
        en: "Ironhack"
      }
    },
    city: {
      key: {
        es: "Ciudad",
        en: "City"
      },
      value: {
        es: "Madrid",
        en: "Madrid"
      }
    },
    description: {
      key: {
        es: "Descripción",
        en: "Description"
      },
      value: {
        es: "Bootcamp de 8 semanas aprenciendo el Stack Tecnológico MEAN y trabajo en equipo con Git y GitHub",
        en: "A 8 weeks bootcamp learning MEAN Stack and teamwork performance (Git, Github)"
      }
    }
  },
  {
    logo: "./media/img/oracle_professional.png",
    alt: "Oracle_logo",
    date: "2013-2014",
    title: {
      key: {
        es: "Título",
        en: "Title"
      },
      value: {
        es: "Desarrollo de aplicaciones Java",
        en: "JAVA applications Development"
      }
    },
    college: {
      key: {
        es: "Escuela",
        en: "Collage"
      },
      value: {
        es: "Oracle & FSC.Inserta",
        en: "Oracle & FSC.Inserta"
      }
    },
    city: {
      key: {
        es: "Ciudad",
        en: "City"
      },
      value: {
        es: "Madrid",
        en: "Madrid"
      }
    },
    description: {
      key: {
        es: "Descripción",
        en: "Description"
      },
      value: {
        es: "Curso de 780h aprendiendo Java, Java Web, patrón MVC, Hibernate y Sprimg frameworks",
        en: "780 h course learning Java,Java Web, MVC pattern, Hibernate and Spring frameworks"
      }
    }
  },
  {
    logo: "./media/img/euitt.png",
    alt: "UPM_logo",
    date: "1998-2005",
    title: {
      key: {
        es: "Título",
        en: "Title"
      },
      value: {
        es: "Ingeniero técnico en telecomunicaciones",
        en: "Grade in telecommunications"
      }
    },
    college: {
      key: {
        es: "Escuela",
        en: "Collage"
      },
      value: {
        es: "UPM",
        en: "UPM"
      }
    },
    city: {
      key: {
        es: "Ciudad",
        en: "City"
      },
      value: {
        es: "Madrid",
        en: "Madrid"
      }
    },
    description: {
      key: {
        es: "Descripción",
        en: "Description"
      },
      value: {
        es: "Sistemas de telecomunicación, especializado en sistemas de antenas broadcasting",
        en: "Telecommunications System, focused in broadcasting antenna systems"
      }
    }
  }
];

$(document).ready(function() {
  loadLogos();
  loadEducation();
  // Update the logos img each 2 seconds
  let Idmix = setInterval(mix, 1000 * 1.5);
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


//  Change random 2 elements in array and show all of them on the front
function mix() {
  let rdm = ()=> ( Math.floor(Math.random() * logoPath.length));

  let initial = rdm();
  let final = rdm();
  let aux =  logoPath[initial];
  logoPath[initial] =  logoPath[final];
  logoPath[final] = aux;
  $('.logos').empty();
  loadLogos();
}

// Load logos on the front
function loadLogos() {
  logoPath.forEach(e => {
    $('.logos').append('<img src=' + e.src + ' alt="random carousel image" title="' + e.title +'">');
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

function loadEducation(){
  const lang = 'en';

  education.forEach(e=>{
    let article_el = $('<article class="educa-cart flex-row">');
    let content_el = $('<div class="educa-content"></div>');

    let logo_el = $('<img  class="educa-logo" src="' + e.logo + '" alt="' + e.alt + '" />');
    let date_el = $('<h5>' + e.date + '</h5>');
    let title_el = $('<p><strong>' + e.title.key[lang] + ': </strong>' + e.title.value[lang] + '</p>');
    let college_el = $('<p><strong>' + e.college.key[lang] + ': </strong>' + e.college.value[lang] + '</p>');
    let city = $('<p><strong>' + e.city.key[lang] + ': </strong>' + e.city.value[lang] + '</p>');
    let description = $('<p><strong>' + e.description.key[lang] + ': </strong>' + e.description.value[lang] + '</p>');

    $(article_el).appendTo('.education');

    $(content_el)
      .append(date_el)
      .append(title_el)
      .append(college_el)
      .append(city)
      .append(description);

    $(article_el)
      .append(logo_el)
      .append(content_el);
  });
}