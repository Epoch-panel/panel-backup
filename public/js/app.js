function toggle(id) {
    var element = document.getElementById(id);
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}

document.getElementById("resourcesHolderSVG").addEventListener("click", function(event) {
    event.stopPropagation(); 
    toggle("resourcesHolder");
});

document.getElementById("softwaresHolderSVG").addEventListener("click", function(event) {
    event.stopPropagation(); 
    toggle("softwaresHolder");
});

document.getElementById("nodesHolderSVG").addEventListener("click", function(event) {
    event.stopPropagation(); 
    toggle("nodesHolder");
});

document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('change', function() {
        var id = input.getAttribute('id');
        var value = input.value;
        console.log(id + ": " + value);
    });
});

var originalClass


function resetClass() {
    document.getElementById('random').className = originalClass;
}

function a() {
    originalClass = document.getElementById('random').className;
    resetClass();
    var listItem = document.getElementById('name');
    var textSpan = listItem.querySelector('span');
    var svgIcon = listItem.querySelector('svg');

    textSpan.classList.add('text-green-500');

    svgIcon.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="green" />`;
    var a = document.getElementById('random');
    var b = originalClass;
    if (b) { 
        var c = b.replace('from-gray-600', 'from-zinc-100');
        var d = c.replace('via-gray-600', 'via-zinc-100/40');
        var e = d.replace('to-gray-600', 'to-zinc-100/10');
        a.className = e; 
    } else {
        console.error('originalClass is undefined');
    }
}

function b() {
    resetClass();
    var listItem = document.getElementById('resources');
    var textSpan = listItem.querySelector('span');
    var svgIcon = listItem.querySelector('svg');

    textSpan.classList.add('text-green-500');

    svgIcon.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="green" />`;
    var a = document.getElementById('random');
    var b = originalClass;
    var c = b.replace('from-gray-600', 'from-zinc-100');
    var d = c.replace('via-gray-600', 'via-zinc-100/70');
    var e = d.replace('to-gray-600', 'to-zinc-100/10');
    a.className = e; 
}

function c() {
    resetClass();
    var listItem = document.getElementById('software');
    var textSpan = listItem.querySelector('span');
    var svgIcon = listItem.querySelector('svg');

    textSpan.classList.add('text-green-500');

    svgIcon.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="green" />`;
    var a = document.getElementById('random');
    var b = originalClass;
    var c = b.replace('from-gray-600', 'from-zinc-100');
    var d = c.replace('via-gray-600', 'via-zinc-100');
    var e = d.replace('to-gray-600', 'to-zinc-100/10');
    a.className = e;    
}

function f() {
    resetClass();
    var listItem = document.getElementById('location');
    var textSpan = listItem.querySelector('span');
    var svgIcon = listItem.querySelector('svg');

    textSpan.classList.add('text-green-500');

    svgIcon.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="green" />`;
    var a = document.getElementById('random');
    var b = originalClass;
    var c = b.replace('from-gray-600', 'from-white');
    var d = c.replace('via-gray-600', 'via-white');
    var e = d.replace('to-gray-600', 'to-white');
    a.className = e; 
}

