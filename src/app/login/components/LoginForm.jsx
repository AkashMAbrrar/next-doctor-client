"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  //   const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn("credentials", { email, password, callbackUrl: "/" });
      //   router.push("/");
      //   console.log({ email, password });
    } catch (error) {
      console.log(error.message);
      alert("Login error for credentials");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
        <label className="form-control w-full">
          <div className="label w-full">
            <span className="label-text  font-bold">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label w-full">
            <span className="label-text font-bold">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <button className="w-full h-12 bg-orange-500 text-white font-bold">
          Sign Up
        </button>
        <p className="text-center">Or Sign In with</p>
        {/* <SocialLogin /> */}
        <p className="text-center">
          Don't Have an account?{" "}
          <Link href="/login" className="text-orange-500 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
