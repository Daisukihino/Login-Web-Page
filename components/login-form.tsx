"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Alert } from "@/components/alert";
import { LoadingSpinner } from "@/components/loading-spinner";

const MAX_FAILED_ATTEMPTS = 3;

type AlertState = {
  message: string;
  variant: "success" | "error";
} | null;

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>(null);

  const isLocked = failedAttempts >= MAX_FAILED_ATTEMPTS;
  const attemptsLeft = Math.max(MAX_FAILED_ATTEMPTS - failedAttempts, 0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLocked) {
      setAlert({
        message: "Too many attempts, try again later.",
        variant: "error",
      });
      return;
    }

    setIsLoading(true);
    setAlert(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = (await response.json()) as {
        success: boolean;
        message: string;
      };

      // Failed attempts are tracked on the client to satisfy the exam requirement.
      if (!response.ok || !result.success) {
        const nextFailedAttempts = failedAttempts + 1;
        setFailedAttempts(nextFailedAttempts);
        setAlert({
          message:
            nextFailedAttempts >= MAX_FAILED_ATTEMPTS
              ? "Too many attempts, try again later."
              : result.message || "Invalid username or password.",
          variant: "error",
        });
        return;
      }

      setFailedAttempts(0);
      setAlert({
        message: "Login successful. Redirecting to dashboard...",
        variant: "success",
      });
      setUsername("");
      setPassword("");

      // Give the user a moment to see the success message before redirecting.
      setTimeout(() => {
        router.push("/dashboard");
      }, 900);
    } catch (error) {
      console.error("Login request failed:", error);
      setAlert({
        message: "Unable to connect to the server.",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
          Student Login
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">Sign in</h2>
        <p className="text-sm leading-6 text-slate-500">
          Enter your registered username and password to access the dashboard.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8"
      >
        {alert ? <Alert message={alert.message} variant={alert.variant} /> : null}

        <div className="space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-slate-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="daca"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            disabled={isLoading || isLocked}
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            disabled={isLoading || isLocked}
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            {isLocked
              ? "Account temporarily locked"
              : `${attemptsLeft} attempt${attemptsLeft === 1 ? "" : "s"} remaining`}
          </span>
          <span className="text-slate-400">Secure login</span>
        </div>

        <button
          type="submit"
          disabled={isLoading || isLocked}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLoading ? <LoadingSpinner /> : null}
          {isLoading ? "Signing in..." : isLocked ? "Login Disabled" : "Login"}
        </button>
      </form>
    </div>
  );
}
