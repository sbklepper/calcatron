import React, {ReactNode} from "react";
import Head from "next/head";
import Nav from "./nav/Nav";

type Props = {
    title: string;
    description: string;
    keywords: string;
    children: ReactNode;
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
    description: 'Frontend developer tool to calculate percentages and differences.',
    keywords: 'frontend, developer, tool, calculate, percentages, differences'
}