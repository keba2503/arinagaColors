import {lusitana} from '@/components/ui/fonts';
import FaqForm from "@/components/FaqForm";
import FaqTable from "@/components/FaqTable";

export default async function Page() {

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <h1 className={`${lusitana.className} mb-4 text-2xl md:text-3xl text-center`}>
                    Preguntas frecuentes </h1>
                <FaqForm/>
                <div className="mt-4">
                    <FaqTable/>
                </div>
            </div>
        </main>
    );
}
