import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-8 w-auto text-slate-900" />
          <h1 className="absolute top-350 left-300 text-5xl text-white font-bold mx-auto max-w-6x1">
            <span className=" text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-violet-500">
               Neurafy
            </span>
           </h1>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
         
           
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Get More Info </Button>
        </div>
      </Container>
    </header>
    
  )
}
