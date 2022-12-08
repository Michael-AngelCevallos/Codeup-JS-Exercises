
    "use strict";

    /**
    JS Objects*/

   /* - like a named index array
    - used to store related state and behavior
    - where arrays are good for storing lists of data, objects store related aspects of a greater structure
    - we have already used objects: String, Array, Math, Number
    */


    /** ========== Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.) */

    /**----------------------------------->>NEW OBJECT INSTANCE <<<---------------------------------------------*/


    // OLDER WAY OF EXECUTING AN OBJECT <<<<<<<========================

    // const dog = new Object();
    // console.log(typeof dog);



    // Object Literal Notation

    // const cat = {};
    // console.log(typeof cat);


    /** --------------------------->>>> ACCESSING PROPERTIES ON AN OBJECT <<<<-----------------------------------*/

    // console.log(pet.givenName);
    // console.log(pet2.givenName);
    // console.log(pet2['givenName']);
    //
    // pet.givenName = "Sabrina";

    // console.log(pet.givenName);

console.log("--->>>EXAMPlE # 1<<<-----");
        ///EXAMPLE//
    const cat = {
        name: "Garfield",
        age: 7
        };

    console.log(cat);
    console.log(cat.name); // will return cats name

    console.log(cat)
    console.log(cat.age); // returns cats age

    //returns color of cat
    cat.color = 'Orange';

    console.log(cat.color);

    // change age of cat

    cat.age = 8;
    console.log(cat)


    /**Square Bracket Method to access properties */
    console.log(cat['age']);





    // ========== Setting Properties on an Object

    // const pet = {};

    // pet.givenName = 'Sparkles';
    // pet.age = 12;
    // pet.species = 'turtle';
    // pet.hasOffspring = true;
    // pet['value-in-dollars'] = 400; // alternative syntax for assigning properties

    // ========== Peeking into an Object (can result in inaccurate property values if your script mutates an array/object)

    // console.log(pet);



console.log("---->>> MINI EXERCISE 1 <<<-----");
    // !! MINI-EXERCISE 1 !!
  /*  -- Mini Exercise 1
    Create a few beverage objects and assign values to each object for the following properties:
        - brandName
        - type
        - volumeInLiters
        - priceInCents
        - expirationDate
        - datesOfPreviousSips (use an array of strings)
    - isOpen
    Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.
*/

    const beverage1 = {
        brandName: "Pepsi",
        type: 'Cherry' ,
        volumeInLiters: 0.33 ,
        priceInCents: 51 ,
        expirationDate: "June 18th, 2019",
        datesOfPreviousSips: [ " June 6th",
        'June 8th',
        'June 9th'],
        isOpen: 'true'
    }
    console.log(beverage1)







console.log("---> NESTED VALUES <--------");

    /** Nested Values */

     const pet = {
        name: 'Bowser',
        age: 6,
        species: 'Pug',
        hasOffspring: false,
        valueInDollars: 'priceless',
        altNames: [
            'Bowser Boy',
            'Bowser Man',
            'Bowser Buddy',
            'Puggle Wuggle Boy'
        ],
        vitals: {
            averageTempDegF: 101,
            averageRestingHeartRate: 80,
            isHungry: true
        },

        averageTempDegF: 99,
        averageRestingHeartRate: 87,
        isHungry: false
    }
    {

     }
    console.log(pet)


    /**LOG AND CHANGE VARIOUS PROPERTY VALUES ON THE PET OBJECT*/


