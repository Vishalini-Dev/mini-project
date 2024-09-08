let memory = parseFloat(localStorage.getItem('memory')) || 0;  // Initialize memory from localStorage

document.addEventListener('keydown', function (event) {
    const validKeys = /[0-9+\-*/%=]/;
    const key = event.key;

    // Only allow numbers and basic operators
    if (validKeys.test(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else {
        alert("Only numbers are allowed");
    }
});

function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
        clearDisplay();
    }
}

// Memory functions
function memoryAdd() {
    const display = document.getElementById('display');
    if (display.value) {
        memory += parseFloat(display.value);
        localStorage.setItem('memory', memory);
        alert('Added to memory: ' + memory);
        clearDisplay();
    }
}

function memorySub() {
    const display = document.getElementById('display');
    if (display.value) {
        memory -= parseFloat(display.value);
        localStorage.setItem('memory', memory);
        alert('Subtracted from memory: ' + memory);
        clearDisplay();
    }
}

function memoryClear() {
    memory = 0;
    localStorage.removeItem('memory');
    clearDisplay();
}

