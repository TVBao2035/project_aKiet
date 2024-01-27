var btnBuy = document.querySelectorAll('.btn-buy');
var modalBuy = document.querySelector('.modal_card--buy');
btnBuy.forEach( (e)=>{
    e.onclick = ()=>{
        modalBuy.style.display = 'block';
        modalBuy.classList.add('btnTransport');
    }
})

var btnClose = document.querySelector(".container_card footer button");
btnClose.onclick = ()=>{
    modalBuy.style.display = 'none';
    modalBuy.classList.remove('btnTransport');
}
console.log(btnClose)

var iClose = document.querySelector('.card_header--icon');
iClose.onclick = ()=>{
    modalBuy.style.display = 'none';
    modalBuy.classList.remove('btnTransport');
}