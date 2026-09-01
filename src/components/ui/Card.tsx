'use client';

/**
 * Reusable Card Component
 */

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = '', href }: CardProps) {
  const baseClasses = 'card p-6';

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className} block`}>
        {children}
      </a>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}
