import Link from "next/link";
import PostCard from "../components/PostCard";

// تابع برای دریافت پست‌ها از API
async function getPosts() {
  try {
    // استفاده از relative URL (ساده‌تر و مطمئن‌تر)
    const response = await fetch("/api/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("خطا در دریافت پست‌ها");
    }

    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("خطا در دریافت پست‌ها:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">وبلاگ من</h1>

      {posts.length > 0 ? (
        posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <PostCard title={post.title} summary={post.summary} />
          </Link>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">در حال بارگذاری پست‌ها...</p>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-xl text-gray-600">
          سلام به وبلاگ من خوش اومدی! 😊 (آپدیت #4)
        </p>
      </div>
    </main>
  );
}
