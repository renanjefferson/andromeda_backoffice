import { useState } from 'react';
import {
  LuImage,
  LuPanelLeft,
  LuX,
  LuHome,
  LuLayoutDashboard,
} from 'react-icons/lu';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button } from '@/components/ui/Button';
import { NavItem } from './NavItem';
import { Profile } from './Profile';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <LuImage size={40} />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button
            type="button"
            variant="ghost"
            className="ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <>
                <span className="sr-only">Fechar menu</span>
                <LuX className="h-6 w-6" />
              </>
            ) : (
              <>
                <span className="sr-only">Abrir menu</span>
                <LuPanelLeft className="h-6 w-6" />
              </>
            )}
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <nav className="space-y-0.5">
          <NavItem title="Home" icon={LuHome} />
          <NavItem title="Dashboard" icon={LuLayoutDashboard} />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
