import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className='flex items-center justify-end p-4 top-0 absolute right-0'>
      <ModeToggle />
    </header>
  );
}
