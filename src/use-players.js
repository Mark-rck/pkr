import firebase from "firebase/compat/app";
import { useCollection } from "react-firebase-hooks/firestore";

// TODO: change database rules, add only if tableId provided, do not allow dump all players

const usePlayers = (tableId, profileHash) => {
  const [value, loading, error] = useCollection(
    tableId &&
      firebase.firestore().collection("players").where("tableId", "==", tableId)
  );

  if (error) {
    console.log(error);
  }

  let players = {};
  let me;

  if (!loading) {
    if (value) {
      value.docs.forEach((doc) => {
        const position = doc.get("position");
        players[position] = Object.assign({}, doc.data(), {
          id: doc.ref.id,
        });
        if (profileHash === doc.get("profileHash")) {
          me = players[position];
        }
      });
    }
  }
  return [players, me, loading];
};

export default usePlayers;
