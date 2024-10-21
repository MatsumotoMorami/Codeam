"use client";

import Frame from "@/components/frame";
import "@styles/globals.css"
import { useState } from "react";
import VisualizationComponentSet from "./visualization";


export default function App() {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Frame expand={expand} setExpand={setExpand}>
                <VisualizationComponentSet expand={expand}></VisualizationComponentSet>
            </Frame>
        </>
    )
}