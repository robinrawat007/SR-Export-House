export type NavChild = {
  label: string
  to: string
}

export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

export type HeroSlide = {
  id: string
  title: string
  description: string
  image: string
  ctaLabel: string
  ctaTo: string
}

export type ProductCategory = 'agro' | 'industrial'

export type Product = {
  slug: string
  name: string
  category: ProductCategory
  image: string
  shortDescription: string
  description: string
  highlights: string[]
}

export type QuickCard = {
  title: string
  image: string
  to: string
}

export type FeatureCard = {
  title: string
  body: string
}

export type MissionCard = {
  title: string
  body: string
}

export type AboutPillar = {
  title: string
  body: string
}

export type ShowcaseImage = {
  src: string
  alt: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type CertificateItem = {
  title: string
  issuer: string
  image: string
}

export const companyInfo = {
  name: 'S.R Export House',
  tagline:
    'A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram.',
  whatsappNumber: '917042088772',
  email: 'export@srexporthouse.com',
  phone: '+91 70420 88772',
  address: 'Sonipat, Haryana, India',
  social: {
    instagram: 'https://www.instagram.com/s.r.exporthouse?igsh=ZGl6c3YwaDh0dHFs',
    linkedin: 'https://www.linkedin.com/company/s-r-export-house/',
  },
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  {
    label: 'Our Products',
    to: '/our-products',
    children: [
      { label: 'Rice', to: '/products/rice' },
      { label: 'Mango Pulp', to: '/products/mango-pulp' },
      { label: 'Spices', to: '/products/spices' },
      { label: 'Wires and Cables', to: '/products/wires-and-cables' },
      { label: 'Tiles and Marbles', to: '/products/tiles-and-marbles' },
      { label: 'Psyllium Husk', to: '/products/psyllium-husk' },
      { label: 'Dried and Dehydrated Items', to: '/products/dried-and-dehydrated-items' },
      { label: 'Coffee', to: '/products/coffee' },
      { label: 'Essential Oils', to: '/products/essential-oils' },
      { label: 'Menthol', to: '/products/menthol' },
      { label: 'Pearls', to: '/products/pearls' },
    ],
  },
  { label: 'Our Certifications', to: '/our-certifications' },
  { label: 'Contact Us', to: '/contact-us' },
]

export const heroSlides: HeroSlide[] = [
  {
    id: 'rice',
    title: 'Bringing Authentic and Premium Rice to the World',
    description:
      'We collaborate with suppliers to export high-quality agro products, promoting fair trade and sustainability worldwide.',
    image: '/images/hero-rice.png',
    ctaLabel: 'To Shop',
    ctaTo: '/products/rice',
  },
  {
    id: 'spices',
    title: 'Delivering Aromatic and Authentic Spices Worldwide',
    description:
      'Our spices are carefully sourced to maintain freshness, aroma, and taste, ensuring global satisfaction.',
    image: '/images/hero-chili.png',
    ctaLabel: 'To Shop',
    ctaTo: '/products/spices',
  },
]

export const quickCards: QuickCard[] = [
  { title: 'Mango Pulp', image: '/images/card-mango.jpg', to: '/products/mango-pulp' },
  { title: 'Spices', image: '/images/card-spices.jpg', to: '/products/spices' },
  {
    title: 'Dried and Dehydrated Items',
    image: '/images/card-dried.webp',
    to: '/products/dried-and-dehydrated-items',
  },
  { title: 'Wires and Cables', image: '/images/card-wires.jpg', to: '/products/wires-and-cables' },
]

export const products: Product[] = [
  {
    slug: 'coffee',
    name: 'Coffee',
    category: 'agro',
    image: '/images/product-coffee.webp',
    shortDescription: 'Premium coffee for global buyers.',
    description:
      'We supply carefully sourced coffee beans with a rich aroma and balanced flavor profile suited for global roasting and blending requirements.',
    highlights: ['Premium bean quality', 'Consistent grading', 'Export ready packaging'],
  },
  {
    slug: 'dried-and-dehydrated-items',
    name: 'Dried and Dehydrated Items',
    category: 'agro',
    image: '/images/product-dried.jpg',
    shortDescription: 'Nutrient-rich dehydrated fruits and vegetables.',
    description:
      'Our dried and dehydrated product range is processed under strict hygiene standards to preserve nutrition, shelf life, and taste.',
    highlights: ['Long shelf life', 'Careful dehydration process', 'Custom bulk options'],
  },
  {
    slug: 'essential-oils',
    name: 'Essential Oils',
    category: 'agro',
    image: '/images/product-essential-lavender.jpeg',
    shortDescription: 'Pure and aromatic essential oil exports.',
    description:
      'Our essential oils are sourced from trusted producers and quality-tested for aroma, purity, and consistency before shipment.',
    highlights: ['High purity standards', 'Batch-tested quality', 'Global market compliant'],
  },
  {
    slug: 'mango-pulp',
    name: 'Mango Pulp',
    category: 'agro',
    image: '/images/product-mango.jpg',
    shortDescription: 'Fresh mango pulp with natural flavor.',
    description:
      'Produced from carefully selected mangoes, our pulp maintains natural sweetness, color, and texture for food processing industries worldwide.',
    highlights: ['Natural taste profile', 'Consistent texture', 'Bulk export quality'],
  },
  {
    slug: 'menthol',
    name: 'Menthol',
    category: 'agro',
    image: '/images/product-menthol.webp',
    shortDescription: 'High-quality menthol crystal supply.',
    description:
      'Our menthol products are supplied with strict quality control and purity checks to meet pharmaceutical and industrial requirements.',
    highlights: ['Reliable purity', 'Controlled processing', 'Secure logistics'],
  },
  {
    slug: 'pearls',
    name: 'Pearls',
    category: 'industrial',
    image: '/images/product-pearls.webp',
    shortDescription: 'Pearl products for decorative and craft demand.',
    description:
      'We export high-quality pearl products suitable for jewelry and craft applications with dependable packing and delivery support.',
    highlights: ['Uniform quality', 'Careful handling', 'Flexible quantity support'],
  },
  {
    slug: 'psyllium-husk',
    name: 'Psyllium Husk',
    category: 'agro',
    image: '/images/product-husk.jpg',
    shortDescription: 'Premium psyllium husk for global markets.',
    description:
      'Our psyllium husk is processed and cleaned with strict quality checks, ensuring consistency and suitability for food and wellness industries.',
    highlights: ['High cleanliness', 'Quality-tested batches', 'Export compliant'],
  },
  {
    slug: 'rice',
    name: 'Rice',
    category: 'agro',
    image: '/images/product-rice.jpg',
    shortDescription: 'Authentic Indian rice varieties for export.',
    description:
      'We source rice directly through reliable networks to ensure aroma, grain integrity, and quality consistency for global buyers.',
    highlights: ['Aromatic varieties', 'Stable quality', 'Reliable export chain'],
  },
  {
    slug: 'spices',
    name: 'Spices',
    category: 'agro',
    image: '/images/product-spices.jpg',
    shortDescription: 'Aromatic spices with global appeal.',
    description:
      'Our spice range is selected, cleaned, and packed to retain natural aroma and flavor while meeting international quality requirements.',
    highlights: ['Fresh aroma retention', 'Careful sourcing', 'Global shipping support'],
  },
  {
    slug: 'tiles-and-marbles',
    name: 'Tiles and Marbles',
    category: 'industrial',
    image: '/images/product-tiles.jpg',
    shortDescription: 'Durable and elegant tiles and marble exports.',
    description:
      'We export quality tiles and marbles with careful inspection, ensuring visual consistency, durability, and safe delivery.',
    highlights: ['Strong finish quality', 'Reliable packaging', 'Project-ready supply'],
  },
  {
    slug: 'wires-and-cables',
    name: 'Wires and Cables',
    category: 'industrial',
    image: '/images/product-wires.jpg',
    shortDescription: 'Industrial-grade wires and cables.',
    description:
      'Our wires and cables are supplied for varied industrial needs with dependable standards and timely international logistics.',
    highlights: ['Consistent standards', 'Industrial applications', 'Trusted supply chain'],
  },
]

export const missionCards: MissionCard[] = [
  {
    title: 'Our Mission',
    body: 'At S.R. Export House, our mission is to deliver premium products across the globe, ensuring customer satisfaction through reliability, quality, and service excellence. We strive to expand our reach by adhering to the highest standards of ethical business practices, fostering growth for our clients, partners, and communities.',
  },
  {
    title: 'Our Vision',
    body: 'To be a globally recognized leader in the export of high-quality agro products, known for our commitment to sustainability, innovation, and excellence. We aim to build enduring partnerships, contribute positively to global food security, and set new benchmarks in quality, safety, and ethical business practices, while empowering communities and supporting a greener planet.',
  },
  {
    title: 'Our Values',
    body: 'At S.R. Export House, our core values are centered around sustainability, innovation, and excellence. We are committed to promoting environmentally responsible practices, sourcing high-quality products that support a sustainable future. By embracing innovation, we continually enhance our processes and solutions, ensuring we lead in a competitive global market.',
  },
]

export const featureCards: FeatureCard[] = [
  {
    title: 'Freshness Guaranteed',
    body: 'We prioritize farm-to-market efficiency, ensuring that our spices, rice, and other agro products retain their natural aroma, flavor, and nutritional value, offering unparalleled freshness in every shipment.',
  },
  {
    title: 'Global Reach with Local Roots',
    body: 'Leveraging strong relationships with local farmers, we bring high-quality, locally sourced products to international markets, bridging the gap between traditional agriculture and global demand.',
  },
  {
    title: 'Transparency and Integrity',
    body: 'Honesty and reliability are at the core of our business. We maintain complete transparency in sourcing, pricing, and processes, ensuring ethical trade practices and long-term partnerships with customers worldwide.',
  },
  {
    title: 'Innovation in Agro Exporting',
    body: 'By integrating modern logistics, quality control, and sustainable practices, we continuously enhance our supply chain, ensuring efficiency, consistency, and premium quality in every agro product we export globally.',
  },
]

export const trustStats = [
  { label: 'Our Quality', value: '100%' },
  { label: 'Trusted by Clients', value: '150+' },
]

export const aboutPillars: AboutPillar[] = [
  {
    title: 'S.R. Export House',
    body: 'S.R. Export House is a family-run business founded in 2024 in loving memory of our grandfather, the late Shri Sahaj Ram. Built on his vision and values, we are passionate about connecting local farmers with international markets and ensuring that our products meet the highest standards of quality, freshness, and sustainability.',
  },
  {
    title: 'Integrity and Transparency',
    body: 'We believe in conducting business with honesty and openness. From sourcing fresh, organic produce to ensuring on-time deliveries, we uphold the highest standards of integrity in every transaction. Our customers trust that our processes are clear, fair, and built on long-term relationships.',
  },
  {
    title: 'Sustainability and Community',
    body: 'As a family-run business deeply rooted in agriculture, we are committed to sustainable farming practices that benefit both the environment and local farmers. By empowering our farming partners, we continue promoting eco-friendly practices across the export chain.',
  },
]

export const aboutGallery: ShowcaseImage[] = [
  { src: '/images/product-tiles.jpg', alt: 'Tiles and marbles interior display' },
  { src: '/images/product-wires.jpg', alt: 'Colorful industrial wires and cables' },
  { src: '/images/product-dried.jpg', alt: 'Dried and dehydrated fruit assortment' },
  { src: '/images/quality-rice.webp', alt: 'Premium rice grains in a bowl' },
  { src: '/images/product-husk.jpg', alt: 'Psyllium husk in wooden bowl' },
]

export const exportImpactStats = [
  { value: '2024', label: 'Founding Year' },
  { value: '150', label: 'Trust By Clients' },
  { value: '2', label: 'Offices' },
  { value: '10', label: 'Export Countries Served' },
]

export const contactFaq: FaqItem[] = [
  {
    question: 'What types of products do you export?',
    answer:
      'We specialize in high-quality fresh and frozen agro products, including fruits, vegetables, and other organic agricultural commodities. Our products are sourced directly from trusted local farmers, ensuring they meet the highest standards of quality and freshness.',
  },
  {
    question: 'How do you ensure the quality of your products?',
    answer:
      'At S.R. Export House, we follow strict quality control at every stage, from sourcing and processing to packaging and delivery. Our team performs detailed checks to ensure all products meet international standards.',
  },
  {
    question: 'Where do you export your products?',
    answer:
      'We export to global markets across North America, Europe, the Middle East, and Southeast Asia, helping connect local producers with international buyers.',
  },
  {
    question: 'How do you support local farmers?',
    answer:
      'We build long-term partnerships with local farmers through fair sourcing practices, transparent pricing, and practical support that helps improve consistency, income stability, and sustainable production.',
  },
  {
    question: 'What is your approach to sustainability?',
    answer:
      'Sustainability is central to our operations. We promote eco-friendly farming, efficient processing, and lower-impact logistics so our export model supports both current demand and future generations.',
  },
]

export const certificateItems: CertificateItem[] = [
  {
    title: 'GST Registration Certificate',
    issuer: 'Government of India',
    image: '/images/certificates/certificate-1.jpg',
  },
  {
    title: 'Spices Board Registration',
    issuer: 'Spices Board India',
    image: '/images/certificates/certificate-2.jpg',
  },
  {
    title: 'Importer Exporter Code',
    issuer: 'Directorate General of Foreign Trade',
    image: '/images/certificates/certificate-3.jpg',
  },
  {
    title: 'APEDA Membership',
    issuer: 'APEDA India',
    image: '/images/certificates/certificate-4.jpg',
  },
  {
    title: 'FSSAI License',
    issuer: 'Food Safety and Standards Authority of India',
    image: '/images/certificates/certificate-5.jpg',
  },
]
