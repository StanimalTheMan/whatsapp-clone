import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function useChatMessages(roomId) {
  console.log(roomId);
  const [snapshot] = useCollection(
    roomId
      ? db
          .collection("rooms")
          .doc(roomId)
          .collection("messages")
          .orderBy("timestamp", "asc")
      : null
  );

  console.log("Sfsdf", snapshot);

  const messages = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return messages;
}
