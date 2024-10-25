"use client";

import { Input, Stack } from "rsuite";
import EmailIcon from '@rsuite/icons/Email';

export default function FrontPage() {
    return (
        <div className="fixed w-[100vw] h-[100vh] bg-[var(--bg-color)]">
            <img src="/texture/frontpage/pattern2.png" className="fixed right-0 bottom-0 h-[80vh]"></img>
            <img src="/texture/frontpage/bottom.png" className="fixed bottom-0 w-[100vw]"></img>
            <div className="fixed top-0 w-[100vw] h-[60px] bg-[var(--black)]">
                <Stack className="h-[60px] w-[calc(100vw-2.5rem)] flex justify-end">
                    <Stack.Item className="w-[10vw] h-[80%] bg-[var(--primary-green)] mx-10 grid items-center">
                        <div className="font-bold text-center">
                            About
                        </div>
                    </Stack.Item>
                    <Stack.Item className=" w-[10vw] h-[80%] bg-[var(--primary-green)] grid items-center">
                        <div className="font-bold text-center ">
                            Sign in
                        </div>
                    </Stack.Item>
                </Stack>
            </div>
            <div className="fixed left-[10vw] top-[50vh] -translate-y-[50%] w-[50vw]">
                <img src="/texture/frontpage/codeam2.png" className="w-5/6"></img>
                <div className="w-full h-[5vw] bg-[var(--primary-green)] relative flex flex-row">
                    <div className="w-[66%] h-full bg-black relative flex flex-row items-center">
                        <EmailIcon className="w-[3vw] h-[3vw] mx-[2vw]" color="white"></EmailIcon>
                        <Input className="bg-transparent placeholder:text-xl placeholder:tracking-wider" id="frontpageinput" placeholder="Enter Your Email Here" style={{
                            height: "70%", width: "70%", background: "transparent", border: "none"
                        }}></Input>
                    </div>
                    <div className="absolute bg-[transparent] w-[34%] right-0 h-full flex items-center justify-center text-3xl font-bold tracking-widest">
                        Enter
                    </div>
                </div>
                <img src="/texture/frontpage/signin.png" className="h-[5vw] mt-2"></img>
            </div>
        </div>
    )
}