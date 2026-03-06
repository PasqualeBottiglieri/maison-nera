import type { Product } from './types';

export const products: Product[] = [
  /* ═══════════════════════════════════════════════════════════
     ABBIGLIAMENTO
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-001',
    name: 'Cappotto Strutturato',
    slug: 'cappotto-strutturato',
    price: 1890,
    category: 'abbigliamento',
    description:
      'Un cappotto dalla silhouette architettonica che ridefinisce i canoni dell\'eleganza maschile. Linee nette e proporzioni studiate per un impatto visivo assoluto.',
    details:
      'Vestibilità regolare. Chiusura con bottoni ricoperti in tessuto. Due tasche laterali a filetto. Spacchi posteriori per libertà di movimento. Fodera interna in seta con monogramma Maison Nera.',
    materials:
      'Esterno: 90% Lana vergine, 10% Cashmere. Fodera: 100% Seta. Bottoni: corno naturale.',
    care: 'Solo lavaggio a secco professionale. Conservare su gruccia imbottita. Evitare esposizione diretta alla luce solare.',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Grigio Antracite', value: '#383838' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    featured: true,
  },
  {
    id: 'prod-002',
    name: 'Abito Fluido Seta',
    slug: 'abito-fluido-seta',
    price: 1450,
    category: 'abbigliamento',
    description:
      'Un abito che accarezza il corpo con la fluidità della seta pura. Pensato per le serate dove l\'eleganza deve parlare senza alzare la voce.',
    details:
      'Taglio sbieco per drappeggio naturale. Scollo a V con bordo rifinito a mano. Lunghezza midi. Zip laterale invisibile. Spacco laterale di 25 cm.',
    materials:
      'Esterno: 100% Seta Charmeuse. Fodera: 100% Seta crêpe de chine.',
    care: 'Lavaggio a secco consigliato. Stirare a bassa temperatura con panno protettivo. Conservare su gruccia imbottita in seta.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Champagne', value: '#F7E7CE' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    featured: true,
  },
  {
    id: 'prod-003',
    name: 'Blazer Destrutturato',
    slug: 'blazer-destrutturato',
    price: 980,
    category: 'abbigliamento',
    description:
      'La destrutturazione del blazer classico: nessuna imbottitura, nessuna rigidità. Solo la purezza del taglio e la qualità del tessuto.',
    details:
      'Spalle naturali senza imbottitura. Chiusura a un bottone. Tasche a toppa con angoli arrotondati. Polsini funzionali con quattro bottoni. Fodera parziale in cupro.',
    materials:
      'Esterno: 100% Lana tropicale Super 130\'s. Fodera: 100% Cupro Bemberg.',
    care: 'Lavaggio a secco. Appendere su gruccia sagomata dopo l\'uso. Spazzolare regolarmente con spazzola in crine.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&q=80',
    ],
    colors: [
      { name: 'Blu Notte', value: '#191970' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Sabbia', value: '#C2B280' },
    ],
    sizes: [
      { label: 'XS', available: false },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-004',
    name: 'Gonna Plisse',
    slug: 'gonna-plisse',
    price: 690,
    category: 'abbigliamento',
    description:
      'Plissettatura permanente su crêpe di lana che cattura la luce ad ogni movimento. Un pezzo di pura poesia sartoriale.',
    details:
      'Vita alta con fascia elasticizzata rivestita. Plissé termofissato permanente. Lunghezza midi sotto il ginocchio. Fodera in jersey di seta.',
    materials:
      'Esterno: 95% Lana Merino, 5% Elastan. Fodera: 92% Seta, 8% Elastan.',
    care: 'Lavaggio a secco esclusivamente. Non stirare sulle pieghe. Conservare distesa o appesa con mollette imbottite.',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80',
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#722F37' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: false },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-005',
    name: 'Camicia Oversize Popeline',
    slug: 'camicia-oversize-popeline',
    price: 490,
    category: 'abbigliamento',
    description:
      'La camicia bianca reinventata con proporzioni generose e un taglio che sfida le convenzioni. Popeline egiziano di densità superiore.',
    details:
      'Colletto ampio con stecche rimovibili. Abbottonatura nascosta. Polsini con doppia asola per gemelli o bottone. Spacchi laterali. Orlo arrotondato.',
    materials:
      'Esterno: 100% Cotone Popeline egiziano 140/2. Bottoni: madreperla australiana.',
    care: 'Lavaggio a 30°C con capi simili. Stirare a media temperatura leggermente umida. Appendere immediatamente dopo il lavaggio.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
    ],
    colors: [
      { name: 'Bianco Ottico', value: '#FAFAFA' },
      { name: 'Azzurro Cielo', value: '#87CEEB' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-006',
    name: 'Pantalone Sartoriale',
    slug: 'pantalone-sartoriale',
    price: 590,
    category: 'abbigliamento',
    description:
      'Il pantalone che ogni guardaroba merita. Taglio a sigaretta con piega stirata a mano, per una linea impeccabile dalla mattina alla sera.',
    details:
      'Vita alta con doppia pince. Chiusura con zip e gancio interno. Piega stirata a mano permanente. Tasche laterali diagonali e una tasca posteriore a filetto con bottone.',
    materials:
      'Esterno: 98% Lana vergine Super 120\'s, 2% Elastan. Fodera fino al ginocchio: 100% Cupro Bemberg.',
    care: 'Lavaggio a secco consigliato. Stirare con ferro a vapore sulla piega. Conservare su gruccia con pinze.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Grigio Fumo', value: '#6E6E6E' },
      { name: 'Blu Navy', value: '#000080' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  // ── CAPPOTTI / COATS (3) ──────────────────────────────────
  {
    id: 'prod-013',
    name: 'Cappotto Doppiopetto',
    slug: 'cappotto-doppiopetto',
    price: 2290,
    category: 'abbigliamento',
    description:
      'Il doppiopetto per eccellenza, reinterpretato con una silhouette avvolgente e spalle morbide. Un capo che trasforma ogni ingresso in un evento.',
    details:
      'Vestibilità regolare con spalle naturali. Chiusura doppiopetto a sei bottoni in corno. Due tasche a filetto con patta. Martingala posteriore regolabile. Fodera interna in seta con monogramma Maison Nera. Lunghezza sotto il ginocchio.',
    materials:
      'Esterno: 85% Lana vergine, 15% Cashmere. Fodera: 100% Seta. Bottoni: corno naturale tinto. Imbottitura spalle: crine di cavallo.',
    care: 'Solo lavaggio a secco professionale. Conservare su gruccia imbottita larga. Spazzolare con spazzola in crine dopo ogni utilizzo. Evitare esposizione prolungata alla luce solare.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Grigio Antracite', value: '#383838' },
    ],
    sizes: [
      { label: 'XS', available: false },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-014',
    name: 'Trench Leggero',
    slug: 'trench-leggero',
    price: 1690,
    category: 'abbigliamento',
    description:
      'Un trench dalla leggerezza sorprendente, pensato per le mezze stagioni italiane. Il gabardine di cotone impermeabilizzato incontra dettagli sartoriali di rara precisione.',
    details:
      'Vestibilità regolare con cintura in vita. Chiusura a doppiopetto con bottoni ricoperti. Spalline con bottone. Mantella posteriore con piegone. Tasche a toppa con patta. Polsini con cinturino regolabile.',
    materials:
      'Esterno: 100% Cotone gabardine impermeabilizzato. Fodera: 100% Cupro Bemberg. Bottoni: corno naturale.',
    care: 'Lavaggio a secco consigliato. Non stirare direttamente sul tessuto — utilizzare panno protettivo. Appendere su gruccia imbottita. Reimpermeabilizzare ogni stagione.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    ],
    colors: [
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-015',
    name: 'Cappotto Oversize',
    slug: 'cappotto-oversize',
    price: 2490,
    category: 'abbigliamento',
    description:
      'Proporzioni generose e tessuto doppio per un cappotto che avvolge come un abbraccio. La quintessenza del lusso discreto, dove il volume diventa eleganza.',
    details:
      'Vestibilità oversize con spalle scese. Chiusura con cintura a vestaglia senza bottoni. Tasche laterali profonde a filetto. Cuciture interne nastrate. Orlo non rifinito con taglio vivo. Lunghezza al polpaccio.',
    materials:
      'Esterno: 70% Lana vergine, 20% Cashmere, 10% Seta. Fodera: 100% Viscosa di bambù. Cintura: stessa composizione dell\'esterno.',
    care: 'Solo lavaggio a secco. Conservare su gruccia imbottita larga in ambiente ventilato. Non piegare per evitare segni permanenti sul tessuto.',
    images: [
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    colors: [
      { name: 'Tortora', value: '#9E8E7E' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },

  // ── ABITI / DRESSES (4) ─────────────────────────────────
  {
    id: 'prod-016',
    name: 'Abito Midi Plissé',
    slug: 'abito-midi-plisse',
    price: 1350,
    category: 'abbigliamento',
    description:
      'Plissettatura permanente su crêpe de chine di seta che danza ad ogni passo. Un abito che cattura la luce e la restituisce in mille riflessi sottili.',
    details:
      'Scollo rotondo con finitura a coste sottili. Maniche a tre quarti plissettate. Plissé termofissato permanente su tutta la lunghezza. Sottoveste integrata in jersey di seta. Chiusura con zip laterale invisibile. Lunghezza midi al polpaccio.',
    materials:
      'Esterno: 100% Seta crêpe de chine. Sottoveste: 92% Seta, 8% Elastan. Zip: YKK Excella in ottone.',
    care: 'Lavaggio a secco esclusivamente. Non stirare — le pieghe sono permanenti. Conservare appesa senza piegare. Evitare contatto con profumi e gioielli abrasivi.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
    ],
    colors: [
      { name: 'Bordeaux', value: '#6B1D2A' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cipria', value: '#E8C4C4' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-017',
    name: 'Abito Asimmetrico',
    slug: 'abito-asimmetrico',
    price: 1190,
    category: 'abbigliamento',
    description:
      'L\'asimmetria come cifra stilistica: un orlo che sale e scende con grazia architettonica, creando un movimento che sfida la simmetria classica.',
    details:
      'Scollo a barca asimmetrico con spalla scoperta. Corpetto aderente con cuciture a vista. Gonna con orlo asimmetrico dal ginocchio alla caviglia. Zip posteriore invisibile. Fodera integrale in jersey di seta.',
    materials:
      'Esterno: 95% Viscosa, 5% Elastan. Fodera: 100% Seta jersey. Zip: YKK invisibile.',
    care: 'Lavaggio a secco consigliato. Stirare a bassa temperatura sul rovescio. Conservare su gruccia imbottita in seta.',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Blu Notte', value: '#1A1A3E' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: false },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-018',
    name: 'Abito Cocktail',
    slug: 'abito-cocktail',
    price: 1590,
    category: 'abbigliamento',
    description:
      'Per le serate che richiedono presenza e raffinatezza. Un abito cocktail dalla costruzione impeccabile che modella la silhouette con discrezione assoluta.',
    details:
      'Scollo a cuore con stecche di sostegno integrate. Corpetto strutturato con cuciture sagomate. Gonna a tulipano con lunghezza sopra il ginocchio. Zip posteriore con gancetto in alto. Fodera in seta charmeuse.',
    materials:
      'Esterno: 100% Lana crêpe double face. Fodera: 100% Seta charmeuse. Stecche: spirale in acciaio rivestita in cotone.',
    care: 'Solo lavaggio a secco professionale. Conservare su gruccia sagomata con imbottitura al corpetto. Non piegare mai.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-019',
    name: 'Abito Lungo Sera',
    slug: 'abito-lungo-sera',
    price: 2390,
    category: 'abbigliamento',
    description:
      'L\'abito da sera nella sua espressione più pura. Seta charmeuse che scivola sul corpo come acqua, per serate dove ogni dettaglio conta.',
    details:
      'Scollo drappeggiato a cowl sul davanti e schiena scoperta. Taglio sbieco per drappeggio naturale e aderenza fluida. Spacco laterale fino alla coscia. Chiusura con laccetti incrociati sulla schiena. Lunghezza al pavimento.',
    materials:
      'Esterno: 100% Seta Charmeuse 19 momme. Fodera corpetto: 100% Seta organza.',
    care: 'Lavaggio a secco esclusivamente. Non appendere per periodi prolungati — conservare disteso su carta velina. Stirare a vapore a distanza.',
    images: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },

  // ── BLAZER / GIACCHE (3) ────────────────────────────────
  {
    id: 'prod-020',
    name: 'Giacca Biker',
    slug: 'giacca-biker',
    price: 1890,
    category: 'abbigliamento',
    description:
      'L\'iconico biker rivisitato in chiave lusso. Pelle di agnello burro, zip asimmetriche e una costruzione che sfida il tempo con attitudine ribelle e anima sartoriale.',
    details:
      'Vestibilità aderente con spalle sagomate. Chiusura asimmetrica con zip in metallo brunito. Quattro tasche con zip. Cintura regolabile alla vita. Polsini con zip funzionali. Fodera trapuntata in seta.',
    materials:
      'Esterno: 100% Pelle di agnello nappa. Fodera: 100% Seta trapuntata. Zip e fibbie: metallo brunito anticato.',
    care: 'Conservare su gruccia imbottita larga. Trattare con crema nutriente per nappa due volte l\'anno. Evitare esposizione a pioggia. In caso di bagnatura, asciugare naturalmente lontano da fonti di calore.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-021',
    name: 'Blazer Smoking',
    slug: 'blazer-smoking',
    price: 1490,
    category: 'abbigliamento',
    description:
      'Il blazer da smoking reinventato per la donna contemporanea. Rever in raso lucido, vita segnata e una costruzione che unisce rigore maschile e sensualità femminile.',
    details:
      'Vestibilità slim con vita segnata. Rever a lancia in raso di seta lucido. Chiusura a un bottone rivestito in raso. Tasche a filetto con profilo in raso. Spacchi funzionali ai polsini. Fodera integrale in cupro.',
    materials:
      'Esterno: 100% Lana vergine Super 150\'s. Rever e profili: 100% Seta raso. Fodera: 100% Cupro Bemberg. Bottone: ricoperto in raso di seta.',
    care: 'Solo lavaggio a secco. Conservare su gruccia sagomata con spalle larghe. Coprire con custodia traspirante. Non piegare i rever.',
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Blu Notte', value: '#1A1A3E' },
    ],
    sizes: [
      { label: 'XS', available: false },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-022',
    name: 'Giacca Kimono',
    slug: 'giacca-kimono',
    price: 1290,
    category: 'abbigliamento',
    description:
      'L\'incontro tra tradizione giapponese e sartoria italiana. Maniche a kimono, tessuto fluido e una cintura obi che definisce la silhouette con grazia orientale.',
    details:
      'Vestibilità morbida con maniche a kimono integrali. Chiusura a vestaglia con cintura obi larga. Cuciture a vista con impuntura a mano. Tasche nascoste nei pannelli laterali. Orlo leggermente arrotondato. Lunghezza ai fianchi.',
    materials:
      'Esterno: 80% Lana vergine, 20% Seta. Cintura obi: stessa composizione dell\'esterno con anima in crine. Fodera: 100% Cupro.',
    care: 'Lavaggio a secco consigliato. Stirare a vapore a distanza. Conservare la cintura obi arrotolata separatamente. Appendere su gruccia larga.',
    images: [
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },

  // ── PANTALONI (3) ───────────────────────────────────────
  {
    id: 'prod-023',
    name: 'Pantalone Palazzo',
    slug: 'pantalone-palazzo',
    price: 790,
    category: 'abbigliamento',
    description:
      'Ampiezza e fluidità per un pantalone che ridefinisce il concetto di eleganza rilassata. La gamba larga cade con un drappeggio impeccabile ad ogni passo.',
    details:
      'Vita alta con doppia pince sul davanti. Chiusura con zip laterale invisibile e gancio interno. Gamba ampia dalla coscia all\'orlo. Piega stirata a mano sul davanti. Lunghezza al pavimento. Fodera fino al ginocchio.',
    materials:
      'Esterno: 98% Lana vergine crêpe, 2% Elastan. Fodera: 100% Cupro Bemberg.',
    care: 'Lavaggio a secco consigliato. Stirare a vapore seguendo la piega naturale. Conservare su gruccia con pinze imbottite.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Blu Notte', value: '#1A1A3E' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-024',
    name: 'Pantalone Cargo Lusso',
    slug: 'pantalone-cargo-lusso',
    price: 690,
    category: 'abbigliamento',
    description:
      'Il cargo elevato a capo di lusso. Tasche funzionali ridisegnate con proporzioni eleganti, tessuto tecnico con hand feel pregiato e dettagli sartoriali inaspettati.',
    details:
      'Vita media con elastico interno e coulisse. Gamba affusolata con elastico alla caviglia. Sei tasche totali: due laterali, due cargo con patta e bottone automatico, due posteriori a filetto. Cuciture doppie rinforzate.',
    materials:
      'Esterno: 97% Cotone gabardine stretch, 3% Elastan. Fodera tasche: 100% Cotone popeline. Coulisse: corda in seta intrecciata.',
    care: 'Lavaggio a 30°C con capi simili. Non candeggiare. Stirare a media temperatura. Asciugatura in piano consigliata.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Verde Bosco', value: '#2D5F2D' },
      { name: 'Cammello', value: '#C19A6B' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-025',
    name: 'Pantalone Cigarette',
    slug: 'pantalone-cigarette',
    price: 590,
    category: 'abbigliamento',
    description:
      'La linea a sigaretta nella sua forma più raffinata. Aderenza calibrata, lunghezza alla caviglia e un tessuto che non cede mai durante la giornata.',
    details:
      'Vita alta con chiusura a gancio e zip. Gamba dritta e stretta dalla coscia alla caviglia. Lunghezza cropped alla caviglia. Tasche laterali a filo e una tasca posteriore a filetto. Orlo non rifinito con taglio vivo.',
    materials:
      'Esterno: 96% Lana vergine stretch, 4% Elastan. Fodera fino al ginocchio: 100% Cupro Bemberg.',
    care: 'Lavaggio a secco consigliato. Stirare a media temperatura con panno protettivo. Conservare piegato o su gruccia con pinze.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Grigio Antracite', value: '#383838' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: false },
      { label: 'XL', available: false },
    ],
  },

  // ── CAMICIE (3) ─────────────────────────────────────────
  {
    id: 'prod-026',
    name: 'Camicia Seta Stampata',
    slug: 'camicia-seta-stampata',
    price: 690,
    category: 'abbigliamento',
    description:
      'Seta twill stampata con un motivo esclusivo ispirato alle geometrie dell\'architettura milanese. Ogni camicia racconta una storia di arte e artigianato.',
    details:
      'Vestibilità regolare. Colletto italiano con stecche rimovibili. Abbottonatura a vista con bottoni in madreperla. Polsini con doppia asola per gemelli o bottone. Orlo arrotondato. Stampa posizionata a mano su ogni taglia.',
    materials:
      'Esterno: 100% Seta Twill 16 momme. Bottoni: madreperla australiana.',
    care: 'Lavaggio a secco consigliato. In alternativa, lavare a mano in acqua fredda con detersivo delicato per seta. Stirare sul rovescio a bassa temperatura. Non torcere.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80',
    ],
    colors: [
      { name: 'Blu Notte', value: '#1A1A3E' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-027',
    name: 'Camicia Lino Oversize',
    slug: 'camicia-lino-oversize',
    price: 490,
    category: 'abbigliamento',
    description:
      'Il lino irlandese nella sua espressione più nobile. Proporzioni generose che abbracciano il corpo con disinvoltura, per un\'eleganza che non conosce sforzo.',
    details:
      'Vestibilità oversize con spalle scese. Colletto ampio con collo aperto. Abbottonatura a vista. Tasca a toppa sul petto con logo ricamato ton sur ton. Maniche lunghe con polsino regolabile. Orlo dritto con spacchetti laterali.',
    materials:
      'Esterno: 100% Lino irlandese. Bottoni: corozo naturale.',
    care: 'Lavaggio a mano o in lavatrice a 30°C ciclo delicato. Stirare leggermente umido a temperatura medio-alta. Il lino si ammorbidisce ad ogni lavaggio — le pieghe naturali sono parte del carattere del capo.',
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    ],
    colors: [
      { name: 'Bianco Ottico', value: '#FAFAFA' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-028',
    name: 'Camicia Smoking',
    slug: 'camicia-smoking',
    price: 590,
    category: 'abbigliamento',
    description:
      'La camicia da smoking definitiva. Petto plissettato a mano, colletto diplomatico e una costruzione che onora un secolo di tradizione sartoriale.',
    details:
      'Vestibilità slim. Colletto diplomatico con alette. Petto con plissettatura a mano su cinque pieghe per lato. Abbottonatura nascosta con bottoni in madreperla a foro singolo. Polsini doppi per gemelli. Taglio extra lungo per restare in sede.',
    materials:
      'Esterno: 100% Cotone Popeline Sea Island 200/2. Bottoni: madreperla bianca a foro singolo.',
    care: 'Lavaggio a mano o a secco. Stirare il petto plissettato con delicatezza seguendo le pieghe. Conservare su gruccia con i polsini aperti. Non piegare.',
    images: [
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    ],
    colors: [
      { name: 'Bianco Ottico', value: '#FAFAFA' },
      { name: 'Avorio', value: '#F5F0EB' },
    ],
    sizes: [
      { label: 'XS', available: false },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },

  // ── MAGLIERIA (3) ───────────────────────────────────────
  {
    id: 'prod-029',
    name: 'Maglione Cashmere',
    slug: 'maglione-cashmere',
    price: 890,
    category: 'abbigliamento',
    description:
      'Cashmere mongoliano a due fili per una morbidezza che sfiora l\'incredibile. Un maglione essenziale che eleva qualsiasi look con la sua texture avvolgente.',
    details:
      'Vestibilità regolare. Scollo a V con profondità calibrata. Lavorazione a maglia rasata con bordi a coste 2x2. Cuciture linking per comfort e durata. Rinforzi alle spalle e ai gomiti. Etichetta interna in seta.',
    materials:
      'Esterno: 100% Cashmere mongoliano a due fili (Grado A). Etichetta: 100% Seta.',
    care: 'Lavaggio a mano in acqua fredda con shampoo per cashmere. Asciugare in piano su asciugamano. Non appendere — il capo si deformerebbe. Conservare piegato con sacchetti di cedro antitarme.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Grigio Antracite', value: '#383838' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-030',
    name: 'Cardigan Lungo',
    slug: 'cardigan-lungo',
    price: 990,
    category: 'abbigliamento',
    description:
      'Un cardigan di lunghezza generosa che funge da mantello contemporaneo. Lana merino extra fine e cashmere per un comfort che accompagna dalla mattina alla sera.',
    details:
      'Vestibilità morbida con lunghezza al ginocchio. Apertura frontale senza chiusura. Due tasche laterali a toppa inserite nelle cuciture. Bordi a coste a nido d\'ape. Spacchi laterali bassi. Spalle scese per un effetto avvolgente naturale.',
    materials:
      'Esterno: 70% Lana Merino extra fine, 30% Cashmere. Bordi: stessa composizione a punto nido d\'ape.',
    care: 'Lavaggio a mano in acqua fredda. Non strizzare — tamponare delicatamente con asciugamano. Asciugare in piano. Conservare piegato. Mai appendere per evitare deformazione.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    ],
    colors: [
      { name: 'Tortora', value: '#9E8E7E' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-031',
    name: 'Pullover Dolcevita',
    slug: 'pullover-dolcevita',
    price: 690,
    category: 'abbigliamento',
    description:
      'Il dolcevita come seconda pelle. Lana merino extra fine a maglia sottile per un capo che si indossa sotto un blazer o da solo con uguale disinvoltura.',
    details:
      'Vestibilità slim aderente al corpo. Collo alto a costine con doppio risvolto. Maglia rasata sottile gauge 14. Cuciture piatte per comfort sotto la giacca. Bordi a coste elastiche a polsi e orlo. Rinforzi interni alle spalle.',
    materials:
      'Esterno: 100% Lana Merino extra fine 19.5 micron. Cuciture: filato di seta ritorto.',
    care: 'Lavaggio a mano in acqua fredda o lavaggio in lavatrice a 30°C con programma lana. Asciugare in piano. Stirare a vapore a distanza se necessario. Conservare piegato.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },

  // ── GONNE (2) ───────────────────────────────────────────
  {
    id: 'prod-032',
    name: 'Gonna Midi Pelle',
    slug: 'gonna-midi-pelle',
    price: 990,
    category: 'abbigliamento',
    description:
      'Pelle di agnello nappa nella sua forma più elegante. Una gonna midi a matita che modella la silhouette con la morbidezza di un tessuto e il carattere della pelle.',
    details:
      'Vita alta con fascia in pelle. Chiusura posteriore con zip invisibile e gancio. Silhouette a matita con leggero svasamento sotto il ginocchio. Spacco posteriore di 20 cm. Fodera integrale in jersey di seta. Lunghezza midi al polpaccio.',
    materials:
      'Esterno: 100% Pelle di agnello nappa stretch. Fodera: 92% Seta, 8% Elastan.',
    care: 'Solo lavaggio a secco specializzato in pelle. Conservare appesa su gruccia con pinze imbottite. Non piegare. Trattare con crema nutriente per nappa una volta a stagione.',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: false },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-033',
    name: 'Gonna Asimmetrica Seta',
    slug: 'gonna-asimmetrica-seta',
    price: 690,
    category: 'abbigliamento',
    description:
      'Seta charmeuse che scivola e danza con un orlo asimmetrico che sfida le convenzioni. Un pezzo di pura poesia in movimento, dall\'ufficio alla sera.',
    details:
      'Vita media con elastico rivestito in seta. Orlo asimmetrico dal ginocchio al polpaccio con finitura roulotté a mano. Taglio sbieco per drappeggio fluido. Sottogonna integrata in crêpe de chine.',
    materials:
      'Esterno: 100% Seta Charmeuse 19 momme. Sottogonna: 100% Seta crêpe de chine.',
    care: 'Lavaggio a secco consigliato. Stirare sul rovescio a bassa temperatura. Conservare appesa o distesa su carta velina. Evitare contatto con gioielli e superfici ruvide.',
    images: [
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cipria', value: '#E8C4C4' },
      { name: 'Blu Notte', value: '#1A1A3E' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },

  // ── COMPLETI (2) ────────────────────────────────────────
  {
    id: 'prod-034',
    name: 'Completo Doppiopetto',
    slug: 'completo-doppiopetto',
    price: 2490,
    category: 'abbigliamento',
    description:
      'Il completo doppiopetto nella sua espressione più contemporanea. Lana Super 150\'s, costruzione semi-foderata e una silhouette che comanda la stanza con autorevolezza silenziosa.',
    details:
      'Giacca: vestibilità regolare con spalle naturali. Chiusura doppiopetto a sei bottoni (due funzionali). Rever a lancia. Tasche a filetto con patta. Semi-foderata in cupro. Pantalone: vita alta con doppia pince. Gamba affusolata. Piega stirata a mano. Orlo non rifinito.',
    materials:
      'Esterno: 100% Lana vergine Super 150\'s. Fodera giacca: 100% Cupro Bemberg. Fodera pantalone: 100% Cupro Bemberg fino al ginocchio. Bottoni: corno naturale.',
    care: 'Solo lavaggio a secco professionale. Conservare giacca su gruccia sagomata larga e pantalone su gruccia con pinze. Spazzolare dopo ogni utilizzo. Lasciare riposare 24 ore tra un utilizzo e l\'altro.',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Blu Notte', value: '#1A1A3E' },
      { name: 'Grigio Antracite', value: '#383838' },
    ],
    sizes: [
      { label: 'XS', available: false },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },
  {
    id: 'prod-035',
    name: 'Tailleur Femminile',
    slug: 'tailleur-femminile',
    price: 2190,
    category: 'abbigliamento',
    description:
      'Il tailleur ripensato con sensibilità contemporanea. Giacca corta con vita segnata e pantalone a gamba larga per un equilibrio perfetto tra potere e femminilità.',
    details:
      'Giacca: vestibilità slim con vita segnata e peplum accennato. Chiusura a un bottone rivestito. Rever classico. Maniche con spacchi funzionali. Fodera integrale in seta. Pantalone: vita alta con zip laterale. Gamba ampia dal fianco all\'orlo. Piega stirata a mano. Lunghezza al pavimento.',
    materials:
      'Esterno: 98% Lana vergine crêpe, 2% Elastan. Fodera giacca: 100% Seta. Fodera pantalone: 100% Cupro Bemberg fino al ginocchio. Bottone: rivestito nel tessuto esterno.',
    care: 'Solo lavaggio a secco. Conservare i due pezzi separatamente su grucce appropriate. Stirare a vapore. Coprire con custodia traspirante.',
    images: [
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },

  // ── TOPS (2) ────────────────────────────────────────────
  {
    id: 'prod-036',
    name: 'Top Corsetto',
    slug: 'top-corsetto',
    price: 590,
    category: 'abbigliamento',
    description:
      'L\'arte della corsetteria tradotta in un top contemporaneo. Stecche flessibili, cuciture sagomate e una costruzione che scolpisce la silhouette con precisione sartoriale.',
    details:
      'Vestibilità aderente con costruzione a corsetto. Scollo dritto con bordo superiore rinforzato. Stecche flessibili in spirale d\'acciaio su ogni cucitura. Cuciture sagomate a sei pannelli per modellare il busto. Chiusura posteriore con zip invisibile e gancetto. Lunghezza alla vita.',
    materials:
      'Esterno: 97% Cotone sateen stretch, 3% Elastan. Fodera: 100% Cotone organico. Stecche: spirale in acciaio rivestita in cotone.',
    care: 'Lavaggio a mano in acqua fredda. Non torcere — tamponare con asciugamano. Asciugare in piano. Non stirare sulle stecche. Conservare in piano.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bianco Ottico', value: '#FAFAFA' },
      { name: 'Cipria', value: '#E8C4C4' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
  },
  {
    id: 'prod-037',
    name: 'Canotta Seta',
    slug: 'canotta-seta',
    price: 390,
    category: 'abbigliamento',
    description:
      'La canotta elevata a capo di lusso. Seta charmeuse tagliata in sbieco per un drappeggio che accarezza il corpo con naturalezza assoluta e luminosità discreta.',
    details:
      'Vestibilità morbida con taglio sbieco. Scollo a V con profondità calibrata. Spalline sottili regolabili. Bordi rifiniti con fettuccia in seta tono su tono. Lunghezza alla vita con orlo leggermente arrotondato. Cuciture francesi per finitura interna impeccabile.',
    materials:
      'Esterno: 100% Seta Charmeuse 19 momme. Fettuccia: 100% Seta raso.',
    care: 'Lavaggio a mano in acqua fredda con detersivo delicato per seta. Non strizzare. Asciugare in piano lontano dalla luce diretta. Stirare sul rovescio a bassa temperatura.',
    images: [
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Cipria', value: '#E8C4C4' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     ACCESSORI
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-007',
    name: 'Borsa Geometrica',
    slug: 'borsa-geometrica',
    price: 1290,
    category: 'accessori',
    description:
      'Architettura portabile. Una borsa dalle linee geometriche pure, realizzata in vitello pieno fiore con costruzione rigida che mantiene la forma nel tempo.',
    details:
      'Struttura rigida autoregolante. Chiusura magnetica nascosta. Interno in pelle scamosciata con una tasca con zip e una a scivolo. Tracolla rimovibile e regolabile. Piedini metallici alla base.',
    materials:
      'Esterno: 100% Pelle di vitello pieno fiore. Interno: 100% Pelle scamosciata. Ferratura: ottone con finitura oro antico.',
    care: 'Conservare nella dust bag fornita. Imbottire con carta velina quando non in uso. Trattare con crema nutriente specifica ogni 3 mesi.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#9A463D' },
    ],
    sizes: [{ label: 'ONE SIZE', available: true }],
    featured: true,
  },
  {
    id: 'prod-008',
    name: 'Cintura Intrecciata',
    slug: 'cintura-intrecciata',
    price: 390,
    category: 'accessori',
    description:
      'L\'intreccio artigianale eleva una cintura a opera d\'arte. Strisce di nappa intrecciate a mano da maestri pellettieri toscani.',
    details:
      'Intreccio a mano con strisce di 4 mm. Fibbia in ottone massiccio con logo inciso. Larghezza 3,5 cm. Senza fori — la flessibilità dell\'intreccio consente la regolazione continua.',
    materials:
      'Cintura: 100% Pelle di agnello nappa. Fibbia: ottone massiccio con finitura palladio.',
    care: 'Evitare il contatto con acqua e profumi. Conservare arrotolata nella dust bag. Trattare con balsamo per nappa una volta all\'anno.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Marrone Testa di Moro', value: '#3C1414' },
      { name: 'Cuoio', value: '#8B4513' },
    ],
    sizes: [{ label: 'ONE SIZE', available: true }],
  },
  {
    id: 'prod-009',
    name: 'Foulard Stampato',
    slug: 'foulard-stampato',
    price: 290,
    category: 'accessori',
    description:
      'Seta twill stampata con un motivo esclusivo che racconta la storia dell\'architettura milanese. Ogni foulard è un frammento di arte indossabile.',
    details:
      'Dimensioni 90 x 90 cm. Bordo roulotté a mano. Stampa digitale ad alta definizione con 12 passaggi di colore. Edizione limitata numerata.',
    materials: 'Esterno: 100% Seta Twill 16 momme.',
    care: 'Lavaggio a secco consigliato. In alternativa, lavare a mano in acqua fredda con detersivo delicato per seta. Non strizzare. Stirare a bassa temperatura sul rovescio.',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80',
    ],
    colors: [
      { name: 'Oro e Nero', value: '#C9A96E' },
      { name: 'Blu e Crema', value: '#1B3A5C' },
    ],
    sizes: [{ label: 'ONE SIZE', available: true }],
  },
  {
    id: 'prod-010',
    name: 'Occhiali Aviator',
    slug: 'occhiali-aviator',
    price: 490,
    category: 'accessori',
    description:
      'L\'iconico aviator reinterpretato con montatura in titanio ultraleggero e lenti Zeiss polarizzate. Per chi guarda il mondo attraverso una lente di lusso.',
    details:
      'Montatura in titanio beta spazzolato. Lenti Carl Zeiss polarizzate categoria 3. Naselli regolabili in silicone. Cerniere a molla rinforzate. Peso: 22 g.',
    materials:
      'Montatura: titanio beta spazzolato. Lenti: cristallo minerale Zeiss con trattamento antiriflesso. Terminali: acetato di cellulosa.',
    care: 'Pulire con il panno in microfibra fornito. Conservare nell\'astuccio rigido. Non appoggiare sulle lenti. Evitare temperature superiori a 40°C.',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    ],
    colors: [
      { name: 'Oro / Verde', value: '#C9A96E' },
      { name: 'Argento / Grigio', value: '#C0C0C0' },
    ],
    sizes: [{ label: 'ONE SIZE', available: true }],
  },
  /* ═══════════════════════════════════════════════════════════
     BORSE (5 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-038',
    name: 'Borsa Tote Pelle',
    slug: 'borsa-tote-pelle',
    price: 1290,
    category: 'accessori',
    description:
      'Una tote dalla capienza generosa, realizzata in pelle di vitello a concia vegetale. La compagna ideale per chi vive la città con stile senza rinunciare alla praticità.',
    details:
      'Dimensioni: 38 x 32 x 14 cm. Due manici in pelle piatta con caduta di 22 cm. Chiusura superiore con bottone magnetico. Interno con tasca con zip e doppia tasca a scivolo. Piedini metallici alla base.',
    materials:
      'Esterno: 100% Pelle di vitello a concia vegetale toscana. Interno: 100% Cotone twill cerato. Ferratura: ottone anticato.',
    care: 'Conservare nella dust bag fornita. Imbottire con carta velina quando non in uso. Applicare crema nutriente per pelle ogni 2-3 mesi. Evitare esposizione prolungata alla pioggia.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Cognac', value: '#8B4513' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-039',
    name: 'Clutch Sera',
    slug: 'clutch-sera',
    price: 790,
    category: 'accessori',
    description:
      'Una pochette scultorea dal fascino notturno, rivestita in raso di seta con chiusura gioiello. Pensata per illuminare le serate più esclusive.',
    details:
      'Dimensioni: 26 x 14 x 5 cm. Chiusura con fermaglio gioiello in cristallo. Catena rimovibile con caduta di 60 cm in maglia dorata. Interno in pelle scamosciata con tasca a scivolo.',
    materials:
      'Esterno: 100% Raso di seta con rinforzo in pelle. Interno: 100% Pelle scamosciata. Ferratura: ottone placcato oro 18k.',
    care: 'Conservare nella dust bag con carta velina all\'interno. Non esporre a fonti di calore o umidità. Pulire delicatamente con panno morbido asciutto.',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Oro Rosa', value: '#B76E79' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-040',
    name: 'Borsa a Tracolla Mini',
    slug: 'borsa-a-tracolla-mini',
    price: 890,
    category: 'accessori',
    description:
      'Il formato mini che racchiude il massimo dell\'eleganza. Pelle martellata e tracolla a catena per un accessorio versatile dal giorno alla sera.',
    details:
      'Dimensioni: 20 x 15 x 8 cm. Tracolla a catena regolabile con inserto in pelle. Pattina con chiusura a scatto magnetico. Interno con tasca con zip. Doppio scomparto.',
    materials:
      'Esterno: 100% Pelle di vitello martellata. Interno: 100% Pelle scamosciata. Catena: ottone con finitura palladio.',
    care: 'Conservare nella dust bag fornita. Evitare il contatto con cosmetici e profumi. Trattare con spray protettivo per pelle ogni stagione.',
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
      { name: 'Avorio', value: '#F5F0EB' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-041',
    name: 'Zaino Urbano Lusso',
    slug: 'zaino-urbano-lusso',
    price: 1190,
    category: 'accessori',
    description:
      'Lo zaino che ridefinisce il concetto di lusso urbano. Linee pulite e pelle pieno fiore per chi si muove con disinvoltura tra impegni e desideri.',
    details:
      'Dimensioni: 30 x 40 x 14 cm. Apertura con zip a doppio cursore. Scomparto imbottito per laptop fino a 14 pollici. Spallacci ergonomici regolabili in pelle. Tasca frontale con chiusura magnetica nascosta.',
    materials:
      'Esterno: 100% Pelle di vitello pieno fiore. Interno: 100% Nylon tecnico con trattamento antimacchia. Ferratura: ottone brunito.',
    care: 'Conservare in posizione verticale nella dust bag. Imbottire con carta velina. Nutrire la pelle con crema specifica ogni 3 mesi.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-042',
    name: 'Borsa Secchiello',
    slug: 'borsa-secchiello',
    price: 990,
    category: 'accessori',
    description:
      'La silhouette a secchiello incontra l\'artigianalità italiana. Pelle morbida a concia naturale che si patina con il tempo, diventando unica.',
    details:
      'Dimensioni: 22 x 28 x 16 cm. Chiusura a coulisse con cordoncino in pelle. Manico superiore e tracolla rimovibile regolabile. Interno con tasca con zip rimovibile. Base rinforzata.',
    materials:
      'Esterno: 100% Pelle nabuk di vitello. Interno: 100% Cotone cerato. Cordoncino: pelle intrecciata a mano.',
    care: 'Spazzolare con spazzola per nabuk. Trattare con spray impermeabilizzante specifico. Conservare nella dust bag con carta velina all\'interno.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80',
    ],
    colors: [
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Miele', value: '#D4A44C' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },

  /* ═══════════════════════════════════════════════════════════
     OCCHIALI DA SOLE (4 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-043',
    name: 'Occhiali Cat-Eye',
    slug: 'occhiali-cat-eye',
    price: 490,
    category: 'accessori',
    description:
      'La femminilità audace del cat-eye rivisitata in acetato italiano. Angoli affilati e lenti sfumate per uno sguardo che non passa inosservato.',
    details:
      'Montatura in acetato di cellulosa italiano lavorato a mano. Lenti Carl Zeiss con protezione UV400 e trattamento antiriflesso. Cerniere a molla rinforzate. Peso: 28 g. Forniti con astuccio rigido e panno in microfibra.',
    materials:
      'Montatura: acetato di cellulosa Mazzucchelli. Lenti: cristallo minerale Zeiss categoria 3. Cerniere: acciaio inox.',
    care: 'Pulire con il panno in microfibra fornito. Conservare sempre nell\'astuccio rigido. Non lasciare in auto nelle giornate calde. Risciacquare sotto acqua corrente prima di asciugare.',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-044',
    name: 'Occhiali Rotondi',
    slug: 'occhiali-rotondi',
    price: 450,
    category: 'accessori',
    description:
      'Il fascino intellettuale della montatura rotonda in titanio ultraleggero. Un classico senza tempo per chi cerca l\'essenzialità nel lusso.',
    details:
      'Montatura in titanio beta ultraleggero. Lenti polarizzate con protezione UV400. Naselli regolabili in titanio con cuscinetti in silicone. Cerniere flex. Peso: 18 g.',
    materials:
      'Montatura: titanio beta giapponese. Lenti: cristallo minerale polarizzato Zeiss. Terminali: acetato di cellulosa.',
    care: 'Pulire con panno in microfibra. Conservare nell\'astuccio rigido. Evitare il contatto con solventi chimici e profumi.',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80',
    ],
    colors: [
      { name: 'Oro Rosa', value: '#B76E79' },
      { name: 'Argento', value: '#C0C0C0' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-045',
    name: 'Occhiali Oversize',
    slug: 'occhiali-oversize',
    price: 520,
    category: 'accessori',
    description:
      'Proporzioni generose per un effetto glamour immediato. Acetato spesso e lenti sfumate che incorniciano il volto con autorevolezza.',
    details:
      'Montatura oversize in acetato stratificato a mano. Lenti sfumate con protezione UV400. Aste larghe con logo inciso in rilievo. Cerniere a 5 barilotti. Peso: 35 g.',
    materials:
      'Montatura: acetato di cellulosa stratificato Mazzucchelli. Lenti: CR39 con trattamento antiriflesso e idrorepellente. Cerniere: acciaio inox.',
    care: 'Pulire delicatamente con panno umido in microfibra. Non appoggiare sulle lenti. Conservare nell\'astuccio rigido lontano da fonti di calore.',
    images: [
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-046',
    name: 'Occhiali Geometrici',
    slug: 'occhiali-geometrici',
    price: 540,
    category: 'accessori',
    description:
      'Una montatura dalle linee geometriche decise che sfida le convenzioni dell\'eyewear classico. Per chi ama distinguersi con carattere.',
    details:
      'Forma esagonale irregolare in acetato. Lenti piatte con protezione UV400 e trattamento antiriflesso multistrato. Aste sottili con terminale in metallo. Peso: 30 g.',
    materials:
      'Montatura: acetato di cellulosa italiano con inserto in titanio. Lenti: cristallo minerale con filtro blu. Cerniere: titanio.',
    care: 'Pulire con panno in microfibra fornito. Conservare nell\'astuccio rigido. Evitare temperature superiori a 40°C. Risciacquare sotto acqua tiepida prima di asciugare.',
    images: [
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    ],
    colors: [
      { name: 'Blu Navy', value: '#1A1A3E' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Miele', value: '#D4A44C' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },

  /* ═══════════════════════════════════════════════════════════
     GIOIELLI / BRACCIALI (4 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-047',
    name: 'Bracciale Catena Oro',
    slug: 'bracciale-catena-oro',
    price: 690,
    category: 'accessori',
    description:
      'Una catena in oro giallo 18 carati dalla maglia grumetta piatta, lavorata a mano dagli orafi fiorentini. Eleganza discreta che si porta ogni giorno.',
    details:
      'Lunghezza: 19 cm con estensione di 2 cm. Maglia grumetta piatta lavorata a mano. Chiusura a moschettone con piastrina logo. Peso: 12 g. Fornito in cofanetto Maison Nera.',
    materials:
      'Oro giallo 18 carati (750/1000). Chiusura: oro giallo 18 carati con incisione laser del logo.',
    care: 'Conservare nel cofanetto originale. Pulire con panno morbido specifico per oro. Evitare il contatto con profumi, creme e detergenti. Rimuovere prima del bagno.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    colors: [
      { name: 'Oro Rosa', value: '#B76E79' },
      { name: 'Miele', value: '#D4A44C' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-048',
    name: 'Bracciale Rigido Argento',
    slug: 'bracciale-rigido-argento',
    price: 390,
    category: 'accessori',
    description:
      'Un bracciale rigido in argento 925 con finitura satinata e dettaglio scultoreo. La purezza della forma incontra la maestria artigianale.',
    details:
      'Diametro interno: 6,2 cm. Apertura laterale per indossarlo facilmente. Spessore: 4 mm. Finitura satinata con bordi lucidi. Peso: 28 g. Fornito in cofanetto Maison Nera.',
    materials:
      'Argento Sterling 925/1000 con trattamento antiossidante. Dettaglio in oro rosa 18 carati.',
    care: 'Conservare nel cofanetto originale avvolto nel panno antiossidante. Pulire con panno specifico per argento. Evitare il contatto con acqua salata e cloro.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    colors: [
      { name: 'Argento', value: '#C0C0C0' },
      { name: 'Oro Rosa', value: '#B76E79' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-049',
    name: 'Collana Pendente',
    slug: 'collana-pendente',
    price: 590,
    category: 'accessori',
    description:
      'Un pendente geometrico sospeso su una catena sottile in oro, dove il design contemporaneo si fonde con la tradizione orafa italiana.',
    details:
      'Catena: lunghezza 45 cm con estensione di 5 cm. Pendente: 2 x 1,5 cm, forma geometrica asimmetrica. Chiusura a moschettone. Peso totale: 8 g. Fornita in cofanetto Maison Nera.',
    materials:
      'Catena: oro giallo 18 carati (750/1000). Pendente: oro giallo 18 carati con inserto in onice nero.',
    care: 'Conservare distesa nel cofanetto originale per evitare nodi. Pulire con panno morbido. Evitare il contatto con profumi e creme. Rimuovere prima di dormire.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    colors: [
      { name: 'Miele', value: '#D4A44C' },
      { name: 'Oro Rosa', value: '#B76E79' },
      { name: 'Argento', value: '#C0C0C0' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-050',
    name: 'Orecchini Cerchio',
    slug: 'orecchini-cerchio',
    price: 490,
    category: 'accessori',
    description:
      'Cerchi in oro dalla forma perfetta con sezione ovale e finitura lucida. Un gioiello iconico che incornicia il viso con luminosità naturale.',
    details:
      'Diametro: 3,5 cm. Sezione ovale di 3 mm. Chiusura a scatto con perno in titanio. Peso per paio: 10 g. Forniti in cofanetto Maison Nera.',
    materials:
      'Oro giallo 18 carati (750/1000). Perno: titanio ipoallergenico grado 5.',
    care: 'Conservare nel cofanetto originale separati da altri gioielli. Pulire con panno morbido specifico per oro. Evitare urti e il contatto con prodotti chimici.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    colors: [
      { name: 'Miele', value: '#D4A44C' },
      { name: 'Argento', value: '#C0C0C0' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },

  /* ═══════════════════════════════════════════════════════════
     OROLOGI (3 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-051',
    name: 'Orologio Classico Pelle',
    slug: 'orologio-classico-pelle',
    price: 1490,
    category: 'accessori',
    description:
      'Un segnatempo dal design classico con cassa in acciaio e cinturino in pelle di alligatore. La misura del tempo secondo Maison Nera.',
    details:
      'Cassa: 40 mm in acciaio 316L satinato. Movimento: automatico svizzero con riserva di carica di 42 ore. Quadrante: indici applicati e lancette dauphine. Cinturino: 20 mm con fibbia ad ardiglione. Impermeabilità: 50 m.',
    materials:
      'Cassa: acciaio inossidabile 316L. Vetro: zaffiro con trattamento antiriflesso. Cinturino: pelle di alligatore del Mississippi con fodera in pelle di vitello.',
    care: 'Far revisionare il movimento ogni 5 anni. Evitare urti e campi magnetici intensi. Pulire il cinturino con panno umido. Non immergere oltre la profondità indicata.',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-052',
    name: 'Orologio Maglia Milano',
    slug: 'orologio-maglia-milano',
    price: 1390,
    category: 'accessori',
    description:
      'Il bracciale milanese in acciaio avvolge il polso con fluidità metallica. Un orologio che celebra l\'heritage orologiero con spirito contemporaneo.',
    details:
      'Cassa: 38 mm in acciaio 316L lucido. Movimento: automatico svizzero con data a ore 6. Bracciale maglia milanese con chiusura deployante regolabile. Quadrante sunburst con indici a bastone. Impermeabilità: 30 m.',
    materials:
      'Cassa e bracciale: acciaio inossidabile 316L con finitura lucida. Vetro: zaffiro bombato con trattamento antiriflesso interno. Fondello: acciaio con incisione numerata.',
    care: 'Risciacquare con acqua dolce dopo il contatto con acqua salata. Pulire il bracciale con spazzolino morbido. Far revisionare il movimento ogni 4-5 anni presso un centro autorizzato.',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    ],
    colors: [
      { name: 'Argento', value: '#C0C0C0' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-053',
    name: 'Orologio Minimalista',
    slug: 'orologio-minimalista',
    price: 990,
    category: 'accessori',
    description:
      'L\'essenza del tempo ridotta alla sua forma più pura. Quadrante vuoto, lancette sottili e cassa ultra-piatta per chi crede che meno sia più.',
    details:
      'Cassa: 36 mm ultra-piatta (6,8 mm) in acciaio 316L. Movimento: quarzo svizzero di alta precisione. Quadrante laccato senza indici con sole due lancette. Cinturino: 18 mm in pelle di vitello. Impermeabilità: 30 m.',
    materials:
      'Cassa: acciaio inossidabile 316L satinato. Vetro: zaffiro piano. Cinturino: pelle di vitello box calf con fodera in alcantara.',
    care: 'Sostituire la batteria ogni 2-3 anni presso un orologiaio qualificato. Conservare nella scatola originale. Evitare esposizione a campi magnetici.',
    images: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Blu Navy', value: '#1A1A3E' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },

  /* ═══════════════════════════════════════════════════════════
     FOULARD / SCIARPE (3 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-054',
    name: 'Sciarpa Cashmere',
    slug: 'sciarpa-cashmere',
    price: 490,
    category: 'accessori',
    description:
      'Cashmere mongoliano della più alta qualità, tessuto con trama diagonale che conferisce corpo e morbidezza. Un abbraccio di lusso contro il freddo.',
    details:
      'Dimensioni: 200 x 70 cm. Trama diagonale twill. Frange naturali di 8 cm. Peso: 180 g. Fornita in confezione regalo Maison Nera.',
    materials:
      '100% Cashmere mongoliano a due fili (fibra 14,5 micron). Tinto in filo con coloranti certificati OEKO-TEX.',
    care: 'Lavare a mano in acqua fredda con detergente specifico per cashmere. Non strizzare, stendere in piano su asciugamano. Conservare piegata con sacchetto di lavanda antitarme.',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80',
    ],
    colors: [
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-055',
    name: 'Foulard Seta Floreale',
    slug: 'foulard-seta-floreale',
    price: 350,
    category: 'accessori',
    description:
      'Seta twill stampata con un motivo floreale esclusivo ispirato ai giardini storici italiani. Un quadrato di bellezza pura da indossare o esporre.',
    details:
      'Dimensioni: 90 x 90 cm. Bordo roulotté cucito a mano. Stampa digitale a 16 passaggi di colore con fissaggio a vapore. Edizione limitata stagionale.',
    materials:
      '100% Seta Twill 14 momme. Stampa con pigmenti naturali a base d\'acqua.',
    care: 'Lavaggio a secco consigliato. In alternativa, lavare a mano in acqua fredda con detersivo delicato per seta. Non strizzare, asciugare in piano. Stirare a bassa temperatura sul rovescio.',
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    ],
    colors: [
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Blu Navy', value: '#1A1A3E' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-056',
    name: 'Stola Sera',
    slug: 'stola-sera',
    price: 590,
    category: 'accessori',
    description:
      'Una stola in chiffon di seta con bordi rifiniti a mano e delicata lucentezza. L\'accessorio che completa ogni abito da sera con grazia naturale.',
    details:
      'Dimensioni: 200 x 70 cm. Bordi arrotolati e cuciti a mano. Tessuto trasparente con riflessi satinati. Peso: 90 g. Fornita in confezione regalo.',
    materials:
      '100% Seta chiffon a 6 fili con finitura satinata. Tinto in capo con pigmenti resistenti alla luce.',
    care: 'Solo lavaggio a secco professionale. Conservare su gruccia imbottita o piegata in carta velina. Non esporre a profumi direttamente. Stirare a vapore a bassa temperatura.',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },

  /* ═══════════════════════════════════════════════════════════
     CINTURE (3 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-057',
    name: 'Cintura Pelle Liscia',
    slug: 'cintura-pelle-liscia',
    price: 350,
    category: 'accessori',
    description:
      'Una cintura essenziale in pelle liscia di vitello con fibbia in ottone massiccio. Il fondamento di ogni guardaroba curato nei dettagli.',
    details:
      'Larghezza: 3 cm. Pelle pieno fiore con taglio vivo e bordi tinti a mano. Fibbia ad ardiglione in ottone massiccio con finitura satinata. Cinque fori con occhielli in metallo. Punta arrotondata.',
    materials:
      'Cintura: 100% Pelle di vitello pieno fiore a concia vegetale. Fibbia: ottone massiccio con finitura nichel free.',
    care: 'Conservare distesa o arrotolata nella dust bag. Nutrire con crema per pelle liscia ogni 6 mesi. Evitare il contatto prolungato con acqua.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
      { name: 'Cammello', value: '#C19A6B' },
    ],
    sizes: [
      { label: '75', available: true },
      { label: '80', available: true },
      { label: '85', available: true },
      { label: '90', available: true },
      { label: '95', available: true },
    ],
  },
  {
    id: 'prod-058',
    name: 'Cintura Catena Dorata',
    slug: 'cintura-catena-dorata',
    price: 490,
    category: 'accessori',
    description:
      'Una cintura gioiello in maglia dorata con inserto in pelle intrecciata. Per definire il punto vita con un tocco di opulenza raffinata.',
    details:
      'Lunghezza totale: 95 cm regolabili. Catena a maglia piatta in metallo placcato oro. Inserto centrale in pelle intrecciata di 20 cm. Chiusura con gancio decorativo a forma di logo.',
    materials:
      'Catena: ottone placcato oro 18k con finitura satinata. Inserto: 100% Pelle di agnello nappa intrecciata a mano.',
    care: 'Conservare distesa nella dust bag. Non piegare la catena. Pulire il metallo con panno morbido asciutto. Evitare il contatto con profumi e umidità.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    colors: [
      { name: 'Miele', value: '#D4A44C' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: '75', available: true },
      { label: '80', available: true },
      { label: '85', available: true },
      { label: '90', available: true },
      { label: '95', available: true },
    ],
  },
  {
    id: 'prod-059',
    name: 'Cintura Reversibile',
    slug: 'cintura-reversibile',
    price: 420,
    category: 'accessori',
    description:
      'Due cinture in una: un lato in pelle liscia nera, l\'altro in pelle martellata cognac. La fibbia girevole permette di cambiare look in un gesto.',
    details:
      'Larghezza: 3,2 cm. Struttura a doppio strato con meccanismo di rotazione della fibbia brevettato. Fibbia rettangolare in acciaio con finitura palladio. Bordi verniciati a mano.',
    materials:
      'Lato A: 100% Pelle di vitello liscia. Lato B: 100% Pelle di vitello martellata. Fibbia: acciaio inossidabile con finitura palladio.',
    care: 'Conservare arrotolata nella dust bag. Alternare i due lati per un\'usura uniforme. Nutrire entrambi i lati con crema specifica ogni 4 mesi.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
    ],
    sizes: [
      { label: '75', available: true },
      { label: '80', available: true },
      { label: '85', available: true },
      { label: '90', available: true },
      { label: '95', available: true },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     CAPPELLI (3 products)
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-060',
    name: 'Fedora Feltro',
    slug: 'fedora-feltro',
    price: 390,
    category: 'accessori',
    description:
      'Un fedora in feltro di pelo di lepre, modellato a mano nella tradizione dei cappellai italiani. L\'accessorio che trasforma ogni outfit in un manifesto di stile.',
    details:
      'Tesa: 7 cm. Corona: 11 cm con incavo a goccia. Fascia in gros-grain di seta con fiocco laterale. Fodera interna in raso con fascia antisudore in pelle scamosciata.',
    materials:
      'Feltro: 100% Pelo di lepre. Fascia: gros-grain di seta. Fodera: raso di viscosa. Fascia antisudore: pelle scamosciata.',
    care: 'Spazzolare con spazzola morbida nel senso del pelo. Conservare su un supporto per cappelli o capovolto sulla corona. Non esporre alla pioggia. In caso di umidità, lasciare asciugare naturalmente.',
    images: [
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80',
      'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-061',
    name: 'Berretto Cashmere',
    slug: 'berretto-cashmere',
    price: 290,
    category: 'accessori',
    description:
      'Un berretto in cashmere a coste larghe, morbido e avvolgente. Il lusso che protegge dal freddo con discrezione e calore.',
    details:
      'Lavorazione a coste 3x3 in cashmere a 4 fili. Bordo ripiegabile. Vestibilità aderente con elasticità naturale. Peso: 65 g. Fornito in confezione regalo.',
    materials:
      '100% Cashmere mongoliano a 4 fili (fibra 15 micron). Tinto in filo con coloranti certificati OEKO-TEX.',
    care: 'Lavare a mano in acqua fredda con detergente per cashmere. Stendere in piano su asciugamano per asciugare. Non appendere. Conservare piegato con antitarme naturale.',
    images: [
      'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=800&q=80',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },
  {
    id: 'prod-062',
    name: 'Cappello Panama',
    slug: 'cappello-panama',
    price: 490,
    category: 'accessori',
    description:
      'Un autentico Panama intrecciato a mano in Ecuador con paglia toquilla. Leggero, pieghevole e dotato di un\'eleganza senza tempo per le giornate di sole.',
    details:
      'Tesa: 6,5 cm. Corona: 10 cm con incavo classico. Intreccio a mano in paglia toquilla con densità di 20 trecce per pollice. Fascia in gros-grain nero. Pieghevole senza deformazione permanente.',
    materials:
      'Paglia: 100% Fibra di toquilla (Carludovica palmata) intrecciata a mano. Fascia: gros-grain di cotone. Fodera: cotone organico.',
    care: 'Conservare nella scatola originale o su supporto per cappelli. Non esporre a pioggia intensa. Pulire con panno umido. Se schiacciato, riformare delicatamente con vapore.',
    images: [
      'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800&q=80',
      'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=800&q=80',
    ],
    colors: [
      { name: 'Avorio', value: '#F5F0EB' },
      { name: 'Cammello', value: '#C19A6B' },
    ],
    sizes: [{ label: 'Taglia Unica', available: true }],
  },

  /* ═══════════════════════════════════════════════════════════
     CALZATURE
     ═══════════════════════════════════════════════════════════ */
  {
    id: 'prod-011',
    name: 'Stivale Chelsea',
    slug: 'stivale-chelsea',
    price: 890,
    category: 'calzature',
    description:
      'Il Chelsea boot portato all\'estremo della raffinatezza. Vitello lucido montato su forma esclusiva con suola in cuoio cucita Blake Rapid.',
    details:
      'Costruzione Blake Rapid per flessibilità e isolamento. Elastici laterali in tessuto tecnico ad alta tenuta. Tacco impilato in cuoio da 3 cm. Suola in cuoio con inserto antiscivolo. Soletta imbottita in pelle.',
    materials:
      'Tomaia: 100% Vitello box calf lucido. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma naturale.',
    care: 'Utilizzare tendiscarpe in cedro dopo ogni utilizzo. Lucidare con crema specifica per box calf. Conservare nelle dust bag con forme inserite.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Nero Lucido', value: '#0A0A0A' },
      { name: 'Cuoio Bruciato', value: '#6F4E37' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
    featured: true,
  },
  {
    id: 'prod-012',
    name: 'Derby Classica',
    slug: 'derby-classica',
    price: 790,
    category: 'calzature',
    description:
      'La derby nella sua forma più pura. Cinque occhielli, punta tonda, costruzione Goodyear. Un classico che non conosce il tempo.',
    details:
      'Costruzione Goodyear Welted per durabilità e possibilità di risuolatura. Cinque occhielli con passalacci in metallo brunito. Punta tonda classica. Tacco in cuoio impilato da 2,5 cm. Soletta anatomica in sughero.',
    materials:
      'Tomaia: 100% Vitello francese anilina. Fodera: 100% Pelle di vitello vegetale. Suola: doppio cuoio Rendenbach con guardolo in cuoio naturale.',
    care: 'Applicare albero tendiscarpe in cedro dopo ogni uso. Nutrire con crema incolore ogni 10 utilizzi. Alternare con un altro paio per garantire longevità.',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Marrone Mogano', value: '#4E1609' },
      { name: 'Bordeaux Patina', value: '#722F37' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  // ── STIVALI (4) ──────────────────────────────────────────────
  {
    id: 'prod-063',
    name: 'Stivale Alto Pelle',
    slug: 'stivale-alto-pelle',
    price: 1190,
    category: 'calzature',
    description:
      'Stivale alto fino al ginocchio in vitello pieno fiore, costruito su forma slanciata per una silhouette impeccabile. La cerniera interna in ottone garantisce vestibilita e praticita.',
    details:
      'Altezza gambale 38 cm. Costruzione Blake Rapid. Cerniera laterale interna in metallo brunito. Tacco impilato in cuoio da 5 cm. Suola in cuoio con inserto antiscivolo in gomma naturale. Soletta anatomica imbottita.',
    materials:
      'Tomaia: 100% Vitello pieno fiore. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma naturale. Cerniera: ottone brunito.',
    care: 'Utilizzare tendiscarpe in cedro dopo ogni utilizzo. Nutrire con crema specifica per pelle liscia. Conservare nelle dust bag con forme inserite lontano da fonti di calore.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-064',
    name: 'Stivaletto Lacci',
    slug: 'stivaletto-lacci',
    price: 890,
    category: 'calzature',
    description:
      'Stivaletto stringato alla caviglia dal carattere deciso, realizzato in pelle di vitello con finitura a mano. Sei occhielli e gancetti metallici per un allacciatura sicura e raffinata.',
    details:
      'Altezza gambale 16 cm. Sei occhielli inferiori e due gancetti superiori in ottone. Costruzione Goodyear Welted. Tacco in cuoio impilato da 3,5 cm. Suola Dainite in gomma. Linguetta soffiettata anti-infiltrazione.',
    materials:
      'Tomaia: 100% Vitello ingrassato a mano. Fodera: 100% Pelle di vitello vegetale. Suola: gomma Dainite. Guardolo: cuoio naturale.',
    care: 'Applicare cera nutriente ogni 8-10 utilizzi. Utilizzare tendiscarpe in cedro. Evitare asciugatura vicino a fonti di calore diretto.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Marrone Mogano', value: '#4E1609' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-065',
    name: 'Boot Combat Lusso',
    slug: 'boot-combat-lusso',
    price: 990,
    category: 'calzature',
    description:
      'Il combat boot ridefinito attraverso la lente della pelletteria italiana. Pelle spazzolata a mano, suola carrarmato alleggerita e dettagli in ottone anticato per un carattere inconfondibile.',
    details:
      'Altezza gambale 20 cm. Otto occhielli in ottone anticato. Costruzione Blake Stitched rinforzata. Suola carrarmato in gomma Vibram alleggerita. Tacco integrato da 4 cm. Inserto comfort in memory foam rivestito in pelle.',
    materials:
      'Tomaia: 100% Vitello spazzolato a mano. Fodera: 100% Pelle di capra. Suola: gomma Vibram. Occhielli e gancetti: ottone anticato.',
    care: 'Spazzolare con spazzola morbida dopo ogni uso. Applicare crema nutriente per pelle spazzolata. Conservare con tendiscarpe in cedro nelle dust bag fornite.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-066',
    name: 'Stivale Equitazione',
    slug: 'stivale-equitazione',
    price: 1290,
    category: 'calzature',
    description:
      'Ispirato alla tradizione equestre, questo stivale alto in vitello lucido unisce rigore formale e comfort contemporaneo. La fibbia dorata al gambale e il cinturino regolabile ne esaltano il carattere distintivo.',
    details:
      'Altezza gambale 42 cm. Cinturino superiore con fibbia dorata regolabile. Costruzione Blake Rapid. Tacco impilato in cuoio da 3 cm. Cerniera posteriore nascosta. Rinforzo interno al gambale per struttura impeccabile.',
    materials:
      'Tomaia: 100% Vitello box calf lucido. Fodera: 100% Pelle di capra. Suola: cuoio Rendenbach. Fibbia: ottone con finitura oro antico.',
    care: 'Lucidare con crema specifica per box calf dopo ogni utilizzo. Conservare in posizione verticale con forme inserite. Evitare ambienti umidi.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Marrone Mogano', value: '#4E1609' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: false },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },

  // ── DECOLLETE / PUMPS (3) ──────────────────────────────────
  {
    id: 'prod-067',
    name: 'Decollete Classico',
    slug: 'decollete-classico',
    price: 690,
    category: 'calzature',
    description:
      'La quintessenza della femminilita italiana. Decollete con punta affusolata e tacco stiletto da 8,5 cm, interamente realizzata a mano su forma esclusiva Maison Nera.',
    details:
      'Tacco stiletto da 8,5 cm in acciaio rivestito in pelle. Punta affusolata. Soletta imbottita in pelle con inserto in lattice naturale per comfort prolungato. Suola in cuoio con inserto antiscivolo. Costruzione incollata con rinforzo cucito.',
    materials:
      'Tomaia: 100% Nappa di agnello. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma. Tacco: acciaio rivestito in nappa.',
    care: 'Conservare con forme inserite nella dust bag. Evitare superfici abrasive. Trattare con spray protettivo impermeabilizzante prima del primo utilizzo.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Nude', value: '#E8C4B8' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-068',
    name: 'Pump Kitten Heel',
    slug: 'pump-kitten-heel',
    price: 590,
    category: 'calzature',
    description:
      'Eleganza discreta con tacco kitten da 4,5 cm, ideale per chi desidera un portamento sofisticato con il massimo comfort. Linea essenziale e raffinata in nappa morbidissima.',
    details:
      'Tacco kitten da 4,5 cm. Punta leggermente arrotondata. Soletta anatomica imbottita in doppio strato. Fodera traspirante in pelle di capra. Suola in cuoio con gomma antiscivolo. Bordo superiore rifinito con bordino in grosgrain.',
    materials:
      'Tomaia: 100% Nappa di vitello. Fodera: 100% Pelle di capra. Suola: cuoio con inserto antiscivolo. Bordino: grosgrain di seta.',
    care: 'Pulire con panno morbido leggermente inumidito. Conservare nella dust bag con forme inserite. Nutrire la nappa con balsamo specifico ogni mese.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: false },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-069',
    name: 'Decollete Plateau',
    slug: 'decollete-plateau',
    price: 790,
    category: 'calzature',
    description:
      'Decollete con plateau frontale da 2 cm e tacco architettonico da 11 cm per una presenza scenica assoluta. Il plateau bilancia altezza e comfort in un equilibrio studiato.',
    details:
      'Tacco a blocco rivestito da 11 cm. Plateau frontale da 2 cm. Punta tonda. Soletta in pelle con imbottitura in memory foam. Suola in cuoio con rivestimento antiscivolo. Costruzione cementata rinforzata.',
    materials:
      'Tomaia: 100% Vitello verniciato. Fodera: 100% Pelle di capra. Suola: cuoio con rivestimento in gomma. Plateau e tacco: legno rivestito in pelle verniciata.',
    care: 'Pulire con panno morbido e prodotto specifico per vernice. Non esporre a fonti di calore. Conservare con forme inserite lontano dalla luce diretta.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
      { name: 'Bianco', value: '#FAFAFA' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: false },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },

  // ── SANDALI (3) ────────────────────────────────────────────
  {
    id: 'prod-070',
    name: 'Sandalo Tacco Scultura',
    slug: 'sandalo-tacco-scultura',
    price: 890,
    category: 'calzature',
    description:
      'Il tacco diventa scultura: scolpito in legno di noce e rivestito in pelle, sorregge un sandalo dalle linee purissime. Un pezzo da collezione per piedi esigenti.',
    details:
      'Tacco scultura in legno di noce rivestito in pelle da 9 cm. Fascette asimmetriche con regolazione tramite fibbia laterale dorata. Soletta anatomica in pelle con imbottitura. Suola in cuoio con inserto antiscivolo. Cinturino alla caviglia regolabile.',
    materials:
      'Tomaia: 100% Nappa di agnello. Tacco: legno di noce con rivestimento in nappa. Suola: cuoio con inserto in gomma. Fibbia: ottone dorato.',
    care: 'Conservare nella dust bag con forme inserite. Evitare il contatto con acqua. Trattare le fascette con crema nutriente per nappa.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-071',
    name: 'Sandalo Flat Intrecciato',
    slug: 'sandalo-flat-intrecciato',
    price: 490,
    category: 'calzature',
    description:
      'Intreccio artigianale di strisce di nappa che creano un sandalo flat dal comfort impareggiabile. La suola in cuoio flessibile accompagna ogni passo con leggerezza.',
    details:
      'Tomaia in strisce di nappa intrecciate a mano. Suola piatta in cuoio flessibile con inserto in gomma. Soletta anatomica in pelle imbottita. Chiusura con fibbia laterale regolabile. Altezza: 1,5 cm.',
    materials:
      'Tomaia: 100% Nappa di agnello intrecciata. Fodera: 100% Pelle di capra. Suola: cuoio flessibile con inserto in gomma naturale. Fibbia: ottone satinato.',
    care: 'Pulire con panno morbido asciutto. Trattare con spray impermeabilizzante. Conservare nella dust bag evitando la compressione dell\'intreccio.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-072',
    name: 'Sandalo Gladiatore',
    slug: 'sandalo-gladiatore',
    price: 690,
    category: 'calzature',
    description:
      'Ispirazione romana per un sandalo gladiatore contemporaneo. Fascette in vitello intrecciate salgono fino alla caviglia, chiuse da una zip posteriore nascosta per vestibilita perfetta.',
    details:
      'Altezza gambale 12 cm. Fascette in vitello disposte a griglia. Zip posteriore nascosta. Suola piatta in cuoio con inserto in gomma. Soletta anatomica imbottita in doppio strato. Rinforzo al tallone in pelle rinforzata.',
    materials:
      'Tomaia: 100% Vitello pieno fiore. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma naturale. Zip: metallica con finitura brunita.',
    care: 'Nutrire la pelle con balsamo specifico ogni 6-8 utilizzi. Conservare distesi nella dust bag. Evitare esposizione prolungata al sole.',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    ],
    colors: [
      { name: 'Cognac', value: '#8B4513' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: false },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },

  // ── MOCASSINI / LOAFERS (3) ────────────────────────────────
  {
    id: 'prod-073',
    name: 'Mocassino Nappa',
    slug: 'mocassino-nappa',
    price: 590,
    category: 'calzature',
    description:
      'Mocassino in nappa di agnello dalla morbidezza straordinaria, costruito con tecnica tubolare per avvolgere il piede come un guanto. Il comfort assoluto incontra l\'eleganza senza tempo.',
    details:
      'Costruzione tubolare a mano. Cuciture a vista con filo cerato. Suola in cuoio flessibile con inserto in gomma al tallone. Soletta imbottita anatomica in pelle. Mascherina con nappine decorative in pelle.',
    materials:
      'Tomaia: 100% Nappa di agnello. Fodera: 100% Pelle di capra non tinta. Suola: cuoio con inserto in gomma. Nappine: pelle di vitello.',
    care: 'Utilizzare tendiscarpe in cedro. Nutrire la nappa con crema delicata incolore. Evitare il contatto prolungato con acqua.',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-074',
    name: 'Loafer Catena',
    slug: 'loafer-catena',
    price: 690,
    category: 'calzature',
    description:
      'Il loafer con catena dorata che unisce la tradizione del mocassino americano alla raffinatezza della pelletteria fiorentina. Un pezzo iconico che non passa mai di moda.',
    details:
      'Catena decorativa in ottone dorato con finitura lucida. Costruzione Blake Stitched. Suola in cuoio con inserto in gomma antiscivolo. Soletta anatomica imbottita. Rinforzo al tallone per mantenimento della forma. Tacco in cuoio impilato da 2 cm.',
    materials:
      'Tomaia: 100% Vitello box calf lucido. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma. Catena: ottone con finitura oro 24K.',
    care: 'Lucidare con crema specifica per box calf. Pulire la catena con panno morbido asciutto. Conservare con tendiscarpe in cedro nella dust bag.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-075',
    name: 'Mocassino Driving',
    slug: 'mocassino-driving',
    price: 490,
    category: 'calzature',
    description:
      'Il mocassino driving per eccellenza, con suola in gommini per grip e flessibilita. Pelle morbidissima e costruzione senza fodera per una leggerezza assoluta, perfetto dalla guida al lido.',
    details:
      'Costruzione tubolare senza fodera per leggerezza. Suola in gommini in gomma naturale. Cuciture a mano a vista. Tallone rinforzato con inserto in pelle. Soletta in pelle imbottita rimovibile.',
    materials:
      'Tomaia: 100% Nappa di vitello. Suola: gomma naturale a gommini. Cuciture: filo di lino cerato. Soletta: pelle di vitello con imbottitura in lattice.',
    care: 'Evitare il contatto con acqua e superfici abrasive. Trattare con spray impermeabilizzante. Conservare nella dust bag con carte inserite.',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
    ],
    colors: [
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Verde Bosco', value: '#2D5F2D' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: true },
    ],
  },

  // ── SNEAKERS LUSSO (3) ────────────────────────────────────
  {
    id: 'prod-076',
    name: 'Sneaker Pelle Minimale',
    slug: 'sneaker-pelle-minimale',
    price: 490,
    category: 'calzature',
    description:
      'La sneaker ridotta all\'essenziale: linee pulite, pelle di vitello pieno fiore e suola in gomma margom. Zero loghi, zero distrazioni, cento percento sostanza.',
    details:
      'Profilo basso. Allacciatura a cinque occhielli piatti. Suola in gomma Margom da 3 cm. Soletta estraibile in pelle con imbottitura in schiuma a memoria. Fodera in pelle. Rinforzo al tallone in pelle scamosciata tono su tono.',
    materials:
      'Tomaia: 100% Vitello pieno fiore. Fodera: 100% Pelle di vitello. Suola: gomma Margom. Lacci: cotone cerato.',
    care: 'Pulire con spazzola morbida e panno umido. Trattare con crema incolore per pelle liscia. Conservare con tendiscarpe inseriti.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    ],
    colors: [
      { name: 'Bianco', value: '#FAFAFA' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Tortora', value: '#9E8E7E' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-077',
    name: 'Sneaker Platform',
    slug: 'sneaker-platform',
    price: 590,
    category: 'calzature',
    description:
      'Sneaker con suola platform oversize da 5 cm che reinterpreta le proporzioni classiche. Pelle morbida e dettagli in pelle scamosciata per un contrasto materico raffinato.',
    details:
      'Suola platform in gomma EVA da 5 cm. Tomaia in pelle liscia con inserti in pelle scamosciata. Allacciatura a sei occhielli. Soletta estraibile imbottita in triplo strato. Linguetta imbottita con logo impresso. Rinforzo posteriore in pelle.',
    materials:
      'Tomaia: 80% Vitello pieno fiore, 20% Pelle scamosciata di vitello. Fodera: 100% Pelle di capra. Suola: gomma EVA ad alta densita.',
    care: 'Pulire la pelle liscia con panno umido e la scamosciata con spazzola apposita. Proteggere con spray impermeabilizzante. Evitare l\'esposizione prolungata al sole.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    ],
    colors: [
      { name: 'Bianco', value: '#FAFAFA' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-078',
    name: 'Sneaker Runner Lusso',
    slug: 'sneaker-runner-lusso',
    price: 690,
    category: 'calzature',
    description:
      'L\'estetica runner reinterpretata con materiali nobili: vitello pieno fiore, pelle scamosciata e mesh tecnico in un design stratificato. La suola scolpita unisce ammortizzazione e stile.',
    details:
      'Suola tecnica scolpita in gomma EVA con inserto in TPU per ammortizzazione. Tomaia multimateriale stratificata. Allacciatura rapida a sei occhielli. Soletta estraibile in memory foam rivestita in pelle. Tallone rinforzato con contrafforte interno.',
    materials:
      'Tomaia: 50% Vitello pieno fiore, 30% Pelle scamosciata, 20% Mesh tecnico. Fodera: 100% Pelle di capra. Suola: gomma EVA con inserto TPU.',
    care: 'Pulire ogni materiale con il prodotto specifico. Rimuovere lo sporco dal mesh con spazzolino morbido umido. Conservare con forme inserite lontano da fonti di calore.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bianco', value: '#FAFAFA' },
      { name: 'Argento', value: '#C0C0C0' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: true },
    ],
  },

  // ── DERBY / OXFORD (2) ────────────────────────────────────
  {
    id: 'prod-079',
    name: 'Oxford Bicolore',
    slug: 'oxford-bicolore',
    price: 790,
    category: 'calzature',
    description:
      'Oxford dal carattere spettatore con gioco cromatico bicolore. Punta e tallone in vitello lucido contrastano con il corpo in pelle scamosciata per un effetto scenografico e sartoriale.',
    details:
      'Costruzione Goodyear Welted. Cinque occhielli chiusi. Punta e tallone in vitello lucido con corpo in scamosciato. Tacco in cuoio impilato da 2,5 cm. Suola in doppio cuoio con guardolo decorativo. Soletta anatomica in sughero naturale.',
    materials:
      'Tomaia: 60% Vitello box calf, 40% Pelle scamosciata di vitello. Fodera: 100% Pelle di vitello vegetale. Suola: doppio cuoio con guardolo in cuoio naturale.',
    care: 'Trattare separatamente i due materiali: crema per il box calf e spazzola per lo scamosciato. Utilizzare tendiscarpe in cedro. Alternare con un altro paio.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Cognac', value: '#8B4513' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: false },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: true },
    ],
  },
  {
    id: 'prod-080',
    name: 'Derby Brogue',
    slug: 'derby-brogue',
    price: 750,
    category: 'calzature',
    description:
      'Derby full brogue con decorazioni a coda di rondine e perforazioni eseguite a mano. La patina applicata artigianalmente rende ogni paio un esemplare unico.',
    details:
      'Costruzione Goodyear Welted. Decorazioni brogue a coda di rondine e perforazioni a mano. Cinque occhielli aperti in ottone brunito. Tacco in cuoio impilato da 2,5 cm. Suola in cuoio Rendenbach. Soletta in sughero con rivestimento in pelle. Patina a mano.',
    materials:
      'Tomaia: 100% Vitello francese con patina artigianale. Fodera: 100% Pelle di vitello vegetale. Suola: cuoio Rendenbach. Guardolo: cuoio naturale cucito a mano.',
    care: 'Applicare crema colorata corrispondente alla patina ogni 10 utilizzi. Utilizzare tendiscarpe in cedro. Spazzolare regolarmente con spazzola in crine naturale.',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    ],
    colors: [
      { name: 'Marrone Mogano', value: '#4E1609' },
      { name: 'Cognac', value: '#8B4513' },
      { name: 'Nero', value: '#0A0A0A' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: true },
      { label: '44', available: false },
    ],
  },

  // ── MULES (2) ──────────────────────────────────────────────
  {
    id: 'prod-081',
    name: 'Mule Tacco',
    slug: 'mule-tacco',
    price: 590,
    category: 'calzature',
    description:
      'Mule con tacco scolpito da 7 cm in legno rivestito, dal fascino deciso e contemporaneo. La fascia unica in nappa avvolge il piede con grazia, lasciando il tallone scoperto.',
    details:
      'Tacco scolpito in legno rivestito in pelle da 7 cm. Fascia unica in nappa imbottita. Soletta anatomica in pelle con imbottitura in lattice. Suola in cuoio con inserto antiscivolo in gomma. Punta quadrata contemporanea.',
    materials:
      'Tomaia: 100% Nappa di agnello. Tacco: legno rivestito in nappa. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma.',
    care: 'Conservare nella dust bag con forme inserite. Nutrire la nappa con balsamo specifico. Evitare superfici umide o abrasive.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Nude', value: '#E8C4B8' },
      { name: 'Cammello', value: '#C19A6B' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-082',
    name: 'Mule Flat Imbottito',
    slug: 'mule-flat-imbottito',
    price: 450,
    category: 'calzature',
    description:
      'Mule flat dalla fascia imbottita in nappa che avvolge il piede con morbidezza avvolgente. L\'effetto trapuntato aggiunge volume e carattere a una silhouette essenziale.',
    details:
      'Fascia imbottita con trapuntatura a rombi. Suola piatta in cuoio con inserto in gomma da 1,5 cm. Soletta anatomica imbottita in triplo strato. Punta tonda. Fodera interna in pelle di capra traspirante.',
    materials:
      'Tomaia: 100% Nappa di agnello imbottita. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma naturale. Imbottitura: ovatta di poliestere riciclato.',
    care: 'Pulire con panno morbido asciutto. Non comprimere l\'imbottitura durante la conservazione. Conservare nella dust bag con carta velina inserita.',
    images: [
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bianco', value: '#FAFAFA' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: false },
      { label: '42', available: false },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },

  // ── ESPADRILLES / SLIPPER (2) ─────────────────────────────
  {
    id: 'prod-083',
    name: 'Espadrille Pelle',
    slug: 'espadrille-pelle',
    price: 390,
    category: 'calzature',
    description:
      'L\'espadrille tradizionale elevata dalla pelle di vitello e dalla suola in corda di iuta intrecciata a mano. Un classico estivo trasformato in oggetto di lusso discreto.',
    details:
      'Suola in corda di iuta intrecciata a mano con rivestimento in gomma sul fondo. Tomaia in pelle morbida con rifinitura a taglio vivo. Soletta in pelle imbottita. Cuciture a vista con filo di cotone cerato. Altezza: 3 cm.',
    materials:
      'Tomaia: 100% Vitello pieno fiore. Suola: corda di iuta naturale con base in gomma. Soletta: pelle di vitello. Cuciture: cotone cerato.',
    care: 'Evitare il contatto prolungato con acqua per preservare la corda di iuta. Trattare la pelle con crema nutriente. Conservare in luogo asciutto e ventilato.',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Cammello', value: '#C19A6B' },
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bianco', value: '#FAFAFA' },
    ],
    sizes: [
      { label: '36', available: true },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
  {
    id: 'prod-084',
    name: 'Slipper Velluto',
    slug: 'slipper-velluto',
    price: 490,
    category: 'calzature',
    description:
      'Lo slipper da sera in velluto di seta con ricamo a mano del monogramma Maison Nera. Un pezzo cerimoniale che trasforma ogni occasione in un evento memorabile.',
    details:
      'Tomaia in velluto di seta con ricamo a mano del monogramma. Fodera interna in pelle di capra. Suola in cuoio flessibile con inserto in gomma. Soletta imbottita in pelle. Rinforzo al tallone per vestibilita sicura. Bordino superiore in grosgrain di seta.',
    materials:
      'Tomaia: 100% Velluto di seta. Ricamo: filo di seta e filo metallico dorato. Fodera: 100% Pelle di capra. Suola: cuoio con inserto in gomma. Bordino: grosgrain di seta.',
    care: 'Spazzolare il velluto con spazzola a setole morbide seguendo il verso del pelo. Non bagnare. Conservare con forme inserite nella dust bag al riparo dalla luce.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    colors: [
      { name: 'Nero', value: '#0A0A0A' },
      { name: 'Bordeaux', value: '#6B1D2A' },
      { name: 'Verde Bosco', value: '#2D5F2D' },
    ],
    sizes: [
      { label: '36', available: false },
      { label: '37', available: true },
      { label: '38', available: true },
      { label: '39', available: true },
      { label: '40', available: true },
      { label: '41', available: true },
      { label: '42', available: true },
      { label: '43', available: false },
      { label: '44', available: false },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   Helper functions
   ───────────────────────────────────────────────────────────── */

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
