import { cn } from '@/lib/utils';
import React from 'react';

interface IContainerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Container({ className, children }: IContainerProps) {
  return <div className={cn('container mx-auto', className)}>{children}</div>;
}
