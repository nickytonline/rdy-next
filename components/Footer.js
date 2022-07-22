import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <Link href="https://www.vtapi.co">vtapi.co</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400"></div>
      </div>
      <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4 flex items-end justify-end">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/robotdrawsyou"
            target="_blank"
            className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
            rel="noreferrer"
          >
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
