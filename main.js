import './style.scss'
import ScrollReveal from "scrollreveal";


// ScrollReveal({
//     origin: 'top',
//     distance: '50px',
//     duration: 2000,
//     // reset: true,
// }).reveal('.card',{
//     interval: 300
// });


let slideup = {
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    interval : 500
};

ScrollReveal().reveal('.card', slideup);