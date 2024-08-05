const mongoose =require ('mongoose');

const user = require('./user');

mongoose.connect('mongodb://localhost:27017/newOne');


async function insertUser(){
  try {const newUser = await user.create ({
    name:"Freya",
    age:14,
    email:'abc@hmail.come',
    hobbies:["chess",'writing poetry'],
    address:{ 
      street:'Asdfgf',
      city:'New-York',
    }});
  // user.name="Freya"
  // await user.save()
  // const user= new User({name :'kayel',age:34, email:'kayel@gmil.com'})
  // await user.save()
  console.log( 'inserted user:',newUser)
    
  } catch (error) {
    console.error(error);
    
  }
  
}
insertUser()
 
const readUsers = async () => {
  try {
    const users = await user.find({});
    console.log('Users:', users);
  } catch (err) {
    console.error('Error reading users:', err);
  }
};
readUsers()


const findAndDeleteUsers = async () => {
  try {
    const result = await user.findOneAndDelete({ name: 'payal' });
    if (result) {
      console.log('Deleted user:', result);
    } else {
      console.log('No user found with this name to delete.');
    } 
  } catch (err) {  
    console.error('Error deleting user:', err); 
  }
};


findAndDeleteUsers();
