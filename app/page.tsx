import MovieList from "@movieapp/container/MovieList";
import { fetchMovies } from "@movieapp/lib/movie";

export default async function Home() {
  const getMoviesData = await fetchMovies();
  return (
    <div className="flex flex-col gap-10 mx-auto px-6 py-10 lg:p-20 max-w-[100rem] z-20">
      <MovieList data={getMoviesData ?? null}/>
    </div>
  );
}
