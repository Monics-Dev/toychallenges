
function carSpeed(speed){
    if (speed<70){
     console.log("ok")
    } else{
     const speedDifference =speed-70
     const demerits = speedDifference/5
     console.log(demerits)
     if (demerits>=12){
         console.log("license suspended")
     }
    }
 }
 carSpeed(200)