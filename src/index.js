import React from "react";
import ReactDOM from "react-dom/client";
import { Main, MoreDetails } from "./components";

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Main />}></Route>
            <Route path = "player/:id" element={<MoreDetails />} />
		</>
	)
);

root.render(<RouterProvider router={router} />);

