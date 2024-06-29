"use client";

import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {ReactNode} from "react";
import MobileFooterSticky from "./(components)/MobileFooterSticky";
import {imageGallery as listingStayImageGallery} from "./listing-stay-detail/constant";
import {imageGallery as listingYellowImageGallery} from "./yellow/constant";
import {imageGallery as listingBlueImageGallery} from "./blue/constant";
import {imageGallery as listingWhiteImageGallery} from "./white/constant";
import {Route} from "next";

const DetailtLayout = ({children}: { children: ReactNode }) => {
    const router = useRouter();
    const thisPathname = usePathname();
    const searchParams = useSearchParams();
    const modal = searchParams?.get("modal");

    const handleCloseModalImageGallery = () => {
        let params = new URLSearchParams(document.location.search);
        params.delete("modal");
        router.push(`${thisPathname}/?${params.toString()}` as Route);
    };

    const getImageGalleryListing = () => {
        if (thisPathname?.includes("/listing-stay-detail")) {
            return listingStayImageGallery;
        }
        if (thisPathname?.includes("/yellow")) {
            return listingYellowImageGallery;
        }
        if (thisPathname?.includes("/blue")) {
            return listingBlueImageGallery;
        }
        if (thisPathname?.includes("/white")) {
            return listingWhiteImageGallery;
        }

        return [];
    };

    return (
        <div className="ListingDetailPage">
            <ListingImageGallery
                isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
                onClose={handleCloseModalImageGallery}
                images={getImageGalleryListing()}
            />

            <div className="container ListingDetailPage__content">{children}</div>

            {/* OTHER SECTION */}
            <div className="container py-24 lg:py-32">
                {/*<div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>*/}
            </div>
            {/* STICKY FOOTER MOBILE */}
            <MobileFooterSticky/>
        </div>
    );
};

export default DetailtLayout;
