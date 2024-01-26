const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));
function msg(){
    console.log("home pressed");
}
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// function display(i){
//     const article1=document.getElementById('home');
//     const article2=document.getElementById('Profiles');
//     const article3=document.getElementById('venues');
//     const article4=document.getElementById('other');
//     switch (i) {
//         case 1:
//             article2.classList.remove('active');
//             article3.classList.remove('active');
//             article4.classList.remove('active');
//             article1.classList.add('active');
            
           
//             break;
//         case 2:
//             article1.classList.remove('active');
//             article3.classList.remove('active');
//             article4.classList.remove('active');
//             article2.classList.add('active');
//             break;
//         case 3:
//             article2.classList.remove('active');
//             article1.classList.remove('active');
//             article4.classList.remove('active');
//             article3.classList.add('active');
//             break;
//         case 4:
//             article2.classList.remove('active');
//             article3.classList.remove('active');
//             article1.classList.remove('active');
//             article4.classList.add('active');
//             break;
    
//         default:
//             break;
//     }
    
// }
// function menuchange(i){
//   const menu=new Array(4);
//   menu[1]=document.getElementById('home-menu');
//   menu[2]=document.getElementById('profile-menu');
//   menu[i].classList.add('active-menu');

// }
const menu=new Array(4);
  menu[0]=document.getElementById('home-menu');
  menu[1]=document.getElementById('profile-menu');
  menu[2]=document.getElementById('venues-menu');
  menu[3]=document.getElementById('profile-menu');

  const right=new Array(4);
  right[0]=document.getElementById('home');
  right[1]=document.getElementById('Profiles');
  right[2]=document.getElementById('venues');
  right[3]=document.getElementById('other');
  
function displaychange(i){
  for (let index = 0; index < 4; index++) {
    menu[index].classList.remove('active-menu');
    right[index].classList.remove('active');
    }
    menu[i].classList.add('active-menu');
    right[i].classList.add('active');
    console.log("displaychange called");

}