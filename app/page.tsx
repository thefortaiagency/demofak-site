import dynamic from 'next/dynamic'

const Section0 = dynamic(() => import('@/components/Section0'))

export default function Home() {
  return (
    <main>
      <Section0 />
    </main>
  )
}