import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/laksssshhhhya")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="text-center mb-8 mt-8 bg-gray-800 text-amber-100 p-4 text-3xl">
        Github Followers: {data.followers}
      </div>
      <img
        className="mb-40"
        src={data.avatar_url}
        alt="profile picture"
        width={300}
      />
    </>
  );
}

export default GitHub;

export const githubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/laksssshhhhya");
  return response.json();
};
