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

let language = localStorage.getItem("language") || "eng";

window.addEventListener("unload", function () {
  localStorage.setItem("language", `${language}`);
});
const funcButtons = [
  "ControlLeft",
  "AltLeft",
  "Backspace",
  "Tab",
  "Delete",
  "CapsLock",
  "ShiftLeft",
  "Enter",

  "ControlRight",
  "MetaLeft",
  "AltLeft",
  "AltRight",
  "ControlRight",
  "ShiftRight",
];
let [CtrlL, AltL] = funcButtons;

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
    ["CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock"],
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

for (let i = 0; i < buttons.length; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < buttons[i].length; j++) {
    if (language === "eng") {
      const btn = document.createElement("div");
      btn.classList.add("btn");
      btn.classList.add(`${buttons[i][j][4]}`);
      btn.innerHTML = `<span class="eng">
    <span class="loverCase">${buttons[i][j][1]}</span>
    <span class="upperCase hidden">${buttons[i][j][0]}</span>
    </span>
    <span class="ru">
     <span class="loverCase hidden">${buttons[i][j][3]}</span>
    <span class="upperCase hidden">${buttons[i][j][2]}</span>
    </span>`;
      row.append(btn);
    } else {
      const btn = document.createElement("div");
      btn.classList.add("btn");
      btn.classList.add(`${buttons[i][j][4]}`);
      btn.innerHTML = `<span class="eng">
    <span class="loverCase hidden">${buttons[i][j][1]}</span>
    <span class="upperCase hidden">${buttons[i][j][0]}</span>
    </span>
    <span class="ru">
     <span class="loverCase">${buttons[i][j][3]}</span>
    <span class="upperCase hidden">${buttons[i][j][2]}</span>
     </span>`;
      row.append(btn);
    }
  }
  keyboard.append(row);
}
container.append(keyboard);

let footer = document.createElement("footer");
footer.classList.add("footer");
footer.innerHTML =
  "<p>The keyboard was created in the Windows operating system</p><p>To switch the language combination: left ctrl + left alt</p>";
container.append(footer);
document.body.append(container);

let caps = "";
let active;

keyboard.addEventListener("mousedown", illuminationKey);
keyboard.addEventListener("mouseup", (e) => {
  if (e.target.closest(".btn")) {
    e.target.closest(".btn").classList.remove("active");
  }
  changeLanguage();
});
document.addEventListener("mouseup", () => {
  if (active) {
    active.classList.remove("active");
  }
  changeLanguage();
});

function illuminationKey(e) {
  if (e.target.closest(".btn")) {
    e.target.closest(".btn").classList.add("active");
    active = e.target.closest(".btn");
  }
  if (e.target.closest(".btn").classList.contains("CapsLock")) {
    changeCaps();
  }
  changeLanguage();
}
keyboard.addEventListener("mousedown", typeLetter);
function typeLetter(e) {
  if (e.target.closest(".btn")) {
    let cursorPosition = textarea.selectionStart;
    if (funcButtons.indexOf(e.target.closest(".btn").classList[1]) === -1) {
      textarea.innerHTML =
        textarea.value.slice(0, cursorPosition) +
        e.srcElement.innerText +
        textarea.value.slice(cursorPosition);
      textarea.selectionStart = cursorPosition + 1;
    }
    if (e.target.closest(".btn").classList[1] === "Backspace") {
      if (cursorPosition !== 0) {
        textarea.innerHTML =
          textarea.value.slice(0, cursorPosition - 1) +
          textarea.value.slice(cursorPosition);
        textarea.selectionStart = cursorPosition - 1;
      }
    }
    if (e.target.closest(".btn").classList[1] === "Space") {
      textarea.innerHTML =
        textarea.value.slice(0, cursorPosition) +
        " " +
        textarea.value.slice(cursorPosition);
      textarea.selectionStart = cursorPosition + 1;
    }
    if (e.target.closest(".btn").classList[1] === "Tab") {
      textarea.innerHTML =
        textarea.value.slice(0, cursorPosition) +
        "    " +
        textarea.value.slice(cursorPosition);
      textarea.selectionStart = cursorPosition + 4;
    }
    if (e.target.closest(".btn").classList[1] === "Enter") {
      textarea.innerHTML =
        textarea.value.slice(0, cursorPosition) +
        `\n` +
        textarea.value.slice(cursorPosition);
      textarea.selectionStart = cursorPosition + 1;
    }
    if (e.target.closest(".btn").classList[1] === "Delete") {
      if (cursorPosition !== textarea.value.length) {
        textarea.innerHTML =
          textarea.value.slice(0, cursorPosition) +
          textarea.value.slice(cursorPosition + 1);
        textarea.selectionStart = cursorPosition;
      }
    }
  }
}

