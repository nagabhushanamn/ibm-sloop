

let isDone: boolean = false;

//isDone=1;



class Person {
    private name:string;
    private age:number;
    constructor(name){
        this.name=name;
    }
    private sayName():void{
        console.log('im '+this.name);
    }
}