;(function () {
  ;[...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn")
      this.classList.add("active-btn")
      document.querySelector(".active").classList.remove("active")
      document.getElementById(button.dataset.id).classList.add("active")
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    })
  })
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    //storing theme value to localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("background", "dark-mode")
    } else {
      localStorage.setItem("background", "")
    }
  })
  //checking for theme on page load
  document.addEventListener("DOMContentLoaded", function (event) {
    let background = localStorage.getItem("background")
    if (background) {
      document.body.classList.add(background)
    }
  })
  //resetting form after submission
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset()
    }
  }
})()
