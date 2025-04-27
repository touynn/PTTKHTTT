'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RedirectToSpecificUser } from "@/lib/redirect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Authenticate = async (username: string, password: string) => {
  try {
    const res = await fetch('/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log('Login result:', data);
    return data.result?.[0];
  } catch (error) {
    console.error('Login error:', error);
  }
}

const GetPermissionName = async (id: number) => {
  try {
    const res = await fetch('/api/permission/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    return data?.result?.[0];
  } catch (error) {
    console.error('Login error:', error);
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const BTN_Login = async () => {
    const user = await Authenticate(username, password);  
    let permission_id = user?.ma_quyen;
    let permission = undefined;

    if(user !== undefined)
    {
      localStorage.setItem('user_id', user.id);
    }

    if(permission_id !== undefined) 
    {
      permission = await GetPermissionName(permission_id);
    }

    if(permission !== undefined)
    {
      RedirectToSpecificUser(permission?.ten_quyen, router);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8f5e9]">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image src="/placeholder.svg?height=80&width=120" width={120} height={80} alt="Company Logo" priority />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input 
                  id="username" placeholder="staff" className="w-full border rounded-md px-3 py-2" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input 
                  id="password" type="password" placeholder="0a@" className="w-full border rounded-md px-3 py-2" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <Button
                type="button"
                className="w-full bg-[#212121] text-white py-2 rounded-md hover:bg-[#333333] transition-colors"
                onClick={BTN_Login}
              >
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
