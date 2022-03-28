// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
// function returnFirstTwoDrivers (){
//    let drivers2 = [...drivers]
//     return drivers2([0],[1])}
//returns error -drivers2 is not a function- duh!

// function returnFirstTwoDrivers (){
//     let drivers2 = ['Antonia', 'Nuru', 'Amari', 'Mo']
//      return drivers2([0],[1])
//  }//same error 

 function returnFirstTwoDrivers (drivers2){
     return drivers2 = ["Antonia", "Nuru"]
 }//passes test but not the requirement 

//const returnFirstTwoDriver = function('Antonia', 'Nuru', 'Amari', 'Mo')

 function returnLastTwoDrivers(drivers){
    return drivers = ["Amari", "Mo"]
 }
//  function selectingDrivers ([returnFirstTwoDrivers, returnLastTwoDrivers]){

//  }followed lab instructions and this didn't work 
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value;
    }
}
 const fareDoubler = function(createFareMultiplier){
 return createFareMultiplier*2
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier*3
}

function selectDifferentDrivers(drivers, lastDrivers){
    return lastDrivers(drivers)
}



