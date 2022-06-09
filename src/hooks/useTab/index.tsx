import { useContext } from "react";
import { TabNavigatorContext } from "src/context/TabContext";

export const useTab = () => useContext(TabNavigatorContext)