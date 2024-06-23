import {fetchRevenue} from "@/lib/data";
import UploadImageService from "@/components/UploadImageService";
import GalleryService from "@/components/GalleryService";

export default async function Page() {
    const revenue = await fetchRevenue();

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <h1 className="text-2xl font-bold mb-4">Imagenes de servicios</h1>
                <UploadImageService/>
                <div className="pt-20">
                    <GalleryService/>
                </div>
            </div>
        </main>
    );
}
