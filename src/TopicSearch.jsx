import React, { useState } from "react";

const topics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Organic Chemistry", category: "Chemistry" },
  { id: 3, name: "Algebra", category: "Mathematics" },
  { id: 4, name: "Genetics", category: "Biology" },
  { id: 5, name: "Astronomy", category: "Space Science" }
];

export default function TopicSearch() {
  const [query, setQuery] = useState("");

  const filtered = topics.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search topic..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: 8, width: "60%", marginBottom: 20 }}
      />

      {filtered.length === 0 ? (
        <p>No topics found</p>
      ) : (
        filtered.map(t => (
          <div key={t.id} style={{
             border: "1px solid #ccc",
             borderRadius: 8,
             padding: 12,
             marginBottom: 10,
             width: "60%"
          }}>
            <h4>{t.name}</h4>
            <p>{t.category}</p>
          </div>
        ))
      )}
    </div>
  );
}
