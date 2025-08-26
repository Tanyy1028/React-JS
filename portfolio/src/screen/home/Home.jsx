import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import axios from "axios";
import Contact from "../../components/Contact/Contact";


export default function Home() {
  const [githubData, setGithubData] = useState({});
  const [repos, setRepos] = useState([]); 

  useEffect(() => {
    fetchApi().then((data) => setGithubData(data));
    fetchRepos().then((data) => setRepos(data));
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("https://api.github.com/users/Tanyy1028");
    return res.data;
  };

  const fetchRepos = async () => {
    const res = await axios.get(
      "https://api.github.com/users/Tanyy1028/repos"
    );
    return res.data;
  };

  return (
    <div>
      <About user={githubData} length={repos.length} />
      <Projects repos={repos} />
      <Contact />
    </div>
  );
}
