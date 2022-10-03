import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";
import Threads from "./pages/Threads";
import Posts from "./pages/thread/Posts";
import Error from "./pages/Error";
import New from "./pages/New";
import { resetErrors } from "./store/errors";
import { store } from "./store/store";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        action: () => {
            store.dispatch(resetErrors())
        },
        children: [
            {
                path: "/",
                element: (<Threads />),

            },
            {
                path: "/thread/:threadId",
                element: (<Posts />),
            },
            {
                path: "/new",
                element: (<New />),
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
