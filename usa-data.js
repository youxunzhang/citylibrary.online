const usaLibraryData = [
  {
    city: "New York",
    libraries: [
      {
        name: "New York Public Library",
        address: "476 5th Ave, New York, NY 10018",
        phone: "+1 917-275-6975",
        website: "https://www.nypl.org/",
        description: "One of the largest public library systems in the US with rich collections and iconic architecture."
      },
      {
        name: "Columbia University Library",
        address: "535 W 114th St, New York, NY 10027",
        phone: "+1 212-854-7309",
        website: "https://library.columbia.edu/",
        description: "Columbia University Library, one of the oldest university libraries in the US."
      },
      {
        name: "New York University Library",
        address: "70 Washington Square S, New York, NY 10012",
        phone: "+1 212-998-2500",
        website: "https://library.nyu.edu/",
        description: "New York University Library with modern facilities."
      }
    ]
  },
  {
    city: "Washington DC",
    libraries: [
      {
        name: "Library of Congress",
        address: "101 Independence Ave SE, Washington, DC 20540",
        phone: "+1 202-707-5000",
        website: "https://www.loc.gov/",
        description: "The US national library, the world's largest library, collecting all US publications."
      },
      {
        name: "Georgetown University Library",
        address: "37th and O Streets, NW, Washington, DC 20057",
        phone: "+1 202-687-7605",
        website: "https://library.georgetown.edu/",
        description: "Georgetown University Library with rich international relations and legal literature."
      }
    ]
  },
  {
    city: "Boston",
    libraries: [
      {
        name: "Boston Public Library",
        address: "700 Boylston St, Boston, MA 02116",
        phone: "+1 617-536-5400",
        website: "https://www.bpl.org/",
        description: "The first public library in the US with a long history and beautiful architecture."
      },
      {
        name: "Harvard University Library",
        address: "Harvard Yard, Cambridge, MA 02138",
        phone: "+1 617-495-2411",
        website: "https://library.harvard.edu/",
        description: "Harvard University Library, the largest academic library system in the US."
      },
      {
        name: "MIT Libraries",
        address: "77 Massachusetts Ave, Cambridge, MA 02139",
        phone: "+1 617-253-5677",
        website: "https://libraries.mit.edu/",
        description: "MIT Libraries with rich science and engineering collections."
      }
    ]
  },
  {
    city: "Los Angeles",
    libraries: [
      {
        name: "Los Angeles Public Library",
        address: "630 W 5th St, Los Angeles, CA 90071",
        phone: "+1 213-228-7000",
        website: "https://www.lapl.org/",
        description: "Los Angeles Public Library serving the greater Los Angeles area."
      },
      {
        name: "UCLA Library",
        address: "280 Charles E Young Dr N, Los Angeles, CA 90095",
        phone: "+1 310-825-1075",
        website: "https://www.library.ucla.edu/",
        description: "UCLA Library, a comprehensive research university library."
      },
      {
        name: "USC Libraries",
        address: "3551 Trousdale Pkwy, Los Angeles, CA 90089",
        phone: "+1 213-740-2924",
        website: "https://libraries.usc.edu/",
        description: "USC Libraries with modern facilities."
      }
    ]
  },
  {
    city: "Chicago",
    libraries: [
      {
        name: "Chicago Public Library",
        address: "400 S State St, Chicago, IL 60605",
        phone: "+1 312-747-4300",
        website: "https://www.chipublib.org/",
        description: "Chicago Public Library, one of the largest public library systems in the US."
      },
      {
        name: "University of Chicago Library",
        address: "1100 E 57th St, Chicago, IL 60637",
        phone: "+1 773-702-8740",
        website: "https://www.lib.uchicago.edu/",
        description: "University of Chicago Library, a research university library."
      },
      {
        name: "Northwestern University Library",
        address: "1970 Campus Dr, Evanston, IL 60208",
        phone: "+1 847-491-7658",
        website: "https://www.library.northwestern.edu/",
        description: "Northwestern University Library, a comprehensive university library."
      }
    ]
  },
  {
    city: "San Francisco",
    libraries: [
      {
        name: "San Francisco Public Library",
        address: "100 Larkin St, San Francisco, CA 94102",
        phone: "+1 415-557-4400",
        website: "https://sfpl.org/",
        description: "San Francisco Public Library with modern architectural design."
      },
      {
        name: "UC Berkeley Library",
        address: "110 Doe Library, Berkeley, CA 94720",
        phone: "+1 510-642-6657",
        website: "https://www.lib.berkeley.edu/",
        description: "UC Berkeley Library, one of the top academic libraries in the US."
      },
      {
        name: "Stanford University Library",
        address: "557 Escondido Mall, Stanford, CA 94305",
        phone: "+1 650-723-1493",
        website: "https://library.stanford.edu/",
        description: "Stanford University Library, an important academic resource in Silicon Valley."
      }
    ]
  },
  {
    city: "Philadelphia",
    libraries: [
      {
        name: "Free Library of Philadelphia",
        address: "1901 Vine St, Philadelphia, PA 19103",
        phone: "+1 215-686-5322",
        website: "https://libwww.freelibrary.org/",
        description: "Free Library of Philadelphia, one of the oldest public libraries in the US."
      },
      {
        name: "University of Pennsylvania Library",
        address: "3420 Walnut St, Philadelphia, PA 19104",
        phone: "+1 215-898-7555",
        website: "https://www.library.upenn.edu/",
        description: "University of Pennsylvania Library, an Ivy League university library."
      }
    ]
  },
  {
    city: "Seattle",
    libraries: [
      {
        name: "Seattle Public Library",
        address: "1000 4th Ave, Seattle, WA 98104",
        phone: "+1 206-386-4636",
        website: "https://www.spl.org/",
        description: "Seattle Public Library with modern architectural design and technology features."
      },
      {
        name: "University of Washington Library",
        address: "4000 15th Ave NE, Seattle, WA 98195",
        phone: "+1 206-543-0242",
        website: "https://www.lib.washington.edu/",
        description: "University of Washington Library, an important academic library in the Northwest."
      }
    ]
  },
  {
    city: "Atlanta",
    libraries: [
      {
        name: "Atlanta-Fulton Public Library",
        address: "1 Margaret Mitchell Square, Atlanta, GA 30303",
        phone: "+1 404-730-1700",
        website: "https://www.afpls.org/",
        description: "Atlanta-Fulton Public Library serving the greater Atlanta area."
      },
      {
        name: "Georgia Institute of Technology Library",
        address: "266 4th St NW, Atlanta, GA 30332",
        phone: "+1 404-894-4500",
        website: "https://library.gatech.edu/",
        description: "Georgia Institute of Technology Library with excellent engineering collections."
      }
    ]
  },
  {
    city: "Miami",
    libraries: [
      {
        name: "Miami-Dade Public Library",
        address: "101 W Flagler St, Miami, FL 33130",
        phone: "+1 305-375-2665",
        website: "https://www.mdpls.org/",
        description: "Miami-Dade Public Library serving the diverse Miami community."
      },
      {
        name: "University of Miami Library",
        address: "1300 Memorial Dr, Coral Gables, FL 33146",
        phone: "+1 305-284-3233",
        website: "https://library.miami.edu/",
        description: "University of Miami Library with comprehensive collections."
      }
    ]
  }
]; 