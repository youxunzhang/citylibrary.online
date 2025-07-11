const franceLibraryData = [
  {
    city: "Paris",
    libraries: [
      {
        name: "Bibliothèque nationale de France",
        address: "Quai François Mauriac, 75706 Paris",
        phone: "+33 1 53 79 59 59",
        website: "https://www.bnf.fr/",
        description: "France's national library, one of the world's largest libraries, collecting all French publications."
      },
      {
        name: "Sorbonne University Library",
        address: "17 rue de la Sorbonne, 75005 Paris",
        phone: "+33 1 40 46 22 11",
        website: "https://www.biu.sorbonne.fr/",
        description: "Sorbonne University Library, one of France's oldest university libraries."
      },
      {
        name: "Sciences Po Library",
        address: "27 rue Saint-Guillaume, 75007 Paris",
        phone: "+33 1 45 49 50 50",
        website: "https://www.sciencespo.fr/bibliotheque/",
        description: "Sciences Po Library with rich political science and international relations literature."
      }
    ]
  },
  {
    city: "Lyon",
    libraries: [
      {
        name: "University of Lyon Library",
        address: "18 rue Chevreul, 69007 Lyon",
        phone: "+33 4 72 72 20 00",
        website: "https://www.bu.univ-lyon1.fr/",
        description: "University of Lyon Library, an important academic library in France."
      },
      {
        name: "Lyon Municipal Library",
        address: "30 boulevard de la Croix-Rousse, 69004 Lyon",
        phone: "+33 4 78 62 18 00",
        website: "https://www.bm-lyon.fr/",
        description: "Lyon Municipal Library with modern service facilities."
      }
    ]
  },
  {
    city: "Marseille",
    libraries: [
      {
        name: "Aix-Marseille University Library",
        address: "58 boulevard Charles Livon, 13007 Marseille",
        phone: "+33 4 91 39 65 00",
        website: "https://bu.univ-amu.fr/",
        description: "Aix-Marseille University Library, an important academic library in the Provence region."
      },
      {
        name: "Marseille Municipal Library",
        address: "58 Cours Belsunce, 13001 Marseille",
        phone: "+33 4 91 55 90 00",
        website: "https://www.bmvr.marseille.fr/",
        description: "Marseille Municipal Library serving the Marseille area."
      }
    ]
  },
  {
    city: "Toulouse",
    libraries: [
      {
        name: "University of Toulouse Library",
        address: "5 allées Antonio Machado, 31058 Toulouse",
        phone: "+33 5 61 50 45 00",
        website: "https://bu.univ-tlse3.fr/",
        description: "University of Toulouse Library, an important academic library in southwestern France."
      },
      {
        name: "Toulouse Municipal Library",
        address: "1 rue de Périgord, 31000 Toulouse",
        phone: "+33 5 62 27 40 00",
        website: "https://www.bibliotheque.toulouse.fr/",
        description: "Toulouse Municipal Library with modern architectural design."
      }
    ]
  },
  {
    city: "Nice",
    libraries: [
      {
        name: "University of Nice Library",
        address: "Parc Valrose, 06108 Nice",
        phone: "+33 4 92 07 66 00",
        website: "https://bu.unice.fr/",
        description: "University of Nice Library, an important academic library in the French Riviera region."
      },
      {
        name: "Nice Municipal Library",
        address: "33 avenue Malausséna, 06000 Nice",
        phone: "+33 4 97 13 48 00",
        website: "https://www.bmvr-nice.com/",
        description: "Nice Municipal Library serving the Nice area."
      }
    ]
  },
  {
    city: "Nantes",
    libraries: [
      {
        name: "University of Nantes Library",
        address: "Chemin de la Censive du Tertre, 44312 Nantes",
        phone: "+33 2 40 14 10 00",
        website: "https://bu.univ-nantes.fr/",
        description: "University of Nantes Library, an important academic library in the Loire region."
      },
      {
        name: "Nantes Municipal Library",
        address: "24 quai de la Fosse, 44000 Nantes",
        phone: "+33 2 40 41 95 95",
        website: "https://bibliotheques.nantes.fr/",
        description: "Nantes Municipal Library with modern service facilities."
      }
    ]
  },
  {
    city: "Strasbourg",
    libraries: [
      {
        name: "University of Strasbourg Library",
        address: "6 place de l'Université, 67000 Strasbourg",
        phone: "+33 3 68 85 65 00",
        website: "https://bu.unistra.fr/",
        description: "University of Strasbourg Library, an important academic library in the Alsace region."
      },
      {
        name: "Strasbourg Municipal Library",
        address: "1 place de l'Étoile, 67000 Strasbourg",
        phone: "+33 3 88 23 90 00",
        website: "https://www.bnu.fr/",
        description: "Strasbourg Municipal Library, a modern library in a historical building."
      }
    ]
  },
  {
    city: "Montpellier",
    libraries: [
      {
        name: "University of Montpellier Library",
        address: "163 rue Auguste Broussonnet, 34090 Montpellier",
        phone: "+33 4 67 14 20 00",
        website: "https://bu.univ-montp3.fr/",
        description: "University of Montpellier Library, an important academic library in the Languedoc region."
      },
      {
        name: "Montpellier Municipal Library",
        address: "218 boulevard de l'Aéroport, 34000 Montpellier",
        phone: "+33 4 67 34 87 00",
        website: "https://www.bm-montpellier.fr/",
        description: "Montpellier Municipal Library with modern architectural design."
      }
    ]
  },
  {
    city: "Bordeaux",
    libraries: [
      {
        name: "University of Bordeaux Library",
        address: "351 cours de la Libération, 33405 Talence",
        phone: "+33 5 40 00 60 00",
        website: "https://www.u-bordeaux.fr/bibliotheques",
        description: "University of Bordeaux Library, an important academic library in the Aquitaine region."
      },
      {
        name: "Bordeaux Municipal Library",
        address: "85 cours du Maréchal-Juin, 33000 Bordeaux",
        phone: "+33 5 56 10 30 00",
        website: "https://bibliotheques.bordeaux.fr/",
        description: "Bordeaux Municipal Library serving the Bordeaux area."
      }
    ]
  },
  {
    city: "Rennes",
    libraries: [
      {
        name: "University of Rennes Library",
        address: "263 avenue du Général Leclerc, 35042 Rennes",
        phone: "+33 2 23 23 39 39",
        website: "https://bu.univ-rennes1.fr/",
        description: "University of Rennes Library, an important academic library in the Brittany region."
      },
      {
        name: "Rennes Municipal Library",
        address: "10 esplanade Charles de Gaulle, 35000 Rennes",
        phone: "+33 2 23 40 66 00",
        website: "https://www.bibliotheques.rennes.fr/",
        description: "Rennes Municipal Library with modern service facilities."
      }
    ]
  }
];