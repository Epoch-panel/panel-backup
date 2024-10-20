const h = require('./components/Header');
const s = require('./components/Sidebar');
const fetch = require('node-fetch');

function g(e, cb) {
  fetch('/api/servers/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: e })
  })
  .then(response => response.json())
  .then(data => cb(data.servers || []))
  .catch(err => cb([])); // Handle any errors
}

module.exports = (ctx, req, res) => {
  const e = req.session?.user?.email || '';

  g(e, function(sr) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="description" content="Manage your servers efficiently.">
          <title>Servers</title>
          <script src="/assets/js/app.js"></script>
      </head>
      <body class="w-[calc(100vw - 96px)] p-6 ml-56">
        ${h({ title: 'Servers' })}
        ${s(req)}
        <main class="w-full">
          <div id="content">
            <div class="flex flex-col justify-between w-full">
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-8 text-gray-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Z"/>
                </svg>
                <h1 class="text-gray-200 font-semibold text-xl">Servers</h1>
              </div>
              <span class="text-gray-300 text-md">Manage your servers</span>
            </div>
          </div>
          <div class="flex flex-col max-w-full mt-8 w-full space-y-4">
            ${
              sr.length > 0 
              ? sr.map(sv => `
                <div key="${sv.id}" class="w-full border border-zinc-800/80 rounded-xl" onClick="location.href='/servers/${sv.serverId}'">
                  <div class="w-full border cursor-pointer border-zinc-800/80 rounded-xl">
                    <div class="relative bg-zinc-950 items-center flex justify-between border-b text-gray-300 rounded-xl md:rounded-t-xl border-zinc-800/80 p-2 w-full">
                      <div class="absolute h-full left-0 top-0 items-center justify-center flex">
                        <div class="bg-green-400/80 rounded-full h-12 w-1"></div>
                        <div class="bg-green-400 rounded-full blur-xl p-3"></div>
                      </div>
                      <div class="flex space-x-2 md:space-x-4 items-center p-2">
                        <div class="flex flex-col">
                          <h1 class="text-xl font-bold">${sv.name || 'Unnamed Server'}</h1>
                        </div>
                        <div class="flex space-x-4">
                          <div class="flex flex-col">
                            <div class="flex justify-between items-center w-full">
                              <div class="bg-zinc-900 h-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-xl shadow-lg text-gray-400 rounded-xl p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"/>
                                </svg>
                              </div>
                              <div class="flex flex-col px-2">
                                <h1 class="text-xl text-right text-gray-200">${sv.ram} MB</h1>
                                <span class="text-gray-300 text-sm text-right">Of Memory</span>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-col">
                            <div class="flex justify-between items-center w-full">
                              <div class="bg-zinc-900 h-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-xl shadow-lg text-gray-400 rounded-xl p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
                                </svg>
                              </div>
                              <div class="flex flex-col px-2">
                                <h1 class="text-xl text-right text-gray-200">${sv.disk} MB</h1>
                                <span class="text-gray-300 text-sm text-right">Of Disk Space</span>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-col">
                            <div class="flex justify-between items-center w-full">
                              <div class="bg-zinc-900 h-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-xl shadow-lg text-gray-400 rounded-xl p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                                </svg>
                              </div>
                              <div class="flex flex-col px-2">
                                <h1 class="text-xl text-right text-gray-200">${sv.cpu}%</h1>
                                <span class="text-gray-300 text-sm text-right">Of CPU</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <div class="flex justify-between items-center w-full">
                            <span class="py-3" onClick="console.log('Show menu')">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('') 
              : '<span class="text-gray-300 text-center text-md">Empty, like your brain</span>'
            }
          </div>
        </main>
      </body>
      </html>
    `);
  });
};
