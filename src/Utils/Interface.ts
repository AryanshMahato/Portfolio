import { IconBaseProps, IconType } from "react-icons";
import { NavItemType } from "./enums";

export interface SocialHandle {
  name: string;
  logo: IconType | IconBaseProps;
  link: string;
}

export interface NavItems {
  name: string;
  type: NavItemType;
}
