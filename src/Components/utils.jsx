import { useState, useEffect } from "react";
const dataFile = new URL("../../public/data.json", import.meta.url).href

export const fetchData = async () => {
  try {
    const response = await fetch(dataFile);
    if (!response.ok) {
      throw new Error("Network response error");
    }
    const jsonData = await response.json();
    return jsonData
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const useLoadData = (key) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsLoading(true)
    fetchData().then((e) => {
      setData(e[key]) 
      setIsLoading(false)
    })
  }, []);

  const changeTab = (index) => { setActiveTab(index); }

  return {
    isLoading, data, activeTab, changeTab
  }
}
