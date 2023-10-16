var editHeader = document.getElementById('edit_header');
var dialogHeader = document.getElementById('dialog_header');
var botaoFecharHeader = document.getElementById('botao_fechar');
var formHeader = document.getElementById('form_header')


function abrirModalHeader()
{
  dialogHeader.classList.add('abrir');

  dialogHeader.addEventListener('click', (e) =>
  {
    if(e.target.id == 'botao_fechar' || e.target.id == 'dialog_header')
    dialogHeader.classList.remove('abrir');
  }
  )
}

var editBanner = document.getElementById('edit_banner');
var dialogBanner = document.getElementById('dialog_banner');
var botaoFecharBanner = document.getElementById('botao_fechar_banner');
var formBanner = document.getElementById('form_banner');

function abrirModalBanner()
{
  dialogBanner.classList.add('abrir');

  dialogBanner.addEventListener('click', (e) =>
  {
    if(e.target.id == 'botao_fechar_banner' || e.target.id == 'dialog_banner')
    dialogBanner.classList.remove('abrir');
  }
  )
}

let images =  document.querySelectorAll('.small_img');
let modal = document.querySelector('.my_modal');
let modal_img = document.querySelector('#modal_img');
let bt_close = document.querySelector('#bt_close');
let srcVal = "";


for(let i =  0; i < images.length; i++) {
  images[i].addEventListener('click', function(){

    srcVal = images[i].getAttribute('src');
    modal_img.setAttribute('src', srcVal);
    modal.classList.toggle('modal_active');
  })
}

function abrirModalImagem()
{
  modal.classList.add('modal_active');

  modal.addEventListener('click', (e) =>
  {
    if(e.target.id == 'bt_close'|| e.target.id == 'my_modal')
    modal.classList.remove('modal_active');
  })
}



var main = document.getElementById('main');
var header = document.getElementById('header');
var header_navigation = document.getElementById('header_navigation');
var content = document.getElementById('body_content');
var servicos = document.getElementById('servicos_section');
var habilidades = document.getElementById('habilidades_section');
var footer = document.getElementById('footer');
var sobremim = document.getElementById('sobremim');
var showSideBar = false;

function toggleSideBar()
{
  showSideBar = !showSideBar;
  console.log(showSideBar);
  if(showSideBar)
  {
    header_navigation.style.marginLeft = "0vw";
    header_navigation.style.animationName = "showSideBar";
    content.style.filter = 'blur(2px)';
    servicos.style.filter = 'blur(2px)';
    habilidades.style.filter = 'blur(2px)';
    footer.style.filter = 'blur(2px)';
    sobremim.style.filter = 'blur(2px)';
  }
  else
  {
    header_navigation.style.marginLeft = "-100vw"
    header_navigation.style.animationName = ""
    content.style.filter = ''
    servicos.style.filter = '';
    habilidades.style.filter = '';
    footer.style.filter = '';
    sobremim.style.filter = '';
  }

}

function closeSideBar()
{
  if(showSideBar)
  {
    toggleSideBar()
  }
}

window.addEventListener('resize', function(event)
{
  if(window.innerWidth > 768 && showSideBar) 
    {
      toggleSideBar()
    }
})

function topFun() {
  window.scrollTo(0, 0);
 }