'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <div  className="flex gap-2 items-center">
        <Image src='/assets/logo.png' style={{ height: '40px', width: '50px' }} className="cursor-pointer" height={100} width={100} alt="6valley-logo" onClick={() => router.push('/')} />
        <h4 className="font-bold text-3xl cursor-pointer" onClick={() => router.push('/')}>6valley</h4>
      </div>
    </div>
  )
}

export default Logo;
