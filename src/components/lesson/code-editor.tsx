import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CodeEditorProps {
  initialCode: string;
  onPreview: (code: string) => void;
}

export function CodeEditor({ initialCode, onPreview }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="space-y-4">
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-[300px] w-full rounded-md border bg-gray-50 p-4 font-mono text-sm"
          spellCheck={false}
        />
      </div>
      <Button onClick={() => onPreview(code)}>
        Update Preview
      </Button>
    </div>
  );
}