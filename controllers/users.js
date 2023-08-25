// usersController.js


let users = [
    { id: 1, name: 'Mehtab' },
    { id: 2, name: 'Maqi' },
    { id: 3, name: 'Hamza' },
    { id: 4, name: 'Hanan' }
  ];
  
  helloWorld = (req, res) => {
    res.send('Hello World User!')
};


  getUsers = (req, res) => {
    res.send(users);
  };

  getUserById = (req, res) => {
    const id = req.params.id;
    console.log("In the getUserById Function ",id)
    const user = users.find((user) => user.id == id);
    res.send(user);
  };

  createUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(users);
  };

  deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id != id);
    res.send(users);
  };

 module.exports = {helloWorld, getUsers, getUserById, createUser, deleteUser}
