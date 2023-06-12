'use client'
import React, {useEffect, useState} from 'react';
import {ConfigProvider} from "antd";
import locale from "antd/locale/ru_RU";
import {darkTheme, lightTheme} from "@/src/helpers/theme";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {useTheme} from "next-themes";


dayjs.locale('ru');

function AntdThemeProvider({children}: { children: React.ReactNode }) {
    const {theme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <ConfigProvider locale={locale} theme={theme == 'dark' ? darkTheme : lightTheme}>
            {children}
        </ConfigProvider>
    )
}

export default AntdThemeProvider;
