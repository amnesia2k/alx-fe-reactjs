import { useState } from "react";

const RegistrationForm = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Submitted data:", { username, email, password });

    // Simulate API call
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Register</h2>

      {error && <p className="text-red-500">{error}</p>}

      {/* Controlled input for username */}
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2"
      />

      {/* Controlled input for email */}
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2"
      />

      {/* Controlled input for password */}
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
