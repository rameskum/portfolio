import { Loader2 } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background/20">
      <Loader2 className="size-8 animate-spin" />
    </div>
  );
};

export default Loading;
