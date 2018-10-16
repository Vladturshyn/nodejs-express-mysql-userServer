const Subject = require('../model/subjectModel');
const User = require('../model/userModel');

exports.init = (req, res) => {
	
  const math = new Subject({
	  name: 'Mathematics'
  });
  
  const computer = new Subject({
	 name: 'Computer'
  });
  
  math.save(function (err){
	 if(err) return console.error(err.stack)
	 console.log("Math is added")
  });
  
  computer.save(function(err){
	  if(err) return console.error(err.stack);
	  console.log("Computer is added")
  })
  
  // Add User to MongoDB
  const jack = new User({
	  name: 'Jack',
	  email: 'Jack@mail.com',
	  age: 21
  });
  jack.subjects.push(math._id, computer._id);
  
  const peter = new User({
	  name: 'Peter',
	  email: 'Petr@mail.com',
	  age: 25
  })
  peter.subjects.push(math._id, computer._id)
  
  peter.save(function(err){
	  if(err) return console.log(err.stack);
	  console.log("Peter is added")
  });
  
  jack.save(function(err){
	  if(err) return console.log(err.stack);
	  console.log("Jack is added");
  });
  
  res.send("Done Initial Data!");
}
