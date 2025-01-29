import { useEffect, useState, useCallback } from "react";
import { PhotoExpanded } from "./components/PhotoExpanded";
import { PhotoList } from "./components/PhotoList";
import { SearchBar } from "./components/SearchBar";

import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoExpanded, setPhotoExpanded] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (query) => {
    const apiKey = process.env.VITE_UNSPLASH_API_KEY;
    console.log(apiKey)
    setLoading(true);
    setError(null);

    try {
      const params = {
        client_id: apiKey,
        query,
        count: 10,
      };

      const res = query
        ? await axios.get("https://api.unsplash.com/search/photos", {
            params: { ...params, query },
          })
        : await axios.get("https://api.unsplash.com/photos/random", {
            params,
          });

      setPhotos(res.data.results || res.data);
    } catch (err) {
      setError("Erro ao buscar dados da API");
      console.error("Erro ao buscar dados da API:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(query);
  }, [query, fetchData]);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />

      {loading && <div>Carregando...</div>}
      {error && <div>{error}</div>}

      <PhotoList photos={photos} setPhotoExpanded={setPhotoExpanded} />
      {photoExpanded && (
        <PhotoExpanded
          photo={photoExpanded}
          setPhotoExpanded={setPhotoExpanded}
        />
      )}
    </div>
  );
}

export default App;
