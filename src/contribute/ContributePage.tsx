import React from "react";
import { Footer, Header, ContributeHero, Solutions, WaysToHelp, GetStarted } from "./components"

export const ContributePage = () => {
    return (
        <>
            <Header />
            <ContributeHero />
            <Solutions />
            <WaysToHelp />
            <GetStarted />
            <Footer />
        </>
    );
}
