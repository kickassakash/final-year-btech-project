import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  try {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
      merge: true,
    });
    console.log("Item saved successfully");
  } catch (error) {
    console.error("Error saving item:", error);
    throw error;
  }
};

// getall food items
export const getAllFoodItems = async () => {
  try {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    console.log("Successfully fetched", items.docs.length, "food items");
    return items.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching food items:", error);
    throw error;
  }
};
