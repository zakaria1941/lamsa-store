import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyAt1zVVJ_Czk4ts9r4BrwxWtTAUk7dw-7U",
  authDomain: "lamsa-store-5d57a.firebaseapp.com",
  projectId: "lamsa-store-5d57a",
  storageBucket: "lamsa-store-5d57a.firebasestorage.app",
  messagingSenderId: "434759373655",
  appId: "1:434759373655:web:8d8f4ca8eeb422f5d3a412"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const productData = {
        name: document.getElementById('name').value,
        description: document.getElementById('desc').value,
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        createdAt: new Date()
    };

    try {
        await addDoc(collection(db, "products"), productData);
        alert("تم حفظ المنتج بنجاح!");
        document.getElementById('productForm').reset();
    } catch (error) {
        console.error("خطأ أثناء الحفظ: ", error);
        alert("حدث خطأ، حاول مرة أخرى.");
    }
});
