const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const item = $$(".vacation__item");
const desc = $$(".vacation__description");

const tabActive = $(".vacation__item.vacation__item--active");
const dash = $(".vacation__dash");
dash.style.width = tabActive.offsetWidth + "px";
dash.style.left = tabActive.offsetLeft + "px";
item.forEach((tab, index) => {
    const description = desc[index];
    tab.onclick = function (e) {
        $(".vacation__item.vacation__item--active").classList.remove(
            "vacation__item--active"
        );
        $(
            ".vacation__description.vacation__description--active"
        ).classList.remove("vacation__description--active");

        dash.style.left = this.offsetLeft + "px";
        dash.style.width = this.offsetWidth + "px";
        console.log(this.offsetWidth)

        this.classList.add("vacation__item--active");
        description.classList.add("vacation__description--active");
    };
});


const pages = [
    {
        description: "“It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!”",
        author:"Karla Deras",
        image:"http://127.0.0.1:5500/asset.css/img/Our%20Reviews-img.png"
    
    },
    {
        description: "“akakakkakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!”",
        author:"Abraham Linco",
        image:"http://127.0.0.1:5500/asset.css/img/Our%20Reviews-img.png"
    
    },
    {
        description: "“slllllllllllllllllllllllllllllllllllllllllllllllll”",
        author:"Jonh",
        image:"http://127.0.0.1:5500/asset.css/img/Our%20Reviews-img.png"
    
    },
    {
        description: "“It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!”",
        author:"Pritier",
        image:"http://127.0.0.1:5500/asset.css/img/Our%20Reviews-img.png"
    
    },
]

let description = document.querySelector('.review__content-desc') //thẻ p
let author = document.querySelector('.review__content-author') // ;ấy được thẻ span
let image = document.querySelector('.review__img') //thẻ img

const backBtn = document.querySelector('.review__vector-switch-first')
const nextBtn = document.querySelector('.review__vector-switch-last')

let currentIndex= 0 ;
backBtn.onclick = function() {
    currentIndex --
}
nextBtn.onclick =function(){
    currentIndex++
    description.textContent = pages[currentIndex].description

}

// phần active tab 
const buttons = document.querySelectorAll(".btnChoice"); // lấy các thẻ có class là btnChoice
const lists = document.querySelectorAll(".choice__list");//lấy các thẻ có class là choice__list

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() { // lắng nghe sự kiện onclick
    const activeButton = document.querySelector(".btnChoice.active");//lấy ra btn đang được active
    const activeList = document.querySelector(".choice__list.active");//lấy ra thẻ div đang được active

    if (activeButton) { // nếu có class là active thì xóa đi
      activeButton.classList.remove("active");
    }
    if (activeList) {//có thẻ div nào đang có class là active thì xóa

      activeList.classList.remove("active");
    }

    buttons[i].classList.add("active");//thêm class actie
    lists[i].classList.add("active"); //thêm class active
  });
}







// review --------------------------------------