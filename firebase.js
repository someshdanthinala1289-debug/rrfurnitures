import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpRVeEX-2RE8aeDuNsZkYtOsWEo8zrCqc",
  authDomain: "rr-furnitures.firebaseapp.com",
  projectId: "rr-furnitures",
  storageBucket: "rr-furnitures.firebasestorage.app",
  messagingSenderId: "52544822784",
  appId: "1:52544822784:web:72cb7c525e1c3f342d42e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function normalizeList(snapshot) {
  const list = [];

  snapshot.forEach((record) => {
    list.push({
      id: record.id,
      ...record.data()
    });
  });

  return list;
}

async function addRecord(collectionName, data) {
  await addDoc(collection(db, collectionName), data);
}

async function getAllRecords(collectionName) {
  const snapshot = await getDocs(collection(db, collectionName));
  return normalizeList(snapshot);
}

async function getRecordById(collectionName, id) {
  const ref = doc(db, collectionName, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data()
  };
}

async function deleteRecord(collectionName, id) {
  await deleteDoc(doc(db, collectionName, id));
}

async function updateRecord(collectionName, id, data) {
  const ref = doc(db, collectionName, id);
  await updateDoc(ref, data);
}

export async function addProduct(name, price, stock, img, desc, category, images = [], extras = {}) {
  await addRecord("products", {
    name,
    price,
    stock,
    img,
    desc,
    category,
    images,
    ...extras
  });
}

export async function getAllProducts() {
  return getAllRecords("products");
}

export async function getProductById(id) {
  return getRecordById("products", id);
}

export async function deleteProduct(id) {
  await deleteRecord("products", id);
}

export async function updateProduct(id, data) {
  await updateRecord("products", id, data);
}

export async function addStory(data) {
  await addRecord("stories", data);
}

export async function getAllStories() {
  return getAllRecords("stories");
}

export async function deleteStory(id) {
  await deleteRecord("stories", id);
}

export async function updateStory(id, data) {
  await updateRecord("stories", id, data);
}

export async function addProject(data) {
  await addRecord("projects", data);
}

export async function getAllProjects() {
  return getAllRecords("projects");
}

export async function deleteProject(id) {
  await deleteRecord("projects", id);
}

export async function updateProject(id, data) {
  await updateRecord("projects", id, data);
}
