import { MapPinIcon, Pizza, ShoppingBag, UserIcon } from 'lucide-react';
import Logo from '@/components/ui/logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='text-foreground'>
      <nav className='bg-muted rounded-xl container mx-auto px-4 flex items-center justify-between py-3'>
        <Link
          href={'/'}
          className='font-header text-2xl/1 rounded-lg flex flex-row gap-1 items-center'
        >
          <Pizza />
          Trattoria Rimini
        </Link>

        <div>
          <MapPinIcon />
        </div>

        <div className='flex items-center justify-end gap-2'>
          <Button>
            <UserIcon />
            Войти
          </Button>

          <Button>
            <ShoppingBag />
          </Button>
        </div>
      </nav>
    </header>
  );
}
