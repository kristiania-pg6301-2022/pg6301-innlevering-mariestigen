import React, { useEffect, useState } from "react";

export const App = () => {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const res = async () => {
      const data = await fetch("/api/user");
      console.log(await data.json());
      return await data.json();
    };
    setUser(await res());
  });

  return (
    <div id={"usr"}>
      {user?.map((u) => (
        <p>{u.firstName}</p>
      ))}
    </div>
  );
};
