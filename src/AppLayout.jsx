import{Outlet} from "react-router-dom"
import React from 'react'
import {Header} from "./UI/Header"
import {Footer} from "./UI/Footer"
import HeaderFirst from "./UI/HeaderFirst"
import { HeaderSecond } from "./UI/HeaderSecond"
import { HeaderThird } from "./UI/HeaderThird"
import FrontEnqr from "./component/FrontEnqr"
import './App.css'
export const AppLayout = () => {
    return <>
            <HeaderFirst></HeaderFirst>
            <HeaderSecond></HeaderSecond>
            <Header></Header>
            <HeaderThird />
            <Outlet ></Outlet>
            <Footer></Footer>
            <FrontEnqr></FrontEnqr>
    </>
}