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