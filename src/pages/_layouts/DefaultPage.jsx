import React from "react";
import DefaultFooter from "../../components/DefaultFooter";
import DefaultHeader from "../../components/DefaultHeader";

const { REACT_APP_NAME: name } = process.env

export const DefaultPage = ({ children }) => {

    return (
        <>
            <DefaultHeader name={name} />
            {children}
            <DefaultFooter name={name} />
        </>
    )
}
