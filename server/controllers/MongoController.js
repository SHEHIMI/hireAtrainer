const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/hirePT";

exports.seedCoachDataSignUp = async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    let coach = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
    };

    await createCoach(client, coach);
    res.send({ message: "success" });
  } catch (error) {
    console.log(error);
    console.log("THIS IS DUPLICATE ERROR");
    res.send({ message: "Email exists" });
  } finally {
    await client.close();
  }
};

// const verify = async (email) => {
//   const client = new MongoClient(uri);
//   let query = { email: email };
//   await client.connect();

//   const FindEmail = await client
//     .db("hirePT")
//     .collection("coaches")
//     .find(query)
//     //.toString();

//     console.log(FindEmail);
//   // if (FindEmail.email == null) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }

// };

exports.loadCoaches = async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const users = client.db("hirePT").collection("coaches").find({});
    const results = await users.toArray();

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error retrieving trainers." });
  } finally {
    await client.close();
  }
};
exports.loadCoachesProfile = async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const users = client.db("hirePT").collection("coaches").find({});
    const results = await users.toArray();

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error retrieving trainers." });
  } finally {
    await client.close();
  }
};

exports.postLoginData = async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    let LoginData = {
      email: req.body.email,
      password: req.body.password,
    };

    var email, password;

    const myJSON = JSON.stringify(LoginData);
    const myObj = JSON.parse(myJSON);
    email = myObj.email;

    for (var keys in LoginData) {
      if (keys === "email") {
        email = LoginData[keys];
      }
      if (keys === "password") {
        password = LoginData[keys];
      }
    }

    const account = client
      .db("hirePT")
      .collection("coaches")
      .find({ $and: [{ email: email }, { password: password }] });
    const results = await account.toArray();

    if (results.length === 0) {
      res.send({ message: "no success" });
    } else {
      res.send({ message: "success" });
    }

    //res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Incorrect Data!" });
  } finally {
    await client.close();
  }
};

exports.loadCoachwithEmail = async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();

    const Email = req.body.Email;
    console.log("Email:" + Email);
    let query = { Email: Email };

    const retrieved = await client
      .db("hirePT")
      .collection("coaches")
      .find(query)
      .toArray();

    res.status(200).send(retrieved);
    //console.log(retrieved);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error retrieving trainers data" });
  } finally {
    await client.close();
  }
};

const createCoach = async (client, newCoach) => {
  const result = await client
    .db("hirePT")
    .collection("coaches")
    .insertOne(newCoach);
  console.log(
    `new coach was created with the following id: ${result.insertedId}`
  );
  return `new coach was created with the following id: ${result.insertedId}`;
};

exports.deleteCoach = async (req, res) => {
  let coach = req.body.coach;
  const client = new MongoClient(uri);
  await client.connect();
  const del = await client.db("hirePT");
  del.collection("coaches").deleteOne({ coach }, function (err, obj) {
    if (err) throw err;
    console.log("1 coach deleted");
    client.close();
  });
};

//seedCoachData();
//deleteCoach();
