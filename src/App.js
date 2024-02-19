import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPasswrod] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {isSubmitted ? <p>Welcome, {username}!</p> : ""}
      {error ? error : ""}
      <form onSubmit={(e) => submit(e)}>
        <label>Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password: </label>
        <input
          type="Password"
          value={password}
          onChange={(e) => setPasswrod(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
