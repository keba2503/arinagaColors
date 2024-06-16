import { lusitana } from '@/components/ui/fonts';
import GuideForm from '@/components/GuideForm';
import GuideTable from '@/components/GuideTable';

export default async function Page() {

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <h1 className={`${lusitana.className} mb-4 text-2xl md:text-3xl text-center`}>
                    Guía del huésped
                </h1>
                <GuideForm />
                <div className="mt-4">
                    <GuideTable />
                </div>
            </div>
        </main>
    );
}
