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

const navLinks ={
  es:[ 'Perfil','Educación', 'Experiencia', 'Proyectos', 'Aportaciones', 'Contacto'],
  en:[ 'Skill', 'Education', 'Experience', 'Projects', 'Contributions', 'Contact']
};

const skill ={
  es:[
    `Hola, soy desarrollador Full stack y me paso el día pensando en NodeJs, ReactJs ...`,
    `La programación es mi mundo Mátrix.`,
    `Así que si estás buscando un desarrollador para tu equipo/empresa con sólidos conocimientos en el Front y en el Back, estaría
    encantado en conocerte.`
  ],  
  en:[
    `Hy, I'm Full stack Developer and spend all my time thinking about NodeJs, ReactJs ...`,
    `Programming is my own Matrix world.`,
    `So if you're looking for a developer for you team/company with solid programming background in Front / Back , i´d love to meet you.`
  ]
};

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

const experience = [
  {
    date: null,
    role: {
      key: {
        es: 'Rol:',
        en: 'Role:'
      },
      value:{
        es:'Desarrolador Senior Frontend.',
        en:'Senior Frontend Developer.'
      }
    },
    company: {
      key: {
        es: 'Compañía:',
        en: 'Company:'
      },
      value:{
        es:'Walmeric',
        en:'Walmeric'
      }
    },
    duration: {
      key: {
        es: 'Duración:',
        en: 'Duration:'
      },
      value:{
        es:'1 mes.',
        en:'1 month.'
      }
    },
    more:{ 
      es:'Más detalles...' , 
      en:'More details...'
    },
    hide:{ 
      es:'Ocultar...' , 
      en:'Hide...'
    },
    details:{
      es:[
        'Desarrollo de "D3A", app React para la gestión y conversión de Leads para grupos de Call Center.',
        'Implementación de la funcionaliadad para atender y realizar llamadas desde la aplicación',
        'Stack tecnológico: React + redux, javascript, HTML5, CSS3, Markdown',
        'Test unitarios con jest / enzime.',
        'Generación de documentación para las nuevas funcionalidades.',
        'Control de versiones con Git.',
        'Metodología ágil de trabajo Scrum con trello.'],
      en:[
        'Develop "D3A", React app to management and lead conversion for Call Center work groups.',
        'Implementation of funcionality to handle call using the application.',
        'Stack: React + redux, javascript, HTML5, CSS3, Markdown.',
        'Unit test with jest / enzime.',
        'New features doc. generation.',
        'Git as version Control code.',
        'Scrum as agile methodology, using Trello.'
      ]
    }
  },
  {
    date: '2020',
    role: {
      key: {
        es: 'Rol:',
        en: 'Role:'
      },
      value:{
        es:'Desarrolador full stack junior.',
        en:'Junior full stack Developer.'
      }
    },
    company: {
      key: {
        es: 'Compañía:',
        en: 'Company:'
      },
      value:{
        es:'Innobotive s.l.',
        en:'Innobotive s.l.'
      }
    },
    duration: {
      key: {
        es: 'Duración:',
        en: 'Duration:'
      },
      value:{
        es:'2 años.',
        en:'2 years.'
      }
    },
    more:{ 
      es:'Más detalles...' , 
      en:'More details...'
    },
    hide:{ 
      es:'Ocultar...' , 
      en:'Hide...'
    },
    details:{
      es:[
        'Desarrollo de la arquitectura API en el back con NodeJs ES6, expressJs, socket.io.',
        'Desarrollo del front con React, HTML5 y CSS3.',
        'Gestión y mantenimiento del código.',
        'Base de datos MongoDb: CRUD y queries relacionando varias colecciones.',
        'Despliegue en Heroku y google App engine.',
        'Control de versiones con Git.',
        'Metodología ágil de trabajo Scrum con trello.'],
      en:[
        'Develop API architecture in back, using NodeJs ES6, expressJs and socket.io.',
        'Front Develop, using ReactJs, HTML5 and CSS3.',
        'Code management and maintenance.',
        'MongoDb as BBDD: CRUD and related queries.',
        'Deployments in Heroku and google App engine',
        'Git as version Control code',
        'Scrum as agile methodology, using Trello'
      ]
    }
  },
  {
    date:'2018'
  },
  {
    date: '2016',
    role: {
      key: {
        es: 'Rol:',
        en: 'Role:'
      },
      value: {
        es: 'Ingeniero Broadcasting.',
        en: 'Broadcat Engineering.'
      }
    },
    company: {
      key: {
        es: 'Compañía:',
        en: 'Company:'
      },
      value: {
        es: 'Sistemas Radiantes F.Moyano.',
        en: 'Sistemas Radiantes F.Moyano.'
      }
    },
    duration: {
      key: {
        es: 'Duración:',
        en: 'Duration:'
      },
      value: {
        es: '2 años.',
        en: '2 years.'
      }
    },
    more: {
      es: 'Más detalles...',
      en: 'More details...'
    },
    hide:{ 
      es:'Ocultar...' , 
      en:'Hide...'
    },
    details: {
      es: [
        'I+D+I dispositivos coaxiales y sistemas radiantes en B.I, F.M., D.A.B, y U.H.F.',
        'Estudios de cobertura, diagramas de radiación y radio enlaces.',
        'Preparar documentaciones técnicas para ofertas, licitaciones y replanteos.',
        'Medidas de P.I.M en antenas de telefonía móvil 3G/4G.',
        'Puesta en marcha y supervisión de obra en instalaciones de equipos de radiocomunicación a nivel nacional e internacional.',
        'Asesor técnico e impartición de cursos a los clientes.',
        'Protocolo de medidcas, test y control de calidad de filtros, multiplexores y antenas.'
      ],
      en: [
        'I+D+I coaxial devices and radiant systems. Frequency Bands: B.I, F.M., D.A.B y U.H.F.',
        'Evaluate Coverages, radiations patterns and radio-Links.',
        'Prepare technical data for economic offers, tenders and on-site layout.',
        'P.I.M measurements in mobile antennas systems (3G/4G.)',
        'Perform, supervise and carry out radio communications equipment installations both at the national andinternational levels.',
        'Technical advisor. Give training courses to clients.',
        'Measurement protocol, tests and quality control for filters, combiners and antennas.'
      ]
    }
  },
  {
    date: '2014',
    role: {
      key: {
        es: 'Rol:',
        en: 'Role:'
      },
      value: {
        es: 'Becario en Java',
        en: 'Java InternalShip'
      }
    },
    company: {
      key: {
        es: 'Compañía:',
        en: 'Company:'
      },
      value: {
        es: 'Accenture - Coritel.',
        en: 'Accenture - Coritel.'
      }
    },
    duration: {
      key: {
        es: 'Duración:',
        en: 'Duration: '
      },
      value: {
        es: '1 mes',
        en: '2 month'
      }
    },
    more: {
      es: 'Más detalles...',
      en: 'More details...'
    },
    hide:{ 
      es:'Ocultar...' , 
      en:'Hide...'
    },
    details: {
      es: [
        'Generación de scripts Unix / SQL.',
      ],
      en: [
        'Develop Unix / SQL scripts.'
      ]
    }
  },
  {
    date: '2012',
    role: {
      key: {
        es: 'Rol:',
        en: 'Role:'
      },
      value: {
        es: 'Responsable departamento Broadcast.',
        en: 'Head broadcast department'
      }
    },
    company: {
      key: {
        es: 'Compañía:',
        en: 'Company:'
      },
      value: {
        es: 'Vídeo Medios S.A',
        en: 'Vídeo Medios S.A'
      }
    },
    duration: {
      key: {
        es: 'Duración:',
        en: 'Duration: '
      },
      value: {
        es: '6 años',
        en: '6 years'
      }
    },
    more: {
      es: 'Más detalles...',
      en: 'More details...'
    },
    hide:{ 
      es:'Ocultar...' , 
      en:'Hide...'
    },
    details: {
      es: [
        'I+D+I dispositivos coaxiales y sistemas radiantes en B.I, F.M., D.A.B, y U.H.F',
        'Estudios de cobertura, diagramas de radiación y radio enlaces',
        'Preparar documentaciones técnicas para ofertas, licitaciones y replanteos',
        'Diseño y generación de planos de las piezas diseñadas para los nuevos productos',
        'Puesta en marcha y supervisión de obra en instalaciones de equipos de radiocomunicación a nivel nacional e internacional',
        'Asesor técnico e impartición de cursos a los clientes',
        'Protocolo de medidcas, test y control de calidad de filtros, multiplexores y antenas'
      ],
      en: [
        'I+D+I coaxial devices and radiant systems. Frequency Bands: B.I, F.M., D.A.B y U.H.F.',
        'Evaluate Coverages, radiations patterns and radio-Links.',
        'Prepare technical data for economic offers, tenders and on-site layout.',
        'Design and Draw plans of pieces in order to make new products.',
        'Perform, supervise and carry out radio communications equipment installations both at the national andinternational levels.',
        'Technical advisor. Give training courses to clients.',
        'Measurement protocol, tests and quality control for filters, combiners and antennas.'
      ]
    }
  },
  {
    date:'2005'
  },
  {
    date: '2004',
    role: {
      key: {
        es: 'Rol:',
        en: 'Role:'
      },
      value: {
        es: 'Analista de telecomunicaciones',
        en: "Telecom's Analyst"
      }
    },
    company: {
      key: {
        es: 'Compañía:',
        en: 'Company:'
      },
      value: {
        es: 'Sistemas Radiantes F.Moyano',
        en: 'Sistemas Radiantes F.Moyano'
      }
    },
    duration: {
      key: {
        es: 'Duración:',
        en: 'Duration: '
      },
      value: {
        es: '1 año.',
        en: '1 year.'
      }
    },
    more: {
      es: 'Más detalles...',
      en: 'More details...'
    },
    hide:{ 
      es:'Ocultar...' , 
      en:'Hide...'
    },
    details: {
      es: [
        'I+D+I dispositivos coaxiales y sistemas radiantes en B.I, F.M., D.A.B, y U.H.F.',
        'Estudios de cobertura, diagramas de radiación y radio enlaces.',
        'Preparar documentaciones técnicas para ofertas, licitaciones y replanteos',
        'Puesta en marcha y supervisión de obra en instalaciones de equipos de radiocomunicación.',
        'Asesor técnico.',
        'Protocolo de medidcas, test y control de calidad de filtros, multiplexores y antenas.'
      ],
      en: [
        'I+D+I coaxial devices and radiant systems. Frequency Bands: B.I, F.M., D.A.B y U.H.F.',
        'Evaluate Coverages, radiations patterns and radio-Links.',
        'Prepare technical data for economic offers, tenders and on-site layout.',
        'Perform, supervise and carry out radio communications equipment installations.',
        'Technical advisor.',
        'Measurement protocol, tests and quality control for filters, combiners and antennas.'
      ]
    }
  },
  {
    date: '2003',
  },
];

