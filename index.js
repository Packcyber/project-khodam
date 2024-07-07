
let rndm = ~~(Math.random() * 5)

const arr = ["raket nyamuk", "busi supra", "mouse", "selang gas", "martabak"]





function khodam(){
    let input = document.getElementById('inpt').value

    if(input == null || input == '' ){
      console.log("disabled")
   }else{
      alert(` khodam anda ${arr[rndm]}`)
   }
}



khodam()

