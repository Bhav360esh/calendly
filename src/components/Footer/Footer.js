import React from 'react';
import { logo } from '../../assets/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
// import AppStoreDark from '../../assets/images/AppStoreDark.svg';
import AppStoreLight from '../../assets/images/AppStoreLight.svg';
import GooglePlayStore from '../../assets/images/GooglePlayStore.png';
import { faTwitter, faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <motion.footer class="bg-white dark:bg-gray-900 pt-20 initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-around">
                    <div class="mb-6 md:mb-0">
                        <a href="#" class="flex items-center mb-6">
                            <img src={logo} class="h-8 me-3" alt="Logo" />
                        </a>
                        <p class="self-center text-2xl text-other font-extrabold whitespace-nowrap dark:text-white"> Easy <p className='text-blue-600 mt-1 mb-4'>ahead</p></p>
                        <div class="sm:flex sm:gap-4 flex flex-col md:gap-16 xl:pr-72 sm:items-start sm:justify-between">
                            <div class="text-base text-gray-500 sm:text-left dark:text-gray-400">We take the work out of connecting with others so you can accomplish more.
                            </div>
                            <div className='w-full'>
                                <select id="small" class="block w-full p-2 mb-6 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="AF">Afrikaans</option>
                                    <option value="SQ">Albanian</option>
                                    <option value="AR">Arabic</option>
                                    <option value="HY">Armenian</option>
                                    <option value="EU">Basque</option>
                                    <option value="BN">Bengali</option>
                                    <option value="BG">Bulgarian</option>
                                    <option value="CA">Catalan</option>
                                    <option value="KM">Cambodian</option>
                                    <option value="ZH">Chinese (Mandarin)</option>
                                    <option value="HR">Croatian</option>
                                    <option value="CS">Czech</option>
                                    <option value="DA">Danish</option>
                                    <option value="NL">Dutch</option>
                                    <option selected value="EN">English</option>
                                    <option value="ET">Estonian</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finnish</option>
                                    <option value="FR">French</option>
                                    <option value="KA">Georgian</option>
                                    <option value="DE">German</option>
                                    <option value="EL">Greek</option>
                                    <option value="GU">Gujarati</option>
                                    <option value="HE">Hebrew</option>
                                    <option value="HI">Hindi</option>
                                    <option value="HU">Hungarian</option>
                                    <option value="IS">Icelandic</option>
                                    <option value="ID">Indonesian</option>
                                    <option value="GA">Irish</option>
                                    <option value="IT">Italian</option>
                                    <option value="JA">Japanese</option>
                                    <option value="JW">Javanese</option>
                                    <option value="KO">Korean</option>
                                    <option value="LA">Latin</option>
                                    <option value="LV">Latvian</option>
                                    <option value="LT">Lithuanian</option>
                                    <option value="MK">Macedonian</option>
                                    <option value="MS">Malay</option>
                                    <option value="ML">Malayalam</option>
                                    <option value="MT">Maltese</option>
                                    <option value="MI">Maori</option>
                                    <option value="MR">Marathi</option>
                                    <option value="MN">Mongolian</option>
                                    <option value="NE">Nepali</option>
                                    <option value="NO">Norwegian</option>
                                    <option value="FA">Persian</option>
                                    <option value="PL">Polish</option>
                                    <option value="PT">Portuguese</option>
                                    <option value="PA">Punjabi</option>
                                    <option value="QU">Quechua</option>
                                    <option value="RO">Romanian</option>
                                    <option value="RU">Russian</option>
                                    <option value="SM">Samoan</option>
                                    <option value="SR">Serbian</option>
                                    <option value="SK">Slovak</option>
                                    <option value="SL">Slovenian</option>
                                    <option value="ES">Spanish</option>
                                    <option value="SW">Swahili</option>
                                    <option value="SV">Swedish </option>
                                    <option value="TA">Tamil</option>
                                    <option value="TT">Tatar</option>
                                    <option value="TE">Telugu</option>
                                    <option value="TH">Thai</option>
                                    <option value="BO">Tibetan</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TR">Turkish</option>
                                    <option value="UK">Ukrainian</option>
                                    <option value="UR">Urdu</option>
                                    <option value="UZ">Uzbek</option>
                                    <option value="VI">Vietnamese</option>
                                    <option value="CY">Welsh</option>
                                    <option value="XH">Xhosa</option>
                                </select>
                                {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-900 sm:mt-2 w-full bg-white border hover:ring-2 hover:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white " type="button">English <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>
                                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow sm:w-screen md:w-1/4 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>

                            <div class="flex mt-4 sm:text-left sm:mt-0">
                                <img className='h-16 w-32' href="" src={AppStoreLight} alt=' ' />
                                <img className='h-18 w-36' href="" src={GooglePlayStore} alt=' ' />
                            </div>

                            <div class="flex mt-4 sm:text-left sm:mt-0">
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span class="sr-only"> Twitter Page</span>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    <span class="sr-only">Facebook Page</span>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span class="sr-only">Instagram page</span>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <span class="sr-only">Linkedin Account</span>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <FontAwesomeIcon icon={faYoutube} />
                                    <span class="sr-only">Youtube Account</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div class="flex flex-col gap-4 px-0 lg:px-5">
                                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">About Calendly</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Contact Sales</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Newsroom</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Careers</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Security</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4 px-0 lg:px-10">
                                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white"> Solutions </h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Customer Services</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline"> Sales </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Recruiting</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Information Technology</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Marketing</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4 px-0 lg:px-5">
                                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Popular Features</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Embed Calendly</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Availability</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Sending Notifications</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Using Calendly Mobile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-8 mt-5 sm:gap-6 sm:grid-cols-3">
                            <div class="flex flex-col gap-4 px-0 lg:px-5">
                                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Help Center</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Video Tutorials</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Cookie Settings</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4 px-0 lg:px-10">
                                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Add-Ons</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Download for Chrome</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Download for Firefox</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4 px-0 lg:px-5">
                                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Developers</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Developer Tools</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="#" class="hover:underline"> Privacy / Terms and Conditions</a>
                    </span>
                </div>
            </div>
        </motion.footer>

    )
}

export default Footer