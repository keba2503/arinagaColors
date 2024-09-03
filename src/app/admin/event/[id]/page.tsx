import React from 'react';
import PropTypes from 'prop-types';
import GuideClient from '../../../(client-components)/(Admin)/Event/EventClient';

interface GuideIdPageProps {
  params: {
    id: string;
  };
}

const GuideIdPage: React.FC<GuideIdPageProps> = ({ params }) => {
  const { id } = params;

  return <GuideClient id={id} />;
};

GuideIdPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default GuideIdPage;
