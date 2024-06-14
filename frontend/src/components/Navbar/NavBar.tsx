"use client";
import Link from "next/link";
import React from "react";
import "./NavBar.css";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import Image from "next/image";
import LocationPopup from "@/popups/location/LocationPopup";

const NavBar = () => {
  const [showLocationPopup, setShowLocationPopup] =
    React.useState<boolean>(false);

  const [user, setUser] = React.useState<any>(null);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const getUser = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.ok) {
          setUser(response.data);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          window.location.href = "/auth/signin";
        }
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/auth/signin";
      });
  };

  return (
    <nav>
      <div className="left">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="searchbox">
          <BiSearch className="searchbtn" />
          <input type="text" placeholder="Search For a Movie" />
        </div>
      </div>

      <div className="right">
        <p className="dropdown" onClick={() => setShowLocationPopup(true)}>
          {user ? user.city : "Select City"}
          <RiArrowDropDownFill className="dropicon" />
        </p>

        {loggedIn ? (
          <button className="theme_btn1 linkstylenone" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link href="/auth/signin" className="theme_btn1 linkstylenone">
            Login
          </Link>
        )}
        <Link href="/" className="linkstylenone">
          <BiUserCircle className="theme_icon1" />
        </Link>
      </div>
      {showLocationPopup && (
        <LocationPopup setShowLocationPopup={setShowLocationPopup} />
      )}
    </nav>
  );
};

export default NavBar;
