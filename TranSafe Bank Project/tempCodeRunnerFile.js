const createUserNames = function(user){

  const username = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join(' ');
}
createUserNames('Mohit Yadav');