import "./App.css";

import UserProfile from "./components/UserProfile";
import UserContext from "./contexts/UserContext";

import { useState } from "react";

function App() {

  // Création du state isOnline (valeur initiale : false)
  const [isOnline, setIsOnline] = useState(false);

  return (
    // Utilisation du Provider pour partager les données globales
    <UserContext.Provider value={{ isOnline: isOnline, setIsOnline: setIsOnline }}>
      <UserProfile/>
    </UserContext.Provider>
  )
}

export default App;
