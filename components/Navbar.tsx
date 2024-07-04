"use client";

import React, {RefObject, useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import {DownloadIcon, MenuIcon} from "lucide-react";

const Navbar = ({introRef, endUserRef, developerRef, faqRef, downloadRef}: {
    introRef: RefObject<any>;
    endUserRef: RefObject<any>;
    developerRef: RefObject<any>;
    faqRef: RefObject<any>;
    downloadRef: RefObject<any>;
}) => {
    const [isTop, setIsTop] = useState(true);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 100;
            setIsTop(!isTop);
        });
    }, []);

    const closeNavbar = () => {
        setNavbarOpen(false);
    }

    return (
        <nav
            className={`fixed w-full z-30 top-0 text-white transition duration-300 ease-in-out  ${isTop ? 'bg-black backdrop-blur-3xl bg-opacity-30' : 'bg-nh-darkblue shadow-xl'}`}>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <div
                    className='hidden lg:flex w-full font-medium text-white mb-4 md:mb-0 flex-row items-center justify-between gap-4'>
                    <div className={"cursor-pointer"} onClick={() => {
                        introRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: "start"
                        });
                        closeNavbar();
                    }}>
                        <img src={"/logo.svg"} width={50} height={50}
                             className={`${isTop ? 'block' : 'block'}`}/>

                    </div>
                    <div className='flex flex-row gap-14 text-lg items-center justify-center'>
                    <button onClick={() => {
                            endUserRef.current.scrollIntoView({
                                behavior: 'smooth',
                                block: "start"
                            });
                            closeNavbar();
                        }}>About me
                        </button>
                        <button onClick={() => {
                            developerRef.current.scrollIntoView({
                                behavior: 'smooth',
                                block: "start"
                            });
                            closeNavbar();
                        }}>My timeline
                        </button>
                        <button onClick={() => {
                            faqRef.current.scrollIntoView({
                                behavior: 'smooth',
                                block: "start"
                            });
                            closeNavbar();
                        }}>Projects
                        </button>
                    </div>
                    <div className={"flex flex-row text-lg items-center justify-center"}>
                        <button
                            className={"hidden lg:inline-flex gap-2 bg-gradient-to-br from-nh-darkblue to-nh-darkblue p-3 rounded-xl shadow-xl"}
                            onClick={() => {
                                downloadRef.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: "start"
                                });
                                closeNavbar();
                            }}><DownloadIcon/> Get my CV
                        </button>
                    </div>
                </div>
                <div className={"w-full flex flex-row justify-between items-center lg:hidden"}>
                    <div className={"cursor-pointer"} onClick={() => {
                        introRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: "start"
                        });
                        closeNavbar();
                    }}>
                        <img src={"/aurora_v2_logo.svg"} width={60} height={60}
                             className={`${isTop ? 'hidden' : 'block'}`}/>
                        <img src={"/aurora_text_logo.svg"} width={100} height={100}
                             className={`${isTop ? 'block' : 'hidden'}`}/>
                    </div>
                    <div className={"flex flex-row gap-3"}>

                        <button
                            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => {
                                downloadRef.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: "start"
                                });
                                closeNavbar();
                            }}
                        >
                            <DownloadIcon width={30} height={30}/>
                        </button>
                        <button
                            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MenuIcon className={"text-nh-darkblue"} width={30} height={30}/>
                        </button>
                    </div>
                </div>
                <Transition
                    show={navbarOpen}
                    className={"w-full text-nh-darkblue"}
                    enter='transition ease-out duration-100 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    {(ref) => (
                        <div ref={ref} className='lg:flex flex-grow items-center rounded-2xl mt-5 bg-aurora-purple '
                             id='example-navbar-warning'>
                            <div className='w-full flex flex-col gap-14 p-10 text-lg items-center justify-center'>

                                <button onClick={() => {
                                    endUserRef.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: "start"
                                    });
                                    closeNavbar();
                                }}>For end-users
                                </button>
                                <button onClick={() => {
                                    developerRef.current.scrollIntoView({

                                        behavior: 'smooth',
                                        block: "start"
                                    });
                                    closeNavbar();
                                }}>For developers
                                </button>
                                <button onClick={() => {
                                    faqRef.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: "start"
                                    });
                                    closeNavbar();
                                }}>FAQ
                                </button>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav>
    );
};
export default Navbar;