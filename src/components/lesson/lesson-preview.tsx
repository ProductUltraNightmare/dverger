interface LessonPreviewProps {
  html: string;
}

export function LessonPreview({ html }: LessonPreviewProps) {
  return (
    <div className="rounded-md border bg-white p-4">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}