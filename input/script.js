// for scroll animation
const allDiv = document.querySelectorAll(".allDiv-transition");
const navBar = document.querySelector(".navbar");
const leftSideMenu = document.querySelector(".leftSideMenu");
const changeColor = document.querySelectorAll(".changeToDarkmode");
const changeColor_2 = document.querySelectorAll(".changeColor");
const darkMode = document.querySelector(".darkmode");
const darkModeBtnIcon = document.querySelector(".darkmodeBtn");
const body = document.querySelector(".body");
const thirdCards = document.querySelectorAll(".thirdCards");

window.addEventListener("scroll", () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  allDiv.forEach((div) => {
    const divTop = div.getBoundingClientRect().top;

    if (divTop < triggerBottom) {
      div.classList.add("translate-x-0");
    } else {
      div.classList.remove("translate-x-0");
    }
  });
  // add stickyNavbar

  if (window.scrollY > 0) {
    navBar.classList.remove("bg-white");
    navBar.classList.remove("text-gray-500");
    leftSideMenu.classList.add("opacity-0");
    document.querySelector(".menubtn").style = "white";
    darkModeBtnIcon.style = "white";
  } else {
    navBar.classList.add("bg-white");
    navBar.classList.add("text-gray-500");
    leftSideMenu.classList.remove("opacity-0");
  }

  if (body.classList.contains("bg-black")) {
    navBar.classList.add("shadow-md");
    navBar.classList.add("shadow-gray-500");
    navBar.classList.toggle("navScroll-sticky-darkTheme", window.scrollY > 0);
  } else {
    navBar.classList.toggle("navScroll-sticky-whiteTheme", window.scrollY > 0);
    navBar.classList.remove("shadow-md");
    navBar.classList.remove("shadow-gray-500");
    navBar.classList.add("shadow-gray-200");
  }

  // add stickyNavbar
});
// for scroll animation
// for darkmode

darkMode.addEventListener("click", () => {
  body.classList.add("transition-all");
  body.classList.add("duration-700");
  body.classList.toggle("bg-black");

  changeColor.forEach((eachclass) => {
    eachclass.classList.toggle("text-white");
  });
  thirdCards.forEach((eachCard) => {
    eachCard.classList.toggle("shadow-md");
    eachCard.classList.toggle("shadow-white");
  });
  changeColor_2.forEach((each) => {
    if (each.style.color == "black") {
      each.style.color = "white";
    } else {
      each.style.color = "black";
    }
  });
  if (darkModeBtnIcon.style == "black") {
    darkModeBtnIcon.style = "white";
  } else {
    darkModeBtnIcon.style = "black";
  }
});

// for darkmode

// for menuBtn
const menuPage = document.querySelector(".menuPage");
const menuBtn = document.querySelector(".menuBtn");
const closeMenuPage = document.querySelector(".closeMenuPageBtn");
const allBtnDivide = document.querySelector(".allbtnDivide");

menuBtn.addEventListener("click", () => {
  menuPage.classList.add("z-50");
  menuPage.classList.remove("translate-x-400%");
  body.classList.add("overflow-y-hidden");

  if (body.classList.contains("bg-black")) {
    menuPage.classList.add("bg-white");
    menuPage.classList.remove("text-white");
    closeMenuPage.classList.remove("bg-white");
    closeMenuPage.classList.add("bg-black");
    closeMenuPage.classList.add("text-white");
    allBtnDivide.classList.remove("divide-white");
    allBtnDivide.classList.add("divide-black");
  } else {
    menuPage.classList.remove("bg-white");
    menuPage.classList.remove("text-black");
    menuPage.classList.add("text-white");
    closeMenuPage.classList.add("bg-white");
    closeMenuPage.classList.remove("bg-black");
    closeMenuPage.classList.remove("text-white");
    allBtnDivide.classList.remove("divide-black");
    allBtnDivide.classList.add("divide-white");
  }
});
closeMenuPage.addEventListener("click", () => {
  menuPage.classList.add("translate-x-400%");
  body.classList.remove("overflow-y-hidden");
});

// for menuBtn
