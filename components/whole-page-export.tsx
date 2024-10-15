import { ReactNode } from "react";
import Header from "./header";

export function Background() {
    return (
        <div className="fixed w-[100vw] h-[100vh] bg"></div>
    )
}

export default function Page({ children }: { children: ReactNode }) {
    return (
        <div>
            <Background></Background>
            {children}
            <Header></Header>
        </div>
    )
}