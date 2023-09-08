type Props = {
  children: React.ReactNode
}

export default function PageWrapper ({ children }: Props) {
  return <div className='max-w-7xl w-full mx-auto p-4'>{children}</div>
}
