import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-50 border-t border-zinc-200 footer'>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center text-text sm:justify-start'>
            <Link
              className='flex gap-1 items-center text-text font-medium text-lg hover:text-zinc-400 '
              href='/'
            >
              <img
                src='https://res.cloudinary.com/dcknlnne1/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709827936/favicon-32x32_rllh9h.jpg?_s=public-apps'
                alt='Logo'
                className='h-6 w-6'
              />
              <span> CMS</span>
            </Link>
          </div>

          <div className='sm:text-center sm:mt-0 mt-4'>
            <small className='block website-rights text-text text-center'>
              Created by LB Websites © 2024
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
