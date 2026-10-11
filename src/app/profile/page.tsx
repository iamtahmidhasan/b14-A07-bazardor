import { Suspense } from 'react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import ProfileClient from './ProfileClient';

async function ProfileContent() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect('/signin');
  }

  return (
    <ProfileClient name={session.user.name} email={session.user.email} />
  );
}

function ProfileSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">
      <div className="skeleton h-8 w-48" />
      <div className="skeleton h-40 w-full rounded-2xl" />
      <div className="skeleton h-48 w-full rounded-2xl" />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileContent />
    </Suspense>
  );
}
