import Link from "next/link";

interface SingleCat{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
export default async function Header() {
  const res = await fetch(`${process.env.API_URL}/api/bazardor/categories`);
  const data = await res.json();
  console.log(data);

  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
        <Link className="flex items-center gap-2" href="/">
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-xl bg-primary text-lg text-primary-content"
          >
            🛒
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-bold tracking-tight">
              বাজার দর
            </span>
            <span className="block text-xs text-base-content/60">
              শনিবার, ১০ অক্টোবর, ২০২৬
            </span>
          </span>
        </Link>
        <div className="ms-auto flex items-center gap-2">
          <Link className="btn btn-ghost btn-sm sm:btn-md" href="/signin">
            সাইন ইন
          </Link>
          <Link className="btn btn-primary btn-sm sm:btn-md" href="/signup">
            সাইন আপ
          </Link>
        </div>
      </div>
      <div className="border-t border-base-200 bg-base-100">
        <nav
          aria-label="পণ্য ক্যাটাগরি"
          className="mx-auto w-full max-w-6xl px-4"
        >
          <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm">
            {data?.map((item:SingleCat) => {
              return (
                <li className="shrink-0" key={item.id}>
                  <a
                    className="btn btn-sm whitespace-nowrap btn-ghost"
                    href={`/category/${item.slug}`}
                  >
                    <span aria-hidden="true">{item.icon}</span>{item.nameBn}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
