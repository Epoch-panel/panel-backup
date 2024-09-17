/*import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard');

    const handleClick = (item) => {
        setActive(item);
    };

    return (
        <>
        <nav className="w-screen overflow-x-hidden h-20">
            <div className="pl-56 bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent h-full p-px">
                <div className="w-full h-full bg-zinc-950"></div>
            </div>
        </nav>

        <aside className="fixed left-0 top-0 bottom-0 h-screen w-56 bg-gradient-to-b from-transparent via-zinc-100/10 to-transparent p-px">
            <div className="w-full h-full bg-zinc-950 px-4">
                <div className="relative top-0 w-full h-20 flex items-center justify-center">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500/50 font-raleway">
                        E1
                    </h1>
                    <div className="absolute bg-zinc-950/50 border border-zinc-100/10 p-1.5 text-zinc-400 rounded-full -right-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent h-px mb-4"></div>
                <div className="mt-2 justify-start flex flex-col text-left items-start">
                    <span className="text-zinc-400 text-left text-xs">Dashboard</span>
                    <ul className="space-y-1 w-full mt-2">
                        <li className={`relative overflow-hidden items-center w-full py-2 ${active === 'Dashboard' ? 'text-white bg-zinc-900/50' : 'text-zinc-400 backdrop-blur-xl'} rounded-xl px-2`} onClick={() => handleClick('Dashboard')}>
                            <div className={`absolute ${active === 'Dashboard' ? 'h-full left-0 top-0 items-center justify-center flex' : 'opacity-0 h-full left-0 top-0 items-center justify-center flex'}`}>
                                <div className="bg-cyan-400/80 rounded-full h-5 w-1"></div>
                                <div className="bg-cyan-400 rounded-full blur-xl p-3"></div>
                            </div>
                            <div className="w-full flex items-center space-x-4 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </div>
                        </li>
                        <li className={`relative overflow-hidden items-center w-full py-2 ${active === 'Servers' ? 'text-white bg-zinc-900/50' : 'text-zinc-400 backdrop-blur-xl'} rounded-xl px-2`} onClick={() => handleClick('Servers')}>
                            <div className={`absolute ${active === 'Servers' ? 'h-full left-0 top-0 items-center justify-center flex' : 'opacity-0 h-full left-0 top-0 items-center justify-center flex'}`}>
                                <div className="bg-cyan-400/80 rounded-full h-5 w-1"></div>
                                <div className="bg-cyan-400 rounded-full blur-xl p-3"></div>
                            </div>
                            <div className="w-full flex items-center space-x-4 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                                </svg>
                                <span>Servers</span>
                            </div>
                        </li>
                        <li className={`relative overflow-hidden items-center w-full py-2 ${active === 'Deploy' ? 'text-white bg-zinc-900/50' : 'text-zinc-400 backdrop-blur-xl'} rounded-xl px-2`} onClick={() => handleClick('Deploy')}>
                            <div className={`absolute ${active === 'Deploy' ? 'h-full left-0 top-0 items-center justify-center flex' : 'opacity-0 h-full left-0 top-0 items-center justify-center flex'}`}>
                                <div className="bg-cyan-400/80 rounded-full h-5 w-1"></div>
                                <div className="bg-cyan-400 rounded-full blur-xl p-3"></div>
                            </div>
                            <div className="w-full flex items-center space-x-4 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6.75V6a.75.75 0 0 1 .75-.75h16.5A.75.75 0 0 1 20.25 6v.75m0 0v.375c0 .621-.504 1.125-1.125 1.125H3a1.125 1.125 0 0 1-1.125-1.125V6.75M4.5 6.75h15m0 0v.375a.75.75 0 0 1-.75.75h-.75m.75-.75V6a.75.75 0 0 1 .75-.75h.75M7.5 18.75a1.125 1.125 0 0 0-1.125 1.125v.75M16.5 16.5a1.125 1.125 0 0 0-1.125-1.125v-.75m.375.75H4.5a.75.75 0 0 0-.75.75v.75m0-2.25a.75.75 0 0 0 .75-.75v-.75M16.5 18a.75.75 0 0 0-.75.75v.75m0-2.25h.375a1.125 1.125 0 0 0 1.125-1.125v-.75Zm-5.625 1.125a.75.75 0 0 0 .75-.75v-.75m0 2.25a.75.75 0 0 0 .75-.75v-.75m-3.75 0v.75a.75.75 0 0 0 .75.75h1.125a.75.75 0 0 0 .75-.75v-.75m0 2.25a.75.75 0 0 0 .75-.75v-.75M14.25 18a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 .75.75m0-2.25v.75a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75v-.75m0 2.25a.75.75 0 0 0 .75-.75v-.75" />
                                </svg>
                                <span>Deploy</span>
                            </div>
                        </li>
                        <li className={`relative overflow-hidden items-center w-full py-2 ${active === 'Settings' ? 'text-white bg-zinc-900/50' : 'text-zinc-400 backdrop-blur-xl'} rounded-xl px-2`} onClick={() => handleClick('Settings')}>
                            <div className={`absolute ${active === 'Settings' ? 'h-full left-0 top-0 items-center justify-center flex' : 'opacity-0 h-full left-0 top-0 items-center justify-center flex'}`}>
                                <div className="bg-cyan-400/80 rounded-full h-5 w-1"></div>
                                <div className="bg-cyan-400 rounded-full blur-xl p-3"></div>
                            </div>
                            <div className="w-full flex items-center space-x-4 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.4 21.6a2.25 2.25 0 0 1-1.75-.8c-.481-.67-.9-1.38-1.2-2.1-.378-.771-.7-1.594-.85-2.425-.017-.106-.017-.211 0-.317.053-.309.153-.612.308-.893.224-.409.494-.787.8-1.149.114-.132.23-.263.35-.398.109-.119.242-.217.386-.316a6.563 6.563 0 0 1 3.4-.904c.64.097 1.245.294 1.8.56.43.22.834.46 1.232.728.418.281.8.612 1.158.986.284.307.524.652.72 1.014.066.13.12.261.157.394.034.133.06.268.06.405 0 .488-.093.97-.268 1.425a5.97 5.97 0 0 1-.727 1.393c-.16.325-.34.646-.54.964a7.406 7.406 0 0 1-1.227 1.23c-.493.423-1.037.798-1.628 1.083a7.375 7.375 0 0 1-2.395.446m-2.8-4.125a3.75 3.75 0 1 1 5.25 0 3.75 3.75 0 0 1-5.25 0Zm1.25-3.75a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-1.5 0V8.625a.75.75 0 0 1 .75-.75Zm3 1.125a.75.75 0 0 1 .75.75v1.875a.75.75 0 0 1-1.5 0V9.75a.75.75 0 0 1 .75-.75Zm0-1.875a.75.75 0 0 1 .75.75v.375a.75.75 0 0 1-1.5 0v-.375a.75.75 0 0 1 .75-.75ZM12 3a9 9 0 0 1 9 9v3a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-3a9 9 0 0 1 9-9Zm0 1.5a7.5 7.5 0 0 0-7.5 7.5v3a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5v-3a7.5 7.5 0 0 0-7.5-7.5ZM12 7.5a4.5 4.5 0 0 1 4.5 4.5v1.5a4.5 4.5 0 0 1-4.5 4.5 4.5 4.5 0 0 1-4.5-4.5v-1.5a4.5 4.5 0 0 1 4.5-4.5Zm0 1.5a3 3 0 0 0-3 3v1.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-1.5a3 3 0 0 0-3-3Z" />
                                </svg>
                                <span>Settings</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        </>
    );
};

export default Sidebar;
*/
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <>
    <nav className="w-screen overflow-x-hidden h-20">
        <div className="pl-56 bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent h-full p-px">
            <div className="w-full h-full bg-zinc-950"></div>
        </div>
    </nav>

    <aside className="fixed left-0 top-0 bottom-0 h-screen w-56 bg-gradient-to-b from-transparent via-zinc-100/10 to-transparent p-px">
        <div className="w-full h-full bg-zinc-950 px-4">
            <div className="relative top-0 w-full h-20 flex items-center justify-center">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500/50 font-raleway">
                    E1
                </h1>
                <div className="absolute bg-zinc-950/50 border border-zinc-100/10 p-1.5 text-zinc-400 rounded-full -right-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                </div>
            </div>
            <div className="w-full bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent h-px mb-4"></div>
            <div className="mt-2 justify-start flex flex-col text-left items-start">
                <span className="text-zinc-400 text-left text-xs">Dashboard</span>
    <ul className="space-y-1 w-full mt-2">
      {linkse.map((item) => (
        <li
          key={item.href}
          className={`relative overflow-hidden items-center w-full py-2 ${
            pathname === item.href ? 'text-white bg-zinc-900/50' : 'text-zinc-400'
          } backdrop-blur-xl rounded-xl px-2`}
        >
          <div className={`absolute ${pathname === item.href ? 'opacity-100' : 'opacity-0'} h-full left-0 top-0 items-center justify-center flex`}>
            <div className="bg-cyan-400/80 rounded-full h-5 w-1"></div>
            <div className="bg-cyan-400 rounded-full blur-xl p-3"></div>
          </div>
          <Link href={item.href} className="w-full flex items-center space-x-4 pl-2">
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
        </div>
        </div>
    </aside>
    </>
  );
};

const linkse = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
      ),
      active: true,
    },
    {
      label: 'Servers',
      href: '/servers',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
      active: false,
    },
    {
        label: 'Account',
        href: '/account',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
          
        ),
        active: false,
      },
      {
        label: 'Admin',
        href: '/admin',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          
        ),
        active: false,
      },
  ];

export default Sidebar;
