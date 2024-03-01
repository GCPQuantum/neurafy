import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    
    <div className="relative py-20 sm:pb-24 sm:pt-36" >
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Neurafy - </span>Rethinking Intelligence via Neural
             Aritifical Intelligence 
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
               Our core belief is that artificial intelligence should be a force for good, 
               enhancing human capabilities and addressing notion that artificial intelligence
               ought to serve as a positive force, augmenting human capabilities and tackling 
               multifaceted challenges across diverse industries that surpass human comprehension and capacity.
            </p>
            
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
        
        </div>
        
      </Container>
      
    </div>
  )
}
