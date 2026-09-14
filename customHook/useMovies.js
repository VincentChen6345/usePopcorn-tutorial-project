import { useEffect, useState } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = import.meta.env.VITE_OMDB_KEY;
  useEffect(
    function () {
      const controller = new AbortController(); //cancels current fetch request when a new one is sent, i.e. only one fetch request runs at a time
      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          //console.log(data.Search);

          setIsLoading(false);
        } catch (err) {
          //console.log(err.message);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query],
  );
  return { movies, isLoading, error };
}
