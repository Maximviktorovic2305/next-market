import Link from 'next/link'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/Popover'

import styles from './Footer.module.scss'

export function Footer() {
	return (
		<section className={styles.wrapper}>
			<Popover>
				<PopoverTrigger className={styles.title}>
					Frontend
				</PopoverTrigger>
				<PopoverContent className='flex flex-col gap-2'>
					<Link
						href='https://nextjs.org/blog/next-14'
						target='_blank'
					>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-7 h-auto'
								src='next.png'
								alt='next'
							/>
							<span>Next 14</span>
						</div>
					</Link>
					<Link href='https://tailwindcss.com/' target='_blank'>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-7 h-auto'
								src='tailwind.png'
								alt='tailwind'
							/>
							<span>Tailwind</span>
						</div>
					</Link>
					<Link href='https://ui.shadcn.com/' target='_blank'>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-7 h-auto'
								src='Shadecn.svg'
								alt='shadecn'
							/>
							<span>Shadecn</span>
						</div>
					</Link>
					<Link href='https://redux-toolkit.js.org/' target='_blank'>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-7 h-auto'
								src='RTK.svg'
								alt='RTK'
							/>
							<span>Redux</span>
						</div>
					</Link>
					<Link
						href='https://www.npmjs.com/package/redux-persist'
						target='_blank'
					>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img className='w-7 h-auto' src='RP.jpg' alt='RP' />
							<span>Redux-persist</span>
						</div>
					</Link>
					<Link
						href='https://www.typescriptlang.org/'
						target='_blank'
					>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img className='w-7 h-auto' src='ts.png' alt='ts' />
							<span>Typescript</span>
						</div>
					</Link>
				</PopoverContent>
			</Popover>
			<div>Next-Shop&copy; 2024 Все права защищены</div>
			<Popover>
				<PopoverTrigger className={styles.title}>
					Backend
				</PopoverTrigger>
				<PopoverContent className='flex flex-col gap-2'>
					<Link href='https://nestjs.com/' target='_blank'>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-7 h-auto'
								src='nest.png'
								alt='nest'
							/>
							<span>Nestjs</span>
						</div>
					</Link>
					<Link href='https://www.prisma.io/' target='_blank'>
						<div className='flex items-center gap-4 pl-1 rounded-md cursor-pointer'>
							<img
								className='h-6 w-5'
								src='prisma.png'
								alt='prisma'
							/>
							<span>Prisma</span>
						</div>
					</Link>
					<Link href='https://www.mongodb.com/' target='_blank'>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-7 h-auto'
								src='mongo.png'
								alt='mongo'
							/>
							<span>Mongodb</span>
						</div>
					</Link>
					<Link href='https://jwt.io/introduction' target='_blank'>
						<div className='flex items-center gap-3 rounded-md cursor-pointer'>
							<img
								className='w-6 h-auto'
								src='jwt.png'
								alt='jwt'
							/>
							<span>JWT</span>
						</div>
					</Link>
				</PopoverContent>
			</Popover>
		</section>
	)
}
