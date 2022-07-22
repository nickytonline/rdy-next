import Image from 'next/image'

import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

import mapsData from '@/data/mapsData'

import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Loguilloche() {
  return (
    <>
      <PageSEO
        title={`Loguilloche - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Loguilloche
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Intricate repeating patterns using and recycling an existing logo or brand mark.
            Designed to delight and entertain both customer and employee.
          </p>
        </div>

        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <Image src="/static/images/shop/log15.jpeg" alt="image" width={170} height={400} />

            <Image src="/static/images/shop/log8.jpeg" alt="image" width={170} height={400} />

            <Image src="/static/images/shop/log16.jpeg" alt="image" width={170} height={400} />

            <Image src="/static/images/shop/log20.jpeg" alt="image" width={170} height={400} />
            <Image src="/static/images/shop/log13.jpeg" alt="image" width={170} height={400} />
            <Image src="/static/images/shop/log21.jpeg" alt="image" width={170} height={400} />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            How does it work?
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Let us explain how we take a logo and get creative with it.
          </p>
        </div>
        <div className="container py-12">
          <div className="w-50 rounded-lg  bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <h3>1. Asset Gathering</h3>
            <p>
              First we work with you to either gather pre-existing logo assets, or use our custom
              tools to extract drawable assets from provided materials.
            </p>
            <h3>2. Client goals / preferences</h3>
            <p>
              We work with you to figure out what kinds of patterns or designs you'd like to
              achieve. Is the goal to make an office look nice or to drive sales by featuring a
              product or idea?
            </p>
            <h3>3. Creative Iteration</h3>
            <p>
              We will take our assets and motivation back to the lab and experiment with a few ideas
              until we have something good to show the client.
            </p>
            <h3>4. Rendering and production</h3>
            <p>
              Once the ideas are realized, the concepts are run through the plotter and the final
              output can finally be viewed.
            </p>
            <h3>4. Shipping / Delivery</h3>
            <p>
              Once the piece is done we take care to make sure your custom artwork arrives safe and
              sound.
            </p>
          </div>
        </div>
      </div>
      <style>
        @import
        url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      </style>

      <div className="min-w-screen">
        <div className="mx-auto mb-10 w-full bg-white px-5 py-10 text-gray-600">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl">Pricing</h1>
            <h3 className="mb-10 text-xl font-medium">
              Enhance the enjoyment of any space, order a Loguilloche today and delight customers
              and employees alike.
            </h3>
          </div>
          <div className="mx-auto max-w-4xl md:flex">
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-6 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">SIMPLE</h2>
                <h3 className="mb-5 text-center text-4xl font-bold">$100</h3>
                <ul className="mb-8 px-5 text-sm">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Up to 8x10
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> At least two colors
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> One vector logo conversion
                    included
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> At least one print
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:relative md:z-50 md:-mx-3 md:mb-0 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">FULL SIZE</h2>
                <h3 className="mb-5 text-center text-4xl font-bold md:text-5xl">$500</h3>
                <ul className="mb-8 px-5 text-sm">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Uo to 11.5x23.5
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> At least four colors
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Two vector logo conversions
                    included
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> At least two different color
                    prints
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-6 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">EXTRA FANCY</h2>
                <h3 className="mb-5 text-center text-4xl font-bold">$1000</h3>
                <ul className="mb-8 px-5 text-sm">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Consectetur
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Adipisicing
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Much more...
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
