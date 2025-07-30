// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   // title: "The Moving Average",
//   // description: "Trade with Favorite Broker",
//   title: "The Moving Average - Trade with Favorite Broker",
//   description: "Join The Moving Average and start trading smarter today with GatesFX.",
//   icons: {
//     icon: "/favicon.png",
//   },
//   openGraph: {
//     title: "The Moving Average - Trade with Favorite Broker",
//     description: "Join The Moving Average and start trading smarter today with GatesFX.",
//     url: "https://tma.gatesfx.com",
//     siteName: "GatesFX",
//     images: [
//       {
//         url: "https://tma.gatesfx.com/tmaLogo.jpeg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "The Moving Average - Trade with Favorite Broker",
//     description: "Join The Moving Average and start trading smarter today with GatesFX.",
//     images: ["https://tma.gatesfx.com/tmaLogo.jpeg"],
//   },
// };

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteMetadata = {
  title: "The Moving Average - Trade with Favorite Broker",
  description: "Join The Moving Average and start trading smarter today with GatesFX.",
  url: "https://tma.gatesfx.com",
  image: "https://tma.gatesfx.com/tmaLogo.jpeg",
};

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: "GatesFX",
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              name: "The Moving Average",
              url: "https://tma.gatesfx.com",
              description: "Join The Moving Average and start trading smarter today with GatesFX.",
              image: "https://tma.gatesfx.com/tmaLogo.jpeg",
            }),
          }}
        />
      <link rel="icon" href="/favicon.png" />
            <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tma.gatesfx.com" />
      <meta property="og:title" content="The Moving Average - Trade with Favorite Broker" />
      <meta property="og:description" content="Join The Moving Average and start trading smarter today with GatesFX." />
      <meta property="og:image" content="https://tma.gatesfx.com/og-image.jpg" />

      {/* <!-- Optional for Twitter preview --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Moving Average - Trade with Favorite Broker" />
      <meta name="twitter:description" content="Join The Moving Average and start trading smarter today with GatesFX." />
      <meta name="twitter:image" content="https://tma.gatesfx.com/og-image.jpg" />
      </head>
      <link rel="icon" href="/favicon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="icon" href="/favicon.png" />
        {children}
      </body>
    </html>
  );
}