// console.log pet name
    console.log(pet.name);

    console.log(pet.vitals.averageTempDegF)

    console.log(pet.altNames[1]);
    console.log(pet.vitals.averageTempDegF[1]);


    /** -----------> Working with Arrays of Objects<------- */

     const pets = [
         {
             givenName: 'Spot',
             isDog: true,
             toys: ['ball', 'bone']
         },
         {
             givenName: 'Max',
             isDog: false,
             toys: ['scratch post', 'cat nip']
         },
         {
             givenName: 'Goldy',
             isDog: false,
             toys: ['algae', 'bubbles']
         }
     ];

     console.log(pets[0].givenName);
    console.log(pets[1].givenName);
     console.log(pets[2].givenName);


     //change every pet's name to 'Bowser' (manually, forEach, for loops)
          //---->FOR LOOP<----//
   for(let i = 0; i < pets.length; i += 1){
       console.log(pets[i].givenName);
   }

    //-----> FOR EACH <--------//

    pets.forEach(function(pet){
        console.log(pet.givenName)
    })
    pets.forEach(function(pet){
        pet.toys.forEach(function(toy){
            console.log(toy)
        })
    })





     //========== Additional Example Working with Arrays of Objects

     //create a pet object that has the following properties...
    // givenName
    // ageInYears
    // species

    // const pet1 = {
    //     givenName: 'Freckles',
    //     ageInYears: 4,
    //     species: 'Dog'
    // };
    //
    // const pet2 = {
    //     givenName: 'Spot',
    //     ageInYears: 2,
    //     species: 'Fish'
    // };
    //
    // const pet3 = {
    //     givenName: 'Dog',
    //     ageInYears: 10,
    //     species: 'Cat'
    // }
    // const pets = [pet1, pet2, pet3];


console.log("------> MINI EXERCISE #2 <-------")
    // !! MINI EXERCISE 2 !!

     const users = [
         {
             givenName: 'Sam',
             age: 21
         },
         {
             givenName: 'Cathy',
             age: 34
         },
         {
             givenName: 'Karen',
             age: 43
         }
     ];



    /** 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"*/

    console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName)


    console.log("CHANGE ALL USERS NAMES TO JOHN DOE");
    /** 2. Change the names of all users to "John Doe" */

 users.forEach(function(user) {
     user.givenName = 'John Doe';
 });

 console.log(users);

     /** 3. Increase the current age of all users by 1 */
     for (let i = 0; i < users.length; i++) {
         console.log(users[i].age + 1)
     }
      users.forEach(function(user){
    user.age += 1;
    });
console.log(users);

     /** For Each function */
     users.forEach(function (user) {
         console.log(user.givenName)
     });

     console.log(" LOG THE TOTAL AGE OF USERS");
     // log the total of all the ages
     const total = (users[0].age + users[1].age + users[2].age)
     console.log(total)

     console.log(" LOG THE AVERAGE AGE OF ALL USERS");
//     const average = users.forEach(users[0].age, users[1].age, users[2].age);
   //  console.log(average)
    let totalAges = 0;
     users.forEach(function(user){
        totalAges += user.age;
     });
     console.log(totalAges / users.length);

     /** log all the user information in the following format... */
