import { Suspense } from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/auth";
import UserMenu from "@/components/UserMenu";

interface SingleCat {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

async function HeaderAuth() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) {
    return <UserMenu name={session.user.name} email={session.user.email} />;
  }

  return (
    <>
      <Link className="btn btn-ghost btn-sm sm:btn-md" href="/signin">
        সাইন ইন
      </Link>
      <Link className="btn btn-primary btn-sm sm:btn-md" href="/signup">
        সাইন আপ
      </Link>
    </>
  );
}

async function HeaderCategories() {
  const res = await fetch(`${process.env.API_URL}/api/bazardor/categories`);
  const data = await res.json();

  return (
    <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm">
      {data?.map((item: SingleCat) => {
        return (
          <li className="shrink-0" key={item.id}>
            <Link
              className="btn btn-sm whitespace-nowrap btn-ghost"
              href={`/category/${item.slug}`}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.nameBn}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
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
          <Suspense
            fallback={
              <>
                <span className="btn btn-ghost btn-sm sm:btn-md" />
                <span className="btn btn-primary btn-sm sm:btn-md" />
              </>
            }
          >
            <HeaderAuth />
          </Suspense>
        </div>
      </div>
      <div className="border-t border-base-200 bg-base-100">
        <nav
          aria-label="পণ্য ক্যাটাগরি"
          className="mx-auto w-full max-w-6xl px-4"
        >
          <Suspense
            fallback={
              <div className="flex items-center gap-1 py-2">
                <span className="btn btn-sm btn-ghost" />
                <span className="btn btn-sm btn-ghost" />
                <span className="btn btn-sm btn-ghost" />
              </div>
            }
          >
            <HeaderCategories />
          </Suspense>
        </nav>
      </div>
    </header>
  );
}
