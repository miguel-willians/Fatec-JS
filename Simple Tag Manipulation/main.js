// 1. Mude todas as Divs da página por parágrafos (mantendo o conteúdo)

// 1. Change all Divs on the page to paragraphs (keep the content)

function subsP(){
    let body = document.querySelector('body')
    let divs = document.querySelectorAll('div');

    for(let i = 0; i < divs.length; i++){
        let newP = document.createElement('p')
        body.replaceChild(newP, divs[i]);
        newP.innerHTML = divs[i].innerHTML;
    }
}  

// 2. Remova todas as Li's de uma UL de ID "ul2"

// 2. Remove all Li's from a Ul with ID "ul2"

function removeUL2(){
    let ul2 = document.querySelector('#ul2');
    let length = ul2.children.length;
    for(let i = length -1; i >= 0; i--){
        ul2.removeChild(ul2.children[i]);
    }
}

// 3. Remova todas as LI's de todas as Ul's

// 3. Remove all LI's from all Ul's

function removeAll() {
    let uls = document.querySelectorAll('ul');
    uls.forEach(function(ul) {
        ul.innerHTML = ''; 
    });
}

// Outra solução (menos performática):

// Another solution (less performant):


// function removeAll(){
//     let aul = document.querySelectorAll('ul');
//     for(let t = aul.length - 1;  t >= 0; t--){
//         let pul = aul[t];
//         let length = pul.children.length;
//         for(let i = length -1; i >= 0; i--){
//             pul.removeChild(pul.children[i]);
//         }
//     }
// }

