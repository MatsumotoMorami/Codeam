import { ReactNode } from "react";
import "@styles/custom-theme.less"

export function Background() {
    return (
        <div className="fixed w-[100vw] h-[100vh] white"></div>
    )
}

export default function Page({ children }: { children: ReactNode }) {
    return (
        <div>
            <Background></Background>
            {children}
        </div>
    )
}