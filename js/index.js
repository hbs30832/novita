const header = document.querySelector("header");
const gnbList = document.querySelector(".gnbList");
const depth01List = document.querySelectorAll(".depth01");

depth01List.forEach((depth) => {
  console.log(depth.getBoundingClientRect().left);
  const depth02 = depth.querySelector(".depth02");
  depth02.style = `padding-left : ${depth.getBoundingClientRect().left}px`;
});

gnbList.addEventListener("mouseover", (e) => {
  if (e.target.matches(".depth01")) {
    header.classList.add("on");
  }
});

gnbList.addEventListener("mouseout", (e) => {
  if (e.target.matches(".depth01")) header.classList.remove("on");
});
