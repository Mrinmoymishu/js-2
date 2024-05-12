let parent = document.querySelector(`#parent`);
let child = document.querySelector(`.child`);



window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;
    let subHeight = height - clientHeight;
    let result = Math.round(fromTop * 100 / subHeight);
    parent.style.background = ` conic-gradient(#e67e22 ${result}%, #16a085 ${result}%)`;

    child.innerHTML = result ;

});
 let roll = document.querySelector(`#roll`);






window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;
    let subHeight = height - clientHeight;
    let result = Math.round(fromTop * 100 / subHeight);
     roll.style.width = `${result}%`;



});


