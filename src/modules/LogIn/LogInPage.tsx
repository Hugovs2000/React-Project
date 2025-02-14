import { ChangeEvent, MouseEvent, useState } from "react";
import { logIn, logInWithGoogle } from "../../utils/auth";
import { Link, useRouter } from "@tanstack/react-router";
import { FcGoogle } from "react-icons/fc";

export default function LogInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    if (email === "" || password === "") return;
    logIn(event, email, password, router);
  };

  const onSubmitGoogle = () => {
    logInWithGoogle(router);
  };

  return (
    <>
      <div className="relative flex h-[calc(100%-4rem)] flex-col justify-center overflow-hidden">
        <div className="m-auto flex w-full max-w-lg flex-col rounded-lg p-6 sm:bg-zinc-900 sm:shadow-md">
          <h1 className="mb-8 text-center text-3xl font-semibold text-slate-50">
            Log In
          </h1>
          <button
            onClick={() => onSubmitGoogle()}
            className="btn flex h-fit items-center justify-center self-center rounded-full bg-slate-50 px-6 py-2 text-base text-black hover:bg-slate-300"
          >
            <FcGoogle className="size-10" /> Log In With Google
          </button>
          <div className="divider mb-8 mt-10">or</div>
          <form className="flex flex-col gap-4">
            <div>
              <label className="label pt-0">
                <span className="label-text text-base text-slate-50">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="sm:bg-base input input-bordered w-full bg-zinc-900"
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base text-slate-50 sm:text-base">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered mb-4 w-full bg-zinc-900"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <button
                className="btn btn-neutral btn-block mb-4"
                onClick={(event) => onSubmit(event)}
                disabled={email === "" || password === ""}
              >
                Login
              </button>
              <Link to={"/sign-up"} className="flex justify-center gap-2">
                Don't have an account? <span className="btn-link">Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
