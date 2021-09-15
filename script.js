const slider = document.querySelector('.bar');
let views = document.querySelector('.number');
let cost = document.querySelector('.dollar');
const billing = document.querySelector('.checkbox');



const numbersDiscount = () => {
    if (slider.value == '0') {
        views.innerHTML = '10K';
        slider.style.background = "linear-gradient(90deg, hsl(174, 51%, 75%) 0%, hsl(224, 65%, 95%) 0%)"
        if (billing.checked) { 
            cost.innerHTML = '6';
        } else {
            cost.innerHTML = '8';
        }
    } else if (slider.value == '1') {
        views.innerHTML = '50K';
        slider.style.background = "linear-gradient(90deg, hsl(174, 51%, 75%) 25%, hsl(224, 65%, 95%) 0%)"
        if (billing.checked) { 
            cost.innerHTML = '9';
        } else {
            cost.innerHTML = '12';
        }
    } else if (slider.value == '2') {
        views.innerHTML = '100K';
        slider.style.background = "linear-gradient(90deg, hsl(174, 51%, 75%) 50%, hsl(224, 65%, 95%) 0%)"
        if (billing.checked) { 
            cost.innerHTML = '12';
        } else {
            cost.innerHTML = '16';
        }
    } else if (slider.value == '3') {
        views.innerHTML = '500K';
        slider.style.background = "linear-gradient(90deg, hsl(174, 51%, 75%) 75%, hsl(224, 65%, 95%) 0%)"
        if (billing.checked) { 
            cost.innerHTML = '18';
        } else {
            cost.innerHTML = '24';
        }
    } else if (slider.value == '4') {
        views.innerHTML = '1M';
        slider.style.background = "linear-gradient(90deg, hsl(174, 51%, 75%) 100%, hsl(224, 65%, 95%) 0%)"
        if (billing.checked) { 
            cost.innerHTML = '27';
        } else {
            cost.innerHTML = '36';
        }
    }
}

// const numbersData = () => {
//     if (slider.value == '0') {
//         views.innerHTML = '10K';
//         cost.innerHTML = '8';
//     } else if (slider.value == '1') {
//         views.innerHTML = '50K';
//         cost.innerHTML = '12';
//     } else if (slider.value == '2') {
//         views.innerHTML = '100K';
//         cost.innerHTML = '16';
//     } else if (slider.value == '3') {
//         views.innerHTML = '500K';
//         cost.innerHTML = '24';
//     } else if (slider.value == '4') {
//         views.innerHTML = '1M';
//         cost.innerHTML = '36';
//     }
//     return cost.innerHTML;
// }

// const numbersDiscount = () => {
//     if (billing.checked) {
//         if (slider.value == '0') {
//             views.innerHTML = '10K';
//             cost.innerHTML = '6';
//         } else if (slider.value == '1') {
//             views.innerHTML = '50K';
//             cost.innerHTML = '9';
//         } else if (slider.value == '2') {
//             views.innerHTML = '100K';
//             cost.innerHTML = '12';
//         } else if (slider.value == '3') {
//             views.innerHTML = '500K';
//             cost.innerHTML = '18';
//         } else if (slider.value == '4') {
//             views.innerHTML = '1M';
//             cost.innerHTML = '27';
//         }
//     } else {
//         numbersData();
//     }
// }

// const discount = () => {
//     if (slider.value == '0') {
//         views.innerHTML = '10K';
//         cost.innerHTML = '6';
//     } else if (slider.value == '1') {
//         views.innerHTML = '50K';
//         cost.innerHTML = '9';
//     } else if (slider.value == '2') {
//         views.innerHTML = '100K';
//         cost.innerHTML = '12';
//     } else if (slider.value == '3') {
//         views.innerHTML = '500K';
//         cost.innerHTML = '18';
//     } else if (slider.value == '4') {
//         views.innerHTML = '1M';
//         cost.innerHTML = '27';
//     }
// }

const discountCost = () => {
    n = parseInt(cost.innerHTML);
    if (billing.checked) {
        let updatedCost = n * .75;
        cost.innerHTML = updatedCost;
    } else {
        updatedCost = n / .75;
        cost.innerHTML = updatedCost;
    }
}

slider.addEventListener("input", numbersDiscount);
billing.addEventListener("click", discountCost);