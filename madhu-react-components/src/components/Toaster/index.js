import * as React from "react";
import cx from "classnames";
import './toaster.scss';

// type ButtonProps = {
//     name: string,
//     as?: string,
//     variant?: string,
//     href?: string,
//     link: boolean,
//     className?: "string"
// };

// variant = primary, outline, ghost, base
// Type = Text only, Text + icon, icon only, Text only long, Text + icon long
// Size = large, medium, wide
// state = enabled, hover, active, focus, disabled 

const Toaster = (props) => {
    const { as: Element, variant, type, size, state, rounded, outline, className, disabled, link } = props;
    var btnClass = cx("btn ripple", {
        [`${variant}`]: variant && !outline ? true : false,
        [`${type}`]: variant && !outline ? true : false,
        "p-md": size === 'medium' ? true : false,
        "p-wide": size === 'wide' ? true : false,
    });

    return (
        <Element className={cx(btnClass, className)} disabled={disabled}>
            {props?.icon ? <span>{props?.icon}</span> : ''}
            {props?.name ? <span>{props?.name}</span> : ''}
        </Element>
    );
};

const ButtonWrapper = (props) => <div className='w3-bar btn'>{props.children}</div>;

Toaster.List = ButtonWrapper;

Toaster.defaultProps = {
    as: "button",
    variant: "default",
    href: "#"
};

export default Toaster;