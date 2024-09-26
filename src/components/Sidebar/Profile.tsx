import { LuLogOut } from 'react-icons/lu';
import { Button } from '@/components/ui/Button';

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="./olivia-rhye.jpeg"
        className="h-10 w-10 rounded-full"
        alt="Foto do perfil Renan Jefferson"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Olivia Rhye</span>
        <span className="truncate text-sm text-zinc-500">
          olivia@untitledui.com
        </span>
      </div>
      <Button type="button" variant="ghost" className="ml-auto">
        <LuLogOut
          className="h-5 w-5 text-zinc-500"
          onClick={() => console.log('LogOut')}
        />
      </Button>
    </div>
  );
}
