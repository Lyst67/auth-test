"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { User } from "next-auth";

// interface UserData {
//   id: number;
//   first_name: string;
//   last_name?: string;
//   username?: string;
//   language_code: string;
//   photo_url?: string;
//   auth_date: string;
// }

export default function Home() {
  const [userData, setUserData] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const user = session?.user as User;
  useEffect(() => {
    if (user) {
      setUserData(user as User);
    }
  }, [user]);
  console.log(userData);

  if (status === "loading") {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div>Home Page</div>
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>User Photo: {userData.name}</li>
            <li>First Name: {userData.image}</li>
            {/* <li>User Photo: {userData.photo_url}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name}</li>
            <li>Username: {userData.username}</li>
            <li>Language: {userData.language_code}</li>
            <li>Authorisation Data: {userData.auth_date}</li> */}
          </ul>
        </>
      ) : (
        <div>No UserData</div>
      )}
    </>
  );
}
