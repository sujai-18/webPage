import { ReactComponent as ProjectIcon } from '../svgs/projectIcon.svg';
import { ReactComponent as FilesIcon } from '../svgs/filesIcon.svg';
import { ReactComponent as SettingsIcon } from '../svgs/settingsWhiteIcon.svg';

export const sidebarIcons = [
  { icon: <ProjectIcon /> },
  { icon: <FilesIcon />, className: 'folder' },
  { icon: <SettingsIcon /> },
];

export const projectsPerPage = 12;
