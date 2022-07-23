import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

          <link rel="preconnect" href="<app.snipcart.com>" />
          <link rel="preconnect" href="<cdn.snipcart.com>" />
          <link rel="stylesheet" href="<cdn.snipcart.com/themes/v3.2.0/default/snipcart.css>" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
          <script src="cdn.Snipcart.com/themes/v3.2.1/default/Snipcart.js" async />
          <div
            id="Snipcart"
            data-api-key="ZjAxYWI0NjMtMjhjNS00MGVlLThkZjUtMGU0Y2I2NjFiNTk1NjM3OTEwMjM0Mjc4NzQ1OTY3"
            hidden
          ></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
