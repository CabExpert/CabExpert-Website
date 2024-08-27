import React from "react";
import css from "./model.module.scss";

type Props = {
  show: boolean;
  outerclass?: string;
} & React.ComponentPropsWithRef<"div">;

const Component = (
  { children, outerclass, show, ...props }: Props,
  ref: React.ForwardedRef<HTMLDivElement> // Updated type here
) => (
  <React.Fragment>
    {show && (
      <div className={`${css["container"]} ${outerclass}`}>
        <div
          {...props}
          ref={ref}
          className={`${css["inner"]} ${props.className}`}
        >
          {children}
        </div>
      </div>
    )}
  </React.Fragment>
);

const ModelView = React.forwardRef<HTMLDivElement, Props>(Component);
ModelView.displayName = "ModelView";
ModelView.defaultProps = {};

export default ModelView;
