import { useState } from "react";

const RegistrationForm = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0) return;

    console.log("Submitted data:", { username, email, password });

    // Simulate API call
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Register</h2>

      {/* Display error messages */}
      {Object.values(errors).map((error, index) => (
        <p key={index} className="text-red-500">
          {error}
        </p>
      ))}

      {/* Controlled input for username */}
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2"
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

      {/* Controlled input for email */}
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Controlled input for password */}
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
