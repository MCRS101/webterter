window.onload = function(){
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // 2 วินาที
}

const words = ["Developer", "Dream Chaser","Student","Curious Mind"]; //คำที่จะใส่
let i = 0, j = 0;
let isDeleting = false;
const typeSpeed = 200;

function type() {
  const span = document.getElementById("type");
  const word = words[i]; //การเรียก list 

  if(!isDeleting){
    span.textContent = word.substring(0, j+1);
    j++;
    if(j === word.length){
      isDeleting = true;
      setTimeout(type, 3000); // pause before deleting
      return;
    }
  } else {
    span.textContent = word.substring(0, j-1);
    j--;
    if(j === 0){
      isDeleting = false;
      i = (i+1) % words.length; 
    }
  }
  setTimeout(type, typeSpeed);
}

type();
