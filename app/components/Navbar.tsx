'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('registeredUser');

    setIsLoggedIn(!!loggedIn);

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="font-bold text-lg">Social Awareness Website</div>
      <div className="flex items-center gap-4">
        <Link href="/">Homepage</Link>
        {isLoggedIn ? (
          <>
            <Link href="/home">My page</Link>
            <Link href="/notification">Notification</Link>
            <Link href="/profile">Profile</Link>
            {userEmail && (
              <span className="text-sm text-gray-300">{userEmail}</span>
            )}
            <button
              onClick={handleLogout}
              className="text-red-300 hover:text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