const project = [
  {
    img: './media/img/dietame-logo.png',
    alt: {
      es: 'dietame.com',
      en: 'dietame.com'
    },
    url: 'https://dietame.com',
    description: {
      es: `Asesor nutricional virtual. Portal web y chatbot: NodeJs, ExpressJs, ReactJs, API restful`,
      en: `Virtual nutritionist Adviser. Web and chatbot: NodeJs, ExpressJs, ReactJs, API restful`
    }
  },
  {
    img: './media/img/photo-fishing-logo.png',
    alt: {
      es: 'Proyecto Photo-fishing',
      en: 'Photo-fishing Project'
    },
    url: 'https://photo-fishing.herokuapp.com',
    description: {
      es: `Proyecto final de Ironhack. MBP diseño web usando todos los conocimientos aprendidios: AngularJs, NodeJs, ExpressJs, API's, TypeScript, HTML5, CSS3.`,
      en: `Ironhack's final project.
     A MBP responsive web design using all acquired knowledges: AngularJs, NodeJs, ExpressJs, API's, TypeScript, HTML5, CSS3.`
    }
  },
  {
    img: './media/img/game-logo.png',
    alt: {
      es: 'Proyecto brain-trash',
      en: 'brain-trash Project'
    },
    url: 'https://pablohk.github.io/brain-trash',
    description: {
      es: `Primer Proyecto de Ironhack. Trabajando con Js, canvas y programación POO`,
      en: `Ironhack's first project. Works with JS, canvas and POO programming.`
    }
  },
  {
    img: './media/img/libros-felices-logo.png',
    alt: {
      es: 'Proyecto libros-felices',
      en: 'libros-felices Project'
    },
    url: '#',
    description: {
      es: `Web ventas usando J2EE,Hibernate, POO programming y patrones de diseño (MVC,Front-Controller, Factory)`,
      en: `A fully Web store using J2EE, Hibernate, POO programming and patterns design (MVC,Front-Controller, Factory)`
    }
  }
];

