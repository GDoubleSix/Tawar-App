"use client";
import { useState, useEffect } from "react";
import Container from "./Container";

function Teams() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const fetchedData = await response.json();
        setUserData(fetchedData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container id="teams">
      <h2 className="text-2xl text-center text-green-900 font-semibold md:text-4xl pt-6">
        Our Teams
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-6">
        {userData.map((user, index) => (
          <div
            key={user.login.uuid}
            className={`max-w-sm rounded overflow-hidden shadow-md mx-auto ${
              index < 2 ? "order-first" : "order-last"
            }`}
          >
            <img
              src={user.picture?.large}
              alt={`${user.name?.first} ${user.name?.last}`}
              className="w-full h-30 object-cover"
            />
            <div className="px-3 py-2">
              <div className=" font-semibold text-md mb-2">
                {`${user.name?.first} ${user.name?.last}`}
              </div>
              <p className="text-gray-700">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Teams;
