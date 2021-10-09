let content = document.querySelector('.content');
let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');
let red = document.querySelectorAll('.red');

red.forEach(e => e.style.backgroundColor = "red")

const settContent = () => {
    content.style.webkitTransform = "rotate(12deg)"
    content.style.mstransform = " rotate(12deg)"
    content.style.transform = " rotate(12deg)"
    content.style.top = "-30vh";

};

const setti = () => {
    t1.style.webkitTransform = "rotate(331deg)"
    t1.style.mstransform = " rotate(331deg)"
    t1.style.transform = " rotate(331deg)"
    t1.style.top = "71%"
    t1.style.left = "45.7%";
    t1.style.borderRadius = " 50%";
};
const sett2 = () => {
    t2.style.webkitTransform = "rotate(23deg)"
    t2.style.mstransform = " rotate(23deg)"
    t2.style.transform = " rotate(23deg)"
    t2.style.top = "69%"
    t2.style.left = "52.7%";
    t2.style.borderRadius = " 50%";
    // left: 52.7 %;
};


setTimeout(function () {

    settContent()
    setti()
    sett2()

    setTimeout(function () {
        red.forEach(e => e.style.filter = "drop-shadow(0 0 0.5rem #ff00009a)")

    }, 1000)
}, 1000)