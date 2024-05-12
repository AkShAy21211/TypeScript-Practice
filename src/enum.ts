//numberic enum
enum Direction{

    left = 1,
    down = 9,
    up =4,
    right=8
}


//string enum

enum Status{

    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    ONHOLD = 'ONHOLD',
    ONSTOP = 'ONSTOP'
}

console.log(Status);

function appStatus(status:Status){

    console.log(status);
    



}
enum Weekend {  
  Friday = 1,  
  Saturday = getDate('Dominoz'),  
  Sunday = Saturday * 40  
}  
  
function getDate(day : string):any {  
    if (day === 'Dominoz') return 3;  
     
}  

enum Demo{

    A,B,C
}

function dis(obj:{A:number}){

    return obj.A
}

console.log(dis(Demo));

