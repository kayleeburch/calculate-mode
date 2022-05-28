const calculateMode = (arr) => {
let countObj = {}
    for(let i = 0; i < arr.length; i++) {
        if(!countObj[arr[i]]){
            countObj[arr[i]] = 1
        } else {
            countObj[arr[i]] += 1
        }
    }
    //find largest duplicate and push value to compare
    let compare = 0
    for(let key in countObj) {
        if(compare < countObj[key]) {compare = countObj[key]}
    }
    //let result hold the values at compare index and return as Number if number and string if string
    let result = []
    for(let key in countObj) {
        if(compare == countObj[key] && isNaN(key) === true){result.push(key)}
        if(compare == countObj[key] && isNaN(Number(key)) === false){result.push(parseInt(key))}
    }
    
    return result
}

console.log(calculateMode([1,2,3,4,5,4,4,5])) //4
console.log(calculateMode([1,1,2,2,5,4,4,5])) //1,2,5,4
console.log(calculateMode(["who", "what", "where", "who"])) //who