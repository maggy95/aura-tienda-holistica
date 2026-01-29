
import { Product } from '../types';

export const products: Product[] = [
    {
        id: 1,
        name: "Amatista y Lavanda",
        subtitle: "La Vela de Conexión",
        tag: "Oferta Especial",
        category: "Aromaterapia",
        intention: "Calma",
        inStock: true,
        price: "$35.00", // Sale price
        originalPrice: "$45.00", // Original price
        description: "Vertida a mano para la paz interior. Más que un aroma, es una herramienta para tu ritual diario.",
        longDescription: "Vertida a mano para la paz interior. Más que un aroma, es una herramienta para tu ritual diario de regreso a ti mismo. Infusionada con cristales de Amatista en bruto para transmutar la energía negativa en amor incondicional y claridad mental.",
        recommendations: "Para potenciar sus efectos, enciéndela durante la luna nueva o llena. Combina perfectamente con una sesión de escritura reflexiva o meditación guiada. Mantén la mecha recortada a 5mm antes de cada uso.",
        image: "/assets/images/product_candle.png",
        images: [
            "/assets/images/product_candle.png",
            "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1570823336306-6c773950646c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1602166946663-1490212df595?auto=format&fit=crop&q=80&w=800"
        ],
        burnTime: "50 - 60 Horas",
        waxType: "100% Soya Orgánica",
        wick: "Madera FSC Crepitante",
        variants: [
            { name: "Tamaño", options: ["Estándar (200g)", "Grande (400g)"] },
            { name: "Intención", options: ["Calma", "Amor Propio", "Abundancia"] }
        ],
        benefits: ["Reduce la ansiedad", "Mejora la calidad del sueño", "Purifica el ambiente"],
        notes: [
            { title: "Bergamota", desc: "Cítrico brillante para despejar la niebla mental e invitar a la claridad.", icon: "light_mode" },
            { title: "Lavanda Francesa", desc: "Calmante floral clásico para el alivio profundo de la ansiedad.", icon: "spa" },
            { title: "Sándalo", desc: "Calidez amaderada que te ancla al momento presente.", icon: "forest" }
        ],
        ritual: [
            { step: 1, title: "Enciende tu Intención", desc: "Enciende la mecha de madera. Mientras la llama prende, afirma en silencio: 'Estoy aquí, estoy a salvo'." },
            { step: 2, title: "Respira el Aroma", desc: "Cierra los ojos. Inhala profundamente contando hasta 4. Exhala en 6, visualizando la Lavanda llevándose la tensión." },
            { step: 3, title: "Enraízate", desc: "Enfócate en la base de Sándalo. Visualiza raíces extendiéndose desde tu columna hacia la tierra." }
        ],
        reviews: [
            { id: "r1", author: "Elena R.", text: "No solo olía bien; cambió la energía de toda mi habitación." },
            { id: "r2", author: "Marcos J.", text: "El aroma es sutil, no abrumador. Se siente como caminar por un bosque húmedo." },
            { id: "r3", author: "Sara K.", text: "Compré esto para mi altar de meditación. El sonido crepitante ayuda mucho." }
        ]
    },
    {
        id: 2,
        name: "Amatista en Bruto",
        subtitle: "Drusa de Cristal",
        tag: "Pieza Única",
        category: "Cristales",
        intention: "Protección",
        inStock: true,
        price: "$42.00",
        description: "Piedra maestra para la transmutación de energía y elevación espiritual.",
        recommendations: "Colócala cerca de tu cama para promover sueños lúcidos, o en tu escritorio para bloquear el estrés laboral. Límpiala bajo la luz de la luna llena mensualmente.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAur-2IhRRefjwR6mw3bM7yR0j78RGgfYiaDTL2JAARi8AS0BZ0II1VZwRu6uSG00HZsU7c_6fpPh8-bSu-apw4VGH6fyMip-JTysWUHcIBYaiK3qipYE9GMyFjPal3OgMt_EgN_71m2qCz4F1hHyonCI8d-EQANhh8sImmleEMPGD4g2PsYzGepVsBDz8tFWLIsXt00As5LtcmJ2Qhk8QYcKjzzyOoJta-KCnN3EplmhSPo-sZWwghwBCxERWKfL6o-yNpOSaDOoz",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCAur-2IhRRefjwR6mw3bM7yR0j78RGgfYiaDTL2JAARi8AS0BZ0II1VZwRu6uSG00HZsU7c_6fpPh8-bSu-apw4VGH6fyMip-JTysWUHcIBYaiK3qipYE9GMyFjPal3OgMt_EgN_71m2qCz4F1hHyonCI8d-EQANhh8sImmleEMPGD4g2PsYzGepVsBDz8tFWLIsXt00As5LtcmJ2Qhk8QYcKjzzyOoJta-KCnN3EplmhSPo-sZWwghwBCxERWKfL6o-yNpOSaDOoz",
            "https://images.unsplash.com/photo-1567605934-2e90c8861d8f?auto=format&fit=crop&q=80&w=800"
        ],
        waxType: "Cristal Natural",
        variants: [
            { name: "Peso", options: ["200g - 300g", "300g - 450g", "500g+"] }
        ],
        benefits: ["Protección energética", "Favorece la meditación", "Decora con intención"]
    },
    {
        id: 3,
        name: "Kit de Limpieza Energética",
        subtitle: "Sahumerio Sagrado",
        tag: "Rituales",
        category: "Rituales",
        intention: "Limpieza",
        inStock: true,
        price: "$18.00",
        description: "Palo Santo ético y Salvia Blanca para purificar tus espacios.",
        recommendations: "Abre siempre una ventana antes de sahumar para permitir que la energía densa salga. Usa un cuenco resistente al calor para recoger las cenizas.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuP26fjB7wcW9TjLxDMw5utO0hrTeROgqBe9gziSOE2Yuat7my1hPMpWJuStd761tw6bpqmGAb4tsrGTivd2cRBEWToaHBqLG4qkVnK90Eo38jQevttkd9OsaJUNCGGrYeSK2Ng3d_z76K153rsRk7hL5Nq8SbuAkZjBeVoGYuwsflsXRY_R59xVKUJO4ZzSsfpKSSKoFIu-ZKsJgjPLy7_twBj2CsUWqyKHFL-x2e-EHC9M9UOFqWVwQd51EXXy7pHMtn0H01GIRB",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAuP26fjB7wcW9TjLxDMw5utO0hrTeROgqBe9gziSOE2Yuat7my1hPMpWJuStd761tw6bpqmGAb4tsrGTivd2cRBEWToaHBqLG4qkVnK90Eo38jQevttkd9OsaJUNCGGrYeSK2Ng3d_z76K153rsRk7hL5Nq8SbuAkZjBeVoGYuwsflsXRY_R59xVKUJO4ZzSsfpKSSKoFIu-ZKsJgjPLy7_twBj2CsUWqyKHFL-x2e-EHC9M9UOFqWVwQd51EXXy7pHMtn0H01GIRB",
            "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800"
        ],
        variants: [
            { name: "Incluye", options: ["Básico (Salvia + Palo Santo)", "Completo (+ Selenita)"] }
        ],
        benefits: ["Limpia energías densas", "Aroma natural y relajante", "Ideal para nuevos hogares"]
    },
    {
        id: 4,
        name: "Cuarzo Rosa Pulido",
        subtitle: "Cristal del Amor",
        tag: "-20% OFF",
        category: "Cristales",
        intention: "Amor",
        inStock: true,
        price: "$24.00", // Sale price
        originalPrice: "$30.00", // Original price
        description: "Fomenta el amor incondicional, la paz infinita y la compasión.",
        recommendations: "Crea una rejilla de cristal con cuarzo rosa en las esquinas de tu habitación para rodearte de vibraciones amorosas. Límpialo con humo de salvia, no con agua salada.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBK3XapsLf-IyC-NfcTfjOCX1x7aeqECHbqCsEMBPcsgoX3Uazw5-It9VdNEuqJI4ueIv5RAXKQxBBfTL3dEDj6AUEzw2hCWLR_2zXyrTmT4tQXTMnFy_ibc1UfqKECA-QEueLS3c4Sx2BULkFWwAydHGgED082Ssvf7NYP3ujKQvX60FZ6z9iVt3Nm9zB_rcUAYpdez0Ihd8ks4BsNel6YxFgG9IrsymDEQozzKW386TiSbxIgKKYOLwTDLQrvbjGxqkLHDIU7CB1",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDBK3XapsLf-IyC-NfcTfjOCX1x7aeqECHbqCsEMBPcsgoX3Uazw5-It9VdNEuqJI4ueIv5RAXKQxBBfTL3dEDj6AUEzw2hCWLR_2zXyrTmT4tQXTMnFy_ibc1UfqKECA-QEueLS3c4Sx2BULkFWwAydHGgED082Ssvf7NYP3ujKQvX60FZ6z9iVt3Nm9zB_rcUAYpdez0Ihd8ks4BsNel6YxFgG9IrsymDEQozzKW386TiSbxIgKKYOLwTDLQrvbjGxqkLHDIU7CB1",
            "https://images.unsplash.com/photo-1618419266748-0c33a3621405?auto=format&fit=crop&q=80&w=800"
        ],
        variants: [
            { name: "Forma", options: ["Esfera", "Corazón", "Palma"] }
        ],
        benefits: ["Sana heridas emocionales", "Atrae relaciones positivas", "Fomenta la autoaceptación"]
    },
    {
        id: 5,
        name: "Mazo de Tarot Místico",
        subtitle: "Oráculo Guía",
        tag: "Adivinación",
        category: "Rituales",
        intention: "Intuición",
        inStock: false,
        price: "$55.00",
        description: "Ilustraciones ricas en simbolismo para guiar tu camino intuitivo.",
        recommendations: "Consagra tu mazo pasándolo sobre el humo de incienso. Guárdalo envuelto en seda o en una caja de madera para proteger su energía de influencias externas.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_SEmiZxhCt2DK1pMd3kD_R2dTjoqMHJf3iVkYMM4AuSLJoEaa9cHA6TJDbH8pRh_PlWPs-GuHA_kqMS8-7VFWttEB-d90b-IlOepmdkpMAVAWk1Vg8aiIlpnDgm0qWQfDV3yhPjNg636n_vYvVErfaMCVDrbE3ivtpsm_ygdUyDjNL5UlH_J3Fi5ZLI_RwWjlF-wFPCviLJVNkNq__llMmTWqA-s2pxHcvZcsQN6mCHVlIgn_tX0oXuU_45CBcBeNKa8CeFCLbM4c",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB_SEmiZxhCt2DK1pMd3kD_R2dTjoqMHJf3iVkYMM4AuSLJoEaa9cHA6TJDbH8pRh_PlWPs-GuHA_kqMS8-7VFWttEB-d90b-IlOepmdkpMAVAWk1Vg8aiIlpnDgm0qWQfDV3yhPjNg636n_vYvVErfaMCVDrbE3ivtpsm_ygdUyDjNL5UlH_J3Fi5ZLI_RwWjlF-wFPCviLJVNkNq__llMmTWqA-s2pxHcvZcsQN6mCHVlIgn_tX0oXuU_45CBcBeNKa8CeFCLbM4c",
            "https://images.unsplash.com/photo-1634547902482-1d54eb2a688a?auto=format&fit=crop&q=80&w=800"
        ],
        benefits: ["Desarrolla la intuición", "Arte con láminas de oro", "Incluye guía en español"]
    },
    {
        id: 6,
        name: "Aceite de Eucalipto",
        subtitle: "Aceite Esencial",
        tag: "Aromaterapia",
        category: "Aromaterapia",
        intention: "Calma",
        inStock: true,
        price: "$22.00",
        description: "Claridad mental y respiración profunda. 100% puro.",
        recommendations: "Añade 3 gotas a tu difusor durante las horas de trabajo para mejorar la concentración. También puedes poner una gota en la palma de tus manos, frotar e inhalar profundamente.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Te5hNcvu_g_PH4ZDpkgrzpq6pZzBwrLpq4u6pLEOUw55ARvP80bmzJjO9CkPvIG6q7vEOYMBlwVI1EGRZHRizmTTnGQRpY6ia95Cnc_ni0FEgKiThFhMBMu-fWzhkCNecwBKAyeiDlqb1tQfiYD1CEVeW4qlxYpNlAwcP2qo18mDafNZrfbBklrUVS770UnFOwN8kZioZK6m1mCtgIpiQfZrnxU-cEAaTUmCS_EM5c-H6kxBydqEDUXnSCam14rKlxH34sdcJJdY",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Te5hNcvu_g_PH4ZDpkgrzpq6pZzBwrLpq4u6pLEOUw55ARvP80bmzJjO9CkPvIG6q7vEOYMBlwVI1EGRZHRizmTTnGQRpY6ia95Cnc_ni0FEgKiThFhMBMu-fWzhkCNecwBKAyeiDlqb1tQfiYD1CEVeW4qlxYpNlAwcP2qo18mDafNZrfbBklrUVS770UnFOwN8kZioZK6m1mCtgIpiQfZrnxU-cEAaTUmCS_EM5c-H6kxBydqEDUXnSCam14rKlxH34sdcJJdY",
            "https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?auto=format&fit=crop&q=80&w=800"
        ],
        benefits: ["Descongestionante natural", "Mejora la concentración", "Purificador de aire"]
    },
    {
        id: 7,
        name: "Lámpara de Sal",
        subtitle: "Himalaya Glow",
        tag: "Decoración",
        category: "Decoración",
        intention: "Calma",
        inStock: true,
        price: "$48.00",
        description: "Purificación del ambiente mediante ionización natural.",
        recommendations: "Mantenla encendida el mayor tiempo posible para maximizar la ionización. Evita colocarla en lugares muy húmedos como el baño, ya que la sal absorbe la humedad.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzx3nIe0rlPOeaOgOHhTSyjFIoa59SJojIDo0EExmtdKBqPr2mlPiJ24fAlf6qOkhoWGS2T2okfzqIxTtULWpk6XDlzcTcw5etGalRPjSInPZyI-xnCuTSw_4pHouRvFN-ogaWcZHiWwxrXrbgDrGmn3Ec5LqAjT24liq1kdAWlAfvmyIF2RI1E5ZJHl_JZ36zvYQSRwEKboaJgkMPck2qch6O9gtU10A1VWWgnADW4FKcYLe8DvGYz_sSqbzJHYctMdrnCuKADwT9",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCzx3nIe0rlPOeaOgOHhTSyjFIoa59SJojIDo0EExmtdKBqPr2mlPiJ24fAlf6qOkhoWGS2T2okfzqIxTtULWpk6XDlzcTcw5etGalRPjSInPZyI-xnCuTSw_4pHouRvFN-ogaWcZHiWwxrXrbgDrGmn3Ec5LqAjT24liq1kdAWlAfvmyIF2RI1E5ZJHl_JZ36zvYQSRwEKboaJgkMPck2qch6O9gtU10A1VWWgnADW4FKcYLe8DvGYz_sSqbzJHYctMdrnCuKADwT9",
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
        ],
        benefits: ["Ionización negativa", "Luz cálida relajante", "Reduce el estrés electromagnético"]
    },
    {
        id: 8,
        name: "Porta Incienso Zen",
        subtitle: "Soporte Cerámico",
        tag: "Accesorios",
        category: "Decoración",
        intention: "Calma",
        inStock: true,
        price: "$35.00",
        description: "Diseño minimalista cerámico para tus momentos de pausa.",
        recommendations: "Limpia los residuos de ceniza regularmente con un paño seco para mantener su estética. Combina maravillosamente con inciensos de sándalo o mirra.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbzWBTR0D5ucFEITL-jzD2oeTVe1rS6w7g2n8Ds4Od46g5djhNm0Xz6oREGr1SqIOuCuYSVRu6MtyFpv5NtthaLLbS9P9f26PIbMoEe9l0uu5qUTO7ceTXDwW8K95jKpODsrfyqEInnCqNluWS2iQAHdCstLeTNz3McX3W__VFw_kfqRnyrcx7XNYjM22P_uwvSSqHmmuSgRRlq0irEYFblAEFC-fVnAEsfWLfy46jk8mu_6aLisE9rjoVzcxR670fu1ShZN8b0Dt",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbzWBTR0D5ucFEITL-jzD2oeTVe1rS6w7g2n8Ds4Od46g5djhNm0Xz6oREGr1SqIOuCuYSVRu6MtyFpv5NtthaLLbS9P9f26PIbMoEe9l0uu5qUTO7ceTXDwW8K95jKpODsrfyqEInnCqNluWS2iQAHdCstLeTNz3McX3W__VFw_kfqRnyrcx7XNYjM22P_uwvSSqHmmuSgRRlq0irEYFblAEFC-fVnAEsfWLfy46jk8mu_6aLisE9rjoVzcxR670fu1ShZN8b0Dt",
            "https://images.unsplash.com/photo-1518112166137-1901c8389607?auto=format&fit=crop&q=80&w=800"
        ],
        benefits: ["Diseño artesanal", "Fácil de limpiar", "Estética Wabi-Sabi"]
    }
];
