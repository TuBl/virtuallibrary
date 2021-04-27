
let container   = document.getElementsByClassName("container")[0]
let modal       = document.getElementById("modal")
let previousElement

document.addEventListener('click', function (e) {
    e.preventDefault();
    if(e.target.matches('.books-container__book')){
        previousElement = e.target
        openModal(e);
    } else if(e.target.matches('.modal__exit')){
        closeModal(previousElement);
    }
    else {
        return
    }
}, false)


function closeModal(previousElement) {
    console.log(previousElement)
    modal.classList.toggle("modal--isvisible")
    container.classList.toggle("container--ishidden")
    setTimeout(function(){ previousElement.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
}, 500);
    
}

function openModal (e){
    let modalTitle   = modal.children[0];
    let modalImg    = modal.children[1];
    let modalDescreption    = modal.children[2];
    modal ? modalTitle.textContent = e.target.children[0].textContent 
    : "", modalImg.setAttribute('src', e.target.children[1].src), modalDescreption.textContent = e.target.children[2].textContent;
    modal.classList.toggle("modal--isvisible")
    container.classList.toggle("container--ishidden")
    console.log(container.classList)
    console.log(modal.classList)
}