import { ChangeEvent, MouseEvent, useState } from "react";
import { logInWithGoogle, signUp } from "../../utils/auth";
import { useAuthenticationStore } from "../../state/state-service";
import { Link, useRouter } from "@tanstack/react-router";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useAuthenticationStore((state) => state.setUser);
  const router = useRouter();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    if (email !== "" && password !== "") {
      signUp(e, email, password, setUser, router);
    }
  };

  const onSubmitGoogle = async () => {
    logInWithGoogle(setUser, router);
  };

  return (
    <>
      <div className="relative flex h-[calc(100%-4rem)] flex-col justify-center overflow-hidden">
        <div className="m-auto flex w-full max-w-lg flex-col rounded-lg p-6 sm:bg-zinc-900 sm:shadow-md">
          <h1 className="mb-8 text-center text-3xl font-semibold text-slate-50">
            Sign Up
          </h1>
          <button
            onClick={() => onSubmitGoogle()}
            className="btn flex h-fit items-center justify-center self-center rounded-full bg-slate-50 px-6 py-2 text-base text-black hover:bg-slate-300"
          >
            <FcGoogle className="size-10" /> Sign Up With Google
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
                Sign Up
              </button>
              <Link to={"/log-in"} className="flex justify-center gap-2">
                Already have an account?<span className="btn-link">Log In</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
