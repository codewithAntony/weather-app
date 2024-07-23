function Header() {
    return (
        <div>
            
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex justify-between items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li>
                        <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                        aria-current="page"
                        >
                        Home
                        </a>
                    </li>
                    </ul>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a
                    href="#"
                    className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                    >
                    Login
                    </a>
                </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Header