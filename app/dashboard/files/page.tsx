"use client";

import Frame from "@/components/frame";
import "@styles/globals.css"
import { useState } from "react";
import FilesComponentSet from "./files";


export default function App() {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Frame expand={expand} setExpand={setExpand}>
                <FilesComponentSet expand={expand} />
            </Frame>
        </>
    )
}