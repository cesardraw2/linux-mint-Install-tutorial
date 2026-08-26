import { RootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = new RootRoute({
  component: () => (
    <div className="w-full min-h-screen bg-background">
      <Outlet />
    </div>
  ),
})
