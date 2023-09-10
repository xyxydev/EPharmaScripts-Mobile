const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const app = express();

// Create API route
app.post("/sellers/create", async (req, res) => {
  let authResult;
  let {
    companyName,
    branch,
    displayName,
    email,
    phone,
    password,
    address,
    img,
  } = req.body;
  try {
    // Create user authentication
    authResult = await admin.auth().createUser({
      email: email,
      password: password,
    });

    // Create seller document in Firestore
    await db.collection("sellers").doc(authResult.uid).set(sellerDocData);

    return res.status(200).send({ status: "Success", msg: "Seller added" });
  } catch (error) {
    console.log(error);

    // Delete the user authentication if it was created before the error occurred
    if (authResult && authResult.uid) {
      try {
        await admin.auth().deleteUser(authResult.uid);
      } catch (authError) {
        console.log("Error deleting user:", authError);
      }
    }

    return res
      .status(500)
      .send({ status: "Failed", msg: "Error adding seller" });
  }
});
app.post("/riders/create", async (req, res) => {
  let authResult;
  let {
    AssignBranch,
    AssignCompany,
    Firstname,
    Gender,
    Lastname,
    address,
    email,
    password,
    phone,
    img,
  } = req.body;
  try {
    // Create user authentication
    authResult = await admin.auth().createUser({
      email: email,
      password: password,
    });
    // Create doc = UID in the authentication user
    const riderDocData = {
      riderId: Date.now(),
      AssignBranch: AssignBranch,
      AssignCompany: AssignCompany,
      Firstname: Firstname,
      Gender: Gender,
      Lastname: Lastname,
      address: address,
      email: email,
      password: password,
      phone: phone,
      img: img,
      createdAt: new Date(),
    };

    // Create rider document in Firestore
    await db.collection("riders").doc(authResult.uid).set(riderDocData);

    return res.status(200).send({ status: "Success", msg: "Riders added" });
  } catch (error) {
    console.log(error);

    // Delete the user authentication if it was created before the error occurred
    if (authResult && authResult.uid) {
      try {
        await admin.auth().deleteUser(authResult.uid);
      } catch (authError) {
        console.log("Error deleting user:", authError);
      }
    }

    return res
      .status(500)
      .send({ status: "Failed", msg: "Error adding riders" });
  }
});
//GET API singleData
app.get("/get/:collection/:id", async (req, res) => {
  // Access collection name from route parameter
  const collectionName = req.params.collection;
  // Access user ID from route parameter
  const userId = req.params.id;
  try {
    const reqDoc = db.collection(collectionName).doc(userId);
    let userDetail = await reqDoc.get();
    let response = userDetail.data();

    // Loop through the response object and format timestamp fields
    for (const key in response) {
      if (response[key] && response[key]._seconds) {
        const formattedDate = new Date(
          response[key]._seconds * 1000
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        response[key] = formattedDate;
      }
    }

    return res.status(200).send({ status: "Success", msg: response });
  } catch (error) {
    return res.status(200).send({ status: "Failed", msg: error });
  }
});

// Display API route
app.get("/update", async (req, res) => {});

// Delete API route
app.delete("/delete/:collection/:id", async (req, res) => {
  // Access collection name from route parameter
  const collectionName = req.params.collection;
  // Access user ID from route parameter
  const userId = req.params.id;

  try {
    // Delete the authenticationfrom Firebase
    await admin.auth().deleteUser(userId);

    // Delete the doc with the same user uid from authentication
    const userDocRef = db.collection(collectionName).doc(userId);
    await userDocRef.delete();

    // Respond with success message
    res.status(200).json({
      message: "Authentication and Firestore document deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Error deleting authentication and Firestore document",
      error.message
    );
    res.status(500).json({
      error:
        "An error occurred while deleting authentication and Firestore document",
    });
  }
});

module.exports = app;
