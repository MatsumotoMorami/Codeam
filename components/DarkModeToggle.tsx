import React, { useEffect, useState } from 'react';
import { Toggle } from 'rsuite';

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(getDarkMode());

    useEffect(() => {
        setDarkMode(isDarkMode); // 使用 setDarkMode 函数
    }, [isDarkMode]); // 添加 isDarkMode 到依赖项数组

    return (
        <Toggle
            id="darkModeToggle"
            checked={isDarkMode} // 直接使用 isDarkMode 布尔值
            onChange={setIsDarkMode} // 直接使用 setIsDarkMode 函数
            checkedChildren={
                <div>
                    Dark
                </div>
            }
            unCheckedChildren={
                <div>
                    Light
                </div>
            }
        />
    );
}

// 使用布尔值存储和获取模式
function getDarkMode() {
    const mode = localStorage.getItem("darkMode");
    return mode === 'true'; // 将字符串转换为布尔值
}

function setDarkMode(enabled) {
    localStorage.setItem("darkMode", enabled); // 直接存储布尔值
}