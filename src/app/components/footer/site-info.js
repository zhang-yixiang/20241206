import Img from 'next/image'
import TiktokIcon from '@/app/icons/tiktok.svg'
import TwitterIcon from '@/app/icons/twitter.svg'
import InstagramIcon from '@/app/icons/instagram.svg'
import YoutubeIcon from '@/app/icons/youtube.svg'
import SocialTemplate from "@/app/components/footer/social-template";

const SOCIALS = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@pdfai',
    icon: TiktokIcon
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pdfdotai/',
    icon: InstagramIcon
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/pdfdotai',
    icon: TwitterIcon
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@pdfai',
    icon: YoutubeIcon
  }
]

export default function SiteInfo() {
  return (
    <div className="space-y-8">
      <img className="h-7" src="/favicon.ico" alt="PDF.ai logo"/>
      <div className="text-sm leading-6 text-gray-600">
        Chat with any PDF: ask questions, get summaries, find
        information, and more.
      </div>
      <div className="flex space-x-6">
        {
          SOCIALS.map((social, index) => (
            <SocialTemplate
              key={social.name}
              socialHref={social.href}
              socialName={social.name}
            >
              <social.icon className="h-6 w-6" aria-hidden="true" style={index === 0 ? {width: '20px'} : {}} />
            </SocialTemplate>))
        }
      </div>
    </div>

  )
}