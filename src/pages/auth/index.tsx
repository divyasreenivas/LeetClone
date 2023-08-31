import React from 'react';
import Navbar from "@/components/Navbar/Navbar"
import Image from "next/image"
import AuthModel from "@/components/Modals/AuthModel"
import { authModelState } from '@/atoms/authModelAtom';
import {useRecoilValue} from "recoil";
import { auth, firestore } from "@/firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import  { useEffect, useState } from "react";
import { useRouter } from "next/router";
type AuthpageProps = {
    
};

const Authpage:React.FC<AuthpageProps> = () => {
    const authModel =useRecoilValue(authModelState);
    const[user,loading,error]=useAuthState(auth)
    const [pageLoading,setPageLoading] =useState(true);
    const router =useRouter();
    useEffect(()=>{
        if(user) router.push('/');
        if(!loading && !user) setPageLoading(false);
    },[user,router,loading]);
    if(pageLoading) return null;
     
    return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative ">
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                <Image src ="/hero.png" alt="Hero img" width={700} height={700}/>
                
            </div>           
             {authModel.isOpen && <AuthModel/>}
        </div>        
    </div>
} 
export default Authpage;