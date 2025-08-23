// فایل: app/api/posts/[slug]/route.js
// API برای دریافت پست خاص بر اساس slug

const posts = [
  {
    id: 1,
    slug: "hello-world",
    title: "سلام به وبلاگ من!",
    summary: "این اولین پست من در Next.js است.",
    content: `
      <h2>سلام به وبلاگ من!</h2>
      <p>این اولین پست من در Next.js است. در این پست می‌خوایم یاد بگیریم چطور یک وبلاگ ساده بسازیم.</p>
      
      <h3>چرا Next.js؟</h3>
      <p>Next.js یک فریم‌ورک قدرتمند برای React است که امکانات زیادی مثل:</p>
      <ul>
        <li>Server-Side Rendering (SSR)</li>
        <li>Static Site Generation (SSG)</li>
        <li>API Routes</li>
        <li>File-based Routing</li>
      </ul>
      
      <p>امیدوارم این پست برای شما مفید باشد!</p>
    `,
    date: "2024-01-15"
  },
  {
    id: 2,
    slug: "start-tailwind",
    title: "شروع پروژه با Tailwind",
    summary: "یاد می‌گیریم چطور از Tailwind CSS برای استایل‌دهی استفاده کنیم.",
    content: `
      <h2>شروع پروژه با Tailwind CSS</h2>
      <p>Tailwind CSS یک فریم‌ورک CSS utility-first است که به شما اجازه می‌دهد به سرعت رابط‌های کاربری زیبا بسازید.</p>
      
      <h3>مزایای Tailwind:</h3>
      <ul>
        <li>سرعت بالا در توسعه</li>
        <li>اندازه فایل نهایی کوچک</li>
        <li>سازگاری با همه مرورگرها</li>
        <li>انعطاف‌پذیری بالا</li>
      </ul>
      
      <p>در پست‌های بعدی بیشتر با Tailwind آشنا می‌شویم.</p>
    `,
    date: "2024-01-20"
  },
  {
    id: 3,
    slug: "nextjs-app-router",
    title: "Next.js App Router",
    summary: "آشنایی با ساختار App Router و صفحات داینامیک.",
    content: `
      <h2>Next.js App Router</h2>
      <p>App Router یکی از ویژگی‌های جدید Next.js 13+ است که تجربه توسعه را بهبود می‌دهد.</p>
      
      <h3>ویژگی‌های App Router:</h3>
      <ul>
        <li>File-based Routing</li>
        <li>Server Components</li>
        <li>Layouts</li>
        <li>Loading States</li>
        <li>Error Boundaries</li>
      </ul>
      
      <p>این ساختار جدید انقلابی در توسعه React ایجاد کرده است.</p>
    `,
    date: "2024-01-25"
  },
];

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      return Response.json({ 
        success: false, 
        error: "پست مورد نظر یافت نشد" 
      }, { status: 404 });
    }
    
    return Response.json({ 
      success: true, 
      data: post 
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: "خطا در دریافت پست" 
    }, { status: 500 });
  }
}
