export type IconName =
  | "shield"
  | "calendar"
  | "chevron"
  | "cookie"
  | "provider"
  | "purpose"
  | "category"
  | "duration"
  | "pagesViewed"
  | "projectsViewed"
  | "portfolioLinks"
  | "deviceBrowser"
  | "referringSources"
  | "keyActions"
  | "info";

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};
