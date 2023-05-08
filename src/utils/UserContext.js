import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ayush Aggarwal",
    email: "ayushaggarwal9040@gmail.com"
  }
});

export default UserContext;