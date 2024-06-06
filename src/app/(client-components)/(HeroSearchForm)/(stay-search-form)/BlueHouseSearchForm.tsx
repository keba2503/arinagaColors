import React, { FC, useEffect } from "react";

const BlueHouseSearchForm: FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://bookonline.pro/widgets/search/dist/index.js";
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <form className="w-full relative mt-8 flex rounded-full bg-white dark:bg-neutral-800">
            <div className="px-4 py-4 mx-auto max-w-screen-xl">
                <div
                    data-accommodation-id="357500"
                    data-target="_blank"
                    className="avaibook-search-widget"
                    data-widget-id="92477"
                    data-widget-token="h5SwvFQFMU/hiog6gT4HMw=="
                    data-background-color="#FFFFFF"
                    data-main-color="#428CB4"
                    data-border-radius="30px"
                    data-shadow="none"
                    data-padding="1rem"
                    data-language="es"
                ></div>
            </div>
        </form>
    );
};

export default BlueHouseSearchForm;
