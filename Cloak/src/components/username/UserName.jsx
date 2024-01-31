import service from "@/appwrite/config";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export function UserName() {
  const [userName, setUserName] = useState("");
  const [authId , setAuthId] = useState()
  const {user,event,}=useAuth0()

  useEffect(()=>{
    const authId=event.user_id;
    setAuthId(authId);
  })

  const submit = async () => {
    try {
      await service.createUserName({
        userName: userName,
        authId:authId
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

