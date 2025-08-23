import Link from "next/link";

// تابع برای دریافت پست خاص از API
async function getPost(slug) {
  try {
    // استفاده از absolute URL برای production
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://myblog-74vwguojn-mahdis-projects-3e182af4.vercel.app'
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/posts/${slug}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('پست مورد نظر یافت نشد');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('خطا در دریافت پست:', error);
    return null;
  }
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">پست مورد نظر یافت نشد</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← بازگشت به صفحه اصلی
      </Link>
      
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('fa-IR')}
            </time>
          </div>
          <p className="text-xl text-gray-700">{post.summary}</p>
        </header>
        
        <div 
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
