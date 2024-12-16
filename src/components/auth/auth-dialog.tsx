import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth-store';

export function AuthDialog() {
  const { setUser } = useAuthStore();

  // Temporary mock login for demonstration
  const handleDemoLogin = () => {
    setUser({
      id: '1',
      email: 'demo@example.com',
      name: 'Demo User',
    });
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Content className="fixed left-[50%] top-[50%] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
        <Dialog.Title className="text-lg font-semibold">
          Sign In to LearnHub
        </Dialog.Title>
        <Dialog.Description className="mt-2 text-sm text-gray-600">
          Sign in to access all courses and track your progress.
        </Dialog.Description>

        <div className="mt-6 flex flex-col gap-4">
          <Button
            className="w-full justify-center"
            onClick={handleDemoLogin}
          >
            Continue with Demo Account
          </Button>
        </div>

        <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}