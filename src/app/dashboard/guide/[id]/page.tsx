// src/app/dashboard/guide/[id]/page.tsx

import GuideClient from '../../../../components/GuideClient';

interface GuideIdPageProps {
    params: {
        id: string;
    };
}

const GuideIdPage: React.FC<GuideIdPageProps> = ({ params }) => {
    const { id } = params;
    console.log(id);

    return <GuideClient id={id} />;
};

export default GuideIdPage;
