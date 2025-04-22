import '../styles/globals.scss';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const metadata = {
    title: {
        template: '%s | Nexa Verse',
        default: 'Nexa Verse | Główna',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                <div>
                    <div>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
