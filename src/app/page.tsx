'use client';

import { useEffect, useState } from 'react';
import { userGetFunction } from '@/functions/users.get';
import Form from '@/components/Form';
import { User } from '@prisma/client';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await userGetFunction();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className='flex justify-center gap-[50px]' suppressHydrationWarning={true}>
      <Form onsuccess={userGetFunction} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
