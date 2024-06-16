import {fetchRevenue} from "@/lib/data";
import UploadImage from '@/components/UploadImage';
import GalleryAdmin from '@/components/GalleryAdmin';

export default async function Page() {
    const revenue = await fetchRevenue();

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <h1 className="text-2xl font-bold mb-4">Galeria de imagenes</h1>
                <UploadImage/>
                <div className="pt-20">
                    <GalleryAdmin/>
                </div>
            </div>
        </main>
    );
}
