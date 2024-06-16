import {fetchRevenue} from "@/lib/data";
import UploadImage from '@/components/UploadImage';
import GalleryAdmin from '@/components/GalleryAdmin';

export default async function Page() {
    const revenue = await fetchRevenue();

    // Ejemplo de datos de imágenes, puedes reemplazarlos con datos obtenidos de una API
    const images = [
        {id: '1', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'},
        {id: '2', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
        {id: '3', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
        {id: '4', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
        {id: '5', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'},
        {id: '6', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'},
        {id: '7', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'},
        {id: '8', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'},
        {id: '9', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'},
        {id: '10', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'},
        {id: '11', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'},
        {id: '12', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'},
    ];

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <h1 className="text-2xl font-bold mb-4">Galeria de imagenes</h1>
                <UploadImage/>
                <div className="pt-20">
                    <GalleryAdmin images={images}/>
                </div>
            </div>
        </main>
    );
}
