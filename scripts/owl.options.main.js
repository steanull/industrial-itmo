$( document ).ready(function() {

  $('.news__container').owlCarousel({
    margin:30,
    responsive:{
        0:{ stagePadding: 15,
            items:1
        },
        768:{
            stagePadding: 30,
            items:2
        },
        1110:{
            items:3
        }
    }
  })

  $('.team__cards').owlCarousel({
    margin:30,
    responsive:{
        0:{ margin:8,
            stagePadding: 16,
            items:2
        },
        768:{
            stagePadding: 30,
            items:3
        },
        1110:{
            items:4
        }
    }
  })

});


