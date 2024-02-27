let burgir = document.querySelector("#burgermenu");
let sidemenu = document.querySelector("#link_list");

burgir.addEventListener("click", () =>{
    burgir.classList.toggle("active")
    sidemenu.classList.toggle("active")
});