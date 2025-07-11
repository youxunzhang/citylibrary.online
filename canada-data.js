const canadaLibraryData = [
  {
    city: "Toronto",
    libraries: [
      {
        name: "Toronto Public Library",
        address: "789 Yonge St, Toronto, ON M4W 2G8",
        phone: "+1 416-393-7131",
        website: "https://www.torontopubliclibrary.ca/",
        description: "Canada's largest public library system serving the Toronto area."
      },
      {
        name: "University of Toronto Library",
        address: "130 St George St, Toronto, ON M5S 1A5",
        phone: "+1 416-978-8450",
        website: "https://onesearch.library.utoronto.ca/",
        description: "University of Toronto Library, one of Canada's top academic libraries."
      },
      {
        name: "York University Library",
        address: "4700 Keele St, Toronto, ON M3J 1P3",
        phone: "+1 416-736-2100",
        website: "https://www.library.yorku.ca/",
        description: "York University Library with modern facilities."
      }
    ]
  },
  {
    city: "Vancouver",
    libraries: [
      {
        name: "Vancouver Public Library",
        address: "350 W Georgia St, Vancouver, BC V6B 6B1",
        phone: "+1 604-331-3603",
        website: "https://www.vpl.ca/",
        description: "Vancouver Public Library with modern architectural design."
      },
      {
        name: "University of British Columbia Library",
        address: "1958 Main Mall, Vancouver, BC V6T 1Z2",
        phone: "+1 604-822-6375",
        website: "https://www.library.ubc.ca/",
        description: "UBC Library, an important academic library in Western Canada."
      },
      {
        name: "Simon Fraser University Library",
        address: "8888 University Dr, Burnaby, BC V5A 1S6",
        phone: "+1 778-782-3260",
        website: "https://www.lib.sfu.ca/",
        description: "SFU Library, a modern research university library."
      }
    ]
  },
  {
    city: "Montreal",
    libraries: [
      {
        name: "Montreal Public Library",
        address: "475 Boul de Maisonneuve E, Montréal, QC H2L 5C4",
        phone: "+1 514-872-2000",
        website: "https://bibliomontreal.com/",
        description: "Montreal Public Library with bilingual French and English services."
      },
      {
        name: "McGill University Library",
        address: "3459 McTavish St, Montréal, QC H3A 0C9",
        phone: "+1 514-398-4734",
        website: "https://www.mcgill.ca/library/",
        description: "McGill University Library, one of Canada's oldest university libraries."
      },
      {
        name: "Université de Montréal Library",
        address: "2900 Boul Édouard-Montpetit, Montréal, QC H3T 1J4",
        phone: "+1 514-343-6111",
        website: "https://bib.umontreal.ca/",
        description: "Université de Montréal Library, a French-language university library."
      }
    ]
  },
  {
    city: "Ottawa",
    libraries: [
      {
        name: "Library and Archives Canada",
        address: "395 Wellington St, Ottawa, ON K1A 0N4",
        phone: "+1 613-996-5115",
        website: "https://www.bac-lac.gc.ca/",
        description: "Library and Archives Canada, collecting all Canadian publications."
      },
      {
        name: "University of Ottawa Library",
        address: "65 University Private, Ottawa, ON K1N 6N5",
        phone: "+1 613-562-5800",
        website: "https://biblio.uottawa.ca/",
        description: "University of Ottawa Library, a bilingual university library."
      },
      {
        name: "Carleton University Library",
        address: "1125 Colonel By Dr, Ottawa, ON K1S 5B6",
        phone: "+1 613-520-2600",
        website: "https://library.carleton.ca/",
        description: "Carleton University Library with modern facilities."
      }
    ]
  },
  {
    city: "Calgary",
    libraries: [
      {
        name: "Calgary Public Library",
        address: "800 3 St SE, Calgary, AB T2G 2E7",
        phone: "+1 403-260-2600",
        website: "https://calgarylibrary.ca/",
        description: "Calgary Public Library with modern architectural design."
      },
      {
        name: "University of Calgary Library",
        address: "2500 University Dr NW, Calgary, AB T2N 1N4",
        phone: "+1 403-220-8895",
        website: "https://library.ucalgary.ca/",
        description: "University of Calgary Library, an important academic library in Alberta."
      }
    ]
  },
  {
    city: "Edmonton",
    libraries: [
      {
        name: "Edmonton Public Library",
        address: "7 Sir Winston Churchill Square, Edmonton, AB T5J 2V4",
        phone: "+1 780-496-7000",
        website: "https://www.epl.ca/",
        description: "Edmonton Public Library serving the Edmonton area."
      },
      {
        name: "University of Alberta Library",
        address: "116 St & 85 Ave, Edmonton, AB T6G 2R3",
        phone: "+1 780-492-5791",
        website: "https://www.library.ualberta.ca/",
        description: "University of Alberta Library, an important research library in Western Canada."
      }
    ]
  },
  {
    city: "Winnipeg",
    libraries: [
      {
        name: "Winnipeg Public Library",
        address: "251 Donald St, Winnipeg, MB R3C 3P8",
        phone: "+1 204-986-6450",
        website: "https://wpl.winnipeg.ca/",
        description: "Winnipeg Public Library, Manitoba's largest public library."
      },
      {
        name: "University of Manitoba Library",
        address: "25 Chancellors Cir, Winnipeg, MB R3T 2N2",
        phone: "+1 204-474-9844",
        website: "https://libguides.lib.umanitoba.ca/",
        description: "University of Manitoba Library, an important academic library in the Prairies."
      }
    ]
  },
  {
    city: "Quebec City",
    libraries: [
      {
        name: "Quebec City Public Library",
        address: "3 Place de la Cité, Québec, QC G1R 5C5",
        phone: "+1 418-641-6789",
        website: "https://www.bibliothequesdequebec.qc.ca/",
        description: "Quebec City Public Library with French cultural characteristics."
      },
      {
        name: "Université Laval Library",
        address: "2325 Rue de l'Université, Québec, QC G1V 0A6",
        phone: "+1 418-656-2131",
        website: "https://www.bibl.ulaval.ca/",
        description: "Université Laval Library, a French-language university library."
      }
    ]
  },
  {
    city: "Halifax",
    libraries: [
      {
        name: "Halifax Public Library",
        address: "5440 Spring Garden Rd, Halifax, NS B3J 1E9",
        phone: "+1 902-490-5700",
        website: "https://www.halifaxpubliclibraries.ca/",
        description: "Halifax Public Library, an important public library in Nova Scotia."
      },
      {
        name: "Dalhousie University Library",
        address: "6225 University Ave, Halifax, NS B3H 4R2",
        phone: "+1 902-494-3601",
        website: "https://libraries.dal.ca/",
        description: "Dalhousie University Library, an important academic library in the Atlantic region."
      }
    ]
  },
  {
    city: "Victoria",
    libraries: [
      {
        name: "Greater Victoria Public Library",
        address: "735 Broughton St, Victoria, BC V8W 3H2",
        phone: "+1 250-382-7241",
        website: "https://gvpl.ca/",
        description: "Greater Victoria Public Library serving the Victoria area."
      },
      {
        name: "University of Victoria Library",
        address: "3800 Finnerty Rd, Victoria, BC V8P 5C2",
        phone: "+1 250-721-8230",
        website: "https://www.uvic.ca/library/",
        description: "University of Victoria Library, an important academic library on Vancouver Island."
      }
    ]
  }
]; 