users.forEach(function(user){
    console.log(`user: ${user.givenName} | age: ${user.age}`)
})

    //
    users.forEach(function(user){
        if(user.age > 30){
            console.log(user.givenName);
        } else {
            console.log('Hello younger person...' + user.givenName)
        }
    })
     /*
         user: Sam | age: 21
         user: Cathy | age: 34
         user: Karen | age: 43
      */

     // log the name of the longest given name of a user
        /** create longest name variable */
    //loop through users and reassign the name of the current if longer than the longest name

    let longestName = 'Sam';
        users.forEach(function(user){
            if(user.givenName.length > longestName.length){
                longestName = user.givenName;
            }
            console.log(longestName)
        })
     /** ========== Getting a List of Object Keys as an Array */
            console.log("--->Getting a List of Object Keys as an Array<---");


      const pet1 = {
          givenName: 'Freckles',
          ageInYears: 4,
          species: 'Dog'
      };

      console.log(Object.keys(pet1));


     /** ========== Assigning Functionality to an Object */

     console.log("------->Assigning Functionality to an Object<----")

     /* const dog1 = {
          petName: 'Sparky',
          age: 4,
          bark: function() {
              console.log("Woof woof!");
          },
          eat: function(food) {
              console.log('Dog is eating...' + food);
          },
          agePet: function() {
              this.age += 1;
          }
      }

      const dog2 = {
          petName: 'Rex',
          age: 2,
          bark: function() {
              console.log("Woof woof!");
          },
          eat: function(food) {
              console.log('Dog is eating...' + food);
          },
          agePet: function() {
              this.age += 1;
          }
      }

      const dog3 = {
          petName: 'Dino',
          age: 10,
          bark: function() {
              console.log("Woof woof!");
          },
          eat: function(food) {
              console.log('Dog is eating...' + food);
          },
          agePet: function() {
              this.age += 1;
          }
      }

      const dog = [dog1, dog2, dog3];

      console.log(dog[0].age);
      console.log(dog[1].age);
      console.log(dog[2].age);

      dog.forEach(function(dog) {
          dog.agePet();
      });

      console.log(dog[0].age);
      console.log(dog[1].age);
      console.log(dog[2].age);


      console.log(dog);
        dog.agePet();
        console.log(dog);

      dog.bark();
      dog.eat('steak');
      dog.eat('a bone');
      dog.eat();

    //  dog.sayHello = function() {
        //  console.log('Wagging tail and barking lightly.');
     // }

      //dog.sayHello();


     /* const user = {
          givenName: 'Justin',
          age: 25,
          sayHello: function (input) {
              console.log(input);
          },
          logAge: function () {
              console.log(this.age);
          },
          getYounger: function () {
              this.age = this.age - 1;
          },
          setAge: function (age) {
              this.age = age;
          }
          */
          //addProp: function(name, value) {
          // this.name = value;
          //     // }
          // }

          // console.log(user);

          // user.sayHello('Hello, Go!');
          // user.logAge();
          // user.getYounger();
          // user.logAge();
          // user.setAge(100);
          // user.logAge();
          // user.getYounger();
          // user.logAge();


          // console.log(user);


          // ========== The this Keyword

          // const pet6 = {
          //     name: "Sparky",
          //     age: 3,
          //     getOlder: function() {
          //         console.log(this.age);
          //         this.age += 1;
          //     }
          // };
          //
          // console.log(pet6.age);
          // pet6.getOlder();
          // console.log(pet6.age);

console.log('---->>> OBJECTS EXERCISE <--------');
                  "use strict";

                  /**
                   * TODO:
                   * Create an object with firstName and lastName properties that are strings */

    /** * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     *  *
     *  */
console.log("---->EXERCISE # 1<-------")
     const person =  {
           firstName: "Michael",
           lastName: "Cevallos"
     }

    console.log(person.firstName);
    console.log(person.lastName);




                   /**
                   * TODO:
                   * Add a sayHello method to the person object that returns a greeting using
                   * the firstName and lastName properties.
                   * console.log the returned message to check your work
                   *
                   * Example
                   * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
                   */

                   //EXAMPLE FROM ABOVE//
    //  dog.sayHello = function() {
    //  console.log('Wagging tail and barking lightly.');
    // }



console.log(" -------->EXERCISE # 2<------------")

    person.sayHello = function(){
       return `YEEEOOO Wheeet EEEHHHP from ${this.firstName} ${this.lastName}`
    }
    console.log(person.sayHello());



        //---->PUSH ADDITIONAL VALUES INTO AN ARRAY<-------- //
   console.log("---->ADD A MIDDLE NAME EASY<---- ")

   person.middleName = 'Angel'
    console.log(person);


    let arr = ['jason', 'adam', 4, 2, {firstName: 'Jason', lastName: "Merrell"}];


