"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./NavBar";

const Authorization = async (permission_id: string, permission: string) => {
    try {
        const res = await fetch('/api/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ permission_id, permission }),
        });
        const data = await res.json();
        console.log('Auth result:', data);
        return data.result?.[0];
    } catch (error) {
        console.error('Auth error:', error);
    }
}

const RetriveUser = async (userID: string) => {
    try {
        const res = await fetch('/api/retrieve_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userID }),
        });
        const data = await res.json();
        console.log('Retrieve result:', data);
        return data.result?.[0];
    } catch (error) {
        console.error('Retrive error:', error);
    }
}

export default function ClientLayout({
    children,
    permission
}: {
    children: React.ReactNode,
    permission: string
}) {
    const router = useRouter();
    const [auth_fail, setAuth_fail] = useState(true);
    useEffect(() => {
        const Auth = async () => {
            // Check localStorage when component mounts
            const user_id = localStorage.getItem("user_id");
            if (user_id === null) {
                return false;
            }
            //Get user
            const retrieve_user = await RetriveUser(user_id);

            if (retrieve_user === undefined) {
                return false;
            }
            //Auth
            const auth = await Authorization(retrieve_user.ma_quyen, permission);

            return auth ? true : false;
        };
        const Redirect = async () => {
            const auth_success = await Auth();
            console.log(auth_success);
            if (auth_success === false) {
                router.push("/error403");
                return;
            }
            setAuth_fail(false);
        }
        Redirect();
    }, [setAuth_fail])


    return (
        <div>
            {
                !auth_fail &&
                <div>
                    <Navbar></Navbar>
                    <main className="container mx-auto p-4">
                        {children}
                    </main>
                </div>
            }
        </div>
    )
}
