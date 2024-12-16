import { Link } from 'react-router-dom';
import { BookOpen, Code, Layout } from 'lucide-react';

const courses = [
  {
    id: 'html-css',
    title: 'HTML & CSS Fundamentals',
    description: 'Learn the building blocks of web development',
    icon: Layout,
    lessons: 12,
  },
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    description: 'Master the language of the web',
    icon: Code,
    lessons: 15,
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Build modern web applications',
    icon: BookOpen,
    lessons: 18,
  },
];

export function CoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Available Courses</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-lg font-semibold group-hover:text-primary">
                {course.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{course.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                {course.lessons} lessons
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}