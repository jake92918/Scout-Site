import { Icon } from '@iconify/react';

const NotFound = () => {
  return (
    <>
      <div className="NotFound">
      <Icon icon="ooui:map-trail" />
        <h2>Something went wrong</h2>
        <h4>Looks like you hiked too far from the trail without a map</h4>
        <p>Error: 404 (Page not found)</p>
      </div>
    </>
  );
};

export default NotFound;
