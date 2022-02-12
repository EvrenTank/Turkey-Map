let city=document.getElementById("city_name");
city.addEventListener("keypress",function (event) {
  if(event.keyCode === 13){
    console.log("evren");
    let city_isim=this.value;
    let images=document.getElementsByTagName("img");
    for(let i=0;i<images.length;i++){
      images[i].style.display="none";
      if(images[i].id == city_isim){
        images[i].style.display="block";
      }
    }
  }

})
city.addEventListener('click',function () {
  console.log("deneme");

})
