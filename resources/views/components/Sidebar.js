module.exports = () => `
    <nav class="w-screen overflow-x-hidden h-20">
      <div class="pl-56 bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent h-full p-px">
        <div class="w-full h-full bg-zinc-950"></div>
      </div>
    </nav>

    <aside class="fixed left-0 top-0 bottom-0 h-screen w-56 bg-gradient-to-b from-transparent via-zinc-100/10 to-transparent p-px">
      <div class="w-full h-full bg-zinc-950 px-4">
        <div class="relative top-0 w-full h-20 flex items-center justify-center">
          <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500/50 font-raleway">E1</h1>
          <div class="absolute bg-zinc-950/50 border border-zinc-100/10 p-1.5 text-zinc-400 rounded-full -right-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
          </div>
        </div>
        <div class="w-full bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent h-px mb-4"></div>
        <div class="mt-2 justify-start flex flex-col text-left items-start">
          <span class="text-zinc-400 text-left text-xs">Dashboard</span>
          <ul class="space-y-1 w-full mt-2" id="sidebar-links">
            ${linkse.map(item => `
              <li class="relative overflow-hidden items-center w-full py-2 backdrop-blur-xl rounded-xl px-2">
                <div class="absolute opacity-0 h-full left-0 top-0 items-center justify-center flex highlight-indicator">
                  <div class="bg-cyan-400/80 rounded-full h-5 w-1"></div>
                  <div class="bg-cyan-400 rounded-full blur-xl p-3"></div>
                </div>
                <a href="${item.href}" class="w-full flex items-center space-x-4 pl-2">
                  ${item.icon}
                  <span>${item.label}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </aside>

    <script>
      // Use client-side JavaScript to handle the active class based on the current URL
      document.addEventListener('DOMContentLoaded', function () {
        const pathname = window.location.pathname;
        const links = document.querySelectorAll('#sidebar-links li');

        links.forEach(link => {
          const anchor = link.querySelector('a');
          if (anchor.getAttribute('href') === pathname) {
            link.classList.add('text-white', 'bg-zinc-900/50');
            link.querySelector('.highlight-indicator').style.opacity = '100';
          } else {
            link.classList.add('text-zinc-400');
          }
        });
      });
    </script>
  `;
const linkse = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    `,
    active: true,
  },
  {
    label: 'Servers',
    href: '/servers',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    `,
    active: false,
  },
  {
    label: 'Account',
    href: '/account',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    `,
    active: false,
  },
  {
    label: 'Admin',
    href: '/admin',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    `,
    active: false,
  },
];

