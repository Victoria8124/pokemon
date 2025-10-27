import { useState } from "react";
import axios from "axios";

interface ItemType {
  name: string;
  url: string;
}

interface ItemDetail {
  name: string;
  image?: string | null;
}

const Admin = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<ItemDetail[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setItems([]);

    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/item?limit=1000"
      );

      // фильтруем по введённому слову
      const filtered = data.results.filter((item: ItemType) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      // берём первые 10 совпадений
      const detailedItems = await Promise.all(
        filtered.slice(0, 10).map(async (item: ItemType) => {
          const res = await axios.get(item.url);
          return {
            name: item.name,
            image: res.data.sprites?.default || null,
          };
        })
      );

      setItems(detailedItems);
    } catch (error) {
      console.error("Ошибка при загрузке:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Поиск предметов по названию</h2>

      <input
        type="text"
        placeholder="Введите berry или ball"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Найти
      </button>

      {loading && <p>Загрузка...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          padding: "0 40px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div style={{ height: "80px" }}>Нет изображения</div>
            )}
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
