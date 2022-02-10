$('.owl-carousel').owlCarousel({
    loop:true, /*Se você quer um efeito de looping*/
    margin:10,
    nav:false, /*habilita ou desabilita os botões de navegação*/
    responsive:{
        0:{/*quando minha tela está próxima a 1px ou mais pode colocar até 5 itens na tela*/
            items:1
        },
        600:{/*quando minha tela tem até 600px ou mais pode colocar até 5 itens na tela*/
            items:3
        },
        1000:{/*quando minha tela tem até 1000px ou mais pode colocar até 5 itens na tela*/
            items:5
        }
    }
})