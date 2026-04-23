const pai = document.querySelector("body");

function gerarValor(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarCor(){
    
    var bg = document.createElement("div");
    bg.classList.add("Background");
    var cor = `rgb(${gerarValor(0, 255)}, ${gerarValor(0, 255)}, ${gerarValor(0, 255)})`;
    bg.style.backgroundColor = cor;

    pai.appendChild(bg);
    document.getElementById("CodColor").innerHTML = `Códico da cor: ${cor}`;
    
    
}


function Loop1(){
    var Bgs = document.querySelectorAll(".Background");
        while (Bgs.length > 1){            
            pai.removeChild(Bgs[0]);
            // console.log(pai.children);
            var Bgs = document.querySelectorAll(".Background");
        }
        setTimeout(()=> {
            Loop2();
        }, 5000);
}

function Loop2(){
    var Bgs = document.querySelectorAll(".Background");
        while (Bgs.length > 1){
            pai.removeChild(Bgs[0]);
            var Bgs = document.querySelectorAll(".Background");
        }
        console.log(pai.children);
        setTimeout(()=> {
            Loop1();
        }, 5000);
}
Loop1();