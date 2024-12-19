import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = (weight:? '400' | '700') => {
    return {
      fontFamily: '"Lusitana", serif',
      fontWeight: weight || "400",
      subsets: ['latin'],  // You can specify other subsets like 'latin-ext' if needed
     
    };
  };
