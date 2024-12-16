import { useState } from 'react';
import { CodeEditor } from './code-editor';
import { LessonPreview } from './lesson-preview';
import { Button } from '@/components/ui/button';
import { useProgressStore } from '@/store/progress-store';
import { useParams } from 'react-router-dom';

interface LessonContentProps {
  content: string;
}

const INITIAL_HTML = `
<button class="custom-button">
  Click me
</button>

<style>
.custom-button {
  padding: 8px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.custom-button:hover {
  background-color: #1d4ed8;
}
</style>
`;

export function LessonContent({ content }: LessonContentProps) {
  const [previewHtml, setPreviewHtml] = useState(INITIAL_HTML);
  const { courseId, lessonId } = useParams();
  const { completeLesson } = useProgressStore();

  const handleComplete = () => {
    if (courseId && lessonId) {
      completeLesson(courseId, lessonId);
    }
  };

  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Code Editor</h3>
          <CodeEditor
            initialCode={INITIAL_HTML}
            onPreview={setPreviewHtml}
          />
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Preview</h3>
          <LessonPreview html={previewHtml} />
        </div>
      </div>

      <Button onClick={handleComplete} className="mt-8">
        Complete Lesson
      </Button>
    </div>
  );
}