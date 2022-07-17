
//step-1 load handle
//gloval veriable
let div = null;
window.onload = () => {
    main();

}

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const copy_color = document.getElementById('copy_color');
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        root.style.backgroundColor = generateRgb();
        output.value = generateRgb();
    })
    copy_color.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        if (div != null) {
            div.remove();
            // div = null;
        }
        generateToast(`${output.value} Copied`);
    })
}

//step-2 Rgbcolor generate function create

function generateRgb() {
    //rgb(0, 0, 0) rgb(255, 255, 255)
    //Hexadesimal
    //#000000  #FFFFFF
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
}
// step-3 - generate tost message

function generateToast(msg) {
     div = document.createElement('div');
    div.innerHTML = msg;
    div.className = 'toast_msg toast_msg_slide_in';
    div.addEventListener('click', function () {
        div.classList.remove('toast_msg_slide_in')
        div.classList.add('toast_msg_slide_out')
        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        })
    })
    document.body.appendChild(div);
   
}
generateRgb();

















































