function showMenu(a) {
    event.stopPropagation();
    const menu = document.getElementById(`menu${a}`);
    const c = !menu.classList.contains("hidden");
    document.querySelectorAll('.fileMenu').forEach(function (menu) {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 0;
      menu.style.transform = 'translateY(-5px)';
      menu.classList.add('hidden');
    });
    if (!c) {
      menu.classList.remove("hidden");
      menu.style.opacity = 0;
      setTimeout(() => {
        menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        menu.style.opacity = 1;
        menu.style.transform = 'translateY(0px)';
      }, 10);
    } else {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 0;
      menu.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 10);
    }
  }
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.fileMenu')) {
      document.querySelectorAll('.fileMenu').forEach(function (menu) {
        menu.classList.add('hidden');
      });
    }
  });
  function svg(filename) {
    const extension = filename.split('.').pop().toLowerCase();
    const extensionMap = {
      'jar': `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.99929 3V16H3.49929V3C3.49929 2.33696 3.76268 1.70107 4.23152 1.23223C4.70036 0.763392 5.33625 0.5 5.99929 0.5H14.0422L14.5422 1H14.2493H5.99929C5.46886 1 4.96015 1.21071 4.58508 1.58579C4.21 1.96086 3.99929 2.46957 3.99929 3ZM14.7493 1.5V1.20711L19.7922 6.25H19.4993H16.4993C16.0352 6.25 15.59 6.06563 15.2619 5.73744C14.9337 5.40925 14.7493 4.96413 14.7493 4.5V1.5ZM19.9993 6.45711L20.4993 6.95711V16H19.9993V6.75V6.45711ZM2.75102 22.5926L2.75105 22.5925L2.74923 22.5877C2.74623 22.5796 2.74331 22.5716 2.74045 22.5635H2.90746C2.92743 22.6128 2.95024 22.661 2.97583 22.7079L2.9797 22.715L2.9838 22.722C3.09912 22.9181 3.26576 23.079 3.46577 23.1873C3.66222 23.2938 3.88354 23.3456 4.10668 23.3375C4.48351 23.3353 4.85378 23.2218 5.11252 22.9121C5.35078 22.627 5.43579 22.2643 5.43579 21.8925V18.275H5.62079V21.8625C5.62079 22.4334 5.46836 22.7877 5.23783 23.0105L5.23632 23.0119C4.99943 23.2428 4.64632 23.3875 4.10929 23.3875V23.3874L4.10084 23.3876C3.87194 23.3914 3.64423 23.3539 3.42869 23.2768C3.26851 23.2171 3.12363 23.1225 3.00461 22.9998C2.89239 22.8834 2.80598 22.7446 2.75102 22.5926ZM7.7606 22.0854L7.39771 23.2735H7.26299L8.44195 19.7603L8.00478 21.203L7.80912 21.8487L7.83293 21.8486L7.7606 22.0854ZM8.8909 18.4225L8.9404 18.275H9.60967L11.2796 23.2735H11.0839L10.721 22.0854L10.6478 21.8459L10.6797 21.8458L10.4843 21.2014L9.74928 18.7774L9.64166 18.4225H9.27079H9.21829H8.8909ZM12.2037 18.275H12.5073L13.7506 22.6196L13.8543 22.982H14.2313H14.2883H14.6664L14.7694 22.6181L15.9984 18.275H16.2446L14.5859 23.2735H13.8786L12.2037 18.275ZM17.7196 21.8487L17.7434 21.8486L17.6711 22.0854L17.3082 23.2735H17.1735L18.3525 19.7603L17.9153 21.203L17.7196 21.8487ZM18.8014 18.4225L18.8509 18.275H19.5202L21.1901 23.2735H20.9944L20.6315 22.0854L20.5583 21.8459L20.5902 21.8458L20.3948 21.2014L19.6598 18.7774L19.5522 18.4225H19.1813H19.1288H18.8014Z" stroke="#D9D9D9"/>
        </svg>`,
      'txt': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.2989 23.2366 18.663 23.5 18 23.5H15.5V23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM12.1295 18.768V18.275H12.819V18.768H12.3205V23.2735H12.1295V18.768ZM6.91859 20.4863L5.54924 18.275H5.76103L6.86464 20.1838L7.00903 20.4335H7.2975H7.35H7.64004L7.78403 20.1817L8.87454 18.275H9.01588L7.59237 20.5175L7.42304 20.7843L7.59127 21.0517L8.9888 23.2735H8.81642L7.68711 21.3935L7.54142 21.151H7.2585H7.206H6.92359L6.77779 21.3929L5.64409 23.2735H5.52805L6.91939 21.0115L7.08106 20.7486L6.91859 20.4863ZM2.201 18.275H2.392V18.768V23.2735H2.201V18.768V18.275Z" stroke="#D9D9D9"/>
      </svg>`,
      'yml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.4186 23.117 18.9767 23.3522 18.5 23.4495V22.9365C18.843 22.8479 19.1594 22.669 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM6.0725 23.2735V18.275H6.45348L6.89635 19.2835H6.687H6.63H6.13V19.7835V23.2735H6.0725ZM10.564 18.275H10.9375V23.2735H10.865V19.782V19.282H10.365H10.308H10.1218L10.564 18.275ZM8.5275 22.169H8.71673L8.56213 22.522H8.44098L8.28532 22.169H8.49H8.5275ZM4.36723 18.275L2.76018 21.2323L2.6995 21.3439V21.471V23.2735H2.5085V21.4935V21.3671L2.44843 21.2559L0.838344 18.275H1.0058L2.14681 20.5437L2.2853 20.819H2.5935H2.6415H2.94938L3.08797 20.5441L4.23188 18.275H4.36723ZM13.6935 23.2625H15.739V23.2735H13.007V18.275H13.1935V22.7625V23.2625H13.6935Z" stroke="#D9D9D9"/>
      </svg>`,
      'png': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>`,
      'jpg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
      'wepb': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
      'jpeg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
      'json': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_73_315)">
  <mask id="path-1-inside-1_73_315" fill="white">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z"/>
  </mask>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z" stroke="#D9D9D9" stroke-width="2" mask="url(#path-1-inside-1_73_315)"/>
  </g>
  <defs>
  <clipPath id="clip0_73_315">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>`,
      'properties': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
  </svg>`
    };
    return extensionMap[extension] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H14.25L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="#D9D9D9"/>
    </svg>`;
  }

  const svgIcons = {
    ram: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"></path>
                    </svg>`,
    disk: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                 </svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                      </svg> `,
    servers: ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                          </svg>   `,
    credits: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>`
  };

  function getSvg(iconName) {
    return svgIcons[iconName] || '';
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.resource-icon').forEach(el => {
        const resourceName = el.getAttribute('data-resource');
        el.innerHTML = getSvg(resourceName);
    });
});

  window.addEventListener('load', () => {
    // Apex Multiple Area Charts
    (function () {
      buildChart('#hs-multiple-area-charts', (mode) => ({
        chart: {
          height: 300,
          type: 'area',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        series: [
          {
            name: 'Income',
            data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000]
          },
          {
            name: 'Outcome',
            data: [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000]
          }
        ],
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 2
        },
        grid: {
          strokeDashArray: 2
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.8
          }
        },
        xaxis: {
          type: 'category',
          tickPlacement: 'on',
          categories: [
            '25 January 2023',
            '26 January 2023',
            '27 January 2023',
            '28 January 2023',
            '29 January 2023',
            '30 January 2023',
            '31 January 2023',
            '1 February 2023',
            '2 February 2023',
            '3 February 2023',
            '4 February 2023',
            '5 February 2023'
          ],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            stroke: {
              dashArray: 0
            },
            dropShadow: {
              show: false
            }
          },
          tooltip: {
            enabled: false
          },
          labels: {
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            formatter: (title) => {
              let t = title;

              if (t) {
                const newT = t.split(' ');
                t = `${newT[0]} ${newT[1].slice(0, 3)}`;
              }

              return t;
            }
          }
        },
        yaxis: {
          labels: {
            align: 'left',
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
          }
        },
        tooltip: {
          x: {
            format: 'MMMM yyyy'
          },
          y: {
            formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
          },
          custom: function (props) {
            const { categories } = props.ctx.opts.xaxis;
            const { dataPointIndex } = props;
            const title = categories[dataPointIndex].split(' ');
            const newTitle = `${title[0]} ${title[1]}`;

            return buildTooltip(props, {
              title: newTitle,
              mode,
              hasTextLabel: true,
              wrapperExtClasses: 'min-w-28',
              labelDivider: ':',
              labelExtClasses: 'ms-2'
            });
          }
        },
        responsive: [{
          breakpoint: 568,
          options: {
            chart: {
              height: 300
            },
            labels: {
              style: {
                colors: '#9ca3af',
                fontSize: '11px',
                fontFamily: 'Inter, ui-sans-serif',
                fontWeight: 400
              },
              offsetX: -2,
              formatter: (title) => title.slice(0, 3)
            },
            yaxis: {
              labels: {
                align: 'left',
                minWidth: 0,
                maxWidth: 140,
                style: {
                  colors: '#9ca3af',
                  fontSize: '11px',
                  fontFamily: 'Inter, ui-sans-serif',
                  fontWeight: 400
                },
                formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
              }
            },
          },
        }]
      }), {
        colors: ['#2563eb', '#9333ea'],
        fill: {
          gradient: {
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          labels: {
            style: {
              colors: '#9ca3af'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#9ca3af'
            }
          }
        },
        grid: {
          borderColor: '#e5e7eb'
        }
      }, {
        colors: ['#3b82f6', '#a855f7'],
        fill: {
          gradient: {
            stops: [100, 90, 0]
          }
        },
        xaxis: {
          labels: {
            style: {
              colors: '#a3a3a3',
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#a3a3a3'
            }
          }
        },
        grid: {
          borderColor: '#404040'
        }
      });
    })();
  });