import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/home';
import { CoursesPage } from '@/pages/courses';
import { CoursePage } from '@/pages/course';
import { LessonPage } from '@/pages/lesson';
import { ProfilePage } from '@/pages/profile';
import { AuthGuard } from '@/components/auth/auth-guard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: 'courses',
        element: <AuthGuard><CoursesPage /></AuthGuard>
      },
      {
        path: 'courses/:courseId',
        element: <AuthGuard><CoursePage /></AuthGuard>
      },
      {
        path: 'courses/:courseId/lessons/:lessonId',
        element: <AuthGuard><LessonPage /></AuthGuard>
      },
      {
        path: 'profile',
        element: <AuthGuard><ProfilePage /></AuthGuard>
      }
    ],
  },
]);