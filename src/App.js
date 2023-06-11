import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";
import VideoPlayer from "./pages/VideoPlayer";
import Base from "./pages/Base";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import { getCategoryData, setLocalStorage } from "./data";

function App() {
  const [categoryData, setCategoryData] = useState(getCategoryData);
  useEffect(() => setLocalStorage(categoryData), [categoryData]);

  function addVideo(title, idVideo, category, description) {
    setCategoryData(
      categoryData.map((data) => {
        if (data.category === category) {
          data.videos.push({
            id: idVideo,
            title: title,
            description: description,
          });
        }
        return data;
      })
    );
  }

  function deleteVideo(category, id) {
    setCategoryData(
      categoryData.map((data) => {
        if (data.category === category) {
          data.videos = data.videos.filter((video) => video.id !== id);
        }
        return data;
      })
    );
  }

  function addCategory(name, color, description) {
    const newCategory = {
      category: name,
      url: name.toLowerCase().replace(/\s/g, ""),
      description: description,
      color: color,
      videos: [],
    };

    setCategoryData([...categoryData, newCategory]);
  }

  function deleteCategory(name) {
    const newData = categoryData.filter((data) => data.category !== name);

    let emptyCategory = 0;
    let canDelete = true;

    newData.map((data) => {
      if (data.videos.length === 0) emptyCategory++;
      return data;
    });

    if (emptyCategory === newData.length) canDelete = false;

    if (canDelete) setCategoryData(newData);

    return canDelete;
  }

  function editCategory(oldCategory, name, color, description) {
    setCategoryData(
      categoryData.map((data) => {
        if (data.category === oldCategory) {
          data.category = name;
          data.url = name.toLowerCase().replace(/\s/g, "");
          data.description = description;
          data.color = color;
        }
        return data;
      })
    );
  }

  function sortCategory(newCategoryArray) {
    setCategoryData(newCategoryArray);
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="/" element={<Home categoryData={categoryData} />} />
          <Route
            path="novovideo"
            element={
              <NewVideo categoryData={categoryData} submitFunction={addVideo} />
            }
          />
          <Route
            path="novacategoria"
            element={
              <NewCategory
                categoryData={categoryData}
                submitFunction={addCategory}
                deleteCategory={deleteCategory}
                editCategory={editCategory}
                deleteVideo={deleteVideo}
                sortCategory={sortCategory}
              />
            }
          />
        </Route>

        <Route
          path=":category/:id/*"
          element={<VideoPlayer categoryData={categoryData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
