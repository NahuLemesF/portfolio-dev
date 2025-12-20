export type ProjectStatus = 'in-progress' | 'finished' | 'idea'

export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  status: ProjectStatus
  repoUrl?: string
  liveUrl?: string
}
