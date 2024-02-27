import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to="/" className=' font-bold dark:text-white text-lg sm:text-xl'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Andreas</span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div >
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col >
                        <Footer.Link 
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            JS Project
                        </Footer.Link>
                        <Footer.Link 
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            New Projects
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div >
                    <Footer.Title title='Follow us' />
                    <Footer.LinkGroup col >
                        <Footer.Link 
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link 
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div >
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col >
                        <Footer.Link 
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link 
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Security Policy
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='/' by='Andreas Papakostas'  year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                </div>
            </div>
        </div> 
    </Footer>
  )
}
