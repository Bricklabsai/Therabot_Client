import Image from 'next/image';
import Link from 'next/link'


export default function Page() {
    return (
        <>
        <main className="w-screen px-2 min-h-screen flex-col bg-white dark:bg-neutral-900 flex justify-center items-center">
            <Image src={'/undraw_page_not_found_re_e9o6.svg'} alt='gotem' height={300} width={300}></Image>
            <p className='mt-4 text-xl'><span className='text-blue-600 border-r border-blue-600 pr-2'>ooh!</span><span className='ml-2 text-primary-dark'>Page Not Found</span></p>
            <p className='mt-4 text-sm text-neutral-500 dark:text-neutral-300'>The page you were looking for doesn&apos;t exist, head to  the <Link href={'/'} className='text-blue-500'>Homepage</Link></p>
        </main>
        </>
    )
}