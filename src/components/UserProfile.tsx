import { useContext } from "react";
import UserContext from "../contexts/UserContext";


function UserProfile() {
  // Consommation du contexte
  const { isOnline, setIsOnline } = useContext(UserContext);

  // Détermine le texte à afficher
  let statusText;
  if (isOnline) {
    statusText = "en ligne";
  } else {
    statusText = "hors ligne";
  }

  // Écouteur d'événement du bouton
  function handleClick() {
    setIsOnline(!isOnline);
  }

  return (
    <>
      <p>User is {statusText}</p>
      {/* Ajout de l'écouteur d'événement */}
      <button onClick={handleClick}>click to change user status </button>
    </>
  );
}

export default UserProfile;