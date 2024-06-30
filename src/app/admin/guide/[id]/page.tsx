// src/app/dashboard/guide/[id]/page.tsx

import GuideClient from '../../../(client-components)/(Admin)/Guide/GuideClient';

interface GuideIdPageProps {
    params: {
        id: string;
    };
}

const GuideIdPage: React.FC<GuideIdPageProps> = ({ params }) => {
    const { id } = params;

    return <GuideClient id={id} />;
};

export default GuideIdPage;
