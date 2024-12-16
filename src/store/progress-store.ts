import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Progress {
  [courseId: string]: {
    completedLessons: string[];
    lastAccessed: string;
  };
}

interface ProgressState {
  progress: Progress;
  completeLesson: (courseId: string, lessonId: string) => void;
  updateLastAccessed: (courseId: string) => void;
  getProgress: (courseId: string) => number;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      completeLesson: (courseId, lessonId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [courseId]: {
              completedLessons: [
                ...(state.progress[courseId]?.completedLessons || []),
                lessonId,
              ],
              lastAccessed: new Date().toISOString(),
            },
          },
        })),
      updateLastAccessed: (courseId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [courseId]: {
              ...state.progress[courseId],
              lastAccessed: new Date().toISOString(),
            },
          },
        })),
      getProgress: (courseId) => {
        const courseProgress = get().progress[courseId];
        return courseProgress ? courseProgress.completedLessons.length : 0;
      },
    }),
    {
      name: 'progress-storage',
    }
  )
);