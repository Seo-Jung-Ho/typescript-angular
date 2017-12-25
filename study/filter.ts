
enum Gender {
    MALE,
    FEMALE
}

interface Person {
    name: string;
    age: number;
    gender: Gender;
}

const people: Person[] = [
    { name: 'jungho seo', age: 27, gender: Gender.MALE },
    { name: 'sohee kim', age: 33, gender: Gender.FEMALE },
    { name: 'a girl', age: 27, gender: Gender.FEMALE },
    { name: 'my s-partner', age: 33, gender: Gender.FEMALE },
    { name: 'muyongbak lee', age: 27, gender: Gender.MALE }
];


const filteryByAge = (p: Person[], range: { min: number, max: number }) =>
    p.filter(person => person.age >= range.min, range.max);

const minMax = { min: 1, max: 30 };

const i = 12;
console.log(i);

const filteredAge = filteryByAge(people, minMax);
console.log(filteredAge);


const sortByAge = (p: Person[]) =>
    p.sort((personA: Person, personB: Person) => {
        if (personA.age > personB.age) {
            return 1;
        }
        if (personA.age < personB.age) {
            return 0;
        }
        return 0;
    });

console.log(sortByAge(people));
