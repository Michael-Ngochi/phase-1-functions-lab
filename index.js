// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks>=42){
    return Math.round(blocks-42)}
    else return 8;
};

function distanceFromHqInFeet(distance){
    console.log(distanceFromHqInBlocks(distance))
    console.log(distance);
    return distanceFromHqInBlocks(distance) *264;
};
function distanceTravelledInFeet(start,destination){
if ((start>destination)){
console.log((start-destination)*264)
return (start-destination)*264;
}else return (destination-start)*264
}


function calculatesFarePrice(start, destination){
let price;
let distance=distanceTravelledInFeet(start,destination)
if (distance<400){
    price=0;
    return price;
}
else if (distance>=400 && distance <=2000){
price=(distance-400)*0.02;
return(price);
}else if (distance>2000 && distance<2500){
console.log(distance);
price=25;
return(price);
}else if (distance>2500){
return("cannot travel that far")

}
console.log(distance,newDistance)
}
calculatesFarePrice(50,58);
console.log(distanceFromHqInBlocks(10));
//console.log(distanceFromHqInFeet());
console.log(distanceTravelledInFeet(38,34));
console.log(distanceTravelledInFeet(43,48));
console.log(calculatesFarePrice(43,45));


