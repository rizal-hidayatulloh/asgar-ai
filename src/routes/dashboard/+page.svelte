<script>
  import { signOut } from '@auth/sveltekit/client'
  import '../../app.css'
  
  export let data
  $: session = data.session
  
  async function handleSignOut() {
    await signOut({ callbackUrl: '/' })
  }
</script>

<svelte:head>
  <title>Dashboard - Garut AI</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
            </svg>
          </div>
          <span class="text-xl font-bold gradient-text">Asgar AI</span>
        </div>
        
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-3">
            <img 
              src={session.user.image} 
              alt={session.user.name}
              class="w-8 h-8 rounded-full"
            />
            <span class="text-sm font-medium text-gray-700">{session.user.name}</span>
          </div>
          <button 
            on:click={handleSignOut}
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        Selamat datang, {session.user.name}!
      </h1>
      <p class="text-gray-600">
        Akses fitur lengkap Garut AI dengan akun Anda.
      </p>
    </div>
    
    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <a href="/chat" class="card hover:scale-105 transition-transform">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Mulai Chat</h3>
            <p class="text-sm text-gray-600">Berbicara dengan Garut AI</p>
          </div>
        </div>
      </a>
      
      <div class="card">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Riwayat Chat</h3>
            <p class="text-sm text-gray-600">Lihat percakapan sebelumnya</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Pengaturan</h3>
            <p class="text-sm text-gray-600">Kelola preferensi Anda</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>