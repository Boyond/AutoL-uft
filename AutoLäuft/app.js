
m = 0;
 let y;
const startAuto = () => {

   y = setInterval(run , 10)
function run(){
    m += 5;
    if(m == 1200){
        clearInterval(y)
        m = 0
    }
    const autoImg = document.getElementById('img')
    autoImg.style.marginLeft = m+'px'
}
}

const stopAuto =()=>{
    clearInterval(y)
}