document.addEventListener("keydown", pushKey);
function pushKey(e) {
  e.preventDefault();
  let activeBtn = document.querySelector(`.${e.code}`);
  let cursorPosition = textarea.selectionStart;
  if (funcButtons.indexOf(activeBtn.classList[1]) === -1) {
    textarea.innerHTML =
      textarea.value.slice(0, cursorPosition) +
      activeBtn.innerText +
      textarea.value.slice(cursorPosition);
    textarea.selectionStart = cursorPosition + 1;
  }
  if (activeBtn.classList[1] === "Backspace") {
    if (cursorPosition !== 0) {
      textarea.innerHTML =
        textarea.value.slice(0, cursorPosition - 1) +
        textarea.value.slice(cursorPosition);
      textarea.selectionStart = cursorPosition - 1;
    }
  }

  if (activeBtn.classList[1] === "Space") {
    textarea.innerHTML =
      textarea.value.slice(0, cursorPosition) +
      " " +
      textarea.value.slice(cursorPosition);
    textarea.selectionStart = cursorPosition + 1;
  }
  if (activeBtn.classList[1] === "Tab") {
    textarea.innerHTML =
      textarea.value.slice(0, cursorPosition) +
      "    " +
      textarea.value.slice(cursorPosition);
    textarea.selectionStart = cursorPosition + 4;
  }
  if (activeBtn.classList[1] === "Enter") {
    textarea.innerHTML =
      textarea.value.slice(0, cursorPosition) +
      `\n` +
      textarea.value.slice(cursorPosition);
    textarea.selectionStart = cursorPosition + 1;
  }
  if (activeBtn.classList[1] === "Delete") {
    if (cursorPosition !== textarea.value.length) {
      textarea.innerHTML =
        textarea.value.slice(0, cursorPosition) +
        textarea.value.slice(cursorPosition + 1);
      textarea.selectionStart = cursorPosition;
    }
  }
  activeBtn.classList.add("active");
  if (activeBtn.classList.contains("CapsLock")) {
    changeCaps();
  }
  changeLanguage();
}
document.addEventListener("keyup", (e) => {
  let a = document.querySelector(`.${e.code}`);
  a.classList.remove("active");
  changeLanguage();
});
function changeCaps() {
  if (caps === "1") {
    caps = "";
  } else {
    caps = "1";
  }
}

function changeLanguage() {
  let controlLeft = document.querySelector(`.${CtrlL}`);
  let altLeft = document.querySelector(`.${AltL}`);
  if (
    controlLeft.classList.contains("active") &&
    altLeft.classList.contains("active")
  ) {
    if (language === "eng") {
      language = "rus";
      setLanguageToRus();
    } else {
      language = "eng";
      setLanguageToEng();
    }
    localStorage.setItem("language", `${language}`);
  }
  if (language === "eng") {
    setLanguageToEng();
  } else {
    setLanguageToRus();
  }
}
let ShiftLeft = document.querySelector(".ShiftLeft");
let ShiftRight = document.querySelector(".ShiftRight");
function setLanguageToRus() {
  let keys = document.getElementsByClassName("btn");
  if (
    caps &&
    (ShiftLeft.classList.contains("active") ||
      ShiftRight.classList.contains("active"))
  )
    for (let i = 0; i < keys.length; i++) {
      keys[i].children[0].children[0].classList.remove("hidden");
      keys[i].children[0].children[1].classList.remove("hidden");
      keys[i].children[1].children[0].classList.remove("hidden");
      keys[i].children[1].children[1].classList.remove("hidden");
      keys[i].children[0].children[0].classList.add("hidden");
      keys[i].children[0].children[1].classList.add("hidden");
      keys[i].children[1].children[1].classList.add("hidden");
    }
  else if (
    caps ||
    ShiftLeft.classList.contains("active") ||
    ShiftRight.classList.contains("active")
  ) {
    for (let i = 0; i < keys.length; i++) {
      keys[i].children[0].children[0].classList.remove("hidden");
      keys[i].children[0].children[1].classList.remove("hidden");
      keys[i].children[1].children[0].classList.remove("hidden");
      keys[i].children[1].children[1].classList.remove("hidden");
      keys[i].children[0].children[0].classList.add("hidden");
      keys[i].children[0].children[1].classList.add("hidden");
      keys[i].children[1].children[0].classList.add("hidden");
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      keys[i].children[0].children[0].classList.remove("hidden");
      keys[i].children[0].children[1].classList.remove("hidden");
      keys[i].children[1].children[0].classList.remove("hidden");
      keys[i].children[1].children[1].classList.remove("hidden");
      keys[i].children[0].children[0].classList.add("hidden");
      keys[i].children[0].children[1].classList.add("hidden");
      keys[i].children[1].children[1].classList.add("hidden");
    }
  }
  if (caps) {
    let a = document.querySelector(".CapsLock");
    a.classList.add("active");
  }
}
function setLanguageToEng() {
  let keys = document.getElementsByClassName("btn");
  if (
    caps &&
    (ShiftLeft.classList.contains("active") ||
      ShiftRight.classList.contains("active"))
  ) {
    for (let i = 0; i < keys.length; i++) {
      keys[i].children[0].children[0].classList.remove("hidden");
      keys[i].children[0].children[1].classList.remove("hidden");
      keys[i].children[1].children[0].classList.remove("hidden");
      keys[i].children[1].children[1].classList.remove("hidden");
      keys[i].children[0].children[1].classList.add("hidden");
      keys[i].children[1].children[0].classList.add("hidden");
      keys[i].children[1].children[1].classList.add("hidden");
    }
  } else if (
    caps ||
    ShiftLeft.classList.contains("active") ||
    ShiftRight.classList.contains("active")
  ) {
    for (let i = 0; i < keys.length; i++) {
      keys[i].children[0].children[0].classList.remove("hidden");
      keys[i].children[0].children[1].classList.remove("hidden");
      keys[i].children[1].children[0].classList.remove("hidden");
      keys[i].children[1].children[1].classList.remove("hidden");
      keys[i].children[0].children[0].classList.add("hidden");
      keys[i].children[1].children[0].classList.add("hidden");
      keys[i].children[1].children[1].classList.add("hidden");
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      keys[i].children[0].children[0].classList.remove("hidden");
      keys[i].children[0].children[1].classList.remove("hidden");
      keys[i].children[1].children[0].classList.remove("hidden");
      keys[i].children[1].children[1].classList.remove("hidden");
      keys[i].children[0].children[1].classList.add("hidden");
      keys[i].children[1].children[0].classList.add("hidden");
      keys[i].children[1].children[1].classList.add("hidden");
    }
  }
  if (caps) {
    let a = document.querySelector(".CapsLock");
    a.classList.add("active");
  }
}
