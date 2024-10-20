const Header = require('./components/Header');
const Sidebar = require('./components/Sidebar');

module.exports = (req) => 
  `
  <div>
    ${Header({ title: 'Dashboard' }, req)}
    ${Sidebar(req)}
    <main class="w-[calc(100vw - 96px)] p-6 ml-56">
      <div id="content">
        <div class="flex space-x-4 items-center p-2">
          <h1 class="text-3xl font-bold text-white">Welcome back, Demon</h1>
        </div>
      </div>
    </main>
  </div>
  `;
