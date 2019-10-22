import { BoxProps } from "../Box";
import * as React from "react";
import { Icons } from "../theme/icons";

interface IIcon {
  /**
   * The size of the icon.
   */
  size?: string;
  /**
   * The name of the icon.
   */
  name?: Icons;
  /**
   * The color of the icon.
   */
  color?: string;
  /**
   * The role of the icon. `presentation` or `img`
   */
  role?: "presentation" | "img";
}

export type IconProps = IIcon & BoxProps;

declare const Icon: React.FC<IconProps>;

export default Icon;
