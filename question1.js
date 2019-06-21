var user = {};

user.name = 'John';
user.surname = 'Mike';
console.log(user);

user.name = 'Peter';
console.log(user);

delete user.name;
console.log(user);

/*
	output:
	{ name: 'John', surname: 'Mike' }
	{ name: 'Peter', surname: 'Mike' }
	{ surname: 'Mike' }
*/
