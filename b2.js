function hopLe(person) {
	if (person.name == '' || person.yearOfBirth < 0)
		return false
	else
		return true
}
function main() {
    const person = {
        name: '',
        yearOfBirth: 2005,
    };
    if (hopLe(person) == true)
        console.log('person hop le');
    else 
        console.log('person khong hop le');
}

main();


