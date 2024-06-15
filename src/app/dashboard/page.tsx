import {fetchRevenue} from "@/lib/data";
import {lusitana} from '@/components/ui/fonts';

export default async function Page() {
    const revenue = await fetchRevenue();

    return <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
    </main>
}