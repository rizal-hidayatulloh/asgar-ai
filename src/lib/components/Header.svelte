<script>
  import { page } from '$app/stores'
  import { signOut } from '@auth/sveltekit/client'
  
  let isMenuOpen = false
  let isProfileMenuOpen = false
  
  $: session = $page.data.session
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }
  
  function toggleProfileMenu() {
    isProfileMenuOpen = !isProfileMenuOpen
  }
  
  async function handleSignOut() {
    await signOut({ callbackUrl: '/' })
  }
</script>

<header class="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <a href="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
            </svg>
          </div>
          <span class="text-xl font-bold gradient-text">Asgar AI</span>
        </a>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#about" class="text-gray-600 hover:text-primary-600 transition-colors">Tentang Kami</a>
        <a href="#community" class="text-gray-600 hover:text-primary-600 transition-colors">Komunitas</a>
        <a href="#contact-us" class="text-gray-600 hover:text-primary-600 transition-colors">Kontak</a>
      </nav>
      
      <!-- CTA Buttons / Profile Menu -->
      <div class="hidden md:flex items-center space-x-4">
        {#if session?.user}
          <!-- Profile Menu -->
          <div class="relative">
            <button 
              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              on:click={toggleProfileMenu}
            >
              <img 
                src={session.user.image} 
                alt={session.user.name}
                class="w-8 h-8 rounded-full"
              />
              <span class="text-sm font-medium text-gray-700">{session.user.name}</span>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            
            {#if isProfileMenuOpen}
              <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a href="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                    </svg>
                    <span>Dashboard</span>
                  </div>
                </a>
                <a href="/chat" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <span>Chat</span>
                  </div>
                </a>
                <hr class="my-2 border-gray-200">
                <button 
                  on:click={handleSignOut}
                  class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    <span>Keluar</span>
                  </div>
                </button>
              </div>
            {/if}
          </div>
        {:else}
          <!-- Login/Register Buttons -->
          <a href="/login" class="btn-secondary">Masuk</a>
          <a href="/demo" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            <span>Asgar via Whatsapp</span>
          </a>
        {/if}
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        on:click={toggleMenu}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 border-t border-gray-200 animate-slide-up">
        <nav class="flex flex-col space-y-4">
          <a href="#about" class="text-gray-600 hover:text-primary-600 transition-colors">Tentang Kami</a>
          <a href="#community" class="text-gray-600 hover:text-primary-600 transition-colors">Komunitas</a>
          <a href="#contact-us" class="text-gray-600 hover:text-primary-600 transition-colors">Kontak</a>
          
          {#if session?.user}
            <!-- Mobile Profile Menu -->
            <div class="pt-4 border-t border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <img 
                  src={session.user.image} 
                  alt={session.user.name}
                  class="w-10 h-10 rounded-full"
                />
                <div>
                  <p class="font-medium text-gray-900">{session.user.name}</p>
                  <p class="text-sm text-gray-500">{session.user.email}</p>
                </div>
              </div>
              <div class="flex flex-col space-y-2">
                <a href="/dashboard" class="btn-secondary text-center">Dashboard</a>
                <button 
                  on:click={handleSignOut}
                  class="btn-outline text-center text-red-600 border-red-600 hover:bg-red-50"
                >
                  Keluar
                </button>
              </div>
            </div>
          {:else}
            <!-- Mobile Login/Register Buttons -->
            <div class="flex flex-col space-y-2 pt-4">
              <a href="/login" class="btn-secondary text-center">Masuk</a>
              <a href="/demo" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                <span>Asgar via Whatsapp</span>
             </a>
            </div>
          {/if}
        </nav>
      </div>
    {/if}
  </div>
</header>

<!-- Click outside to close profile menu -->
{#if isProfileMenuOpen}
  <div 
    class="fixed inset-0 z-40" 
    on:click={() => isProfileMenuOpen = false}
  ></div>
{/if}