console.log("-----> EXERCISE # 3 HEB QUESTION<------")
                  /** TODO:
                   * HEB has an offer for the shoppers that buy products amounting to
                   * more than $200. If a shopper spends more than $200, they get a 12%
                   * discount. Write a JS program, using conditionals, that logs to the
                   * browser, how much Ryan, Cameron and George need to pay. We know that
                   * Cameron bought $180, Ryan $250 and George $320. Your program will have to
                   * display a line with the name of the person, the amount before the
                   * discount, the discount, if any, and the amount after the discount.
                   *
                   * Uncomment the lines below to create an array of objects where each object
                   * represents one shopper. Use a foreach loop to iterate through the array,
                   * and console.log the relevant messages for each person
*/



                    let shoppers = [
                        {name: 'Cameron', amount: 180},
                        {name: 'Ryan', amount: 250},
                        {name: 'George', amount: 320}
                    ];

                    shoppers.forEach(function(shopper){
                        if(shopper.amount > 200){
                            //Shoppers that get the discount
                            let savings  = parseFloat(shopper.amount)  * .12;
                            let total = parseFloat(shopper.amount) - (savings);
                            console.log(`${shopper.name} has a bill of $${shopper.amount.toLocaleString('en-US', {style: 'currency', currency:'USD'})}, and received a 12% discount.\n ${shopper.name}'s discounted total is $${total.toLocaleString('en-US', {style: 'currency', currency:'USD'})}, with a savings of ${savings.toLocaleString('en-US', {style:'currency', currency: "USD"})}`);
                        } else {
                        let remaining = (200 -parseFloat(shopper.amount)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                        console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency : 'USD'})}, and did not recieve a discount.\n${shopper.name} will have to spend ${remaining} more to receive 12% discount.\n `)
                          //Shoppers That Do NOT get discount
                        }
                    })




  /**  console.log("------> MINI EXERCISE #2 <-------")
    // !! MINI EXERCISE 2 !!

    const users = [
        {
            givenName: 'Sam',
            age: 21
        },
        {
            givenName: 'Cathy',
            age: 34
        },
        {
            givenName: 'Karen',
            age: 43
        }
    ];
*/



    console.log( "----CREATING AN ARRAY OF 5 BOOKS AND CONSOLE.LOGGING DIFFRENT OUTPUTS!-----")
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */




                   const books = [
                       {
                           title: "The Bible",
                           author: "IDK",
                           firstName: "ID",
                           lastName: "K"

                       },
        {
            title: "Harry Potter",
            author: "J.K. Rollin'",
            firstName: "J.K.",
            lastName: "Rollin'"
        },
        {
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            firstName: "Miguel",
            lastName: "de Quixote"
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R Tolkien",
            firstName: "J.R.R.",
            lastName: "Tolkien"
        },
        {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupery",
            firstName:"Antoine",
            lastName:" de Saint-Exupery"

        }


    ];


                     console.log(books[0].title);
                     console.log(books[1].lastName);
                     console.log(books[4].author);
                  /**
                   * TODO:
                   * Loop through the books array and output the following information about
                   * each book:
                   * - the book number (use the index of the book in the array)
                   * - the book title
                   * - author's full name (first name + last name)
                   *
                   * Example Console Output:
                   *
                   *      Book # 1
                   *      Title: The Salmon of Doubt
                   *      Author: Douglas Adams
                   *      ---
                   *      Book # 2
                   *      Title: Walkaway
                   *      Author: Cory Doctorow
                   *      ---
                   *      Book # 3
                   *      Title: A Brief History of Time
                   *      Author: Stephen Hawking
                   *      ---
                   *      ...
                   */
                  function output(){
                      return this;
                  }
                  const book1 = {bookNum: "Book # 1", title: "The Bible", author: "IDK"}
                    const book2 ={bookNum: "Book # 2", title: "Harry Potter", author: "J.K. Rollin"}
                    const book3 = {bookNum: "Book # 3", title: "Don Quixote", author: "Miguel de Cervantes"}

                    book1.output = output;
                    book2.output = output;
                    book3.output = output;

    console.log(book1.output());
    console.log(book2.output());
    console.log(book3.output());

                  /**
                   * Bonus:
                   * - Create a function named `createBook` that accepts a title and author
                   *   name and returns a book object with the properties described
                   *   previously. Refactor your code that creates the books array to instead
                   *   use your function.
                   * - Create a function named `showBookInfo` that accepts a book object and
                   *   outputs the information described above. Refactor your loop to use your
                   *   `showBookInfo` function.
                   */


