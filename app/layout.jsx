import '../styles/globals.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
                <link rel="stylesheet" href="https://use.typekit.net/wnw6xad.css"/> 
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
