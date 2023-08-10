"use client";

import axios from "axios";
import { FC, useEffect, useState } from "react";

interface pageProps {}

const SuperHero: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/diagnosis").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero?.id}>{hero.title}</div>;
      })}
    </div>
  );
};

export default SuperHero;
