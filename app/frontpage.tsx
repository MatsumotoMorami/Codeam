"use client";

import { Stack } from "rsuite";

export default function FrontPage() {
    return (
        <div className="fixed w-[100vw] h-[100vh] bg-[var(--bg-color)]">
            <div className="fixed top-0 w-[100vw] h-[60px] bg-[var(--black)]">
                <Stack className="h-[60px] w-[calc(100vw-2.5rem)] flex justify-end">
                    <Stack.Item className="w-[10vw] h-[80%] bg-[var(--primary-green)] mx-10">
                        <div>

                        </div>
                    </Stack.Item>
                    <Stack.Item className=" w-[10vw] h-[80%] bg-[var(--primary-green)]">
                        <div>

                        </div>
                    </Stack.Item>
                </Stack>
            </div>
            <div className="fixed left-[10vw] top-[50vh] -translate-y-[50%] w-[60vw]">
                <img src="/texture/frontpage/codeam2.png" className="w-[50vw]"></img>
                <div className="w-full h-[8vw] bg-[var(--primary-green)] relative flex flex-row">
                    <div className="w-[66%] h-full bg-black relative">
                        <div className="absolute top-[1vw] left-[1vw] bg-white h-[6vw] w-[6vw] flex">
                        </div>
                    </div>
                    <div className="absolute bg-[transparent] w-[34%] right-0 h-full flex items-center justify-center text-6xl font-bold tracking-widest">
                        Enter
                    </div>
                </div>
                <img src="/texture/frontpage/signin.png" className="h-[6vw]"></img>
            </div>
            <img src="/texture/frontpage/pattern2.png" className="fixed right-0 bottom-0 h-[80vh]"></img>
            <img src="/texture/frontpage/bottom.png" className="fixed bottom-0 w-[100vw]"></img>
        </div>
    )
}