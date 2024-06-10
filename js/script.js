document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);

    const h1 = document.createElement("h1");
    h1.textContent = "Calculator";
    h1.setAttribute("id", "title");
    container.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Use this Calculator";
    p.setAttribute("id", "description");
    container.appendChild(p);

    const calculator = document.createElement("div");
    calculator.setAttribute("class", "calculator");
    container.appendChild(calculator);

    const input = document.createElement("input");
    input.setAttribute("id", "result");
    input.setAttribute("readonly", true);
    calculator.appendChild(input);

    const buttonsValue = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '='];
    const buttonsId = ['clear', 'del', 'mod', 'div', '7', '8', '9', 'multi', '4', '5', '6', 'subtract', '1', '2', '3', 'add', '0', '00', 'dot', 'equal'];
    
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    calculator.appendChild(buttons);

    buttonsValue.forEach((value, index) => {
        const btn = document.createElement("button");
        btn.textContent = value;
        btn.setAttribute("id", buttonsId[index]);
        buttons.appendChild(btn);
    });

    // Functions for operations
    const clearInput = () => input.value = '';
    const deleteLastChar = () => input.value = input.value.slice(0, -1);
    const calculateResult = () => {
        try {
            input.value = eval(input.value.replace(/[^-()\d/*+.%]/g, ''));
        } catch {
            input.value = "Error";
        }
    };

    const handleInput = (value) => {
        switch (value) {
            case 'AC':
                clearInput();
                break;
            case 'DEL':
                deleteLastChar();
                break;
            case '=':
                calculateResult();
                break;
            default:
                input.value += value;
        }
    };

    // Event listeners for buttons
    buttons.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            handleInput(event.target.textContent);
        }
    });

    // Event listener for key press
    document.addEventListener("keydown", (event) => {
        const keyMap = {
            'Enter': '=',
            'Backspace': 'DEL',
            'Escape': 'AC',
            '*': '*',
            '/': '/',
            '+': '+',
            '-': '-',
            '.': '.',
            '%': '%'
        };

        const key = keyMap[event.key] || event.key;

        if (buttonsValue.includes(key)) {
            handleInput(key);
        }
    });
});

