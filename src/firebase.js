import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9YbkIu6sh84pfcw8RPC-2vaLqWaRcGVM",
  authDomain: "auth-bc3ad.firebaseapp.com",
  projectId: "auth-bc3ad",
  storageBucket: "auth-bc3ad.appspot.com",
  messagingSenderId: "753101831209",
  appId: "1:753101831209:web:744f76417f198f4dc7b038",
  measurementId: "G-38F8GJF7JD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addTask = async ({ name, task }) => {
  console.log(name,task);
  try {
    const doc = await addDoc(collection(db, name), {
      task: task,
      completed: false,
    })
    return 1;
  }
  catch (e) {
    // console.log("err");
    return 0;
  }
}

const readTask = async (name) => {
  const querySnapshot = await getDocs(collection(db, name));
  let data = [];
  querySnapshot.forEach((doc) => data.push({id:doc.id,...doc.data()}))
  return data;
}

const deleteTask = async ({name,id}) => {
  const res = await deleteDoc(doc(db, name, id));
  console.log(name,id,"del");
}


const updateTask = async ({name,id,task}) => {
  console.log(name,id,task);
  const Ref = doc(db, name, id);
  const res = await updateDoc(Ref,{task:task})
  console.log(res);
}

export { db, addTask, readTask, deleteTask, updateTask}