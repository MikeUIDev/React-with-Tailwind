import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex w-full">
      <div className="relative flex w-full flex-col">
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1"></div>
                    <div className="flex flex-1 justify-end md:justify-center">
                      Header
                    </div>
                    <div className="flex justify-end md:flex-1">
                      <div className="pointer-events-auto">
                        <button type="button" aria-label="Switch to dark theme" className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">Button</button>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        
      </header>




        <main className="flex-auto">
          <div class="sm:px-8 mt-9">
            <div class="mx-auto w-full max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="max-w-2xl">
                    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Frontend Developer</h1>
                    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in commodo velit, non semper magna. Nullam imperdiet, ante in posuere mattis, ex orci eleifend tellus, a ultricies lorem diam eget lacus. Fusce sagittis erat eu quam dapibus, non pellentesque elit sollicitudin. Pellentesque pretium est et hendrerit varius. Sed sit amet sapien porta lectus faucibus vehicula. Sed volutpat ut ante vel rhoncus. Vestibulum eu ultrices sapien, at pharetra enim. Nulla nec ante sed tellus faucibus cursus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="mt-32 flex-none">
          <div class="sm:px-8">
            <div class="mx-auto w-full max-w-7xl lg:px-8">
              <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                <div class="relative px-4 sm:px-8 lg:px-12">
                  <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                      <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/developer">Developer</a>
                        <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/ux">UX Design</a>
                        <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a>
                        <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/contact">Contact</a>
                      </div>
                        <p class="text-sm text-zinc-400 dark:text-zinc-500">mikelinstudio. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="flex ...">
          <div className="w-1/2 ... ">
              <h1 className="text-3xl font-bold underline">
              Left column
            </h1>
          </div>
          <div className="w-1/2 ... "><p>right column</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
