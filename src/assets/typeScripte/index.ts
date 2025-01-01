
let menu = document.getElementById("menu") as HTMLButtonElement; //get ele icon menu
let sidebar = document.querySelector(".sidebar") as HTMLMenuElement; //get ele sidebar

// show sidebar 
menu.addEventListener("click", (event) => {
    event.stopPropagation()
    sidebar.classList.add("active");
});

// heding sidebar
document.body.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as Node
    if (!sidebar.contains(target) && target !== menu) {
        sidebar.classList.remove("active");
    }
});
// get A links sidebar 
let linkSidebar = document.querySelectorAll(".sidebar ul a") as NodeListOf<HTMLAnchorElement> //link in sidebar

function BeforeSidebar(this) {
    linkSidebar.forEach((ele)=>{
        ele.classList.remove("active");
    })
    this.classList.add("active")
}
linkSidebar.forEach((ele) => { 
    ele.addEventListener("mousemove",BeforeSidebar)
})

 //get ele profile
let profile = document.querySelector(".profile-img") as HTMLImageElement; 
//get ele setting profile
let setting = document.querySelector(".setting") as HTMLMenuElement; 
// show setting profile 
profile.addEventListener("click", showProfile)
function showProfile(event: MouseEvent)  {
    event.stopPropagation()
    setting.classList.toggle("active");
}
// heding seting profile
document.body.addEventListener("click", (event: MouseEvent)  => {
    const target = event.target as Node
    if (!setting.contains(target) && target !== profile) {
        setting.classList.remove("active");
    }
});
// optins optionProExp
let optionProExp = document.querySelector(".options i") as HTMLButtonElement; 
let itemOption = document.querySelector(".item-option") as HTMLMenuElement
// show options
optionProExp.addEventListener("click", (event:MouseEvent) => {
    event.stopPropagation()
    itemOption.classList.toggle("Active")
})
// heding options
document.body.addEventListener("click", (event: MouseEvent) => {
    const traget = event.target as Node
    if (!itemOption.contains(traget) && traget !== optionProExp) {
        itemOption.classList.remove("Active")
    }
})

