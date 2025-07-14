'use client';

import { useEffect, useState } from 'react';
import { userGetFunction } from '@/functions/users.get';
import Form from '@/components/Form';

export default function Home() {
  const [users, setUsers] = useState([]);

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
        {users.map((user: any) => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
