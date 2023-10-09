function handleClick(param){
  return param === "top" ? location.href = "#bottom" : location.href = "#top"
}
         
         
         function saklar(){
            let AcceptConditions1 = document.getElementById("AcceptConditions1")
            let AcceptConditions2 = document.getElementById("AcceptConditions2")
            let AcceptConditions3 = document.getElementById("AcceptConditions3")
            let AcceptConditions4 = document.getElementById("AcceptConditions4")
            let AcceptConditions5 = document.getElementById("AcceptConditions5")
            let AcceptConditions6 = document.getElementById("AcceptConditions6")
            let AcceptConditions7 = document.getElementById("AcceptConditions7")
            let AcceptConditions8 = document.getElementById("AcceptConditions8")
            let AcceptConditions9 = document.getElementById("AcceptConditions9")
            let AcceptConditions10 = document.getElementById("AcceptConditions10")

            let lampu1 = document.getElementById("lampu1");
            let lampu2 = document.getElementById("lampu2");
            let lampu3 = document.getElementById("lampu3");
            let lampu4 = document.getElementById("lampu4");
            let lampu5 = document.getElementById("lampu5");
            let lampu6 = document.getElementById("lampu6");
            let lampu7 = document.getElementById("lampu7");
            let lampu8 = document.getElementById("lampu8");
            let lampu9 = document.getElementById("lampu9");
            let lampu10 = document.getElementById("lampu10");


            if (AcceptConditions1.checked) {
                   lampu1.src = "assets/images/lampu-nyala.png"
                  }
             else {
               lampu1.src = "assets/images/lampu-mati.png"
               }


               if (AcceptConditions2.checked) {
                  lampu2.src = "assets/images/lampu-nyala.png"
                 }
            else {
              lampu2.src = "assets/images/lampu-mati.png"
              }


              if (AcceptConditions3.checked) {
               lampu3.src = "assets/images/lampu-nyala.png"
              }
         else {
           lampu3.src = "assets/images/lampu-mati.png"
           }


           if (AcceptConditions4.checked) {
            lampu4.src = "assets/images/lampu-nyala.png"
           }
      else {
        lampu4.src = "assets/images/lampu-mati.png"
        }


        if (AcceptConditions5.checked) {
          lampu5.src = "assets/images/lampu-nyala.png"
         }
    else {
      lampu5.src = "assets/images/lampu-mati.png"
      }


      if (AcceptConditions6.checked) {
        lampu6.src = "assets/images/lampu-nyala.png"
       }
  else {
    lampu6.src = "assets/images/lampu-mati.png"
    }


    if (AcceptConditions7.checked) {
      lampu7.src = "assets/images/lampu-nyala.png"
     }
else {
  lampu7.src = "assets/images/lampu-mati.png"
  }


        if (AcceptConditions8.checked) {
        lampu8.src = "assets/images/lampu-nyala.png"
         }
       else {
       lampu8.src = "assets/images/lampu-mati.png"
      }


if (AcceptConditions9.checked) {
  lampu9.src = "assets/images/lampu-nyala.png"
 }
else {
lampu9.src = "assets/images/lampu-mati.png"
}


if (AcceptConditions10.checked) {
  lampu10.src = "assets/images/lampu-nyala.png"
 }
else {
lampu10.src = "assets/images/lampu-mati.png"
}
          }