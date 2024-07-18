let imageButton = document.querySelector('#imageButton');
let image = document.querySelector('#image');
function changeImage(imageCounter){
  if (imageCounter==0) {
    image.src = "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1220130897.jpg"
  }
  
  else if(imageCounter==1){
    image.src = "https://images.alphacoders.com/929/thumb-1920-929049.jpg"
    console.log('1')
  }
  else if(imageCounter==2){
    console.log('2')
    image.src ="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1165332891-scaled.jpg"
  }
  else if(imageCounter==3){
    image.src = "https://th.bing.com/th/id/R.dcdbf37a2d90211485a8337b3e87c3eb?rik=cNtsH0HApoH4oQ&pid=ImgRaw&r=0"
  }
  else if(imageCounter==4){
    image.src = "https://images6.alphacoders.com/400/400098.jpg"
  }
}
let imageCounter=0
imageButton.addEventListener("click", function(){
 if(imageCounter>3){
  imageCounter=0
 }
 else {
  imageCounter ++
  }
changeImage(imageCounter)
})