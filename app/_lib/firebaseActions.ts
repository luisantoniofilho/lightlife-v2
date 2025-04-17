import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function createUser({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) {
  const newUser = {
    fullName,
    email,
    createdAt: new Date().toISOString(),
  };

  const usersRef = collection(db, "users");

  await setDoc(doc(usersRef, email), newUser);
}

export async function getUserData(userEmail: string) {
  const docRef = doc(db, "users", userEmail);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

type UserData = {
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  totalCalories: number;
};

export async function saveUserData(userEmail: string, userData: UserData) {
  const userRef = doc(db, "users", userEmail);

  await updateDoc(userRef, {
    macros: {
      carbs: userData.macros.carbs,
      protein: userData.macros.protein,
      fat: userData.macros.fat,
    },
    totalCalories: userData.totalCalories,
  });
}
