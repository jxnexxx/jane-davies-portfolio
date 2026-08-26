"use client";

import Link from "next/link";
import { forwardRef, type MouseEventHandler, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  scroll?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      variant = "primary",
      icon,
      className = "",
      external = false,
      onClick,
      scroll = true,
      disabled = false,
      type = "button",
    },
    ref,
  ) => {
    const buttonClassName = `button button--${variant} ${className}`.trim();

    const content = (
      <>
        <span>{children}</span>

        {icon && (
          <span className="button__icon" aria-hidden="true">
            {icon}
          </span>
        )}
      </>
    );

    // External link
    if (href && external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={buttonClassName}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    // Internal Next.js link
    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={buttonClassName}
          scroll={scroll}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }

    // Actual button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={buttonClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
