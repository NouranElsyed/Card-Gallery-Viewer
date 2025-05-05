let body = document.body;
let container = document.querySelector('.row');
let AllCards = []
let cards;

function DisplayCards(){
    fetch('data.JSON')
    .then(response => response.json())
    .then(data => {
        AllCards = data
        data.forEach((item ,index) => {
            console.log(item,index)
    container.innerHTML += `
        <div data-index="${index}" class="card  col-6 col-md-4 col-lg-3  border-0">
          <div class="item position-relative">  
                <img src=${item.img} class="w-100 rounded" alt="">
           
            <div class="caption text-center bg-light position-absolute rounded">
                <h3 class="fs-5">${item.title}</h3>
                <p class="fs-6">${item.desc}</p>
            </div>
        </div>
        </div>
    `} )
    cards = document.querySelectorAll('.card')
    cards.forEach((item , index) => {
        item.addEventListener('click' , ()=>{
        openCard(index)})
    })
})

}
DisplayCards()
function openCard(index){
    document.getElementById("overlay-container").innerHTML +=`
    <div class="showCard  d-flex justify-content-around  align-items-center">
      <span class="previous" ><i class="fs-2 fa-solid fa-arrow-left text-white"></i></span>
      <div class="position-relative Image width">
        <img src=${AllCards[index].img} class="w-100 rounded" alt="">
        <span class="close position-absolute"><i class="fs-4 fa-solid fa-xmark text-white"></i></span>
      </div>
      <span class="next" ><i class="fs-2 fa-solid fa-arrow-right text-white"></i></span>
  </div>
    `
    document.querySelector('.close').addEventListener('click' , closeCard)
    document.querySelector('.next').addEventListener('click' , ()=>{nextCard(index)})
    document.querySelector('.previous').addEventListener('click' , ()=>{prevCard(index)})

}
function closeCard(){
   document.querySelector(".showCard").remove()
}
function nextCard(index){
    if(index+1 < AllCards.length){  
    closeCard()
    openCard(index+1)
    }
}
function prevCard(index){
   if(index > 0){  
    console.log(index)
    closeCard()
    openCard(index-1)
    }
}