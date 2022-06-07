import { useContext } from "react";
import { TabNavigatorContext } from "@context/TabNavigatorContext";

export const useTab = () => useContext(TabNavigatorContext)