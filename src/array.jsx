let array =[null,null,null,null,null,null,null,null,null];
let result= false;


let checkArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function handleCheck (num,choice){
  array[Number(num)] = choice
  for(let i = 0; i<checkArray.length; i++){
    
        if(array[checkArray[i][0]] === choice && array[checkArray[i][1]]===choice && array[checkArray[i][2]]===choice){
              result = true
        }
        }     
        
}

function resultat (){
    let a = 0 
    for(let i = 0; i<array.length; i++){
        if(array[i] && result != true){
            a++
        }
    }
    if(a==9){
       result = "drow"
    }
    return result
}

export { handleCheck,resultat}