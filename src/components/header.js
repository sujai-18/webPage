import '../styles/header.scss';
import { ReactComponent as NotificationBellIcon } from '../svgs/notifiocationBellIcon.svg';
import { ReactComponent as HelpIcon } from '../svgs/helpCircleIcon.svg';
import data from '../db.json';

function header() {
  return (
    <div className="header-container">
      <div className="title">
        <div>Projects</div>
        <div>{data.projects.length}</div>
      </div>
      <div className="user-controls-container">
        <NotificationBellIcon />
        <HelpIcon />
        <img
          src={'https://www.w3schools.com/tags/img_girl.jpg'}
          alt={'profile'}
        />
      </div>
    </div>
  );
}

export default header;
