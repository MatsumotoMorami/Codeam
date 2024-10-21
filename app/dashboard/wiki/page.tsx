"use client";

import Frame from "@/components/frame";
import "@styles/globals.css"
import { useState } from "react";
import WikiComponentSet from "./wiki";


export default function App() {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Frame expand={expand} setExpand={setExpand}>
                <WikiComponentSet expand={expand}></WikiComponentSet>
            </Frame>
        </>
    )
}