import Image from 'next/image';

export default function Logo({
  width = 128,
  height = 128,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={'/logo.png'}
      alt={'Trattoria Rimini — итальянский ресторан с 2010 года'}
      // className={className || ''}
      width={width}
      height={height}
    />
  );
}
