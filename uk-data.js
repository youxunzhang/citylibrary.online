const ukLibraryData = [
  {
    city: "London",
    libraries: [
      {
        name: "British Library",
        address: "96 Euston Rd, London NW1 2DB",
        phone: "+44 20 7412 7332",
        website: "https://www.bl.uk/",
        description: "The UK's national library, one of the world's largest libraries, collecting all UK publications."
      },
      {
        name: "London Library",
        address: "14 St James's Square, St. James's, London SW1Y 4LG",
        phone: "+44 20 7766 4700",
        website: "https://www.londonlibrary.co.uk/",
        description: "London Library, the UK's oldest independent membership library."
      },
      {
        name: "UCL Library",
        address: "Gower St, London WC1E 6BT",
        phone: "+44 20 7679 7792",
        website: "https://www.ucl.ac.uk/library/",
        description: "UCL Library, the main library of University College London."
      },
      {
        name: "Imperial College London Library",
        address: "Exhibition Rd, South Kensington, London SW7 2AZ",
        phone: "+44 20 7594 8820",
        website: "https://www.imperial.ac.uk/library/",
        description: "Imperial College London Library with rich science and engineering collections."
      }
    ]
  },
  {
    city: "Oxford",
    libraries: [
      {
        name: "Bodleian Library",
        address: "Broad St, Oxford OX1 3BG",
        phone: "+44 1865 277162",
        website: "https://www.bodleian.ox.ac.uk/",
        description: "Bodleian Library, one of the oldest libraries in the UK."
      },
      {
        name: "Oxford University Library",
        address: "Radcliffe Square, Oxford OX1 3BG",
        phone: "+44 1865 277000",
        website: "https://www.bodleian.ox.ac.uk/",
        description: "Oxford University Library, a world-famous academic library."
      }
    ]
  },
  {
    city: "Cambridge",
    libraries: [
      {
        name: "Cambridge University Library",
        address: "West Rd, Cambridge CB3 9DR",
        phone: "+44 1223 333000",
        website: "https://www.lib.cam.ac.uk/",
        description: "Cambridge University Library, one of the largest university libraries in the UK."
      },
      {
        name: "Trinity College Library",
        address: "Trinity College, Cambridge CB2 1TQ",
        phone: "+44 1223 338400",
        website: "https://www.trin.cam.ac.uk/library/",
        description: "Trinity College Library, Cambridge's oldest college library."
      }
    ]
  },
  {
    city: "Edinburgh",
    libraries: [
      {
        name: "University of Edinburgh Library",
        address: "30 George Square, Edinburgh EH8 9LJ",
        phone: "+44 131 650 8374",
        website: "https://www.ed.ac.uk/information-services/library-museum-gallery",
        description: "University of Edinburgh Library, Scotland's largest academic library."
      },
      {
        name: "Edinburgh Central Library",
        address: "7-9 George IV Bridge, Edinburgh EH1 1EG",
        phone: "+44 131 242 8000",
        website: "https://www.edinburgh.gov.uk/libraries",
        description: "Edinburgh Central Library, Scotland's largest public library."
      }
    ]
  },
  {
    city: "Manchester",
    libraries: [
      {
        name: "University of Manchester Library",
        address: "Oxford Rd, Manchester M13 9PL",
        phone: "+44 161 275 3751",
        website: "https://www.library.manchester.ac.uk/",
        description: "University of Manchester Library, one of the largest university libraries in the UK."
      },
      {
        name: "Manchester Central Library",
        address: "St Peter's Square, Manchester M2 5PD",
        phone: "+44 161 234 1900",
        website: "https://www.manchester.gov.uk/libraries",
        description: "Manchester Central Library with modern architectural design."
      }
    ]
  },
  {
    city: "Birmingham",
    libraries: [
      {
        name: "University of Birmingham Library",
        address: "Edgbaston, Birmingham B15 2TT",
        phone: "+44 121 414 5838",
        website: "https://intranet.birmingham.ac.uk/library/",
        description: "University of Birmingham Library, a comprehensive university library."
      },
      {
        name: "Library of Birmingham",
        address: "Centenary Square, Broad St, Birmingham B1 2ND",
        phone: "+44 121 242 4242",
        website: "https://www.birmingham.gov.uk/libraries",
        description: "Library of Birmingham, Europe's largest public library."
      }
    ]
  },
  {
    city: "Liverpool",
    libraries: [
      {
        name: "University of Liverpool Library",
        address: "Harold Cohen Library, Ashton St, Liverpool L69 3DA",
        phone: "+44 151 794 5412",
        website: "https://www.liverpool.ac.uk/library/",
        description: "University of Liverpool Library with modern facilities."
      },
      {
        name: "Liverpool Central Library",
        address: "William Brown St, Liverpool L3 8EW",
        phone: "+44 151 233 5829",
        website: "https://liverpool.gov.uk/libraries",
        description: "Liverpool Central Library, a modern library in a historical building."
      }
    ]
  },
  {
    city: "Bristol",
    libraries: [
      {
        name: "University of Bristol Library",
        address: "Beacon House, Queens Rd, Bristol BS8 1QU",
        phone: "+44 117 928 8000",
        website: "https://www.bristol.ac.uk/library/",
        description: "University of Bristol Library, a comprehensive university library."
      },
      {
        name: "Bristol Central Library",
        address: "College Green, Bristol BS1 5TL",
        phone: "+44 117 903 7200",
        website: "https://www.bristol.gov.uk/libraries",
        description: "Bristol Central Library serving the Bristol area."
      }
    ]
  },
  {
    city: "Glasgow",
    libraries: [
      {
        name: "University of Glasgow Library",
        address: "Hillhead St, Glasgow G12 8QE",
        phone: "+44 141 330 6704",
        website: "https://www.gla.ac.uk/myglasgow/library/",
        description: "University of Glasgow Library, an important academic library in Scotland."
      },
      {
        name: "Mitchell Library",
        address: "North St, Glasgow G3 7DN",
        phone: "+44 141 287 2999",
        website: "https://www.glasgowlife.org.uk/libraries",
        description: "Mitchell Library, Europe's largest public reference library."
      }
    ]
  },
  {
    city: "Leeds",
    libraries: [
      {
        name: "University of Leeds Library",
        address: "Woodhouse Ln, Leeds LS2 9JT",
        phone: "+44 113 343 5663",
        website: "https://library.leeds.ac.uk/",
        description: "University of Leeds Library with modern facilities."
      },
      {
        name: "Leeds Central Library",
        address: "Calverley St, Leeds LS1 3AB",
        phone: "+44 113 378 5005",
        website: "https://www.leeds.gov.uk/libraries",
        description: "Leeds Central Library serving the Leeds community."
      }
    ]
  }
]; 