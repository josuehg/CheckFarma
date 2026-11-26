// Configuración del proyecto Firebase de CheckFarma.
// Estos datos NO son secretos: identifican el proyecto; la seguridad la dan las reglas de Firestore.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBYeHJSnLvZLqf713TLb3ZKwUu63frjCFM",
  authDomain: "checkfarma-1e27a.firebaseapp.com",
  projectId: "checkfarma-1e27a",
  storageBucket: "checkfarma-1e27a.firebasestorage.app",
  messagingSenderId: "607608764052",
  appId: "1:607608764052:web:396e5a3215a805bee6e681"
};
// Usuario del administrador (debe coincidir con firestore.rules).
window.ADMIN_USER = "admin";
// Dominio interno para convertir usuarios en cuentas de Firebase (no necesita existir).
window.USER_DOMAIN = "usuarios.inspecciones.app";
