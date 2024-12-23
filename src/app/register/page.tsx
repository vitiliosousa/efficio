'use client'
import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/logo.svg"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter()
    const dashboard = () => {
        router.push('/dashboard')
    }
    return (
        <>
            <Head>
                <title>Register - Efficio</title>
                <meta name="description" content="Gerencie suas tarefas de forma eficiente." />
            </Head>
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
                        <Input placeholder="First Name" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Input placeholder="Last Name" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Input placeholder="E-mail" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Input placeholder="Company" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Input placeholder="Username" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Input placeholder="Role" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                    </div>
                    <div className="w-72 flex flex-col space-y-4">
                        <Input placeholder="Password" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Input placeholder="Confirm Password" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <div className="w-full pt-4">
                            <Button className="bg-green-300 hover:bg-green-400 text-black w-full" onClick={dashboard}>Sign Up</Button>
                        </div>
                    </div>
                    <div className="flex justify-center w-full pt-6 px-2">
                        <p className="text-sm text-zinc-300">Already have an account? <Link href={"/"} className="text-green-300 hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </>

    );
}
