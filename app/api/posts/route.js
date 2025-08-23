// فایل: app/api/posts/route.js
// API برای دریافت همه پست‌ها

const posts = [
  {
    id: 1,
    slug: "hello-world",
    title: "سلام به وبلاگ من!",
    summary: "این اولین پست من در Next.js است.",
    content: "این محتوای کامل پست اول است...",
    date: "2024-01-15",
  },
  {
    id: 2,
    slug: "start-tailwind",
    title: "شروع پروژه با Tailwind",
    summary: "یاد می‌گیریم چطور از Tailwind CSS برای استایل‌دهی استفاده کنیم.",
    content: "در این پست با Tailwind CSS آشنا می‌شویم...",
    date: "2024-01-20",
  },
  {
    id: 3,
    slug: "nextjs-app-router",
    title: "Next.js App Router",
    summary: "آشنایی با ساختار App Router و صفحات داینامیک.",
    content: "App Router یکی از ویژگی‌های جدید Next.js است...",
    date: "2024-01-25",
  },
];

export async function GET() {
  try {
    return Response.json({
      success: true,
      data: posts,
      count: posts.length,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "خطا در دریافت پست‌ها",
      },
      { status: 500 }
    );
  }
}
