function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }





  /* Modal Images 0.1 */

window.addEventListener('load', () => {
 
  // create the parent element <div id="modal">
  let modal = document.createElement("div");
  modal.setAttribute('id', 'modal');
  modal.setAttribute('class', 'modal');

  // create the child element <div id="modalClose">
  let modalClose = document.createElement('div');
  modalClose.setAttribute('id', 'modalClose');
  modalClose.innerHTML = "x";

  // create the child element <img>
  let modalImg = document.createElement('img');
  modalImg.setAttribute('id', 'modalImg');
  modalImg.setAttribute('class', 'open-modal img-fluid'); 


  // open node elements
  document.body.append(modal);
  modal.appendChild(modalClose);
  modal.appendChild(modalImg);
 

  // find all elements with class modalImg
  let imgList = document.querySelectorAll(".modalImg"),
      i;
  for (const img of imgList) {
      // add event click to show modal and add src attribute
      img.addEventListener('click', () => {
          modal.style.display = "block";
          modalImg.src = img.src;
          
      });
  }

  // event, hide modal if user click modalClose "x"
  modalClose.addEventListener("click", function () {
      modal.style.display = "none";
  })
  // event, hide modal if user click on the modal 
  modal.addEventListener("click", function () {
      modal.style.display = "none";
  })
})


/*COpiar link*/


function getlink() {
var aux = document.createElement("input");
aux.setAttribute("value",window.location.href);
document.body.appendChild(aux);
aux.select();
document.execCommand("copy");
document.body.removeChild(aux);
alert("URL copiada\n\n" + window.location.href.split("?")[0].split("#")[0]);
}



/* SCROLL SUAVE*/

const links = document.querySelectorAll(".scroll-b");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}


/*SCROLL FOOTER*/

var navbar = document.getElementById("foot");
var header = document.getElementById("topbar");
var sticky = header.offsetTop;

function scrollT() {
  if (window.pageYOffset > sticky + 100) {
  navbar.setAttribute('style','opacity:1');
  } else {
  navbar.setAttribute('style','opacity:0');
  }
}

window.addEventListener('scroll', scrollT);




/*let footer = document.querySelectorAll(".foot");
function mostrarScroll() {
  let scrollTop= document.documentElement.scrollTop;
  for (var i=0;i<footer.length;i++){
    let altura= footer[i].offsetTop;
    if(altura - 900  < scrollTop ){ 
      footer[i].style.opacity=1;

    } 
    else{footer[i].style.opacity=0;} 
  }
  
}

window.addEventListener('scroll', mostrarScroll);

 */