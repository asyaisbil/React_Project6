import { useState } from "react";
import UserList from "./UserList";

export default function SideBar(props) {
  const { kullanicilar } = props;
  return (
    <div className="side-container">
      <h2>Users</h2>
      <UserList kullanicilar={kullanicilar} />
    </div>
  );
}
