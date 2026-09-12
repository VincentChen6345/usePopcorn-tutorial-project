import Movie from "./Movie";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((el) => (
        <Movie movie={el} key={el.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
