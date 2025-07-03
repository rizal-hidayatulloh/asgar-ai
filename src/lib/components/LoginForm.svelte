<script>
  import { signIn } from '@auth/sveltekit/client'
  import { page } from '$app/stores'
  
  let isLoading = false
  
  async function handleGoogleLogin() {
    isLoading = true
    try {
      await signIn('google', { 
        callbackUrl: '/chat' 
      })
    } catch (error) {
      console.error('Login error:', error)
      isLoading = false
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <!-- Header -->
    <div class="text-center">
      <div class="mx-auto w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
        </svg>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 mb-2">
        Masuk ke <span class="gradient-text">Asgar AI</span>
      </h2>
      <p class="text-gray-600">
        Gunakan akun Google untuk login dan mulai ngobrol dengan Asgar AI
      </p>
    </div>
    
    <!-- Login Form -->
    <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
      <div class="space-y-6">
        <!-- Google Login Button -->
        <button
          on:click={handleGoogleLogin}
          disabled={isLoading}
          class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {#if isLoading}
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Memproses...
          {:else}
            <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Masuk dengan Google
          {/if}
        </button>
        
        <!-- Divider -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">atau</span>
          </div>
        </div>
        
        <!-- Demo Access -->
        <a 
          href="/demo" 
          class="w-full flex items-center justify-center px-4 py-3 border border-primary-300 rounded-lg shadow-sm bg-primary-50 text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4V8a3 3 0 016 0v2M7 16a3 3 0 006 0v-2"/>
          </svg>
          Coba Demo Tanpa Login
        </a>
      </div>
      
      <!-- Footer -->
      <div class="mt-6 text-center">
        <p class="text-xs text-gray-500">
          Dengan masuk, Anda menyetujui 
          <a href="#" class="text-primary-600 hover:text-primary-500">Syarat & Ketentuan</a> 
          dan 
          <a href="#" class="text-primary-600 hover:text-primary-500">Kebijakan Privasi</a> 
          kami.
        </p>
      </div>
    </div>
    
    <!-- Back to Home -->
    <div class="text-center">
      <a href="/" class="text-primary-600 hover:text-primary-500 text-sm font-medium">
        ← Kembali ke Beranda
      </a>
    </div>
  </div>
</div>