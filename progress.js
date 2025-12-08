console.log('Coding in progress and all well taking care');
const names= [
    {name: 'Olamide', age : 15}, 
    {name: 'Uche', age: 17}, 
    {name: 'Hammed', age: 21}
]
let result = names.filter(name => name.age> 20).map(name => {
    return{
        namess: name.name, 
        percentage : name.age + 2 
    }
})
console.log(result);
