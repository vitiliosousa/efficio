'use client'
import Image from "next/image";
import logo from "../../public/logo.svg"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const dashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div className="h-screen w-screen bg-zinc-950 p-4 md:p-10 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center md:justify-start">
        <Image alt="logo" src={logo} />
      </div>
      <div className="w-72 flex flex-col items-center justify-center h-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-xl text-white">Welcome,</h1>
          <p className="text-zinc-300 text-sm">Insert your credentials to proceed to the app</p>
        </div>
        <div className="w-full space-y-4 flex flex-col">
          <Input placeholder="E-mail" className="border-zinc-800 bg-zinc-900 text-zinc-300"/>
          <Input placeholder="Password" className="border-zinc-800 bg-zinc-900 text-zinc-300"/>
          <div className="pb-6 px-2">
            <Link href={"#"} className="text-sm text-zinc-500 hover:text-zinc-300">Forgot Password?</Link>
          </div>
          <Button className="bg-green-300 hover:bg-green-400 text-black mt-4" onClick={dashboard}>Login</Button>
        </div>
        <div className="flex justify-center w-full pt-6 px-2">
          <p className="text-sm text-zinc-300">Don't have an account? <Link href={"/register"} className="text-green-300 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}