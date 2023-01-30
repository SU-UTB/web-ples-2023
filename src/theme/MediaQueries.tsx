import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";
import theme from "./theme";

/*
lt < (less than)
gt > (greater than)
eq == (equal to)
ne != (not equal to)
gte >= (greater than or equal to)
lte <= (less than or equal to)

without check (always has children; UC: render component just for given device)
check (conditional; UC: different parameter (of component) for each device ... width: GteDesktopCheck() ? "50px" : "30px")
*/

type Props = {
  children: ReactElement;
};

export const Mobile = ({ children }: Props) => {
  const resolution = useMediaQuery({ maxWidth: theme.breakpoints.sm - 1 });
  return resolution ? children : null;
};

export const MobileCheck = () => {
  const resolution = useMediaQuery({ maxWidth: theme.breakpoints.sm - 1 });
  return resolution;
};

export const GteMobile = ({ children }: Props) => {
  const resolution = useMediaQuery({
    minWidth: theme.breakpoints.sm,
  });
  return resolution ? children : null;
};

export const LteTablet = ({ children }: Props) => {
  const resolution = useMediaQuery({ maxWidth: theme.breakpoints.lg - 1 });
  return resolution ? children : null;
};

export const LteTabletCheck = () => {
  const resolution = useMediaQuery({ maxWidth: theme.breakpoints.lg - 1 });
  return resolution;
};

export const Tablet = ({ children }: Props) => {
  const resolution = useMediaQuery({
    minWidth: theme.breakpoints.sm,
    maxWidth: theme.breakpoints.lg - 1,
  });
  return resolution ? children : null;
};

export const TabletCheck = () => {
  const resolution = useMediaQuery({
    minWidth: theme.breakpoints.sm,
    maxWidth: theme.breakpoints.lg - 1,
  });
  return resolution;
};

export const GteTablet = ({ children }: Props) => {
  const resolution = useMediaQuery({ minWidth: theme.breakpoints.md });
  return resolution ? children : null;
};

export const LteDesktop = ({ children }: Props) => {
  const resolution = useMediaQuery({ maxWidth: theme.breakpoints.xxl - 1 });
  return resolution ? children : null;
};

export const Desktop = ({ children }: Props) => {
  const resolution = useMediaQuery({
    minWidth: theme.breakpoints.lg,
    maxWidth: theme.breakpoints.xxl - 1,
  });
  return resolution ? children : null;
};

export const GteDesktop = ({ children }: Props) => {
  const resolution = useMediaQuery({ minWidth: theme.breakpoints.lg });
  return resolution ? children : null;
};

export const GteDesktopCheck = () => {
  const resolution = useMediaQuery({ minWidth: theme.breakpoints.lg });
  return resolution;
};

export const GteHugeDesktopCheck = () => {
  const resolution = useMediaQuery({ minWidth: theme.breakpoints.huge });
  return resolution;
};
