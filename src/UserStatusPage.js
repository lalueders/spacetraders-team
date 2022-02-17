import { useState } from 'react';

export default function UserStatusPage() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <main>
      <h1>User status</h1>
      {!token && (
        <form onSubmit={loginUser}>
          <label htmlFor="username">Please select a username</label>
          <input type="text" id="username" name="username" />
          <button>Login</button>
        </form>
      )}
      <dl>
        <dt>Username</dt>
        <dd>{user?.username}</dd>
        <dt>Credits</dt>
        <dd>{user?.credits}</dd>
      </dl>
    </main>
  );

  async function loginUser(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.username;
    const response = await fetch(
      `https://api.spacetraders.io/users/${input.value}/claim`,
      {
        method: 'POST',
      }
    );
    const data = await response.json();
    console.log(data);
    setToken(data.token);
    setUser(data.user);
  }
}
