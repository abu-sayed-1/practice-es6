const num =[299,30,3,5,90,11];
const nu = [203,3,332,322,33];
const x =num +' '+ nu;
const y = `${num}

${nu}
 `
console.log(y);
// ------------------||||||||||||
function add(num1  = "rakib",num = 20){
    return num1+' '+num;
}
const result = add();
console.log(result);

const num = 'all-right';
const num2 = 'khan';
const fullNum = num + ' ' + num2;
const fullNum2 =  `${num}              
 ${num2}`;
console.log(fullNum2);
 


console.log(result);

 const num = [ 'rakib','phone',01745674642,120 ];
 const [phone,...all] = num;

 console.log(all);
// ---------------------||||
function num (num){
    return num*2;
}
const result = num (10000);
console.log(result)
const dab = num => num*3;
const result = dab(100);
    
console.log(result);
const add=(x,y)=> x%y;
const result = add(20,100);
console.log(result);

const give  = () => 30;
const result =give(234);
console.log(result);
    
// -----------------------
const doMath=(x,y)=>{
     
    const sum = x+y;
    const diff =x-y;
    const all = sum * diff;
    return all;

}
const num = doMath(7,5);
console.log(num);


//  -------------
const age = [12,111,62,90,'rakib khan'];
const age1 = [12,111,62,70,'rakib khan'];
const age2 = [12,111,62,9,'rakib khan'];
const result = [...age,...age1,...age2];
console.log(result);




// ----------maxElement----------||||
const number = [500,5000,200];
const maxElement = Math.max(...number);
console.log(maxElement);





// ------------------------------------|||||
class parent {
    constructor(){
        this.fatherName = 'oli Ammahd';
    }

}
class Student extends parent {
    constructor(sName){
        super();
         this.name =sName;
    
    }
    ok(){
        return this. name +' '+ this. fatherName;
}
    }
   
const result = new Student ('rakib');
 console.log(result);

const Num = {
     
        name:'abc',
        info:{
            leader:"rakib vai",
            khan :"bag",

        }
    
}
const {leader} = Num.info;
console.log(leader);