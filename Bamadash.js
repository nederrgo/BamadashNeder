function calc(operand1, operand2, operator){
    const regex=/[0-9]+/g
    const regex2=/[0-9]+/g
    if(!regex.test(operand1)||!regex2.test(operand2)){
        return NaN;
    }
    if(operator=="+"){
        return Number(operand1)+Number(operand2);
    }
    if(operator=="-"){
        return Number(operand1)-Number(operand2);
    }
    if(operator=="-"){
        return Number(operand1)/Number(operand2);
    }
    if(operator=="*"){
        return Number(operand1)*Number(operand2);
    }
    return NaN;
}
function compact(array){
const array2=[];
array.forEach(element=> {
    if(!isNaN(element)&&element!=""&&element!=undefined){
        array2.push(element);
    }if(element==="false"){
        array2.push(element);
    }
});
return array2;
}
function size(collection ){
    let countSize=0;
    for(let element in collection) {
            countSize++;
    }
    return countSize;
}
function castArray(input){
    if(Array.isArray(input)){
        return input;
    }
    let array=[];
    if(input===undefined){
        return array;
    }
array.push(input);
return array;
}

const array2=[2,4,false,"false","false","",NaN,2,true,undefined];
console.log (compact(array2));
console.log (calc("2",3,"*"));
console.log(size("322"));
console.log(castArray(null));