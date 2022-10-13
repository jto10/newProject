let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>
{
    navbar.classList.remove('active');
}


let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});


const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(counters[index]);
        }else{
            counters[index] += 1;
            number.innerHTML = counters[index] + "";
            svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
        }
    }, 20);
    
});


$(document).ready(function() {
    $(".submit").click(function() {
      $(".submit").addClass("loading");
      setTimeout(function() {
        $(".submit").addClass("hide-loading");
        // For failed icon just replace ".done" with ".failed"
        $(".done").addClass("finish");
      }, 3000);
      setTimeout(function() {
        $(".submit").removeClass("loading");
        $(".submit").removeClass("hide-loading");
        $(".done").removeClass("finish");
        $(".failed").removeClass("finish");
      }, 5000);
    })
  });







