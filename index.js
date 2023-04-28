let container = document.createElement("div");
container.classList.add("container");

let header = document.createElement("header");
header.classList.add("header");
header.innerHTML = "<h1>Virtual keyboard</h1>";
container.append(header);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea");
container.append(textarea);

let keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

const buttons = [
  [
    ["~", "`", "Ё", "ё", "Backquote"],
    ["!", "1", "!", "1", "Digit1"],
    ["@", "2", "'", "2", "Digit2"],
    ["#", "3", "№", "3", "Digit3"],
    ["$", "4", ";", "4", "Digit4"],
    ["%", "5", "%", "5", "Digit5"],
    ["^", "6", ":", "6", "Digit6"],
    ["&", "7", "?", "7", "Digit7"],
    ["*", "8", "*", "8", "Digit8"],
    ["(", "9", "(", "9", "Digit9"],
    [")", "0", ")", "0", "Digit0"],
    ["_", "-", "_", "-", "Minus"],
    ["+", "=", "+", "=", "Equal"],
    ["Backspace", "Backspace", "Backspace", "Backspace", "Backspace"],
  ],
  [
    ["Tab", "Tab", "Tab", "Tab", "Tab"],
    ["Q", "q", "Й", "й", "KeyQ"],
    ["W", "w", "Ц", "ц", "KeyW"],
    ["E", "e", "У", "у", "KeyE"],
    ["R", "r", "К", "к", "KeyR"],
    ["T", "t", "Е", "е", "KeyT"],
    ["Y", "y", "Н", "н", "KeyY"],
    ["U", "u", "Г", "г", "KeyU"],
    ["I", "i", "Ш", "ш", "KeyI"],
    ["O", "o", "Щ", "щ", "KeyO"],
    ["P", "p", "З", "з", "KeyP"],
    ["{", "[", "Х", "х", "BracketLeft"],
    ["}", "]", "Ъ", "ъ", "BracketRight"],
    ["|", "\\", "/", "\\", "Backslash"],
    ["Del", "Del", "Del", "Del", "Delete"],
  ],
  [
    ["CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock"],
    ["A", "a", "Ф", "ф", "KeyA"],
    ["S", "s", "Ы", "ы", "KeyS"],
    ["D", "d", "В", "в", "KeyD"],
    ["F", "f", "А", "а", "KeyF"],
    ["G", "g", "П", "п", "KeyG"],
    ["H", "h", "Р", "р", "KeyH"],
    ["J", "j", "О", "о", "KeyJ"],
    ["K", "k", "Л", "л", "KeyK"],
    ["L", "l", "Д", "д", "KeyL"],
    [":", ";", "Ж", "ж", "Semicolon"],
    ["'", "'", "Э", "э", "Quote"],
    ["Enter", "Enter", "Enter", "Enter", "Enter"],
  ],
  [
    ["Shift", "Shift", "Shift", "Shift", "ShiftLeft"],
    ["Z", "z", "Я", "я", "KeyZ"],
    ["X", "x", "Ч", "ч", "KeyX"],
    ["C", "c", "С", "с", "KeyC"],
    ["V", "v", "М", "м", "KeyV"],
    ["B", "b", "И", "и", "KeyB"],
    ["N", "n", "Т", "т", "KeyN"],
    ["M", "m", "Ь", "ь", "KeyM"],
    ["<", ".", "Б", "б", "Comma"],
    [">", ",", "Ю", "ю", "Period"],
    ["?", "/", ",", ".", "Slash"],
    ["▲", "▲", "▲", "▲", "ArrowUp"],
    ["Shift", "Shift", "Shift", "Shift", "ShiftRight"],
  ],
  [
    ["Ctrl", "Ctrl", "Ctrl", "Ctrl", "ControlLeft"],
    ["Win", "Win", "Win", "Win", "MetaLeft"],
    ["Alt", "Alt", "Alt", "Alt", "AltLeft"],
    [" ", " ", " ", " ", "Space"],
    ["Alt", "Alt", "Alt", "Alt", "AltRight"],
    ["◄", "◄", "◄", "◄", "ArrowLeft"],
    ["▼", "▼", "▼", "▼", "ArrowDown"],
    ["►", "►", "►", "►", "ArrowRight"],
    ["Ctrl", "Ctrl", "Ctrl", "Ctrl", "ControlRight"],
  ],
];
// for (let i = 0; i < buttons.length; i++) {
//   for (let j = 0; j < buttons[i].length; j++) {
//     a.push(buttons[i][j].reverse());
//   }
// }

console.log(a);
document.body.append(container);
