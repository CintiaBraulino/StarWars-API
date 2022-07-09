import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {

    const router = useRouter();

    useEffect(()=> {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Go back to the<Link href="/">HomePage</Link></h1>
        </div>
    );
}

export default NotFound;