import { useEffect, useState } from "react"
import CardList from "../../Widgets/CardList/CardList"
import React from "react";
import IntApp from "../../Widgets/IntApp/IntApp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const HomePage = () => {

    const pageState = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return <>
        {(pageState === 'first_page') && <CardList />}
        {(pageState === 'int_page') && <IntApp />}
    </>
}

export default HomePage
