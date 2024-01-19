const btn_menu =document.querySelector(".btn_menu")
const menu_lateral=document.querySelector(".menu_lateral")
let contador=2
btn_menu.addEventListener("click",()=>{
    if(contador % 2 ==0){
        menu_lateral.style.left="0px"
        contador++
    }else{
        menu_lateral.style.left="-300px"
        contador++
    }
    
})