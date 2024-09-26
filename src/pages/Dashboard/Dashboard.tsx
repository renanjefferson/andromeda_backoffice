import { Sidebar } from '@/components/Sidebar';

export function Dashboard() {
  return (
    <div className="lg:grid-cols-app grid min-h-screen">
      <Sidebar />
      <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        Main
      </main>
    </div>
  );
}
