import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <main>
        <h1>Fast Feeback</h1>

        <p>
          <code>{auth.user ? auth.user.email : 'None'}</code>
        </p>

        {auth.user ? (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        ) : (
          <button onClick={(e) => auth.signin()}>Sign In</button>
        )}
      </main>
    </div>
  );
}
