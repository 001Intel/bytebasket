import { useState } from "react";

function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log("Registering manufacturer:", formData);
      // call Django register endpoint here
    } else {
      console.log("Logging in:", formData);
      // call Django login endpoint here
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Register as Manufacturer" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <p>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
}

export default AuthPage;
