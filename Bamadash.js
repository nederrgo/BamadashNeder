export function calc(operand1, operand2, operator){
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
export function compact(array){
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
export function size(collection ){
    let countSize=0;
    for(let element in collection) {
            countSize++;
    }
    return countSize;
}
export function castArray(input){
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
export function intersection(array1, array2, isStrict){
    if(isStrict){
        let arrayMarge=[];
        array1.forEach(element => {
            array2.forEach(element2 => {
                if(element===element2){
                    arrayMarge.push(element);
                }
            });
        });
        return arrayMarge;
    }
}


