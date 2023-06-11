import initialData from "./initial-data.json";

export function getCategoryData() {
  let categoryData;
  let storedData = localStorage.getItem("categoryDataKey");

  if (!storedData) categoryData = initialData;
  else categoryData = JSON.parse(storedData);

  return categoryData;
}

export function setLocalStorage(categoryData) {
  localStorage.setItem("categoryDataKey", JSON.stringify(categoryData));
}
