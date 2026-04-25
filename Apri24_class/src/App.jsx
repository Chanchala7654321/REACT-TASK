import React, { useEffect, useState } from "react";

function App() {
  const [respon, setRespon] = useState(0);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      setLoding(true);
      setError(null);

      try {
        const data = await fetch("https://randomuser.me/api/ ");

        if (!data.ok) {
          throw new Error("API not found..");
        }

        const jsondata = await data.json();
        setRespon(jsondata);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoding(false);
      }
    }

    fetchAPI();
  }, []);

  if (loding) {
    return <p>Loading....</p>;
  }

  const user = respon?.results[0];
  const imageUrl = user?.picture?.large;

  return <>{imageUrl && <img src={imageUrl} alt="User Profile" />}</>;
}

export default App;
