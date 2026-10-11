'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth-client';

interface UserMenuProps {
  name: string;
  email: string;
}

export default function UserMenu({ name, email }: UserMenuProps) {
  const router = useRouter();
  const initial = name?.trim().charAt(0).toUpperCase() || '?';

  async function handleSignOut() {
    await signOut();
    router.replace('/');
    router.refresh();
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm gap-2 sm:btn-md"
        aria-label="ব্যবহারকারীর মেনু"
      >
        <span className="avatar avatar-placeholder">
          <span className="w-8 rounded-full bg-primary text-primary-content sm:w-9">
            <span className="text-sm">{initial}</span>
          </span>
        </span>
        <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">
          {name}
        </span>
        <span aria-hidden="true" className="text-xs opacity-60">
          ▾
        </span>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-50 mt-2 w-64 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
      >
        <li className="menu-title">
          <span className="block truncate">{name}</span>
          <span className="block truncate text-xs font-normal opacity-70">
            {email}
          </span>
        </li>
        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>
        <li>
          <button type="button" className="text-error" onClick={handleSignOut}>
            ↩︎ সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
}
