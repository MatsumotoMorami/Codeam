"use client";

import Frame from "@/components/frame";

import "@styles/globals.css"
import { useState } from "react";
import Test from "./test";


export default function App() {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Frame expand={expand} setExpand={setExpand}>
                <Test expand={expand}></Test>
            </Frame>
        </>
    )
}