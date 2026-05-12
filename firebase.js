// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  deleteDoc   // 🔥 ADD THIS
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDpRVeEX-2RE8aeDuNsZkYtOsWEo8zrCqc",
  authDomain: "rr-furnitures.firebaseapp.com",
  projectId: "rr-furnitures",
  storageBucket: "rr-furnitures.firebasestorage.app",
  messagingSenderId: "52544822784",
  appId: "1:52544822784:web:72cb7c525e1c3f342d42e5"
};



// INIT FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase Connected ✔");


// ------------------------------------------------------------
// 🔥 ADD PRODUCT
// ------------------------------------------------------------
export async function addProduct(name, price, stock, img, desc) {
  await addDoc(collection(db, "products"), {
    name,
    price,
    stock,
    img,
    desc,
    category
  });
}



// ------------------------------------------------------------
// 🔥 GET ALL PRODUCTS
// ------------------------------------------------------------
export async function getAllProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  let list = [];

  snapshot.forEach(docu => {
    list.push({
      id: docu.id,
      ...docu.data()
    });
  });

  return list;
}



// ------------------------------------------------------------
// 🔥 GET PRODUCT BY ID
// ------------------------------------------------------------
export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data()
  };
}



// ------------------------------------------------------------
// 🔥 DELETE PRODUCT
// ------------------------------------------------------------
export async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
}

import { updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// 🔥 UPDATE PRODUCT
export async function updateProduct(id, data) {
  const ref = doc(db, "products", id);
  await updateDoc(ref, data);
}