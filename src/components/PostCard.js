import { useState, useEffect } from "react";

function PostCard({ post }) {
  const [isFavourite, setIsFavourite] = useState(false);

  // check if post is in favourites
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      const favouritesArray = JSON.parse(storedFavourites);

      if (favouritesArray.includes(post.id)) {
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    } else {
      setIsFavourite(false);
    }
  }, [post.id]);

  function toggleFavourite() {
    const storedFavourites = localStorage.getItem("favourites");
    let favouritesArray = [];

    if (storedFavourites) {
      favouritesArray = JSON.parse(storedFavourites);
    }

    if (isFavourite === true) {
      // Remove favourites
      const updatedArray = favouritesArray.filter(function (id) {
        return id !== post.id;
      });

      localStorage.setItem("favourites", JSON.stringify(updatedArray));
      setIsFavourite(false);
    } else {
      // Add to favourites
      favouritesArray.push(post.id);

      localStorage.setItem("favourites", JSON.stringify(favouritesArray));
      setIsFavourite(true);
    }
  }

  let buttonText;

  if (isFavourite === true) {
    buttonText = "Remove from Favourites";
  } else {
    buttonText = "Add to Favourites";
  }
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Likes:</strong> {post.totalLikes}
      </p>
      <button onClick={toggleFavourite}>
        {buttonText}
      </button>
    </div>
  );

}
export default PostCard;

