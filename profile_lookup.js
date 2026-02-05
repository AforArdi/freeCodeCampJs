function lookup(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || 'no such property';
        }
    }
    return 'No such contact';
}
/**
 * When property name is stored in a variable, you must use: contacts[i][prop]
 * also look inside the if statement, || -> this is important for future
 */
const contacts = [
    {
        firstName: 'Mohammad',
        lastName: 'Ardi',
        phone: '01919543423',
        like: ['Coding', 'Movies', 'English']
    },
    {
        firstName: 'Minhazul',
        lastName: 'Islam',
        phone: '01703851709',
        like: ['Photography', 'Travel', 'Music']
    },
    {
        firstName: 'Hasan',
        lastName: 'Khan',
        phone: 'unknown',
        like: ['Gaming', 'Gym', 'Tech']
    }
]

const data = lookup('Mohammad', 'phone');
console.log(data);