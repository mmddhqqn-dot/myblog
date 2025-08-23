import Link from "next/link";
import PostCard from "../components/PostCard";

const posts = [
  { id: 1, slug: "hello-world", title: "سلام به وبلاگ من!", summary: "این اولین پست من در Next.js است." },
  { id: 2, slug: "start-tailwind", title: "شروع پروژه با Tailwind", summary: "یاد می‌گیریم چطور از Tailwind CSS برای استایل‌دهی استفاده کنیم." },
  { id: 3, slug: "nextjs-app-router", title: "Next.js App Router", summary: "آشنایی با ساختار App Router و صفحات داینامیک." },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">وبلاگ من</h1>

      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.slug}`}>
          <PostCard title={post.title} summary={post.summary} />
        </Link>
      ))}
    </main>
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">سلام به وبلاگ من خوش اومدی</h1>
    </div>
  );
}
