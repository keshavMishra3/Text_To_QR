
// step3
let generateImage=async (data)=>{
     
      let image=document.getElementById('qrImg')
      image.src=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${data} `
      let imgDiv=document.getElementById('qrImgDiv')
      imgDiv.style.display="block"
      let container=document.querySelector('.container')
      container.style.height="60vh"
      var mq=matchMedia()
}
//step 2
let inputExtract=()=>{
    let input=document.getElementById('textInput')
    var data=input.value
    generateImage(data);
}
// step 1
let button=document.getElementById('generatorButn')
button.addEventListener('click',()=>{
   inputExtract()
})
