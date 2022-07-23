import Image from 'next/image'

import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

import mapsData from '@/data/mapsData'

import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Gallery() {
  return (
    <>
      <PageSEO title={`Maps - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Pen Plotter Maps
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Pen plotter drawn maps, most symbols removed for a clean aesthetic.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <Image src="/static/images/shop/map1.jpeg" alt="image" width={400} height={600} />

            <Image src="/static/images/shop/map2.jpeg" alt="image" width={430} height={550} />

            <Image src="/static/images/shop/map3.jpeg" alt="image" width={1070} height={800} />
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="-m-4 flex flex-wrap">
            <Image src="/static/images/shop/map5.jpeg" alt="image" width={170} height={400} />

            <Image src="/static/images/shop/map6.jpeg" alt="image" width={170} height={400} />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Existing Maps
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Maps that have already been drawn, these can be customized and shipped quickly.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {mapsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        @import
        url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      </style>

      <div className="min-w-screen min-h-screen">
        <div className="mx-auto mb-10 w-full bg-white px-5 py-10 text-gray-600">
          <div className="mx-auto max-w-5xl md:flex">
            <div className="md:flex md:w-1/4 md:flex-col">
              <div className="w-full flex-grow text-left md:pr-5">
                <h1 className="mb-5 text-4xl font-bold">Pricing</h1>
                <h3 className="text-md mb-5 font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos
                  laboriosam odit accusamus porro*
                </h3>
              </div>
              <div className="mb-2 w-full">
                <p className="text-xs">*Lorem ipsum sit amet</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="mx-auto max-w-4xl md:flex">
                <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-2 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
                  <div className="w-full flex-grow">
                    <h2 className="mb-4 text-center font-bold uppercase">PERSONAL</h2>
                    <h3 className="mb-5 text-center text-4xl font-bold">
                      $5<span className="text-sm">/mo</span>
                    </h3>
                    <ul className="mb-8 text-sm">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet
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
                    <h2 className="mb-4 text-center font-bold uppercase">TEAM</h2>
                    <h3 className="mb-5 text-center text-4xl font-bold md:text-5xl">
                      $15<span className="text-sm">/mo</span>
                    </h3>
                    <ul className="mb-8 text-sm">
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
                        <i className="mdi mdi-check-bold text-lg"></i> Elit repellat
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-2 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
                  <div className="w-full flex-grow">
                    <h2 className="mb-4 text-center font-bold uppercase">PRO</h2>
                    <h3 className="mb-5 text-center text-4xl font-bold">
                      $35<span className="text-sm">/mo</span>
                    </h3>
                    <ul className="mb-8 text-sm">
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
        </div>

        <div className="mx-auto mb-10 w-full bg-white px-5 py-10 text-gray-600">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl">Pricing</h1>
            <h3 className="mb-10 text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos
              laboriosam odit accusamus porro
            </h3>
          </div>
          <div className="mx-auto max-w-4xl md:flex">
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-6 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">PERSONAL</h2>
                <h3 className="mb-5 text-center text-4xl font-bold">$5/mo</h3>
                <ul className="mb-8 px-5 text-sm">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet
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
                <h2 className="mb-4 text-center font-bold uppercase">TEAM</h2>
                <h3 className="mb-5 text-center text-4xl font-bold md:text-5xl">$15/mo</h3>
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
                    <i className="mdi mdi-check-bold text-lg"></i> Elit repellat
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
                <h2 className="mb-4 text-center font-bold uppercase">PRO</h2>
                <h3 className="mb-5 text-center text-4xl font-bold">$35/mo</h3>
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

        <div className="mx-auto mb-10 w-full bg-white px-5 py-10 text-gray-600">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl">Pricing</h1>
            <h3 className="mb-10 text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos
              laboriosam odit accusamus porro
            </h3>
          </div>
          <div className="mb-5 w-full md:flex">
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-6 md:flex md:w-1/4 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">PERSONAL</h2>
                <h3 className="mb-2 text-center text-4xl font-bold">
                  $5<span className="text-lg">/mo</span>
                </h3>
                <p className="mb-5 text-center font-bold">
                  <a
                    href="#"
                    className="inline-block transform transition-all hover:scale-110 hover:text-gray-700 hover:underline"
                  >
                    Read more<i className="mdi mdi-arrow-right-thick ml-1"></i>
                  </a>
                </p>
                <ul className="mb-8 px-5 text-sm">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:relative md:z-50 md:-mx-3 md:my-3 md:flex md:w-1/4 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">TEAM</h2>
                <h3 className="mb-2 text-center text-3xl font-bold md:text-4xl">
                  $15<span className="text-lg">/mo</span>
                </h3>
                <p className="mb-5 text-center font-bold">
                  <a
                    href="#"
                    className="inline-block transform transition-all hover:scale-110 hover:text-gray-700 hover:underline"
                  >
                    Read more<i className="mdi mdi-arrow-right-thick ml-1"></i>
                  </a>
                </p>
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
                    <i className="mdi mdi-check-bold text-lg"></i> Elit repellat
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:relative md:z-50 md:-mx-3 md:mb-0 md:flex md:w-1/4 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-4 text-center font-bold uppercase">PRO</h2>
                <h3 className="mb-2 text-center text-4xl font-bold md:text-5xl">
                  $35<span className="text-lg">/mo</span>
                </h3>
                <p className="mb-5 text-center font-bold">
                  <a
                    href="#"
                    className="inline-block transform transition-all hover:scale-110 hover:text-gray-700 hover:underline"
                  >
                    Read more<i className="mdi mdi-arrow-right-thick ml-1"></i>
                  </a>
                </p>
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
            <div className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-gray-600 md:my-3 md:flex md:w-1/4 md:max-w-none md:flex-col md:px-10 md:py-10">
              <div className="w-full flex-grow">
                <h2 className="mb-2 text-center text-3xl font-bold uppercase">ENTERPRISE</h2>
                <p className="mb-5 text-center font-bold">
                  <a
                    href="#"
                    className="inline-block transform transition-all hover:scale-110 hover:text-gray-700 hover:underline"
                  >
                    Read more<i className="mdi mdi-arrow-right-thick ml-1"></i>
                  </a>
                </p>
                <ul className="mb-8 px-5 text-sm">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Consectetur
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Adipisicing
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Sed do eiusmod
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Aliquip ex
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Excepteur
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet*
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="w-full rounded-md bg-gray-600 px-10 py-2 font-bold text-white transition-colors hover:bg-gray-700">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs leading-tight">
              *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eligendi officiis,
              impedit ducimus eaque a corporis, dolore quia officia quam tenetur suscipit dolores,
              quos, quaerat quo provident iusto. Eius, impedit!
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4 flex items-end justify-end">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
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
    </>
  )
}
