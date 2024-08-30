import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import {Login} from "../pages/Login";
import {SignIn} from "../pages/SignIn";
import {LocationLogged} from "../pages/LocationLogged";
import {CreateLogged} from "../pages/CreateLogged";
import {EditLogged} from "../pages/EditLogged";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "signin",
        element: <SignIn />
    },
    {
        path: "location/:id",
        element: (
            <PrivateRoute>
                <LocationLogged />
            </PrivateRoute>
            )
    },
    {
        path: "create",
        element: (
            <PrivateRoute>
                <CreateLogged />
            </PrivateRoute>)
    },
    {
        path: "edit/:id",
        element: (
            <PrivateRoute>
                <EditLogged />
            </PrivateRoute>)
    },
])