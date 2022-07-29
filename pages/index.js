import Link from '@/components/Link'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="container mx-auto grid grid-cols-4 gap-2">
        <Image
          src="/static/images/aaron-blue-face.jpeg"
          alt="image"
          width="700"
          height="1500"
          objectFit="contain"
        />
        <img src="/static/images/shop/map4.jpeg" alt="image" width="700" height="1500" />
        <img src="/static/images/shop/log13.jpeg" alt="image" width="700" height="1500" />
        <img src="/static/images/shop/ft-monica-3.jpg" alt="image" width="700" height="1500" />
      </div>

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
