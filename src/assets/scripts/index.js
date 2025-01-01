var menu = document.getElementById("menu"); //get ele icon menu
var sidebar = document.querySelector(".sidebar"); //get ele sidebar
// show sidebar 
menu.addEventListener("click", function (event) {
    event.stopPropagation();
    sidebar.classList.add("active");
});
// heding sidebar
document.body.addEventListener("click", function (event) {
    var target = event.target;
    if (!sidebar.contains(target) && target !== menu) {
        sidebar.classList.remove("active");
    }
});
// get A links sidebar 
var linkSidebar = document.querySelectorAll(".sidebar ul a"); //link in sidebar
function BeforeSidebar() {
    linkSidebar.forEach(function (ele) {
        ele.classList.remove("active");
    });
    this.classList.add("active");
}
linkSidebar.forEach(function (ele) {
    ele.addEventListener("mousemove", BeforeSidebar);
});
//get ele profile
var profile = document.querySelector(".profile-img");
//get ele setting profile
var setting = document.querySelector(".setting");
// show setting profile 
profile.addEventListener("click", showProfile);
function showProfile(event) {
    event.stopPropagation();
    setting.classList.toggle("active");
}
// heding seting profile
document.body.addEventListener("click", function (event) {
    var target = event.target;
    if (!setting.contains(target) && target !== profile) {
        setting.classList.remove("active");
    }
});
// optins optionProExp
var optionProExp = document.querySelector(".options i");
var itemOption = document.querySelector(".item-option");
// show options
optionProExp.addEventListener("click", function (event) {
    event.stopPropagation();
    itemOption.classList.toggle("Active");
});
// heding options
document.body.addEventListener("click", function (event) {
    var traget = event.target;
    if (!itemOption.contains(traget) && traget !== optionProExp) {
        itemOption.classList.remove("Active");
    }
});
var hidAlert = document.querySelector("#hiding");
var Resst = document.querySelector("#reset");
var closable = document.querySelector("#closable");
hidAlert === null || hidAlert === void 0 ? void 0 : hidAlert.addEventListener("click", function () {
    closable.style.display = "none";
});
