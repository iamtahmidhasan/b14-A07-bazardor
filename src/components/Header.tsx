import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
        < Link className="flex items-center gap-2" href="/">
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-xl bg-primary text-lg text-primary-content"
          >
            🛒
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-bold tracking-tight">বাজার দর</span>
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
        <nav aria-label="পণ্য ক্যাটাগরি" className="mx-auto w-full max-w-6xl px-4">
          <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm">
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/chal"
              >
                <span aria-hidden="true">🍚</span>চাল
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/dal"
              >
                <span aria-hidden="true">🫘</span>ডাল
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/tel"
              >
                <span aria-hidden="true">🛢️</span>তেল
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/sobji"
              >
                <span aria-hidden="true">🥬</span>সবজি
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/mach"
              >
                <span aria-hidden="true">🐟</span>মাছ
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/mangsho"
              >
                <span aria-hidden="true">🍗</span>মাংস
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/dim-dui"
              >
                <span aria-hidden="true">🥛</span>ডিম-দুধ
              </a>
            </li>
            <li className="shrink-0">
              <a
                className="btn btn-sm whitespace-nowrap btn-ghost"
                href="/category/mosla"
              >
                <span aria-hidden="true">🌶️</span>মসলা
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
