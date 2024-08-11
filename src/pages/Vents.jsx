import React, { useEffect, useState } from "react";
import Vent from "../components/Vent";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import api from "../../api/vents";
import LoadingPage from "../components/Loading";

const VentsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vents, setVents] = useState([]);
  const [search, setSearch] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const getVents = async () => {
      try {
        const response = await api.get("/");
        const resData = response.data;
        setVents(resData);
        setSearch(resData); 
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch vents", error);
        setIsLoading(false);
      }
    };
    getVents();
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category); 
    if (category === "") {
      setSearch(vents);
    } else {
      const filteredVents = vents.filter(post => post.category === category);
      setSearch(filteredVents);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header page="Blogs" data={vents} dataChange={setSearch} />
      <Chatbot />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="md:grid-cols-[220px_1fr] pt-10 flex-grow md:grid md:items-start py-4 flex flex-col items-center">
          <ul className="mx-5 my-12 hidden flex-col gap-2 font-semibold md:flex">
            <li className="text-2xl font-bold">All Categories</li>
            <li
              className={`cursor-pointer ${activeCategory === "" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("")}
            >
              All Blogs
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Technology" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Technology")}
            >
              Technology
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Art" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Art")}
            >
              Art
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Education" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Education")}
            >
              Education
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Nutrition" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Nutrition")}
            >
              Nutrition
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Fashion" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Fashion")}
            >
              Fashion
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Music" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Music")}
            >
              Music
            </li>
            <li
              className={`cursor-pointer ${activeCategory === "Uncategorized" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => filterByCategory("Uncategorized")}
            >
              Uncategorized
            </li>
          </ul>
          <div className="blogs flex-grow grid grid-cols-1 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
            {search.map((vent) => {
              return (
                <Vent
                  name={vent.authorId.name}
                  date={vent.createdAt}
                  key={vent._id}
                  id={vent._id}
                  title={vent.title}
                  category={vent.category}
                  body={vent.content}
                  comments={vent.comments}
                  profilePicture={vent.authorId.profilePicture}
                  img={vent.image}
                />
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default VentsPage;
