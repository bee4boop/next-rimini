import { MapPinIcon, Pizza, ShoppingBag, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from './container';
import LocationButton from './location-button';

export default function Header() {
  return (
    <header className='text-foreground py-1'>
      <Container className='flex items-center justify-between py-2 px-4 bg-muted rounded-md'>
        <Link
          href={'/'}
          className='font-header flex flex-row gap-1 items-center'
        >
          {/* <Pizza /> */}
          <div className='bg-background flex flex-col gap-1 items-center justify-center border-2 outline-1 outline-background border-ring px-3 py-2 rounded-full '>
            <span className='text-[0.65rem]/[1rem]'>Trattoria</span>
            <span className='font-script text-3xl/[1rem] italic'>Rimini</span>
            <span className='text-[0.55rem]/[1rem]'>ETC. 2010</span>
          </div>
        </Link>

        <LocationButton />

        <nav className='flex items-center gap-1'>
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
      </Container>
    </header>
  );
}
