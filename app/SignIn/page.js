"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Header } from "../Header";
import { Footer } from '../Footer';
import Link from "next/link";

const page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Header />
            <div className="flex items-center justify-center min-h-screen bg-gray-200">
                <form className="bg-white max-w-[450px] rounded-xl p-5 shadow-md">
                    <h2 className="text-xl font-semibold text-center mb-4">SignIn</h2>
                    <hr className="mb-4" />
                    <label className="block mb-2 font-semibold ">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded mb-4 bg-gray-100"
                    />
                    <label className="block mb-2 font-semibold ">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded mb-4 bg-gray-100"
                    />
                    <div className="flex items-center mb-4">
                        <input
                            id="pass"
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="mr-2 cursor-pointer"
                        />
                        <label htmlFor="pass" className="cursor-pointer">Show Password</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                        Sign In
                    </button>
                    <div className="flex flex-row justify-center">
                        <p className="text-black font-normal mt-2 " >Dont have an account? <Link href="/SignUp" className="text-black font-semibold " >Signup</Link></p>
                    </div>
                    <div className="flex flex-row  mt-2 mb -2" >
                        -------------------------- or --------------------------
                    </div>
                    <button
                        type="button"
                        className="w-full bg-white text-black p-2 rounded-lg shadow-md mt-2 hover:bg-gray-100 border border-gray-300 flex items-center justify-center gap-2 transition duration-300 ease-in-out"
                    >
                        <FaGoogle className="text-blue-500 text-lg" />
                        <span className="font-semibold">Continue with Google</span>
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default page;
