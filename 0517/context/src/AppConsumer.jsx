import { createContext } from "react"
import HelloLicat from "./HelloLicat"

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat />
  );
};