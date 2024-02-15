const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')

let chars = []

buttons.forEach(btn => {
btn.addEventListener('click',() => {
    textarea.value += btn.innerText
    chars = textarea.value.split('')
})
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
     btn .classList.toggle('upper')  
    })
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});