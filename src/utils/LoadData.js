import { useState, useEffect } from "react";
import { fetchData } from "./fetchData";

export const useLoadData = (key) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchData().then((e) => {
      setData(e[key]);
      setIsLoading(false);
    });
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return {
    isLoading,
    data,
    activeTab,
    changeTab,
  };
};
