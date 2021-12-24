import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body
                    className="bg-gradient-to-r from-beige to-lightGreen dark:from-dark-500 dark:to-dark-700 dark:text-white"
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;