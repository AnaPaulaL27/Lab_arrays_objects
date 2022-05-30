/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom[1].touristAttractions = ["The Tower of London", "Stonehenge", "The British Museum"];

console.log("England tourist attractions: ", england);



/**
 * Q2. Change the capital of Wales to "Cardiff"
 */


wales = wales = unitedKingdom[2] = unitedKingdom.capital = "Cardiff";

console.log("Capital of Wales: ", wales);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]); //will find 3rd index in united kingdom array (northern Ireland) + return keys of object. 

console.log(northernIrelandKeys);


/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

scotland = unitedKingdom[0];
england = unitedKingdom[1];
Wales = unitedKingdom[2];
northernIreland = unitedKingdom[3];

if(scotland.population > england.population && wales.population && northernIreland.population){
    console.log("it is the biggest");
}
else if(scotland.population <england.population && wales.population && northernIreland.population){
    console.log("it is the smallest");
}
else{
    console.log("it is in the middle");
}    

