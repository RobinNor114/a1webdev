import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api";


function Nav() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("Error getting user:", error);
      });
  }, []);

  return (
    <nav style={styles.nav}>
      {user ? (
        <div>
          {user.firstName} {user.lastName}
        </div>
      ) : null}

      <div>
        <Link to="/home">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#000000",
    marginBottom: "20px", 
    color: "#fff"
  }
};

export default Nav;

{/*******************************************************************************************
  File: Nav.js 

  Programmer: Robin Wagubi

  First Version: 26/02/26

  Description: Navigation bar with user info and links to Home and Favourites pages.

  ***************************************************************************************/}