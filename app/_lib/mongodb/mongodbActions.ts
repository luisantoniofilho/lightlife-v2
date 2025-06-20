import { userType } from "@/schemas/userSchema";
import { auth } from "../auth";
import client from "./mongodbConfig";

// DATABASE
const db = client.db("lightlife");

// COLLECTIONS
const usersCollection = db.collection("users");

/* //////////////////
// USER FUNCTIONS
*/ //////////////////

export async function createUser(newUser: userType) {
  const result = await usersCollection.insertOne(newUser);

  if (!result) throw new Error("User was not created");
}

export async function getUser(userEmail: string) {
  // Get the user with the userEmail
  const user = await usersCollection.findOne({ email: userEmail });

  return user;
}

type UserData = {
  goal: string;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  totalCalories: number;
};

export async function saveUserData(dietData: UserData) {
  const session = await auth();
  const userEmail = session?.user?.email;

  const result = await usersCollection.updateOne(
    { email: userEmail },
    {
      $set: {
        nutrition: {
          goal: dietData.goal,
          macros: dietData.macros,
          totalCalories: dietData.totalCalories,
        },
      },
    },
  );

  if (result.matchedCount === 0) {
    throw new Error("Usuário não encontrado no banco de dados");
  }
}
