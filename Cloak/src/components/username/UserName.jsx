
import service from "@/appwrite/config";
import { useState } from "react";


export function UserName() {


  const [userName, setUserName] = useState("");

  const submit = async () => {
    try {
      await service.createUserName({
        userName: userName,
      });
    } catch (error) {
      console.error("error creating post : ", error);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={userName} onChange={(e) => (setUserName(e.target.value))} />
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>

  );
}

export default UserName;

