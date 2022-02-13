const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panels");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    //the panel for clicked tab
    const targetPanel = document.querySelector(e.target.dataset.target);
    console.log(targetPanel)
    //targets all children (the <li>s) of parent of the clicked tab (the <ul>)
    let ulChildren = e.target.parentNode.children;
    //loop through the children then add or remove the active class as needed
    for (let i = 0; i < ulChildren.length; i++) {
      if (ulChildren[i] != e.target) {
        ulChildren[i].classList.remove("active")
      } else e.target.classList.add("active");
    }
    
    panels.forEach(function (panel) {
      if (panel === targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
