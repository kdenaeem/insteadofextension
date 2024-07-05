import React, { useEffect, useState } from "react";
import browser, { Tabs } from "webextension-polyfill";

// // // //

function extractDomainName(urlString: string): string | null {
    try {
        const url = new URL(urlString);
        const hostnameParts = url.hostname.split(".");
        return hostnameParts.length > 2 && hostnameParts[0] === "www"
            ? hostnameParts[1]
            : hostnameParts[0];
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}

export function CurrentTab() {
    const [tabTitle, setTabTitle] = useState<any>("loading..");

    useEffect(() => {
        async function fetchTabTitle() {
            try {
                const tabs = await browser.tabs.query({
                    active: true,
                    currentWindow: true,
                });
                const currentTab = tabs[0];
                let domain = "Idle :/";

                if (currentTab && currentTab.url) {
                    const extractedDomainName = extractDomainName(
                        currentTab.url,
                    );
                    domain = extractedDomainName
                        ? extractedDomainName
                        : "Idling :/";
                }
                setTabTitle(domain);
            } catch (error) {
                console.error("Error querying tabs: ", error);
                setTabTitle("Error :/");
            }
        }

        fetchTabTitle();
    });

    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <p className="title">Browsing {tabTitle}</p>
            </div>
        </div>
    );
}
