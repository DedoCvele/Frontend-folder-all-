class Car {
    constructor(brand, year){
        this.brand = brand
        this.year = year
    }
    getAge(){
        let date = new Date()
        return date.getFullYear() - this.year
    }

    print(){
        console.log(`this ${this.brand} is ${this.getAge()} years old`)
    }
}

const car1 = new Car('Audi' , 2014)

car1.print()