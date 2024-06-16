import React, { forwardRef, useRef } from 'react';

import { LogoSVG } from './svg/index'

interface Props extends React.SVGProps<SVGSVGElement> {
    
}

export const LogoRef = forwardRef<SVGSVGElement, Props>(function (props, ref) {
    const { className, ...otherProps } = props;

    const combinedRef = useRef<SVGSVGElement>(null);

    return (
        <LogoSVG
            {...otherProps}
            svgRef={combinedRef}
            className={className} 
        />
    );
});