import * as React from "react";
import clsx from "clsx";

const FancyDiv: React.FC<React.PropsWithChildren> = ({children}) =>
    <div className={clsx("fancy", "div")}>{children}</div>;

export default FancyDiv;
