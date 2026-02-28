import { useEffect, useState } from "react";
import { getPostsByIds } from "../api";
import PostCard from "../components/PostCard";

function Favourites() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");

    if (storedFavourites) {
      const favIds = JSON.parse(storedFavourites);

      if (favIds.length > 0) {
        getPostsByIds(favIds)
          .then(function (data) {
            setPosts(data);
          })
          .catch(function (error) {
            console.log("Error getting favourite posts:", error);
          });
      }
    }
  }, []);

  let content;

  if (posts.length === 0) {
    content = <p>No favourites.</p>;
  } else {
    content = posts.map(function (post) {
      return <PostCard key={post.id} post={post} />;
    });
  }

  return (
    <div className="container">
      <h2>Your Favourites</h2>
      {content}

    </div>
  );
}
export default Favourites;

{/*****************************************************************************************
  File: Favourites.js 

  Programmer: Robin Wagubi

  First Version: 26/02/26

  Description: Displays the user's favourite posts

  ***************************************************************************************/}