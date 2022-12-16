// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in an array of pet objects and returns a string of the longest name for a pet.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

 // function returnLongestPetName(pets){
 //    let longest = '';
 //    for(let i=0; i < pets.length; i++){
 //         if( pets[i].length > longest.length){
 //        longest = pets[i];
 //    }
 //    }
 //    return longest;
 // }
 //
 // console.log(returnLongestPetName(pets)) // returns "Mr. Salmon"

// ------------> FOR Method <----------------
 const returnLongestPetName = (animal) => {
     let longest = "";
     for( let i =0; i < animals.length; i++){
         if(animal[i].name.length > longest.length);
                longest = animal[i].name;
     }
 }
        return
}

console.log(returnLongestPetName(pets));

///////////-----------------> FOR EACH METHOD <------------------ ///////////
// const returnLongestPetName = (animals) => {
//     let longest = "";
//     animals.forEach((animal) => {
//     if(animal.name.length > longest.length){
//         longest = animal.name;
//     }
//     });
//     return longest;
// }

// console.log(returnLongestPetName(pets));