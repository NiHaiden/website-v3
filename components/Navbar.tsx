"use client";

import React, {RefObject, useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import {DownloadIcon, MenuIcon} from "lucide-react";


const Navbar = ({heroRef, aboutMeRef, skillsRef, projectsRef, contactRef}: {
    heroRef: RefObject<any>
    aboutMeRef: RefObject<any>;
    skillsRef: RefObject<any>;
    projectsRef: RefObject<any>;
    contactRef: RefObject<any>;
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

    const navbarButtons: React.ReactNode[] = [
        <button key={1} onClick={() => {
            aboutMeRef.current.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
            closeNavbar();
        }}>About me
        </button>,
        <button key={2} onClick={() => {
            projectsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
            closeNavbar();
        }}>My projects
        </button>,
        <button key={3} onClick={() => {
            skillsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
            closeNavbar();
        }}>Skills
        </button>,

        <button key={4} onClick={() => {
            contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
            closeNavbar();
        }}>Contact
        </button>
    ]

    return (
        <nav
            className={`fixed w-full z-30 top-0 text-white transition duration-300 ease-in-out  ${isTop ? 'bg-black backdrop-blur-3xl bg-opacity-30' : 'bg-nh-darkblue shadow-xl'}`}>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <div
                    className='hidden lg:flex w-full font-medium text-white mb-4 md:mb-0 flex-row items-center justify-between gap-4'>
                    <div className={"cursor-pointer"} onClick={() => {
                        heroRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: "start"
                        });
                        closeNavbar();
                    }}>
                        <img src={"/logo.svg"} width={60} height={60}
                             className={`${isTop ? 'hidden' : 'block'}`}/>
                        <img src={"/logo.svg"} width={50} height={50}
                             className={`${isTop ? 'block' : 'hidden'}`}/>
                    </div>


                    <div className='flex flex-row gap-14 text-lg items-center justify-center'>
                        {navbarButtons.map((navbarButton, index) => (
                            <div key={index}>
                                {navbarButton}
                            </div>
                        ))}
                    </div>
                    <div className={"flex flex-row text-lg items-center justify-center"}>
                        <a target={"_blank"}
                           href={"https://appw.niklas.tech/v1/storage/buckets/66539361000d192b26d6/files/6768a688002b025a0ae1/view?project=66539355000b7b0b757b&mode=admin"}
                           className={"hidden lg:inline-flex gap-2 bg-gradient-to-br from-nh-lightblue to-nh-notsodarkblue p-3 rounded-xl shadow-xl"}
                        ><DownloadIcon/> Get my CV
                        </a>
                    </div>
                </div>
                <div className={"w-full flex flex-row justify-between items-center lg:hidden"}>
                    <div className={"cursor-pointer"} onClick={() => {
                        heroRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: "start"
                        });
                        closeNavbar();
                    }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"/logo.svg"} width={60} height={60}
                             className={`${isTop ? 'hidden' : 'block'}`} alt={"Logo from Niklas Haiden"}/>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"/logo.svg"} width={50} height={50}
                             className={`${isTop ? 'block' : 'hidden'}`} alt={"Logo from Niklas Haiden"}/>
                    </div>
                    <div className={"flex flex-row gap-3 items-center"}>
                        <a target={"_blank"} title={"Download my CV"}
                           href={"https://appw.niklas.tech/v1/storage/buckets/66539361000d192b26d6/files/6768a688002b025a0ae1/view?project=66539355000b7b0b757b&mode=admin"}>
                            
                            <DownloadIcon size={30}/>
                        </a>
                        <button
                            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MenuIcon className={"text-white"} width={30} height={30}/>
                        </button>
                    </div>
                </div>
                <Transition
                    show={navbarOpen}
                    enter='transition ease-out duration-100 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    {(ref: RefObject<any>) => (
                        <div ref={ref} className='lg:flex flex-grow items-center rounded-2xl mt-5 bg-aurora-purple '
                             id='example-navbar-warning'>
                            <div className='w-full flex flex-col gap-14 p-10 text-lg items-center justify-center'>
                                {navbarButtons.map((navbarButton, index) => (
                                    <div key={index}>
                                        {navbarButton}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav>
    );
};
export default Navbar;
