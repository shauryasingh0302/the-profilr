import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export default function Login() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setError("");
    } catch (err: any) {
      console.error(err);
      setError("Google login failed");
    }
  };

  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      setError("");
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      setError("");
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-10">
        {!user ? (
          <div className="flex flex-col gap-6 items-center bg-card p-10 rounded-xl shadow-md w-full max-w-md dark:bg-slate-900 dark:shadow-black/20">
            <h1 className="text-3xl font-bold text-center">Login / Signup</h1>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex gap-4 w-full">
              <Button className="w-1/2" onClick={handleEmailLogin}>
                Login
              </Button>
              <Button className="w-1/2" variant="outline" onClick={handleSignup}>
                Signup
              </Button>
            </div>

            <div className="flex items-center gap-3 w-full text-muted-foreground dark:text-slate-400">
              <hr className="flex-1 border-gray-300 dark:border-slate-700" />
              <span>OR</span>
              <hr className="flex-1 border-gray-300 dark:border-slate-700" />
            </div>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome, {user.displayName || user.email}</h2>
            <p>Email: {user.email}</p>
            <img src={user.photoURL || ""} alt="User Avatar" className="rounded-full mt-4 mx-auto" />
          </div>
        )}
      </div>
      <Footer />
      
    </>
  );
}
