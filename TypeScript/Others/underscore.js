// Anonymous Class <>
class __{
    static num = 100;
    num = 200;
    static display(){
        console.log("\tNumber is : "+__.num);
    }
    display(){
        console.log(`Value of num is : ${this.num}`);
        console.log("\tNon Static Display Function Called! ");
    }
    display(val){
        console.log(`Value of given arguments is : ${arguments[0]}`);
    }
    constructor(){console.log("\t Object Created !!")}
}

const _ = new __();

__.display(); // Static
_.display(500); // non static with arguments
_.display(); // non static without arguments
