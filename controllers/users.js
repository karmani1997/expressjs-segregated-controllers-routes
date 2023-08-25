// usersController.js


let users = [
    { id: 1, name: 'Mehtab' },
    { id: 2, name: 'Maqi' },
    { id: 3, name: 'Hamza' },
    { id: 4, name: 'Hanan' }
  ];
  
 const helloWorld = async(req, res) => {
    res.send('Hello World!')
};


 const getUsers = async(req, res) => {

    res.send(users);
  };

  const getUserById = async(req, res) => {
    console.log("I am in the getUserById Function")
    const id = req.params.id;

    const user = users.find((user) => user.id == id);
    res.send(user);
  };

const createUser = async(req, res) => {
    const user = req.body;
    users.push(user);
    res.send(users);
  };

const deleteUser = async(req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id != id);
    res.send(users);
  };

 const errorHandler =  async(error, req, res) => {
    //res.send("Error in backend")
    throw new Error('An internal error occured')
};

 module.exports = {helloWorld, getUsers, getUserById, createUser, deleteUser, errorHandler};
