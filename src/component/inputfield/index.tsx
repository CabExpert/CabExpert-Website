"use client";
import React, { useEffect, useRef, useState, useCallback, useMemo, forwardRef } from "react";
import Image from "next/image";
import styles from "./inputfield.module.scss";

type Ref = React.Ref<HTMLInputElement>;

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  autofocus?: boolean;
  readOnly?: boolean;
  label?: string;
  autocomplete?: string;
  error?: string | boolean;
  description?: string;
  svgIcon?: React.ComponentPropsWithoutRef<"svg">;
  labelProps?: React.ComponentPropsWithoutRef<"label">;
  bgColor?: string;
  className?: string;
  labelColor?: string;
  inputParent?: string;
  labelParent?: string;
}

const GlobalInputNew = forwardRef(
  (
    {
      id,
      autofocus,
      readOnly,
      label,
      error,
      value,
      description,
      onBlur,
      onFocus,
      onChange,
      labelProps,
      svgIcon,
      className,
      name,
      bgColor,
      labelColor,
      inputParent,
      labelParent,
      ...rest
    }: InputProps,
    ref: Ref
  ) => {
    const [state, setState] = useState({
      value,
      focus: false,
      show: false,
    });

    const onShowPassword = useCallback(() => {
      setState((prevState) => ({
        ...prevState,
        show: !prevState.show,
      }));
    }, []);

    const _onChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event);
        }
        setState((prevState) => ({
          ...prevState,
          value: event.target.value,
        }));
      },
      [onChange]
    );

    const _onFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        if (onFocus) {
          onFocus(event);
        }
        setState((prevState) => ({
          ...prevState,
          focus: true,
        }));
      },
      [onFocus]
    );

    const _onBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
          onBlur(event);
        }
        setState((prevState) => ({
          ...prevState,
          focus: false,
        }));
      },
      [onBlur]
    );

    const ErrorComponent = useMemo(() => {
      if (error && description) {
        return <span className={styles["validation-text"]}>{error}</span>;
      }
      if (description) {
        return <span className={styles["description-text"]}>{description}</span>;
      }
      if (error) {
        return <span className={styles["validation-text"]}>{error}</span>;
      }
      return null;
    }, [description, error]);

    const inputType = useMemo(() => {
      return state.show ? "text" : rest.type;
    }, [rest.type, state.show]);

    useEffect(() => {
      setState((prevState) => ({
        ...prevState,
        value,
      }));
    }, [value]);

    const [topClass, setTopClass] = useState(styles.magic);

    return (
      <div className={`${styles.container} ${inputParent}`}>
        {label && (
          <div className={""}>
            <label
              aria-label=""
              className={`${styles["text-default"]} ${labelColor} ${bgColor ? bgColor : `${styles["bg-transparent"]} ${styles["font-bold"]} ${styles["text-base"]}`}`}
            >
              {label}
            </label>
          </div>
        )}
        <div className={styles.field} onClick={() => setTopClass(styles.magic)}>
          <input
            autoFocus={autofocus || false}
            readOnly={readOnly || false}
            ref={ref}
            {...rest}
            name={name}
            type={inputType}
            value={state.value}
            onChange={_onChange}
            onFocus={_onFocus}
            onBlur={_onBlur}
            className={`${styles.input} ${className} ${error ? styles.error : ""}`}
          />
        </div>
        {ErrorComponent}
      </div>
    );
  }
);

GlobalInputNew.displayName = "GlobalInputNew";
export default React.memo(GlobalInputNew);
