<script>
  import { onMount } from 'svelte';
  
  let typedText = '';
  const fullText = 'Asisten Virtual AI';
  let currentIndex = 0;
  
  onMount(() => {
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        typedText += fullText[currentIndex];
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  });
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background Gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50"></div>
  
  <!-- Floating Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
    <div class="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-20 left-20 w-24 h-24 bg-primary-300 rounded-full opacity-20 animate-float" style="animation-delay: 2s;"></div>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="animate-fade-in">
      <!-- Badge -->
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
        Kamu terhubung ke server Tarogong
      </div>
      
      <!-- Main Heading -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
        <span class="gradient-text">{typedText}</span>
        <span class="animate-pulse">|</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        <b>Asgar AI</b> dirancang khusus untuk tahu lebih jauh tentang Garut.
        Tanyakan apa saja dan dapatkan jawaban akurat serta cepat.
        
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a href="/chat" class="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
          <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 12a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 110-12 6 6 0 010 12z"/>
          </svg>
          Mulai Chat Sekarang
        </a>
        <a href="/demo" class="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
          <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4V8a3 3 0 016 0v2M7 16a3 3 0 006 0v-2"/>
          </svg>
          Lihat Demo
        </a>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">10K+</div>
          <div class="text-gray-600">Data Terbaru</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">100%</div>
          <div class="text-gray-600">Server Lokal</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">24/7</div>
          <div class="text-gray-600">Didukung Komunitas</div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Chat Preview -->
  <div class="absolute bottom-10 right-10 hidden lg:block animate-slide-up">
    <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-gray-200">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          </svg>
        </div>
        <span class="font-medium text-gray-900">Asgar AI</span>
        <span class="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
      </div>
      <div class="space-y-3">
        <div class="bg-gray-100 rounded-lg p-3 text-sm">
          Sampurasun! Ada yang bisa Asgar bantu ?
        </div>
        <div class="bg-primary-600 text-white rounded-lg p-3 text-sm ml-8">
          Rekomendasi wisata alam di Garut
        </div>
        <div class="bg-gray-100 rounded-lg p-3 text-sm">
          Garut memiliki banyak destinasi alam menarik seperti Gunung Papandayan, Talaga Bodas, Situ Bagendit, dan Cipanas...
        </div>
      </div>
    </div>
  </div>
</section>