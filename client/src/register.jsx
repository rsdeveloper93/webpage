import React, { useState } from "react";

export default function Register({ onClose }) {
  const [mode, setMode] = useState("register");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const isRegister = mode === "register";

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (isRegister) {
      if (!form.name.trim() || !form.confirmPassword) {
        setError("Please fill in all fields.");
        return;
      }

      if (form.password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/${isRegister ? "register" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(
            isRegister
              ? {
                  name: form.name.trim(),
                  email: form.email.trim(),
                  password: form.password,
                }
              : {
                  email: form.email.trim(),
                  password: form.password,
                }
          ),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
      }

      setSuccess(data.message || (isRegister
        ? "Account created successfully!"
        : "Login successful!"));

      if (onClose) {
        setTimeout(() => onClose(), 1200);
      }
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Backend is not reachable. Please start your server."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#151515] outline-none transition placeholder:text-gray-400 focus:border-[#FF5A0A] focus:ring-2 focus:ring-orange-100";

  return (
    <div
      className="relative w-full overflow-y-auto rounded-2xl bg-white shadow-2xl"
      style={{ maxHeight: "90vh" }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close registration popup"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-gray-600 shadow hover:bg-gray-100"
      >
        ×
      </button>

      <div className="grid w-full md:grid-cols-2">
        <section className="flex flex-col justify-between bg-[#FF5A0A] p-6 text-white sm:p-9">
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              IT Soft<span className="text-orange-200">.</span>
            </div>

            <div className="mt-6">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Welcome aboard
              </span>

              <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                Your ideas deserve better technology.
              </h1>

              <p className="mt-3 max-w-sm text-sm leading-6 text-orange-50">
                Let's make something great together. Join IT Soft and discover
                smarter digital solutions.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {[
              "Easy account access",
              "Secure authentication",
              "Expert IT solutions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 font-bold">
                  ✓
                </span>
                {item}
              </div>
            ))}

            <p className="pt-2 text-xs text-orange-100">
              © {new Date().getFullYear()} IT Soft. All rights reserved.
            </p>
          </div>
        </section>

        <section className="p-6 sm:p-9">
          <div className="mb-5">
            <p className="text-sm font-semibold text-[#FF5A0A]">
              {isRegister ? "GET STARTED" : "WELCOME BACK"}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#151515]">
              {isRegister ? "Create account" : "Login to your account"}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {isRegister
                ? "Create your account in a few simple steps."
                : "Enter your details to access your account."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  id="register-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={updateField}
                  className={inputClass}
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={updateField}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="register-password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="register-password"
                name="password"
                type="password"
                autoComplete={isRegister ? "new-password" : "current-password"}
                placeholder={isRegister ? "Minimum 8 characters" : "Enter password"}
                value={form.password}
                onChange={updateField}
                className={inputClass}
                required
              />
            </div>

            {isRegister && (
              <div>
                <label htmlFor="register-confirm-password" className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm password
                </label>
                <input
                  id="register-confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={updateField}
                  className={inputClass}
                  required
                />
              </div>
            )}

            {!isRegister && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setError("Password reset needs backend setup.")}
                  className="text-sm font-medium text-[#FF5A0A] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            {success && (
              <p role="status" className="text-sm text-green-700">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#FF5A0A] px-5 py-3.5 font-semibold text-white transition hover:bg-[#E94B00] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              {loading
                ? "Please wait..."
                : isRegister
                  ? "Create Account →"
                  : "Login →"}
            </button>
          </form>

          <div className="mt-5 text-center text-sm text-slate-600">
            {isRegister ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className="font-semibold text-[#FF5A0A] hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("register")}
                  className="font-semibold text-[#FF5A0A] hover:underline"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
