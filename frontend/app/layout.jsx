import './globals.css'

export const metadata = {
  title: 'Ashutosh Verma | Full Stack Developer',
  description: 'Full Stack Developer building production-ready web applications with clean architecture, real-time capabilities, and secure backends.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'WebSockets', 'AI', 'Portfolio'],
  authors: [{ name: 'Ashutosh Verma' }],
  openGraph: {
    title: 'Ashutosh Verma | Full Stack Developer',
    description: 'Full Stack Developer building production-ready web applications with clean architecture, real-time capabilities, and secure backends.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  )
}
