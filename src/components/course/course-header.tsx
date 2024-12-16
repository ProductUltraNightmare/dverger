import { Course } from '@/data/courses';
import { useProgressStore } from '@/store/progress-store';
import * as Progress from '@radix-ui/react-progress';

interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  const { getProgress } = useProgressStore();
  const totalLessons = course.chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.length,
    0
  );
  const completedLessons = getProgress(course.id);
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="mt-2 text-gray-600">{course.description}</p>
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress.Root className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <Progress.Indicator
            className="h-full bg-green-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </Progress.Root>
      </div>
    </div>
  );
}