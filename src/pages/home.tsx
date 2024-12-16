import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';

export function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
      <BookOpen className="h-16 w-16 text-primary" />
      <h1 className="mt-8 text-4xl font-bold">Dverger</h1>
      <p className="mt-4 max-w-md text-gray-600">
        Your journey to mastering web development starts here. Learn at your own pace
        with interactive lessons and hands-on exercises.
      </p>
      <div className="mt-8 flex gap-4">
        <Button 
          size="lg" 
          onClick={() => navigate(isAuthenticated ? '/courses' : '/')}
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => navigate('/courses')}
        >
          Browse Courses
        </Button>
      </div>
    </div>
  );
}