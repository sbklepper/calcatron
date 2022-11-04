import Head from "next/head";
import React from "react";
import Nav from "./nav/Nav";

type Props = {
    title: string;
    description: string;
    keywords: string;
    children: React.ReactNode;
}

export default function Layout({title, description, keywords, children}: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav />
            <main>
                {children}
            </main>

        </>
    )
}

Layout.defaultProps = {
    title: 'Calcatron',
    description: 'Calcatron is a calculator app',
    keywords: 'calculator, math, app'
}