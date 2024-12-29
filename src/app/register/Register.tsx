'use client'
import Image from "next/image";
import logo from "../../../public/logo.svg"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios"
import { useState } from "react";

export default function Register() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        username: "",
        role: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        setError(null);
        setSuccess(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("/api/v1/auth/register", formData);

            const {token} = response.data

            localStorage.setItem("token", token);

            setSuccess("Account created successfully!");
            setTimeout(() => router.push("/dashboard"), 1500);
        } catch (err: any) {
            setError(err.response?.data?.message || "An error occurred during registration.");
        }
    };

    return (
        <div className="h-full md:h-screen w-screen bg-zinc-950 p-4 md:p-10 flex items-center justify-center flex-col">
            <div className="w-full flex justify-center md:justify-start pb-4">
                <Image alt="logo" src={logo} />
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center h-full space-y-4">
                <div className="space-y-4 flex flex-col items-center">
                    <h1 className="text-xl text-white">Create your account</h1>
                    <p className="text-zinc-300 text-sm">Insert your credentials to proceed to creation</p>
                </div>
                <div className="flex flex-col w-72 md:grid md:grid-cols-2 md:w-full gap-4">
                    <Input
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <Input
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <Input
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <Input
                        placeholder="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <Input
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <Input
                        placeholder="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                </div>
                <div className="w-72 flex flex-col space-y-4">
                    <Input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <Input
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="border-zinc-800 bg-zinc-900 text-zinc-300"
                    />
                    <div className="w-full pt-4">
                        <Button className="bg-green-300 hover:bg-green-400 text-black w-full" onClick={handleSubmit}>Sign Up</Button>
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <div className="flex justify-center w-full pt-6 px-2">
                    <p className="text-sm text-zinc-300">Already have an account? <Link href={"/"} className="text-green-300 hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
}
