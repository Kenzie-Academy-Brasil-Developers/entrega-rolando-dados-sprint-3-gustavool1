



let dado1 = [1,2,3,4,5,6]
let dado2 = [1,2,3,4,5,6]
let n2 = []
let count = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
function addOnArray(where,n){
    count[where].push(n)
}


for(let i=0; i<=1000; i++){
    let randomD1 = Math.floor(Math.random()*6)
    let randomD2 = Math.floor(Math.random()*6);
    let somaDosDados = dado1[randomD1]+dado2[randomD2]
   
    if(somaDosDados === 2){
        addOnArray(0,2)
    }if(somaDosDados === 3){
        addOnArray(1,3)
    }if(somaDosDados === 4 ){
        addOnArray(2,4)
    }if(somaDosDados === 5){
        addOnArray(3,5)
    }if(somaDosDados === 6){
        addOnArray(4,6)
    }if(somaDosDados === 7){
        addOnArray(5,7)
    }if(somaDosDados === 8){
        addOnArray(6,8)
    }if(somaDosDados === 9 ){
        addOnArray(7,9)
    }if(somaDosDados === 10){
        addOnArray(8,10)
    }if(somaDosDados === 11){
        addOnArray(9, 11)
    }if(somaDosDados === 12 ){
        addOnArray(10,12)
    }
}

let dadosContainer = document.createElement("section");
dadosContainer.classList.add("dadosContainer")
document.body.appendChild(dadosContainer)
let pContainer = document.createElement("section")
pContainer.classList.add("pContainer")

let divsContainer = document.createElement("section")
let h2 = document.createElement("h2")
h2.classList.add("h2Grafico")
h2.innerHTML = 'Gráfico de barras'
divsContainer.appendChild(h2)
divsContainer.classList.add("divsContainer")
dadosContainer.appendChild(pContainer)
dadosContainer.appendChild(divsContainer)





let cont = 1;
for(let j=0; j< count.length; j++){
    cont ++
    let p = document.createElement("p")
    p.innerText = "A face "+cont+' foi encontrada '+count[j].length +" vezes"
    console.log(p)
    dadosContainer.appendChild(p)
    pContainer.appendChild(p)
}


/*Criando DIVS*/ 
for(let i=0; i< count.length ; i++){
    let teste = count[i].length
    
    let divs = document.createElement("div")
    
    divs.style.color='white'
    divs.style.height='50px'
    divs.style.display='inline-block'
    divs.style.margin='5px'
    divs.style.width= `${teste}px`
    let texto = document.createTextNode(teste)
    divs.appendChild(texto)
    divsContainer.appendChild(divs)
}