const contribution = [
  {
    img: './media/img/circular_bar.png',
    alt: {
      es: 'Barra progreso Circular',
      en: 'Circular progress bar'
    },
    url: 'https://www.npmjs.com/package/react-multicolor-circular-progress-bar',
    description: {
      es: `Componente React consistente en un indicador circular o semicircular customizable y multi color`,
      en: `Customizable multicolor circular or semicircular SVG progress bar react Component`
    }
  },
];

$(document).ready(function() {
  let lang=$('#lang').text().toLowerCase();

  loadLogos();
  loadNavLinks(lang);
  loadSkill(lang);
  loadEducation(lang);
  loadExperience(lang);
  loadProject(lang);
  loadContribution(lang);
  handleCollapseMenu();

  // Update the logos img each 2 seconds
  let Idmix = setInterval(mix, 1000 * 1.5);
  showDetails(lang);
  markNavlink();
  scrollToSection();
  handleLang();
  // END document ready
});

// Show / hide  the previous DOM elements of clicked element
function showDetails(lang) {
  $('.exp-show').click(function(e) {
    e.preventDefault();

    const hideDetails = $(this).parent().hasClass('timeline-panel-close');
    if(hideDetails) $(this).parent().removeClass('timeline-panel-close');
    else $(this).parent().addClass('timeline-panel-close');

    let el = $(this).text();
    if(lang ==='es'){
      el = el === "Más detalles..." ? "Ocultar..." : "Más detalles...";
    }
    else{
      el = el === "More details..." ? "Hide..." : "More details...";
    }
    $(this).html(`<p class="exp-show"><strong>${el}</strong></p>`);
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

function loadNavLinks(lang){
  $('.normal >a').text( (idx)=>{
    const text =navLinks[lang][idx];
    return text;
  });
  $('.collapse nav >a').text( (idx)=>{
    const text =navLinks[lang][idx];
    return text;
  });
}

function loadSkill(lang){
  $('.skill >p').remove();

  skill[lang].forEach(e=>{
    const element = $(`<p>${e}</p>`);
    $('.skill').append(element);
  });
}

function loadEducation(lang){
  $('.educa-cart').remove();
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

function loadExperience(lang){
  $('.timeline').remove();
  let ul_el = $('<ul class="timeline">');
  experience.forEach(e=>{
    let li_tldate_el= $(`<li class="tldate">${e.date}</li>`);
    let li_panel_el = null;

    if(e.role){
      let role_el = $(`<h4><spam>${e.role.key[lang]}</spam> ${e.role.value[lang]}</h4>`);
      let company_el= $(`<p><spam>${e.company.key[lang]}</spam> ${e.company.value[lang]}</p>`);
      let duration_el= $(`<pclass="duration"><spam>${e.duration.key[lang]}</spam> ${e.duration.value[lang]}</p>`);
      let show_more_el =$(`<p class="exp-show"><strong>${e.more[lang]}</strong></p>`);

      let exp_list_el= $(`<div class="exp-list"></div>`);
      e.details[lang].forEach( el=>{
        let element =$(`<p>${el}</p>`);
        $(exp_list_el).append(element);
      });

     li_panel_el=  $(`<li class="timeline-panel timeline-panel-close"></li>`);

      $(li_panel_el)
      .append(role_el)
      .append(company_el)
      .append(duration_el)
      .append(exp_list_el)
      .append(show_more_el);
    }

    if(e.date) $(ul_el).append(li_tldate_el);
    if(li_panel_el) $(ul_el).append(li_panel_el);

    $(ul_el).appendTo('.experience');
  });
}

function loadProject(lang){
  $('.projects >figure').remove();
  project.forEach(e=>{
    const figure_el = $(`<figure></figure>`);
    const img_el = $(`<img src = '${e.img}' alt=${e.alt[lang]}/>`);
    const url_el = $(`<a href=${e.url} ${e.url !=='#' ? 'target=_blank"' : null}>${e.description[lang]}</a>`);
    $(figure_el)
      .append(img_el)
      .append(url_el);

    $(figure_el).appendTo('.projects');
  });
}

function loadContribution(lang){
  $('.contributions >figure').remove();
  contribution.forEach(e=>{
    const figure_el = $(`<figure></figure>`);
    const img_el = $(`<img src = '${e.img}' alt=${e.alt[lang]}/>`);
    const url_el = $(`<a href=${e.url} ${e.url !=='#' ? 'target=_blank"' : null}>${e.description[lang]}</a>`);
    $(figure_el)
      .append(img_el)
      .append(url_el);

    $(figure_el).appendTo('.contributions');
  });
}

function markNavlink() {
  let sections = $('section');
  let nav = $('.normal');
  let nav_collapse = $('.collapse nav');

  $(window).on('scroll', function() {
    let cur_pos = $(this).scrollTop();
    sections.each(function() {
      nav_height = nav.height();
      let top = $(this).offset().top - nav_height;
      let bottom = top + $(this).height();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        nav_collapse.find('a').removeClass('active');
        let name = $(this).attr('class').split(' ')[0].toLowerCase();
        nav.find('a[href="#' + name + '"]').addClass('active');
        nav_collapse.find('a[href="#' + name + '"]').addClass('active');
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
      let link = $(this).attr('href').toLowerCase();
      let cla = '.'.concat(link.slice(1));
      $('html,body').animate({
        scrollTop:$(cla).offset().top-nav_height+2},1000);
    });
  });
}

function handleLang(lang, hideDetails){
  $(".flags >img").click( e=>{
    let alt= e.target.alt;
    lang= alt ==="es_flag" ? "es" : "en";

    $('#lang').text(lang);

    loadNavLinks(lang);
    loadSkill(lang);
    loadEducation(lang);
    loadExperience(lang, hideDetails);
    showDetails(lang);
    loadProject(lang);
    loadContribution(lang);
  });
}

function  handleCollapseMenu(){
  $('.collapse i').click(function (e){
    e.preventDefault();
    $(this).next().toggle();
  });
  $('.collapse nav >a').click(function (e){
    e.preventDefault();
    $('.collapse nav').toggle();
  });
}
