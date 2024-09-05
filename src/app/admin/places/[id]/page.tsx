import React from 'react';
import PropTypes from 'prop-types';
import PlaceClient from '../../../(client-components)/(Admin)/Places/PlaceClient';

interface GuideIdPageProps {
  params: {
    id: string;
  };
}

const PlacePage: React.FC<GuideIdPageProps> = ({ params }) => {
  const { id } = params;
  return <PlaceClient id={id} />;
};

PlacePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlacePage;
