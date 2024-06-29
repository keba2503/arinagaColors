// src/app/dashboard/guide/[id]/page.tsx

import FaqClient from '../../../../components/FaqClient';

interface FaqIdPageProps {
    params: {
        id: string;
    };
}

const FaqIdPage: React.FC<FaqIdPageProps> = ({ params }) => {
    const { id } = params;

    return <FaqClient id={id} />;
};

export default FaqIdPage;
