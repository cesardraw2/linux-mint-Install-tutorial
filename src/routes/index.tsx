import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({{
  component: () => (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <p className="text-lg text-muted-foreground">Your app is running</p>
    </div>
  ),
}})
