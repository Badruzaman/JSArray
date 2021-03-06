const students = [
{name : 'Rahim',score : 80},
{name : 'Arif', score : 75},
{name  : 'Zaman', score : 85},
{name : 'Alim', score : 90},
];
const careers = ["nurse",'doctor','student','engineers']
// var studentDesc = students.sort((a,b) => b.score - a.score);
// console.log(studentDesc);
// console.log(studentDesc.reverse())

// const includeValue =  careers.includes('Student');
// console.log(includeValue);  

const temps = [90,88,85,92,84,99]
const states = [
    "New California",
    "New York",
    "New Jersey",
    "New Maxcico",
    "New Montana"
]
const somestate = states.some(state => state.startsWith('New'));
const everystate = states.every((state) => state.startsWith('New'));
console.log('some',somestate)
const bowlingScores = [154,204,300,184,286]
const isIncluded = bowlingScores.includes(300) 
//console.log(isIncluded)
const someScores = bowlingScores.some((bolw) => bolw < 150)
//console.log(someScores)

const everyNumber = bowlingScores.every((bowl) => bowl%2 == 0)
// console.log(everyNumber)

const drinks = ["coffee","tea","soda","water"]  // stack
//drinks.push("wine")
var deleteditem = drinks.pop()
//console.log(deleteditem)

const firstitem = drinks.shift()  // Queue
//console.log(firstitem)
drinks.unshift('drink')
// console.log(drinks)

const foods = [
    {food:'raspherries',type: 'fruits'},
    {food:'orange',type: 'fruits'},
    {food:'broccoli',type: 'vegetable'},
    {food:'quinoa',type: 'grain'},
]

const blackbeans = {food: 'black beans', type: 'legume'};
const chiaseeds = {food: 'chia seeds', type: 'seed'};
const removedItem =  foods.pop();
const firstItem  = foods.shift();
foods.unshift(blackbeans)
foods.push(chiaseeds);
//console.log(foods)

foods.forEach(element => {
    //console.log(element.food)
});

const findobj = "";




