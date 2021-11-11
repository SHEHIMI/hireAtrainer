// import Coach from "../models/client.model";

// /*
//  * This is a method for creating a coach
//  */

// const create = async (req, res) => {
//   const coach = new Coach(req.body);

//   /**
//    * if we want to load it with dummy data.
//    */

//   // const coach = await loadCoachObj();

//   try {
//     await coach.save();
//     return res.status(200).json({
//       message: "Coach Successfully Added.",
//     });
//   } catch (err) {
//     return res.status(500).json({
//       error: "error saving coach.",
//     });
//   }
// };

// /**
//  * Load coach by Email posted from the client-side
//  */

// const coachByEmail = async (req, res, next, id) => {
//   try {
//     let coach = Coach.findById(id);
//     if (!coach) {
//       return res.status("500").json({
//         error: "Client not found",
//       });
//     }
//     req.profile = coach;
//     next();
//   } catch (error) {
//     return res.status(
//       "500".json({
//         error: "Could not retrieve coach",
//       })
//     );
//   }
// };

// /**
//  * listing all coaches
//  */
// const list = async (req, res) => {
//   try {
//     let coaches = await Coach.find();
//     res.json(coaches);
//   } catch (error) {}
// };

// const update = async (req, res) => {
//   try {
//     // let client = req.profile;
//     let coach = loadCoachObj();
//   } catch (err) {}
// };

// const remove = async (req, res) => {
//   try {
//     let coach = req.profile;
//     let deletedCoach = await coach.remove();
//     res.json(deletedCoach);
//   } catch (err) {
//     return res.status(500).json({
//       error: "Error deleting client",
//     });
//   }
// };

// const loadCoachObj = async () => {
//   const coach = new Coach({
//     firstName: `Name one`,
//     lastName: `Last Name on`,
//     Email: `test`,
//     password: `123`,
//     cv: `test`,
//     phoneNumber: `81600482`,
//     workoutPlan: `test`,
//     Nutrition: `test`,
//   });

//   return coach;
// };

// export default {
//   create,
//   coachByEmail,
//   list,
//   update,
//   remove,
// };
