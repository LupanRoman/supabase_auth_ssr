import { createClient } from '@supabase/supabase-js';
import React from 'react';

type Props = {};

// !! everything in app directory is by default a server component

function Home({}: Props) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return (
    <>
      <div>
        <h1>Auth</h1>
      </div>
    </>
  );
}

export default Home;
