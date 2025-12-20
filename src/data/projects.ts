import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 'portfolio-dev',
    title: 'Developer Portfolio',
    description:
      'Personal portfolio built with React, TypeScript and Vite.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    status: 'in-progress',
    repoUrl: 'https://github.com/nahulemes/portfolio'
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description:
      'Simple task manager with filters and local state.',
    stack: ['React', 'TypeScript'],
    status: 'idea'
  }
]
