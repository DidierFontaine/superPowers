const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
];

const newArray = superheroes.map((superhero) => {
   return superhero.weight;
});

console.log(newArray)

const newArray2 = superheroes.map((superhero) => {
    return superhero.name;
 });
 
 console.log(newArray2)

 const newArray3 = superheroes.map((superhero) => {
    return superhero.weight<190;
 });

 const newArray4 = superheroes.filter((superhero) => superhero.weight < 190).map((superhero) => superhero.name); 

 console.log(newArray4)

 const newArray5 = superheroes.filter((superhero) => superhero.weight == 200).map((superhero) => superhero.name);
 console.log(newArray5)


 const newArray6 = superheroes.map((superhero) => {
     return superhero.first_appearance;}
     )
    console.log(newArray6);

const newArray7 = superheroes.filter((superhero) => superhero.publisher == "DC Comics").map((superhero) => superhero.name);
   console.log(newArray7);

   const newArray8 = superheroes.filter((superhero) => superhero.publisher == "Marvel Comics").map((superhero) => superhero.name);
   console.log(newArray8);

   const newArray9 = superheroes.filter((superhero) => superhero.publisher == "DC Comics").map((superhero) => parseInt(superhero.weight));
   function getSum(total, num) {
    return total + num;
  }
   console.log(newArray9.reduce(getSum, 0))


   const newArray10 = superheroes.filter((superhero) => superhero.publisher == "Marvel Comics").map((superhero) => parseInt(superhero.weight));
   function getSum(total, num) {
    return total + num;
  }
   console.log(newArray10.reduce(getSum, 0))


   const newArray11 = superheroes.filter((superhero) => superhero.weight == 1400).map((superhero) => superhero.name); 

 console.log(newArray11)