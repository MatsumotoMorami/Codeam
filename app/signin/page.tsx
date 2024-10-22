"use client";

import "@styles/globals.css"
import { useState } from "react";
import { SignInComponent } from "./signin";


export default function App() {
    const [expand, setExpand] = useState(false);
    return (
        <SignInComponent></SignInComponent>
    )
}