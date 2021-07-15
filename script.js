const TokenomicsData = [45, 35, 15, 5]

const fees = [2, 2, 3]

const roadMap = [true, false, false, false]


document.addEventListener("DOMContentLoaded", () => {
  const srolledElemCords = document.querySelector(`[id='${location.hash.slice(1)}']`)
  document.querySelector('.wrapper').scrollTo(0, srolledElemCords.getBoundingClientRect().top-100)
})

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader')
  setTimeout(() => loader.classList.remove('active'), 1000)
})

const cards = document.querySelectorAll('.percents')
const loads = document.querySelectorAll('.statistic__row__item__load__loader')
const feesPerc = document.querySelectorAll('.fees__percents')
const status = document.querySelectorAll('.roadmap__content__card__icon')

status.forEach((item, key) => roadMap[key] ? item.classList.add('finished') : item.classList.add('lds-spinner'))

let firstLoad = false;

const btns = document.getElementsByClassName('nav__item')

function setActive(href) {
  Array.from(btns).forEach(item => {
    if (Array.from(item.children)[0].getAttribute('href') === href) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

//check scroll events
document.querySelector('.wrapper').addEventListener('scroll', function () { 
  setTimeout(()=>{
    if (isVisible(document.querySelector("#home"))) {
      document.querySelector('.home').classList.add('active')
      document.querySelector(".header").classList.remove('visible')
      document.querySelector(".toTop").classList.remove('visible')
      setActive('#home')
    } else {
      document.querySelector(".header").classList.add('visible')
      document.querySelector(".toTop").classList.add('visible')
      document.querySelector('.home').classList.remove('active')
    }
    if (isVisible(document.querySelector("#tokenomics"))) {
      document.querySelector('.features').classList.add('active')
      document.querySelector(".header").classList.add('visible')
      setActive('#tokenomics')
      if (!firstLoad) {
        cards.forEach((item, key) => {
          item.innerHTML = TokenomicsData[key] + '% '
          loads[key].style.width = TokenomicsData[key] + '%'
        })
        feesPerc.forEach((item, key) => item.innerHTML = fees[key] + "% ")
        firstLoad = true
      }
    } else {
      document.querySelector('.features').classList.add('active')
    }
    if (isVisible(document.querySelector("#aboutus"))) {
      document.querySelector('.info').classList.add('active')
      setActive('#aboutus')
    } else {
      document.querySelector('.info').classList.remove('active')
    }
    if (isVisible(document.querySelector("#grootNFT"))) {
      document.querySelector('.grootNFT').classList.add('active')
      setActive('#grootNFT')
    } else {
      document.querySelector('.grootNFT').classList.remove('active')
    }
    if (isVisible(document.querySelector("#roadmap"))) {
      document.querySelector('.roadmap').classList.add('active')
      setActive('#roadmap')
    } else {
      document.querySelector('.roadmap').classList.remove('active')
    }
  },500)
})


//burger toggle
document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('active')
  document.querySelector('.header__nav').classList.toggle('active')
  //document.querySelector('.header__theme').classList.toggle('active')
})

//theme toggler

/*document.querySelector('.header__theme').addEventListener('click', function () {
  document.querySelector('.wrapper').classList.toggle('theme_dark')
  document.querySelector('.quest').innerHTML = document.querySelector('.wrapper').classList.contains('theme_dark') ? 'dark' : 'light'
  if (document.querySelector('.wrapper').classList.contains('theme_dark')) {
    createStars(30)
    createComets(10)
  } else {
    document.querySelectorAll('.star').forEach(item => item.remove())
  }
})*/

//menu 

/*Array.from(btns).forEach(item => {
  if (Array.from(item.children)[0].getAttribute('name') === location.hash) {
    document.querySelector(`[id='${location.hash.slice(1)}']`).classList.add('active')
    item.classList.add('active')
  }
})*/


//create stars

var wH = document.querySelector('main').offsetHeight;
var wW = window.innerWidth;
var domBody = document.querySelector('.wrapper');

function createStars(n) {
  for (var i = 0; i < n; i++) {
    var div = document.createElement('div');
    div.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star';
    // random everywhere!
    div.setAttribute('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW)
      + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;' + 'z-index: -1;');
    domBody.appendChild(div);
  }
};

function createComets(n) {
  var leftArr = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 60, 65, 70, 75, 80];
  var delayArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50];

  for (var i = 0; i < n; i++) {
    var leftEle = leftArr[Math.floor(Math.random() * leftArr.length)] + parseFloat(Math.random().toFixed(2));
    var delayEle = delayArr[Math.floor(Math.random() * delayArr.length)] * 1000 + Math.round(Math.random() * 700);
    var div = document.createElement('div');
    div.className = 'star comet';
    div.setAttribute('style', 'left:' + leftEle + '%;animation-delay:' + delayEle + 'ms;');
    domBody.appendChild(div);
  }
}

function isVisible(el) {
  var rect = el.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)-500;
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

