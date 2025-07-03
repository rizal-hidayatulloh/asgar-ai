<script>
  import { onMount } from 'svelte';
  
  export let session = null
  
  let messages = [
    {
      id: 1,
      type: 'assistant',
      content: session?.user?.name 
        ? `Sampurasun ${session.user.name}! Asgar AI, asisten virtual Garut sudah siap, ada yang bisa Asgar bantu ?`
        : 'Sampurasun! Asgar AI, asisten virtual Garut sudah siap, ada yang bisa Asgar bantu ?',
      timestamp: new Date()
    }
  ];
  
  let inputMessage = '';
  let isTyping = false;
  let chatContainer;
  
  const quickPrompts = [
    {
      icon: '🏔️',
      title: 'Wisata Garut',
      description: 'Ceritakan tentang tempat wisata menarik di Garut'
    },
    {
      icon: '🍜',
      title: 'Kuliner Khas',
      description: 'Rekomendasi makanan khas Garut yang wajib dicoba'
    },
    {
      icon: '🏨',
      title: 'Penginapan',
      description: 'Cari hotel atau penginapan terbaik di Garut'
    },
    {
      icon: '🚗',
      title: 'Transportasi',
      description: 'Informasi transportasi menuju dan di dalam Garut'
    }
  ];
  
  function scrollToBottom() {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  
  async function sendMessage(content = inputMessage) {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };
    
    messages = [...messages, userMessage];
    inputMessage = '';
    isTyping = true;
    
    setTimeout(scrollToBottom, 100);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = {
        'wisata': 'Garut memiliki banyak destinasi wisata menarik seperti Kawah Kamojang dengan pemandangan kawah aktif yang menakjubkan, Situ Bagendit dengan legenda yang menarik, Cipanas dengan sumber air panasnya, dan Gunung Papandayan untuk para pecinta hiking. Setiap tempat memiliki keunikan tersendiri!',
        'kuliner': 'Kuliner khas Garut yang wajib dicoba antara lain Dodol Garut yang terkenal se-Indonesia, Peuyeum (tape singkong) yang manis dan lembut, Gepuk Garut dengan daging sapi yang empuk, dan Kue Cubit yang menjadi camilan favorit. Jangan lupa juga mencoba Bandrek hangat untuk menghangatkan badan!',
        'penginapan': 'Di Garut tersedia berbagai pilihan penginapan mulai dari hotel berbintang seperti Hotel Tirta Gangga dan Papandayan Hotel, hingga villa dan homestay yang nyaman. Untuk pengalaman unik, Anda bisa menginap di resort dekat Cipanas atau villa dengan pemandangan gunung yang indah.',
        'transportasi': 'Untuk menuju Garut dari, Anda bisa menggunakan bus dari Terminal Leuwi Panjang Bandung atau kereta api hingga Stasiun Garut. Di dalam kota, tersedia angkot, ojek online, dan rental mobil. Untuk wisata ke tempat-tempat terpencil, disarankan menggunakan kendaraan pribadi atau tour guide lokal.'
      };
      
      let responseContent = 'Terima kasih atas pertanyaannya! Saya siap membantu Anda dengan informasi tentang Garut. Silakan tanyakan hal yang lebih spesifik agar saya bisa memberikan jawaban yang lebih detail.';
      
      const lowerContent = content.toLowerCase();
      for (const [key, response] of Object.entries(responses)) {
        if (lowerContent.includes(key)) {
          responseContent = response;
          break;
        }
      }
      
      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };
      
      messages = [...messages, aiMessage];
      isTyping = false;
      setTimeout(scrollToBottom, 100);
    }, 1500);
  }
  
  function handleQuickPrompt(prompt) {
    sendMessage(prompt.description);
  }
  
  function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
  
  onMount(() => {
    scrollToBottom();
  });
</script>

<div class="flex flex-col h-screen bg-gray-50">
  <!-- Chat Messages -->
  <div class="flex-1 overflow-y-auto px-6 py-4" bind:this={chatContainer}>
    {#if messages.length === 1}
      <!-- Welcome Screen -->
      <div class="max-w-2xl mx-auto text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Sampurasun Asgar AI</h2>
        <p class="text-gray-600 mb-8">Tanyakan apa saja tentang Garut, Asgar siap membantu!</p>
        
        <!-- Quick Prompts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {#each quickPrompts as prompt}
            <button 
              class="card text-left hover:scale-105 transition-transform cursor-pointer"
              on:click={() => handleQuickPrompt(prompt)}
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">{prompt.icon}</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{prompt.title}</h3>
                  <p class="text-sm text-gray-600">{prompt.description}</p>
                </div>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Messages -->
    <div class="max-w-4xl mx-auto space-y-6">
      {#each messages as message (message.id)}
        <div class="flex {message.type === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="flex max-w-xs lg:max-w-2xl {message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3">
            <!-- Avatar -->
            <div class="flex-shrink-0">
              {#if message.type === 'assistant'}
                <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  </svg>
                </div>
              {:else}
                <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                  </svg>
                </div>
              {/if}
            </div>
            
            <!-- Message Content -->
            <div class="{message.type === 'user' ? 'mr-3' : 'ml-3'}">
              <div class="{message.type === 'user' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white border border-gray-200'} rounded-lg px-4 py-3 shadow-sm">
                <p class="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              <p class="text-xs text-gray-500 mt-1 {message.type === 'user' ? 'text-right' : 'text-left'}">
                {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>
      {/each}
      
      <!-- Typing Indicator -->
      {#if isTyping}
        <div class="flex justify-start">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
              </svg>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Input Area -->
  <div class="bg-white border-t border-gray-200 px-6 py-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-end space-x-4">
        <div class="flex-1">
          <div class="relative">
            <textarea
              bind:value={inputMessage}
              on:keydown={handleKeyPress}
              placeholder="Tanyakan sesuatu tentang Garut..."
              class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 pr-12 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
              rows="1"
              style="min-height: 44px; max-height: 120px;"
            ></textarea>
            <button
              on:click={() => sendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              class="absolute right-2 bottom-2 p-2 rounded-lg {inputMessage.trim() && !isTyping 
                ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                : 'bg-gray-100 text-gray-400'} transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-2 text-center">
        Asgar AI dapat membuat kesalahan. Pertimbangkan untuk memverifikasi informasi penting.
      </p>
    </div>
  </div>
</div>