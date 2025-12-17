console.log('Coding in progress and all well taking care');
const names= [
    {name: 'Olamide', age : 15}, 
    {name: 'Uche', age: 17}, 
    {name: 'Hammed', age: 21}
]
let result = names.filter(name => name.age> 20).map(name => {
    return{
        namess: name.name, 
        percentage : name.age + 5 
    }
})
console.log(result);

let nam = names.filter(na =>na.age == 15).map( na => {
    return{
        name: na.name, 
        age: na.age+ 3
    }
})
console.log(nam); 
