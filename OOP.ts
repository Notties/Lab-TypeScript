class Human {
    name: string = ''
    lastname:string = ''
    age: number = 0

    sayHello(){
        return "Hello ! I'm "+ this.name + " " +this.lastname+" "+this.age +"years old."
    }
}

const user1: any = new Human()
user1.name = "Knot"
user1.lastname = "Akthakorn"
user1.age = 21
console.log(user1.sayHello());