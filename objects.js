class Sample{
    sayHello()
    {
        console.log('Hello sayHello()');
    }
    static message(){
        console.log("statc method");
    }
}

const obj = new Sample();
obj.sayHello();             //instance method
Sample.message();           //static method