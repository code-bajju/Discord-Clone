// import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const state = true

export default function Home() {
  return (
    <div >
  <p className="text-3xl font-bold text-indigo-200">hello discord clone</p>
  <Button className={cn("bg-indigo-500" , state && "bg-red-500" )} >click me</Button></div>
  )
}
