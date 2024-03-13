import { Dashboards } from './Dashboards';

export interface Dashboard {
  id: string;
  faIcon: string;
  color: string;
  bgColor: string;
  name?: string;
  displayName: string;
  description: string;
  children: Dashboards[];
}
