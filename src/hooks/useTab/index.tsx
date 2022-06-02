import { useContext } from "react";
import { TabContext } from "src/context/TabContext";

export const useTab = () => useContext(TabContext)