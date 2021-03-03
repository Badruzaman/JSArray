
const sales = [50,20,70,30]
const totalSales =  sales.reduce((total,sale) => total + sale)
var sum = 0;
sales.forEach(element => {
    sum +=  element
});

for(let i = 0; i < sales.length; i++){
    sum += sales[i]
}
// console.log(sum)
const friends = [
    {firstName : 'badru', lastName : 'Zaman'},
    {firstName : 'Rahim', lastName : 'Razon'},
    {firstName : 'Amin', lastName : 'Jamil'},
]

const fullname = friends.map((it) => {
 return it.firstName + " " + it.lastName
});

console.log(fullname)

const obj = {Name: 'Badruzzaman',mobile:+8801719730475,
address:{permanent: 'Jeshore', present: 'Dhaka',
mobileNoList: [{num1: +8801939488247},{num2: +8801875385587}]}
};
//console.log('permanet Address : ',obj.address.permanent);
obj.address.mobileNoList.forEach(element => {
    //console.log(element)
});
//console.log(obj)

const list =  [{Name: 'Badruzzaman', sale:500},
{Name: 'Badruzzaman',sale:500},
{Name: 'Rahaman',sale:500},
{Name: 'Rahaman',sale:500},
{Name: 'Rahaman',sale:600},
];
var groupData = list.find(item => item.sale == 600)
//console.log(groupData);

let filtereddata = list.filter(element => element.sale > 500);
//console.log(filtereddata);

var index = list.findIndex(item => item.sale == 600)
console.log(index);

console.log('hello')