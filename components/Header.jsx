import { useState, useEffect } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Wrapper from './Wrapper';
import { fetchDataFromApi } from '@/utils/api';
// import { FiUser } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import { useSelector } from 'react-redux';

// import { auth, provider } from '@/utils/firebase/firebase';
// import { signInWithPopup, updateProfile } from 'firebase/auth';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(cartItems);
  const [searchValue, setSearchValue] = useState(null);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
        // setShow('translate-y-0');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    // component unmounting...
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    getCategories();
    localStorage.getItem('email');
  }, []);

  const getCategories = async () => {
    const { data } = await fetchDataFromApi('/api/categories?populate=*');
    setCategories(data);
  };

  // const handleAuth = async () => {
  //   const data = await signInWithPopup(auth, provider);
  //   console.log(auth.currentUser.displayName);
  //   const user = auth.currentUser.displayName;
  //   setUser(user);
  //   localStorage.setItem('email', data.user.email);
  //   console.log(user);
  // };

  const handleSearchClick = (e) => {
    setSearchValue(e.target.value);
    const filterBySearch = cartItems.filter((item) => {
      if (item.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  };
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img
            src="/assets/main-logo1.png"
            className="w-[110px] md:w-[220px]"
          />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        {/* search-bar start */}
        {/* <form class="flex items-center">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={searchValue}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
              onChange={(e) => {
                handleSearchClick(e);
              }}
            />
          </div>
        </form> */}
        {/* searchbar end */}
        {/* icons start */}
        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />

            {/* <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {wishlist.length}
              </div> */}
          </div>
          {/* {user ? (
            `Hello, ${user}`
          ) : (
            <div
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
              onClick={handleAuth}
            >
              <FiUser className="text-[19px] md:text-[24px]" />
            </div>
          )} */}

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-500 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
          {/* start --- mobile menus */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* end --- mobile menus */}
        </div>
        {/* icons end */}
      </Wrapper>
    </header>
  );
};

export default Header;
