"use client";

import Frame from "@/components/frame";
import "@styles/globals.css"
import { useState } from "react";
import DiscussionComponentSet from "./discussion";


export default function App() {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Frame expand={expand} setExpand={setExpand}>
                <DiscussionComponentSet expand={expand} />
            </Frame>
        </>
    )
}