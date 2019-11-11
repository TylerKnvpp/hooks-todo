import { useState, useEffect } from "react";

function useFetch(url) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setTasks(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [tasks, loading];
}
export { useFetch };
