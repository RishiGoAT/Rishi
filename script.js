var images = ["https://stock.flashmode.tn/wp-content/uploads/2020/06/renegade-raider-png-531.png","https://th.bing.com/th/id/R.61877178546a199d653e91d19199724a?rik=XzUvXWndIRd7Dw&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.8f443a08bbc62e1980cb56debb12be56?rik=jVJg0CUv4n%2fV%2bg&pid=ImgRaw&r=0","https://th.bing.com/th/id/OIP.Dk_76CZ3QLozqLJ0nk_fGAHaHa?pid=ImgDet&rs=1"];
var names = ["Rengaide Raider", "Ghoul Trooper", "Black Kinght", "skull trooper"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}

var names = ["Rengaide Raider", "Ghoul Trooper", "Black Kinght", "skull trooper"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}