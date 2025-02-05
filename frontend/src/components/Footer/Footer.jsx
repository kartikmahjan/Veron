export default function Footer() {
  return (
    <footer className="bg-gray-200 h-96 pt-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800">
              About Us
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800">
              Links
            </h2>
            <ul className="list-none">
              <li className="my-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Home
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  About
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800">
              Social
            </h2>
            <ul className="list-none">
              <li className="my-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-12">
          Copyright 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
