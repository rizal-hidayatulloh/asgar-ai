<script>
  import '../../app.css'
  import Header from '../../lib/components/Header.svelte'
  import ChatDemo from '../../lib/components/ChatDemo.svelte'
  
  export let data
  $: session = data.session
</script>

<svelte:head>
  <title>Chat Asgar AI - Asisten Virtual Garut</title>
  <meta name="description" content="Chat dengan Asgar AI - Asisten Virtual Garut" />
</svelte:head>

<main class="min-h-screen">
  <Header />
  <ChatDemo {session} />
</main>