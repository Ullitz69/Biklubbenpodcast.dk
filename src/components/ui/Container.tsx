'use client';

/**
 * Container Component - Consistent spacing & max-width
 */

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`container-responsive ${className}`}>{children}</Component>
  );
}
