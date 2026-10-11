'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

interface ProfileClientProps {
  name: string;
  email: string;
}

export default function ProfileClient({ name, email }: ProfileClientProps) {
  const router = useRouter();
  const [nameInput, setNameInput] = useState(name);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const initial = name?.trim().charAt(0).toUpperCase() || '?';

  async function handleSignOut() {
    setIsSigningOut(true);
    await authClient.signOut();
    router.replace('/');
    router.refresh();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const trimmed = nameInput.trim();

    if (!trimmed) {
      setError('নাম খালি রাখা যাবে না।');
      return;
    }

    if (trimmed === name) {
      setError('কোনো পরিবর্তন নেই।');
      return;
    }

    setIsSaving(true);

    const { error: updateError } = await authClient.updateUser({
      name: trimmed,
    });

    setIsSaving(false);

    if (updateError) {
      setError(updateError.message || 'নাম হালনাগাদ ব্যর্থ হয়েছে।');
      return;
    }

    setSuccess('নাম সফলভাবে হালনাগাদ হয়েছে।');
    router.refresh();
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">
      <header>
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-base-content/70">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </header>

      <div className="flex flex-col items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-start">
        <span className="avatar avatar-placeholder">
          <span className="w-20 rounded-full bg-primary text-2xl text-primary-content">
            <span>{initial}</span>
          </span>
        </span>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="truncate text-base-content/70">{email}</p>
        </div>
        <button
          type="button"
          className="btn btn-outline btn-error"
          onClick={handleSignOut}
          disabled={isSigningOut}
        >
          {isSigningOut && (
            <span className="loading loading-spinner loading-sm" />
          )}
          ↩︎ সাইন আউট
        </button>
      </div>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
        <h3 className="mb-3 text-lg font-semibold">নাম হালনাগাদ করুন</h3>
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="form-control w-full">
            <span className="label-text mb-1 block font-medium">নাম</span>
            <input
              type="text"
              autoComplete="name"
              className="input input-bordered w-full"
              placeholder="যেমন: রহিম উদ্দিন"
              name="name"
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
                setError('');
                setSuccess('');
              }}
            />
          </label>

          {error && (
            <p role="alert" className="text-sm text-error">
              {error}
            </p>
          )}

          {success && (
            <p role="status" className="text-sm text-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary sm:w-fit"
            disabled={isSaving}
          >
            {isSaving && <span className="loading loading-spinner loading-sm" />}
            নাম হালনাগাদ করুন
          </button>
        </form>
      </div>
    </div>
  );
}
