export const business = {
  name: "5 Minutes Convenience",
  fullName: "5 Minutes Convenience Store",
  tagline: "Your Sutherland corner store — fast service, cold drinks, zero wait.",
  description:
    "Hey Sutherland! We're your neighbors at 5 Minutes Convenience Store, and we know that in Sutherland, nobody has time to wait in long grocery lines. We're the local Saskatoon corner store right in the heart of the community, built for your lifestyle.",
  story:
    "Whether you're a U of S student grabbing a late-night energy drink and salty snack, or a local picking up fresh coffee on the way to work, we've got you. Our shelves are fully stocked with cold drinks, grocery essentials, household items, and all your random cravings. We aren't a faceless chain — just a Sutherland neighborhood market where the service is fast, and the drinks are always cold!",
  neighborhood: "Sutherland",
  city: "Saskatoon",
  logo: "/Company_Logo.png",
  address: {
    street: "1100A Central Ave",
    city: "Saskatoon",
    province: "SK",
    postal: "S7N 2H1",
    full: "1100A Central Ave, Saskatoon, SK S7N 2H1",
  },
  phone: "(306) 979-5166",
  phoneHref: "tel:+13069795166",
  hours: [
    { day: "Monday", time: "7:00 AM – 11:00 PM" },
    { day: "Tuesday", time: "7:00 AM – 11:00 PM" },
    { day: "Wednesday", time: "7:00 AM – 11:00 PM" },
    { day: "Thursday", time: "7:00 AM – 11:00 PM" },
    { day: "Friday", time: "7:00 AM – 11:00 PM" },
    { day: "Saturday", time: "8:00 AM – 11:00 PM" },
    { day: "Sunday", time: "8:00 AM – 11:00 PM" },
  ],
  orderLinks: [
    {
      name: "SkipTheDishes",
      href: "https://www.skipthedishes.com",
      description: "Snacks, drinks & essentials delivered to your door.",
    },
    {
      name: "Uber Eats",
      href: "https://www.ubereats.com",
      description: "Order your favourites without leaving home.",
    },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1100A+Central+Ave,+Saskatoon,+SK+S7N+2H1",
  mapsEmbed:
    "https://maps.google.com/maps?q=1100A+Central+Ave,+Saskatoon,+SK+S7N+2H1&z=15&output=embed",
} as const;

export const departments = [
  {
    title: "Fountain",
    description: "Ice-cold fountain drinks, slushies, and your favourite mix-ins.",
    icon: "cup-soda",
    accent: "bg-brand-blue",
  },
  {
    title: "Coffee",
    description: "Fresh-brewed coffee, cappuccino, and chai — grab and go.",
    icon: "coffee",
    accent: "bg-brand-orange",
  },
  {
    title: "Bakery",
    description: "Donuts, pastries, and baked goods behind the counter.",
    icon: "croissant",
    accent: "bg-brand-red",
  },
  {
    title: "Deli",
    description: "Hot food, rollers, and quick bites when hunger hits fast.",
    icon: "sandwich",
    accent: "bg-brand-blue",
  },
  {
    title: "Dairy & Essentials",
    description: "Milk, bread, eggs, and everyday staples without the big-box wait.",
    icon: "milk",
    accent: "bg-brand-orange",
  },
  {
    title: "Snacks & Beverages",
    description: "Chips, candy, energy drinks, and coolers stocked wall to wall.",
    icon: "shopping-basket",
    accent: "bg-brand-red",
  },
] as const;

export const gallery = [
  {
    src: "/StoreFront.png",
    alt: "Exterior of 5 Minutes Convenience Store on Central Ave in Sutherland",
    title: "Your neighborhood store on Central Ave",
    caption: "Easy parking, bright signage, and a warm welcome every visit.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/Inside_Store_1.png",
    alt: "Inside the store counter with fountain, coffee, bakery, and deli stations",
    title: "Fountain · Coffee · Bakery · Deli",
    caption: "Everything you need in one fast stop.",
    className: "md:col-span-2",
  },
  {
    src: "/Inside_Store_2.png",
    alt: "Aisle with dairy, beverages, frozen foods, and snack shelves",
    title: "Fully stocked aisles",
    caption: "Dairy, beverages, frozen, and snacks ready to go.",
    className: "",
  },
  {
    src: "/Inside_Store_3.png",
    alt: "Self-serve coffee and chai station with neon sign",
    title: "Coffee & chai corner",
    caption: "Hot drinks brewed fresh throughout the day.",
    className: "",
  },
] as const;

export const highlights = [
  { label: "Open 7 days", detail: "Including weekends" },
  { label: "Open late", detail: "Until 11 PM most nights" },
  { label: "Heart of Sutherland", detail: "Central Ave location" },
  { label: "In & out fast", detail: "Built for busy lives" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#shop", label: "Departments" },
  { href: "#gallery", label: "Inside the Store" },
  { href: "#hours", label: "Hours & Location" },
  { href: "#order", label: "Order Online" },
] as const;
