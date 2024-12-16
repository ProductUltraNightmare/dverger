import { useParams } from 'react-router-dom';
import { courses } from '@/data/courses';
import { CourseHeader } from '@/components/course/course-header';
import { ChapterList } from '@/components/course/chapter-list';

export function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <CourseHeader course={course} />
      <ChapterList course={course} />
    </div>
  );
}