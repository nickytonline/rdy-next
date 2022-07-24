import Link from 'next/link'
import Image from 'next/image'

import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

import mapsData from '@/data/mapsData'

import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Loguilloche() {
  const imageUrl = ''

  return (
    <>
      <PageSEO
        title={`Shop - Facetrace - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Facetrace
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            The original jam that started it all, bitmap photos go in and vector traces come out.
            Everything from fun small sketches to large and detailed portraits, facetrace is
            whatever you want it to be, because the robot can draw <b>anything</b> you give it! Some
            pictures work better than others, for optimal results consult{' '}
            <Link href="/about" passHref>
              <a>the robot whisperer</a>
            </Link>
            .
          </p>
        </div>
        <div className="container py-12">
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              <Image
                src="/static/images/shop/facetrace1.jpeg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/facetrace2.jpeg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/facetrace3.jpeg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/facetrace5.jpeg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/facetrace6.jpeg"
                alt="image"
                width={170}
                height={400}
              />
              <Image
                src="/static/images/shop/facetrace7.jpeg"
                alt="image"
                width={170}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        @import
        url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      </style>

      <div className="min-w-screen">
        <div className="mx-auto mb-10 w-full bg-white px-5 py-10 text-gray-600">
          <div className="mx-auto max-w-5xl md:flex">
            <div className="md:flex md:w-1/4 md:flex-col">
              <div className="w-full flex-grow text-left md:pr-5">
                <h1 className="mb-5 text-4xl font-bold">Pricing</h1>
                <h3 className="text-md mb-5 font-medium">
                  We have a wide selection of options available to suit every budget. Most orders
                  are printed and shipped the same week*
                </h3>
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="mx-auto max-w-4xl md:flex">
                <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-2 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
                  <div className="w-full flex-grow">
                    <h2 className="mb-4 text-center font-bold uppercase">SKETCH</h2>
                    <h3 className="mb-5 text-center text-4xl font-bold">$100</h3>
                    <ul className="mb-8 text-sm">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Up to 8x10
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Single pen / color
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> No photo editing
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button
                      className="snipcart-add-item w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700"
                      data-item-id={`facetrace-sketch`}
                      data-item-image={imageUrl}
                      data-item-name={`FACETRACE SKETCH`}
                      data-item-url="/shop/facetrace"
                      data-item-price={100}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:relative md:z-50 md:-mx-3 md:mb-0 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
                  <div className="w-full flex-grow">
                    <h2 className="mb-4 text-center font-bold uppercase">PORTRAIT</h2>
                    <h3 className="mb-5 text-center text-4xl font-bold md:text-5xl">$500</h3>
                    <ul className="mb-8 text-sm">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Up to 11.5 x 23.5
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Up to three pens / colors
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Photo trimming services
                        included
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button
                      className="snipcart-add-item w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700"
                      data-item-id={`facetrace-potrtait`}
                      data-item-image={imageUrl}
                      data-item-name={`FACETRACE PORTRAIT`}
                      data-item-url="/shop/facetrace"
                      data-item-price={500}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-2 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
                  <div className="w-full flex-grow">
                    <h2 className="mb-4 text-center font-bold uppercase">PARTY</h2>
                    <h3 className="mb-5 text-center text-4xl font-bold">$2500</h3>
                    <ul className="mb-8 text-sm">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> We bring the camera and robot
                        to your event
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Up to 10 8x10s included
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> One "group" page with all
                        photos from the event included
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button
                      className="snipcart-add-item w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700"
                      data-item-id={`facetrace-party`}
                      data-item-image={imageUrl}
                      data-item-name={`FACETRACE PARTY`}
                      data-item-url="/shop/facetrace"
                      data-item-price={2500}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="container py-12">
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              <Image
                src="/static/images/shop/ft-monica-1.jpg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/ft-monica-2.jpg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/ft-monica-3.jpg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/ft-monica-4.jpg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/ft-monica-5.jpg"
                alt="image"
                width={170}
                height={400}
              />

              <Image
                src="/static/images/shop/ft-monica-6.jpg"
                alt="image"
                width={170}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
