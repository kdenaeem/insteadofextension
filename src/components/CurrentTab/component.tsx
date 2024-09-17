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
    const [favicon, setFavicon] = useState<string | null>(null);

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
                    const favicon = `http://www.google.com/s2/favicons?domain=${domain}.com`;
                    setFavicon(favicon);
                }

                setTabTitle(domain);
            } catch (error) {
                console.error("Error querying tabs: ", error);
                setTabTitle("Error :/");
                setFavicon(null);
            }
        }
        fetchTabTitle();
    });

    return (
        <div className="row">
            <div
                className="col-lg-12 text-center ml-7"
                style={{ display: "flex", gap: "4px" }}
            >
                <p className="browsing_text">Browsing {tabTitle}</p>
                {favicon && (
                    <img height="16" width="16" src={favicon} alt="Favicon" />
                )}
            </div>
        </div>
    );
}
