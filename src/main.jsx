import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import { HomePage } from "./components/HomePage/HomePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ViewTrip } from "./viewTrip/ViewTrip";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<LandingPage />} />
			<Route path="/create-trip" element={<HomePage />} />
			<Route path="/view-trip/:tripId" element={<ViewTrip />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GoogleOAuthProvider
			clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
		>
			<RouterProvider router={router} />
		</GoogleOAuthProvider>
	</React.StrictMode>
);