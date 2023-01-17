var tabLinks = document.getElementsByClassName('tab-links');
var tabContent = document.getElementsByClassName('tab-content');
const msg = document.getElementById('msg')
let displayMessage = document.getElementById('dispaly')
let displayMessageF = document.getElementById('dispaly-f')
let displayMessageS = document.getElementById('dispaly-s')
let displayMessageM = document.getElementById('dispaly-m')

function opentab(tabname){
    for(tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for(tabCont of tabContent) {
        tabCont.classList.remove('active-tab');
        event.currentTarget.classList.add("active-link")
    }
    document.getElementById(tabname).classList.add('active-tab')
}
