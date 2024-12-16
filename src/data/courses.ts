import { Layout, Code, BookOpen } from 'lucide-react';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: 'theory' | 'practice';
  content?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: typeof Layout | typeof Code | typeof BookOpen;
  chapters: {
    id: string;
    title: string;
    lessons: Lesson[];
  }[];
}

export const courses: Course[] = [
  {
    id: 'html-css',
    title: 'HTML & CSS Fundamentals',
    description: 'Learn the building blocks of web development',
    icon: Layout,
    chapters: [
      {
        id: 'getting-started',
        title: 'Getting Started with HTML',
        lessons: [
          {
            id: 'html-button',
            title: 'Creating a Button',
            description: 'Learn how to create and style a button element',
            type: 'practice',
            content: `
# Creating a Button Element

A button is one of the most common interactive elements in web development. Let's learn how to create and style one.

## HTML Structure

\`\`\`html
<button class="custom-button">
  Click me
</button>
\`\`\`

## CSS Styling

\`\`\`css
.custom-button {
  padding: 8px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.custom-button:hover {
  background-color: #1d4ed8;
}
\`\`\`

## Interactive Example

Try modifying the button's styles in the editor below!
            `,
          },
          {
            id: 'html-structure',
            title: 'HTML Document Structure',
            description: 'Understanding the basic structure of HTML documents',
            type: 'theory',
          },
        ],
      },
    ],
  },
  // Other courses...
];