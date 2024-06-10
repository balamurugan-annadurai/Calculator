const container = document.createElement("div");
container.setAttribute("class","container");
document.body.appendChild(container);

const h1 = document.createElement("h1");
h1.textContent = "Calculator";
h1.setAttribute("id","title");

const p = document.createElement("p");
p.textContent = "Use this Calculator";
p.setAttribute("id","description");

const calculator = document.createElement("div");
calculator.setAttribute("class","calculator");

const input = document.createElement("input");
input.setAttribute("id","result");
calculator.append(input)
const buttonsValue = ['AC','DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','00','.','='];
let count = 0;
const buttons = document.createElement("div");
buttons.setAttribute("class","buttons");
calculator.appendChild(buttons);

for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
       const btn = document.createElement("button");
       btn.textContent = buttonsValue[count];
       buttons.append(btn);
       count++;
    }
}

container.append(h1,p,calculator);