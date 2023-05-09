let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
let img3=document.querySelector(".img3")
let recuadro1=document.querySelector(".recuadro1")
let recuadro2=document.querySelector(".recuadro2")
let recuadro3=document.querySelector(".recuadro3")

recuadro1.addEventListener("dragover", (event) => {
  event.preventDefault();
});
  
recuadro1.addEventListener("dragenter", (event) => {
    event.preventDefault();
});
img1.addEventListener("dragend", () => {
    img1.style.display="none"
});
recuadro2.addEventListener("dragover", (event) => {
    event.preventDefault();
});
  
recuadro2.addEventListener("dragenter", (event) => {
    event.preventDefault();
});
img2.addEventListener("dragend", () => {
    img2.style.display="none"
});
recuadro3.addEventListener("dragover", (event) => {
  event.preventDefault();
});
img3.addEventListener("dragend", () => {
    img3.style.display="none"
});  
recuadro3.addEventListener("dragenter", (event) => {
    event.preventDefault();
});
        


recuadro1.addEventListener("drop",(event)=>{
    let InfoObtenida= event.dataTransfer.getData("text");
    recuadro1.innerHTML = `<img src="${InfoObtenida}"/>`;
    
})
recuadro2.addEventListener("drop",(event)=>{
    let InfoObtenida= event.dataTransfer.getData("text");
    recuadro2.innerHTML = `<img src="${InfoObtenida}"/>`;
    
})
recuadro3.addEventListener("drop",(event)=>{
    let InfoObtenida= event.dataTransfer.getData("text");
    recuadro3.innerHTML = `<img src="${InfoObtenida}"/>`;
    
})