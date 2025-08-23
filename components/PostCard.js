export default function PostCard({ title, summary }) {
  return (
    <div className="border p-4 rounded mb-4 shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{summary}</p>
    </div>
  );
}
