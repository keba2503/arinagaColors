'use client'

import React from "react";
import Promotions from "@/app/offer/Promotion";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

const Page = ({params, searchParams,}:
                  {
                      params: { stepIndex: string };
                      searchParams?: { [key: string]: string | string[] | undefined };
                  }) => {
    const renderHeader = () => {
        return (
            <header className="container rounded-3xl px-4 lg:px-8">
                <div className="max-w-screen-lg mx-auto space-y-5">

                </div>
                <Promotions />
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 pt-20">
                    <SectionSubscribe2 />
                </div>
            </header>
        );
    };

    return (
        <div className="nc-PageSingle pt-8 lg:pt-16">
            {renderHeader()}
        </div>

    );
};

export default Page;
