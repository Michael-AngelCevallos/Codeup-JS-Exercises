// ================================= WARM UP

// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];


/** ///// FOR EACH ONLY WORKS WITH AN ARRAY ///////// **/


// function findAverageDogAge(pets){
//     let total = 0;
//     let dogCount = 0;
//     pets.forEach((pet) => {
//         if(pet.type === 'Dog'){
//             total += pet.age;
//             dogCount++;
//         }
//     });
//     return total / dogCount;
// }
//
// console.log(findAverageDogAge(pets));

 // returns 7.5

/** ------------> OR <---------------------------**/

/** FOR LOOP OPTION///////////////////// **/

// function findAverageDogAge(pets) {
//     let total = 0;
//     let dogCount = 0;
//     for (let i = 0; i < pets.length; i += 1) {
//         if (pets[i].type === "Dog") {
//             total += pets[i].age;
//             dogCount++;
//         }
//     }
//     return total / dogCount;
// }
//     console.log(findAverageDogAge(pets));
//
//




// ================================= WARM UP # 2

/** REMOVE A TYPE/ELEMENT FROM AN ARRAY <--------------- **/
//
// Create a function, returnPetsWithNoFish, that takes in an array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

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

    function returnPetsWithNoFish(pets) {
    const output = [];
    pets.forEach(pet => {
        if (pet.type !== "Fish") {
            output.push(pet);
        }
    });
    return output;
}



    console.log(returnPetsWithNoFish(pets)) // returns...








    // [
    // {
    //     name: 'Mr. Pig',
    //     type: 'Cat',
    //     age: 4
    // },
    //     {
    //         name: 'Bubba',
    //         type: 'Dog',
    //         age: 5
    //     },
    //     {
    //         name: 'Beans',
    //         type: 'Dog',
    //         age: 3
    //     }
    // ]


