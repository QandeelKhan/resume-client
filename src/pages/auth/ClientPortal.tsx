import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import { RootState } from "../../redux/store";

const ClientsPortal = () => {
    const { firstName, lastName, email, id, loggedIn } = useSelector(
        (state: RootState) => state.auth
    );
    return (
        <>
            <Helmet>
                <title>My Blog | Programming, Qandeel Khan, and More</title>
                <meta
                    name="description"
                    content="Stay updated with the latest programming knowledge, learn about the life of Qandeel Khan, and more with my blog."
                />
                <meta
                    name="keywords"
                    content="programming, react, django, qandeel khan, devops, redux, typescript, history, blog"
                />
            </Helmet>

            <PageTemplate
                iconComponent={<AboutUserIcon />}
                pageName="Blog."
            ></PageTemplate>
            <h1 style={{ textAlign: "center" }}>
                Welcome to Client Portal {firstName} {lastName}!
            </h1>
        </>
    );
};

export default ClientsPortal;
