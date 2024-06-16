import React, {FC, useEffect} from "react";

const StaySearchForm: FC = () => {
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
        <form className="w-full relative mt-8 flex rounded-full dark:bg-neutral-800">
            <div className="px-4 py-4 mx-auto max-w-screen-xl">
                <h2 className="block sm:hidden text-center text-lg font-semibold p-4 bg-gray-200 rounded-lg mx-4">
                    Planifica tu Estancia
                </h2>
                <div
                    data-show-accommodation-units="none"
                    className="avaibook-search-widget"
                    data-target="_self"
                    data-widget-id="92477"
                    data-widget-token="h5SwvFQFMU/hiog6gT4HMw=="
                    data-background-color="F0F0F0"
                    data-main-color="#F0F0F0"
                    data-border-radius="30px"
                    data-shadow="0 2px 20px rgb(0 0 0 / 16%)"
                    data-padding="1rem"
                    data-language="es"
                ></div>
            </div>
        </form>
    );
};

export default StaySearchForm;
