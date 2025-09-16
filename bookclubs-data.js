const bookClubData = [
  {
    city: "New York",
    bookClubs: [
      {
        name: "Manhattan Literary Society",
        address: "1235 Madison Avenue, New York, NY 10128",
        phone: "+1 212-555-0123",
        website: "https://www.manhattanliterary.org/",
        description: "A prestigious book club meeting monthly in the Upper East Side, focusing on contemporary fiction and classic literature. Members enjoy wine and cheese while discussing the latest bestsellers.",
        meetingTime: "First Tuesday of each month, 7:00 PM",
        membershipFee: "$25/month",
        currentBook: "The Midnight Library by Matt Haig"
      },
      {
        name: "Brooklyn Bookworms",
        address: "456 Bedford Avenue, Brooklyn, NY 11211",
        phone: "+1 718-555-0456",
        website: "https://www.brooklynbookworms.com/",
        description: "A vibrant, diverse book club in Williamsburg that explores everything from indie authors to international literature. Known for lively discussions and community events.",
        meetingTime: "Every other Thursday, 8:00 PM",
        membershipFee: "Free (donations welcome)",
        currentBook: "Klara and the Sun by Kazuo Ishiguro"
      },
      {
        name: "Queens Reading Circle",
        address: "789 Queens Boulevard, Queens, NY 11375",
        phone: "+1 718-555-0789",
        website: "https://www.queensreadingcircle.org/",
        description: "A welcoming community book club that celebrates multicultural literature and hosts author meet-and-greets. Perfect for readers of all backgrounds.",
        meetingTime: "Last Saturday of each month, 2:00 PM",
        membershipFee: "$15/month",
        currentBook: "The Vanishing Half by Brit Bennett"
      }
    ]
  },
  {
    city: "Los Angeles",
    bookClubs: [
      {
        name: "Hollywood Book Club",
        address: "5678 Sunset Boulevard, Los Angeles, CA 90028",
        phone: "+1 323-555-0567",
        website: "https://www.hollywoodbookclub.com/",
        description: "A celebrity-favorite book club that meets in a historic Hollywood venue. Features exclusive author events and film adaptations of discussed books.",
        meetingTime: "Second Wednesday of each month, 7:30 PM",
        membershipFee: "$50/month",
        currentBook: "Lessons in Chemistry by Bonnie Garmus"
      },
      {
        name: "Venice Beach Readers",
        address: "1234 Ocean Front Walk, Venice, CA 90291",
        phone: "+1 310-555-0123",
        website: "https://www.venicebeachreaders.org/",
        description: "A laid-back, beachside book club that meets outdoors when weather permits. Focuses on environmental literature and California authors.",
        meetingTime: "Every Sunday, 4:00 PM",
        membershipFee: "$20/month",
        currentBook: "The Overstory by Richard Powers"
      },
      {
        name: "Pasadena Literary Society",
        address: "901 Colorado Boulevard, Pasadena, CA 91105",
        phone: "+1 626-555-0901",
        website: "https://www.pasadenaliterary.org/",
        description: "An intellectual book club with a focus on historical fiction and non-fiction. Meets in a beautiful historic building with a private library.",
        meetingTime: "Third Friday of each month, 6:00 PM",
        membershipFee: "$35/month",
        currentBook: "The Lincoln Highway by Amor Towles"
      }
    ]
  },
  {
    city: "Chicago",
    bookClubs: [
      {
        name: "Windy City Book Club",
        address: "2345 Michigan Avenue, Chicago, IL 60601",
        phone: "+1 312-555-0234",
        website: "https://www.windycitybookclub.com/",
        description: "Chicago's premier book club, meeting in a downtown skyscraper with stunning city views. Features local authors and Chicago-themed literature.",
        meetingTime: "First Monday of each month, 6:30 PM",
        membershipFee: "$40/month",
        currentBook: "The Devil and the Dark Water by Stuart Turton"
      },
      {
        name: "Wicker Park Readers",
        address: "3456 North Milwaukee Avenue, Chicago, IL 60618",
        phone: "+1 773-555-0345",
        website: "https://www.wickerparkreaders.org/",
        description: "A hip, artistic book club in the trendy Wicker Park neighborhood. Focuses on contemporary fiction, graphic novels, and experimental literature.",
        meetingTime: "Every other Tuesday, 7:00 PM",
        membershipFee: "$25/month",
        currentBook: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid"
      },
      {
        name: "Hyde Park Book Discussion",
        address: "4567 South Hyde Park Boulevard, Chicago, IL 60615",
        phone: "+1 773-555-0456",
        website: "https://www.hydeparkbooks.org/",
        description: "An academic-focused book club near the University of Chicago. Explores classic literature, philosophy, and scholarly works in an intimate setting.",
        meetingTime: "Last Thursday of each month, 7:00 PM",
        membershipFee: "$30/month",
        currentBook: "The Brothers Karamazov by Fyodor Dostoevsky"
      }
    ]
  },
  {
    city: "Boston",
    bookClubs: [
      {
        name: "Beacon Hill Book Club",
        address: "1234 Beacon Street, Boston, MA 02108",
        phone: "+1 617-555-0123",
        website: "https://www.beaconhillbookclub.com/",
        description: "An elegant book club in historic Beacon Hill, meeting in a restored 19th-century townhouse. Specializes in New England authors and historical fiction.",
        meetingTime: "Second Thursday of each month, 6:00 PM",
        membershipFee: "$45/month",
        currentBook: "The Paper Palace by Miranda Cowley Heller"
      },
      {
        name: "Cambridge Literary Circle",
        address: "5678 Massachusetts Avenue, Cambridge, MA 02139",
        phone: "+1 617-555-0567",
        website: "https://www.cambridgeliterary.org/",
        description: "A scholarly book club with ties to Harvard and MIT. Focuses on academic literature, scientific writing, and intellectual discourse.",
        meetingTime: "Every other Friday, 7:30 PM",
        membershipFee: "$35/month",
        currentBook: "The Premonition by Michael Lewis"
      },
      {
        name: "Somerville Book Lovers",
        address: "9010 Highland Avenue, Somerville, MA 02144",
        phone: "+1 617-555-0901",
        website: "https://www.somervillebooklovers.org/",
        description: "A diverse, inclusive book club that celebrates local authors and independent bookstores. Known for its welcoming atmosphere and community involvement.",
        meetingTime: "Last Saturday of each month, 3:00 PM",
        membershipFee: "$20/month",
        currentBook: "Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin"
      }
    ]
  },
  {
    city: "San Francisco",
    bookClubs: [
      {
        name: "North Beach Book Club",
        address: "1234 Columbus Avenue, San Francisco, CA 94133",
        phone: "+1 415-555-0123",
        website: "https://www.northbeachbooks.com/",
        description: "A literary book club in the heart of San Francisco's Italian neighborhood, inspired by the Beat Generation. Meets in a historic café with poetry readings.",
        meetingTime: "First Wednesday of each month, 7:00 PM",
        membershipFee: "$30/month",
        currentBook: "Cloud Cuckoo Land by Anthony Doerr"
      },
      {
        name: "Mission District Readers",
        address: "5678 Valencia Street, San Francisco, CA 94110",
        phone: "+1 415-555-0567",
        website: "https://www.missionreaders.org/",
        description: "A progressive book club that explores social justice, activism, and diverse voices. Meets in a community center with bilingual discussions.",
        meetingTime: "Every other Sunday, 2:00 PM",
        membershipFee: "$15/month",
        currentBook: "How the Word Is Passed by Clint Smith"
      },
      {
        name: "Marina Book Society",
        address: "9010 Chestnut Street, San Francisco, CA 94123",
        phone: "+1 415-555-0901",
        website: "https://www.marinabooksociety.com/",
        description: "An upscale book club with a focus on contemporary bestsellers and business literature. Features wine tastings and networking opportunities.",
        meetingTime: "Third Tuesday of each month, 6:30 PM",
        membershipFee: "$50/month",
        currentBook: "Atomic Habits by James Clear"
      }
    ]
  },
  {
    city: "Seattle",
    bookClubs: [
      {
        name: "Capitol Hill Book Club",
        address: "1234 Broadway East, Seattle, WA 98102",
        phone: "+1 206-555-0123",
        website: "https://www.capitolhillbooks.com/",
        description: "A vibrant book club in Seattle's most diverse neighborhood. Celebrates LGBTQ+ literature, indie authors, and local Pacific Northwest writers.",
        meetingTime: "Every other Monday, 7:00 PM",
        membershipFee: "$25/month",
        currentBook: "Detransition, Baby by Torrey Peters"
      },
      {
        name: "Fremont Literary Society",
        address: "5678 Fremont Avenue North, Seattle, WA 98103",
        phone: "+1 206-555-0567",
        website: "https://www.fremontliterary.org/",
        description: "A quirky book club in the 'Center of the Universe' neighborhood. Focuses on science fiction, fantasy, and experimental literature.",
        meetingTime: "Last Friday of each month, 8:00 PM",
        membershipFee: "$20/month",
        currentBook: "Project Hail Mary by Andy Weir"
      },
      {
        name: "Ballard Book Discussion",
        address: "9010 Market Street, Seattle, WA 98107",
        phone: "+1 206-555-0901",
        website: "https://www.ballardbooks.org/",
        description: "A cozy book club in the historic Ballard neighborhood. Specializes in Scandinavian literature, maritime stories, and local history.",
        meetingTime: "Second Saturday of each month, 4:00 PM",
        membershipFee: "$30/month",
        currentBook: "The Anomaly by Hervé Le Tellier"
      }
    ]
  },
  {
    city: "Austin",
    bookClubs: [
      {
        name: "South Congress Book Club",
        address: "1234 South Congress Avenue, Austin, TX 78704",
        phone: "+1 512-555-0123",
        website: "https://www.socobookclub.com/",
        description: "A laid-back book club in Austin's trendiest district. Features live music, food trucks, and discussions about Texas literature and contemporary fiction.",
        meetingTime: "Every other Wednesday, 7:30 PM",
        membershipFee: "$20/month",
        currentBook: "The Maid by Nita Prose"
      },
      {
        name: "East Austin Readers",
        address: "5678 East Cesar Chavez Street, Austin, TX 78702",
        phone: "+1 512-555-0567",
        website: "https://www.eastaustinreaders.org/",
        description: "A community-focused book club that celebrates diverse voices and Latinx literature. Meets in a local coffee shop with bilingual discussions.",
        meetingTime: "Last Sunday of each month, 3:00 PM",
        membershipFee: "$15/month",
        currentBook: "Olga Dies Dreaming by Xochitl Gonzalez"
      },
      {
        name: "Westlake Literary Circle",
        address: "9010 Bee Cave Road, Austin, TX 78746",
        phone: "+1 512-555-0901",
        website: "https://www.westlakeliterary.com/",
        description: "An elegant book club in Austin's upscale Westlake area. Focuses on business books, memoirs, and contemporary bestsellers.",
        meetingTime: "First Thursday of each month, 6:00 PM",
        membershipFee: "$40/month",
        currentBook: "Think Again by Adam Grant"
      }
    ]
  },
  {
    city: "Portland",
    bookClubs: [
      {
        name: "Pearl District Book Club",
        address: "1234 Northwest 11th Avenue, Portland, OR 97209",
        phone: "+1 503-555-0123",
        website: "https://www.pearlbookclub.com/",
        description: "A sophisticated book club in Portland's arts district. Features local authors, craft beer tastings, and discussions about Pacific Northwest literature.",
        meetingTime: "Second Tuesday of each month, 7:00 PM",
        membershipFee: "$30/month",
        currentBook: "The Sentence by Louise Erdrich"
      },
      {
        name: "Hawthorne Book Lovers",
        address: "5678 Southeast Hawthorne Boulevard, Portland, OR 97215",
        phone: "+1 503-555-0567",
        website: "https://www.hawthornebooks.org/",
        description: "A progressive book club in Portland's hippest neighborhood. Focuses on environmental literature, social justice, and independent publishing.",
        meetingTime: "Every other Friday, 8:00 PM",
        membershipFee: "$20/month",
        currentBook: "The Ministry for the Future by Kim Stanley Robinson"
      },
      {
        name: "Alberta Street Readers",
        address: "9010 Northeast Alberta Street, Portland, OR 97211",
        phone: "+1 503-555-0901",
        website: "https://www.albertareaders.org/",
        description: "A community-oriented book club that celebrates local artists and writers. Meets in a converted warehouse with food carts and live music.",
        meetingTime: "Last Saturday of each month, 5:00 PM",
        membershipFee: "$25/month",
        currentBook: "Lessons by Ian McEwan"
      }
    ]
  }
];

