import React from "react";
import css from "./model.module.scss";

type Ref<T> = React.RefObject<T> | null;
type Props = {
  show: boolean;
  outerclass?: string;
  //   containerProps?: React.ComponentPropsWithRef<"div">;
} & React.ComponentPropsWithRef<"div">;

const Component = (
  { children, outerclass, show, ...props }: Props,
  ref: Ref<HTMLDivElement>
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

const ModelView = React.forwardRef(Component);
ModelView.displayName = "ModelView";
ModelView.defaultProps = {};

export default ModelView;
