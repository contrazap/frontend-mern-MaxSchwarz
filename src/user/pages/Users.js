import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Pallav",
      image: "https://picsum.photos/300/200",
      places: 1,
    },
    {
      id: "u2",
      name: "Kumar",
      image: "https://picsum.photos/300/200",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
