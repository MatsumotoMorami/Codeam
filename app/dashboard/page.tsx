"use client";

import Frame from "@/components/frame";
import DashboardComponentSet from "./dashboard";
import "@styles/globals.css"
import { useState } from "react";


export default function App() {
    const [expand, setExpand] = useState(true);
    return (
        <>
            <Frame expand={expand} setExpand={setExpand}>
                <DashboardComponentSet expand={expand}></DashboardComponentSet>
            </Frame>
        </>
    )
}