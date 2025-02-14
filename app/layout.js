import './globals.css'
import Swiper from 'swiper'
import 'swiper/css'
import ClientProvider from '@/components/ClientProvider'

export const metadata = {
  title: 'Shopwise',
  description: 'shopping',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "light only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    
  }
} 

export default function RootLayout({children}) {
  return (
      <html lang="en">
        <body className="min-h-screen bg-black-100 font-poppins">
          <ClientProvider>

            {children}
          
          </ClientProvider>
          </body>
      </html>
  )
}
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <nav className="flex justify-center space-x-4">
//           <div>
//             <Example/>
//             <Example/>
//             <p>123-456-7890</p>
//           </div>
//           <div>
//             <a>Compare</a>
//             <a>Wishlist</a>
//             <a>Login</a>
//           </div>
//         </nav>
//         {children}
//         </body>
//     </html>
//   );
// }
