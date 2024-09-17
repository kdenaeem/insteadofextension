import React from "react";
import { Title } from "@src/components/title";
import browser, { Tabs } from "webextension-polyfill";
import { Scroller } from "@src/components/scroller";
import css from "./styles.module.css";
import { CurrentTab } from "@src/components/CurrentTab";
import {
    BrowserRouter,
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <div className={css.popupContainer}>
//                 <div className="mx-4 my-4">
//                     <Title />
//                     <CurrentTab />
//                 </div>
//             </div>
//         ),
//     },
// ]);

function HomePage() {
    return (
        <div className={css.popupContainer}>
            <div className="mx-4 my-4">
                <Title />
                <CurrentTab />
            </div>
        </div>
    );
}

function TodoPage() {
    return (
        <div>
            <div className="mx-4 my-4">
                <div>hello there you are now on the second page</div>
            </div>
        </div>
    );
}

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/todo" element={<TodoPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}
