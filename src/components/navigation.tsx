import * as React from 'react';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useAuthStore } from '@/store/auth-store';
import { UserNav } from './user-nav';
import { BookOpen, Home, User } from 'lucide-react';

export function Navigation() {
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu.Root className="relative flex items-center justify-between">
          <NavigationMenu.List className="flex items-center gap-6">
            <NavigationMenu.Item>
              <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                <BookOpen className="h-6 w-6" />
                Dverger
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </NavigationMenu.Item>
            {isAuthenticated && (
              <>
                <NavigationMenu.Item>
                  <Link to="/courses" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Courses
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </NavigationMenu.Item>
              </>
            )}
          </NavigationMenu.List>
          <UserNav />
        </NavigationMenu.Root>
      </div>
    </header>
  );
}