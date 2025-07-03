<script>
  import '../app.css';
  import Header from '../lib/components/Header.svelte';
  import Hero from '../lib/components/Hero.svelte';
  import Features from '../lib/components/Features.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Asgar AI - Asisten Virtual Garut</title>
  <meta name="description" content="Ashar AI tahu lebih banyak dan akurat tentang Garut. Dapatkan jawaban untuk semua pertanyaan Kamu." />
</svelte:head>

<main class="min-h-screen">
  <Header />
  <Hero />
  <Features />
</main>
<Footer />