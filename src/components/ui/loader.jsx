import { LoaderPinwheel } from 'lucide-react';
import React from 'react';

export default function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      <h1 className="text-primary flex gap-2">
        <LoaderPinwheel />
        Loading...
      </h1>
    </div>
  );
}
