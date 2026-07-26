'use client';

import { useCustomCursor } from '@/hooks/useCustomCursor';

export default function CustomCursor() {
  useCustomCursor();

  return (
    <>
      <div className="cursor" id="cursor">
        <div className="cursor-ring" />
        <div className="cursor-dot" />
      </div>
      <div className="cursor-tag" id="cursorTag" />
    </>
  );
}
