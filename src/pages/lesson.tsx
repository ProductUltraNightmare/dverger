import { useParams } from 'react-router-dom';
import { courses } from '@/data/courses';
import { LessonContent } from '@/components/lesson/lesson-content';

export function LessonPage() {
  const { courseId, lessonId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const lesson = course?.chapters
    .flatMap((chapter) => chapter.lessons)
    .find((lesson) => lesson.id === lessonId);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">{lesson.title}</h1>
      {lesson.content && <LessonContent content={lesson.content} />}
    </div>
  );
}