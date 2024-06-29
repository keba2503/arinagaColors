import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import {TaxonomyType} from "@/data/types";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";


const DEMO_CATS: TaxonomyType[] = [
    {
        id: "1",
        href: "/",
        name: "New Yourk",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/",
        name: "Singapore",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "3",
        href: "/",
        name: "Paris",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "4",
        href: "/",
        name: "London",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "5",
        href: "/",
        name: "Tokyo",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "6",
        href: "/",
        name: "Maldives",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "7",
        href: "/",
        name: "Italy",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

const DEMO_CATS_2: TaxonomyType[] = [
    {
        id: "1",
        href: "/",
        name: "Enjoy the great cold",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/",
        name: "Sleep in a floating way",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "3",
        href: "/",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "4",
        href: "/",
        name: "Cool in the deep forest",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "5",
        href: "/",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "6",
        href: "/",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: "7",
        href: "/",
        name: "Cool in the deep forest",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

function PageHome() {
    return (
        <main className="nc-PageHome relative overflow-hidden">
            <BgGlassmorphism />
            <div className="relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <SectionHero/>

                {/* Other sections */}
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    {/* SECTION 1 */}
                    <SectionOurFeatures/>
                    <SectionGridFeaturePlaces cardType="card2"/>
                    <SectionHowItWork/>
                </div>
            </div>
        </main>
    );
}

export default PageHome;