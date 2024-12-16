import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Course } from '@/data/courses';
import { useProgressStore } from '@/store/progress-store';

interface ChapterListProps {
  course: Course;
}

export function ChapterList({ course }: ChapterListProps) {
  const { courseId } = useParams();
  const { progress } = useProgressStore();
  const courseProgress = progress[courseId ?? ''];

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {course.chapters.map((chapter) => (
        <Accordion.Item
          key={chapter.id}
          value={chapter.id}
          className="border-b last:border-0"
        >
          <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-medium hover:underline">
            {chapter.title}
            <ChevronDown className="h-4 w-4 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-4 pt-1">
              {chapter.lessons.map((lesson) => {
                const isCompleted = courseProgress?.completedLessons.includes(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    to={`/courses/${courseId}/lessons/${lesson.id}`}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100',
                      isCompleted && 'text-green-600'
                    )}
                  >
                    <div className={cn(
                      'h-2 w-2 rounded-full',
                      isCompleted ? 'bg-green-600' : 'bg-gray-300'
                    )} />
                    {lesson.title}
                  </Link>
                );
              })}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}