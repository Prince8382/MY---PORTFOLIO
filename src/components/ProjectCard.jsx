import React from "react";

export default function ProjectCard({ p }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-xl transition">
      <img src={p.image} alt={p.name} className="rounded" />
      <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
      <p className="text-sm mt-2">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => (
          <span key={t} className="px-3 py-1 bg-gray-100 rounded text-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        <a href={p.code} target="_blank" className="underline">Code</a>
        <a href={p.demo} target="_blank" className="underline">Demo</a>
      </div>
    </div>
  );
}

