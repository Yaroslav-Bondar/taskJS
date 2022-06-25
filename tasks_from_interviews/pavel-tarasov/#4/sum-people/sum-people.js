function sumAge(user) {
    if(!('children' in user)) return user.age;
    let sum = user.age;
    for (const chel of user.children) {
        sum += sumAge(chel);
    }
    return sum;
}

var user = {
    name: 'Petr',
    age: 49,
    children: [
        {
            name: 'Nina',
            age: 25,
            children: [
                {
                    name: 'Andrey',
                    age: 23,
                },
                {
                    name: 'Oleg',
                    age: 1,
                },
            ]
        },
        {
            name: 'Alexander',
            age: 23,
        },
    ],
};
console.log(sumAge(user));