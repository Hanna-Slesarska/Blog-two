import CMS from "decap-cms-app";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div>Blog</div>
    </div>
    
  );
}
