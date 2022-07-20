import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = {
  pages: [
    {
      id: "TopOffers",
      name: "TOP OFFERS",
      Link: "/topoffers",
    },
  ],
  categories: [
    {
      id: "BodyCare",
      name: "BODY CARE",
      Link: "/bodycare",
      sections: [
        {
          id: "bathandshower",
          name: "BATH & SHOWER",
          items: [
            { name: "All Bath & Shower", Link: "/bodycare" },
            { name: "Body Wash & Shower Gel", Link: "/bodycare" },
            { name: "Bubble Bath", Link: "/bodycare" },
            { name: "Body Scrub", Link: "/bodycare" },
            { name: "Bar Soap", Link: "/bodycare" },
            { name: "Bath Accessories", Link: "/bodycare" },
          ],
        },
        {
          id: "moisturizers",
          name: "MOISTURIZERS",
          items: [
            { name: "All Moisturizers", Link: "/bodycare" },
            { name: "Body Lotion", Link: "/bodycare" },
            { name: "Body Cream", Link: "/bodycare" },
            { name: "Hand Cream", Link: "/bodycare" },
            { name: "Lip Gloss & Balams", Link: "/bodycare" },
          ],
        },
        {
          id: "fragrance",
          name: "Fragrance",
          items: [
            { name: "All Fragrance", Link: "/bodycare" },
            { name: "Body Spray & Mists", Link: "/bodycare" },
            { name: "Perfume & Cologne", Link: "/bodycare" },
          ],
        },
        {
          id: "aromatherapy",
          name: "AROMATHERAPY",
          items: [
            { name: "All Aromatherapy", Link: "/bodycare" },
            { name: "Body Wash & Shower Gel", Link: "/bodycare" },
            { name: "Moisturizers", Link: "/bodycare" },
            { name: "Mists & Spray", Link: "/bodycare" },
          ],
        },
        {
          id: "featurd",
          name: "FEATURED",
          items: [
            { name: "Retired Fragrance", Link: "/bodycare" },
            { name: "Travel Size", Link: "/bodycare" },
          ],
        },
        {
          id: "bodycaroffers",
          name: "BODY CARE OFFERS",
          items: [
            { name: "$2.95 All Dun Size Fragrances", Link: "/bodycare" },
            {
              name: "Buy 3, Get 1 Free All Full-Size Body Care",
              Link: "/bodycare",
            },
          ],
        },
        {
          id: "exploreboducare",
          name: "EXPLORE BODY CARE",
          Link: "/bodycare",
        },
      ],
    },
    {
      id: "candle",
      name: "CANDLES",
      Link: "/candles",
      sections: [
        {
          id: "allcandle",
          name: "ALL CANDLES",
          items: [
            { name: "3-Wicks Candles", Link: "/candles" },
            { name: "Single Wick Candles", Link: "/candles" },
            { name: "Candle Holdrs & Accessories", Link: "/candles" },
          ],
        },
        {
          id: "featured",
          name: "FEATURED",
          items: [{ name: "The White Barn Shop", Link: "/candles" }],
        },
        {
          id: "candleoffer",
          name: "CANDLES OFFERS",
          items: [{ name: "2/$22 Single Wick Candle", Link: "/candles" }],
        },
        {
          id: "explorecandle",
          name: "EXPLORE CANDLES",
          Link: "/candles",
        },
      ],
    },
    {
      id: "homefragrance",
      name: "HOME FRAGRANCE",
      Link: "/homefragrance",
      sections: [
        {
          id: "airfresheners",
          name: "AIR FRSHENERS",
          items: [
            { name: "All Wallflowers", Link: "/homefragrance" },
            { name: "Wallflowers Plugs", Link: "/homefragrance" },
            { name: "Room Sprays & Mists", Link: "/homefragrance" },
            { name: "Cars Fragrance", Link: "/homefragrance" },
          ],
        },
        {
          id: "featured",
          name: "FEATURED",
          items: [{ name: "Auto Refresh Wallflowers", Link: "/homefragrance" }],
        },
        {
          id: "homefragranceoffers",
          name: "HOME FRAGRANCE OFFERS",
          items: [
            {
              name: "$3.95 Wallflowers Fragrance Refills",
              Link: "/homefragrance",
            },
            {
              name: "3/$22 Room Sprays",
              Link: "/homefragrance",
            },
            {
              name: "3/$10 Cars Fragrance Refills",
              Link: "/homefragrance",
            },
          ],
        },
        {
          id: "explorehomefragrance",
          name: "EXPLORE HOME FRAGRANCE",
          Link: "/homefragrance",
        },
      ],
    },
    {
      id: "homesoaps",
      name: "HOME SOAPS & SANITIZERS",
      Link: "/homesoaps",
      sections: [
        {
          id: "handsoaps",
          name: "HAND SOAPS",
          items: [
            { name: "All Hand Soaps", Link: "/homesoaps" },
            { name: "Foaming Soaps", Link: "/homesoaps" },
            { name: "Gel Soaps", Link: "/homesoaps" },
            { name: "Soaps Holders", Link: "/homesoaps" },
          ],
        },
        {
          id: "handsanitizers",
          name: "HAND SANITIZERS",
          items: [
            { name: "All Hand Sanitizers", Link: "/homesoaps" },
            { name: "PocketBac Hand Sanitizers", Link: "/homesoaps" },
            { name: "Hand Sanitizers Sprays", Link: "/homesoaps" },
            { name: "Full Size ", Link: "/homesoaps" },
            { name: "Hand Sanitizers Holders ", Link: "/homesoaps" },
          ],
        },
        {
          id: "featured",
          name: "FEATURED",
          items: [{ name: "Gentle & Clean Hand Soaps", Link: "/homesoaps" }],
        },
        {
          id: "homesanitizersoffers",
          name: "HAND SOAPS & SANITIZERS OFFERS",
          items: [
            {
              name: "$2.95 All Fun Size Fragrance",
              Link: "/homesoaps",
            },
            {
              name: "5/$25 hand Soaps",
              Link: "/homesoaps",
            },
            {
              name: "$8 Hand Sanitizers 5-Packs",
              Link: "/homesoaps",
            },
          ],
        },
        {
          id: "explorehomefragrance",
          name: "EXPLORE HAND SOAPS & SANITIZERS",
          Link: "/homesoaps",
        },
      ],
    },
    {
      id: "mens",
      name: "MEN'S",
      Link: "/mens",
      sections: [
        {
          id: "mensoaps",
          name: "THE MEN's SOAPS",
          items: [
            { name: "All Men's Body Care", Link: "/mens" },
            { name: "Body Wash & Shower Gel", Link: "/mens" },
            { name: "Moisturizers", Link: "/mens" },
            { name: "Body Spray & Colgne", Link: "/mens" },
            { name: "Home Fragrance", Link: "/mens" },
            { name: "Hand Soaps & Sanitizers", Link: "/mens" },
          ],
        },
        {
          id: "exploremen",
          name: "EXPLORE MEN'S",
          Link: "/mens",
        },
      ],
    },
    {
      id: "gifts",
      name: "GIFTS",
      Link: "/gifts",
      sections: [
        {
          id: "featured",
          name: "FEATURED",
          items: [{ name: "Gift Sets", Link: "/gifts" }],
        },
        {
          id: "giftbyprice",
          name: "GIFTS BY PRICE",
          items: [
            { name: "$15 & Under Gifts", Link: "/gifts" },
            { name: "$30 & Under Gifts", Link: "/gifts" },
            { name: "$50 & Under Gifts", Link: "/gifts" },
          ],
        },
        {
          id: "giftbyrecipents",
          name: "GIFT BY RECIPIENT",
          items: [
            { name: "Gift For Her", Link: "/gifts" },
            { name: "Gift For Him", Link: "/gifts" },
            { name: "Gift For Everyone", Link: "/gifts" },
            { name: "Gift For Hostess ", Link: "/gifts" },
          ],
        },
        {
          id: "collection",
          name: "COLLECTION",
          items: [
            {
              name: "Gift Boxes & Bags",
              Link: "/gifts",
            },
            {
              name: "Accessories",
              Link: "/gifts",
            },
          ],
        },
        {
          id: "giftcard",
          name: "GIFT CARDS",
          items: [
            {
              name: "E-Gift Cards",
              Link: "/gifts",
            },
            {
              name: "Gift Cards",
              Link: "/gifts",
            },
          ],
        },
        {
          id: "exploregift",
          name: "EXPLORE GIFTS",
          Link: "/gifts",
        },
      ],
    },
    {
      id: "newandnow",
      name: "NEW & NOW",
      Link: "/newarrival",
      sections: [
        {
          id: "newandnow",
          name: "NEW & NOW",
          items: [
            { name: "New Arrival", Link: "/newarrival" },
            { name: "Aromaherapy Shops", Link: "/newarrival" },
            { name: "Fall Collection", Link: "/newarrival" },
            { name: "Holloween", Link: "/newarrival" },
            { name: "Best Sellers", Link: "/newarrival" },
            { name: "Get Inspire", Link: "/homesoaps" },
            { name: "Shop By Fragrance", Link: "/newarrival" },
          ],
        },
        {
          id: "explorenewandnow",
          name: "EXPLORE NEW & NOW",
          Link: "/newarrival",
        },
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CatNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white catNavar flex">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation?.categories?.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation?.categories?.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category?.featured?.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <Link
                              to={item.Link}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      {category?.sections?.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section?.items?.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link
                                  to={item.Link}
                                  className="-m-2 p-2 block text-gray-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation?.pages?.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.Link}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div>
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8 gap-16">
                  {navigation?.categories?.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category?.featured?.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <Link
                                            to={item.Link}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute z-10 inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category?.sections?.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section?.items?.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Link
                                                  to={item.Link}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation?.pages?.map((page) => (
                    <Link
                      key={page.name}
                      to={page.Link}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
