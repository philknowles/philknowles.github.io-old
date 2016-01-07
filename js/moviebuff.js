app.config(function($routeProvider) {
    $routeProvider
    .when("/moviebuff", {
        templateUrl: 'views/moviebuff.html',
        controller: 'movieListController'
    })
    .when("/cart", {
        templateUrl: 'views/moviecart.html',
//        controller: 'cartListController'
    })
});

app.controller('movieListController', ['$scope', function($scope) {
    $scope.movieItem = [
    {
        title: "Fast & Furious",
        year: "2009",
        rated: "PG-13",
        released: "03 Apr 2009",
        runtime: "107 min",
        genre: "Action, Crime, Drama",
        director: "Justin Lin",
        writer: "Chris Morgan, Gary Scott Thompson (characters)",
        actors: "Vin Diesel, Paul Walker, Jordana Brewster, Michelle Rodriguez",
        plot: "Brian O'Conner, now working for the FBI in LA, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
        language: "English", "Country": "USA", "Awards": "4 wins & 2 nominations.",
        image: "http://ia.media-imdb.com/images/M/MV5BMTQwNDA2MTg3Nl5BMl5BanBnXkFtZTcwNTg3MzIyMg@@._V1_SX300.jpg",
        metascore: "45",
        imdbrating: "6.6",
        imdbvotes: "187,971",
        imdbID: "tt1013752",
        type: "movie",
        response: "True"
    },

    {
        title: "Furious 7", year: "2015", rated: "PG-13", released: "03 Apr 2015", runtime: "137 min", genre: "Action, Crime, Thriller", director: "James Wan", writer: "Chris Morgan, Gary Scott Thompson (characters)", actors: "Vin Diesel, Paul Walker, Jason Statham, Michelle Rodriguez", plot: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.", language: "English", "Country": "USA, Japan", "Awards": "5 wins & 5 nominations.", image: "http://ia.media-imdb.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg", metascore: "67", imdbrating: "7.3", imdbvotes: "232,987", imdbID: "tt2820852", type: "movie", response: "True"
    },
    {
        title: "Fast & Furious 6", year: "2013", rated: "PG-13", released: "24 May 2013", runtime: "130 min", genre: "Action, Crime, Thriller", director: "Justin Lin", writer: "Chris Morgan, Gary Scott Thompson (characters)", actors: "Vin Diesel, Paul Walker, Dwayne Johnson, Jordana Brewster", plot: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty.", language: "English, Russian, Spanish, Indonesian, Danish, Cantonese", "Country": "USA", "Awards": "8 wins & 21 nominations.", image: "http://ia.media-imdb.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg", metascore: "61", imdbrating: "7.2", imdbvotes: "281,523", imdbID: "tt1905041", type: "movie", response: "True"
    },
    {
        title: "The Protector", year: "2005", rated: "R", released: "08 Sep 2006", runtime: "81 min", genre: "Action, Crime, Drama", director: "Prachya Pinkaew", writer: "Napalee, Piyaros Thongdee, Joe Wannapin, Kongdej Jaturanrasamee, Prachya Pinkaew (story)", actors: "Tony Jaa, Petchtai Wongkamlao, Bongkoj Khongmalai, Xing Jing", plot: "A young fighter named Kham must go to Australia to retrieve his stolen elephant. With the help of a Thai-born Australian detective, Kham must take on all comers, including a gang led by an evil woman and her two deadly bodyguards.", language: "Thai, English, Mandarin, Vietnamese", "Country": "Thailand, USA, Hong Kong", "Awards": "N/A", image: "http://ia.media-imdb.com/images/M/MV5BMTc2NjE0NTA5M15BMl5BanBnXkFtZTcwNTkxNDUzMQ@@._V1_SX300.jpg", metascore: "52", imdbrating: "7.1", imdbvotes: "28,857", imdbID: "tt0427954", type: "movie", response: "True"
    },
    {
        title: "Close Range", year: "2015", rated: "N/A", released: "11 Dec 2015", runtime: "80 min", genre: "Action, Crime", director: "Isaac Florentine", writer: "Chad Law, Shane Dax Taylor", actors: "Scott Adkins, Nick Chinlund, Caitlin Keats, Jake La Botz", plot: "A rogue soldier turned outlaw is thrust into a relentless fight with a corrupt sheriff, his obedient deputies, and a dangerous drug cartel in order to protect his sister and her young daughter.", language: "English", "Country": "USA", "Awards": "N/A", image: "http://ia.media-imdb.com/images/M/MV5BMjA5MzYzODk2Nl5BMl5BanBnXkFtZTgwNDM4MTY3NjE@._V1_SX300.jpg", metascore: "N/A", imdbrating: "5.3", imdbvotes: "404", imdbID: "tt3511596", type: "movie", response: "True"
    },
    {
        title: "The Hunger Games", year: "2012", rated: "PG-13", released: "23 Mar 2012", runtime: "142 min", genre: "Adventure, Drama, Sci-Fi", director: "Gary Ross", writer: "Gary Ross (screenplay), Suzanne Collins (screenplay), Billy Ray (screenplay), Suzanne Collins (novel)", actors: "Stanley Tucci, Wes Bentley, Jennifer Lawrence, Willow Shields", plot: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games, a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.", language: "English", "Country": "USA", "Awards": "Nominated for 1 Golden Globe. Another 34 wins & 41 nominations.", image: "http://ia.media-imdb.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg", metascore: "67", imdbrating: "7.3", imdbvotes: "653,299", imdbID: "tt1392170", type: "movie", response: "True"
    },
    {
        id: '',
        title: 'Hitch',
      year:'2005',
      rated:'PG-13',
      released:'11 Feb 2005',
      runtime:'118 min',
      genre:'Comedy, Romance',
      director:'Andy Tennant',
      writer:'Kevin Bisch',
      actors:'Will Smith, Eva Mendes, Kevin James, Amber Valletta',
      plot:'While helping his latest client woo the fine lady of his dreams, a professional \'date doctor\' finds that his game doesn\'t quite work on the gossip columnist with whom he\'s smitten.',
      language:'English',
      country:'USA',
      awards:'4 wins & 24 nominations.',
      image:'http://ia.media-imdb.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_SX300.jpg',
      metascore:'58',
      imdbRating:'6.7',
      imdbVotes:'230,548',
      imdbID:'tt0386588',
      type:'movie',
      response:'True'
    },
    {
        id: '',
        title: 'Patterns of Evidence: The Exodus',
      year:'2014',
      rated:'N/A',
      released:'19 Jan 2015',
      runtime:'115 min',
      genre:'Documentary, History',director:'Tim Mahoney',
      writer:'Steve Law, Tim Mahoney',
      actors:'Charles Aling, Manfred Bietak, John Bimson, Mansour Boraik',
      plot:'What is the validity of history found in the Bible? Is it fact or fiction? What does the hard evidence really have to say about the foundational story of the Old Testament: the Exodus out ...',
      language:'English',
      country:'USA, UK, Netherlands, Lebanon, Israel, Egypt',
      awards:'6 wins.',
      image:'http://ia.media-imdb.com/images/M/MV5BMTUyODI0NzU0MV5BMl5BanBnXkFtZTgwMDE1MjcwMTE@._V1_SX300.jpg',
      metascore:'N/A',
      imdbRating:'8.1',
      imdbVotes:'271',
      imdbID:'tt3464018',
      type:'movie',
      response:'True'
    },
    {
      title: 'No Greater Love',
      year:'2009',
      rated:'PG',
      released:'N/A',
      runtime:'109 min',
      genre:'Drama, Romance',
      director:'Brad J. Silverman',
      writer:'Brad J. Silverman (screenplay), James Killian (screenplay), Elizabeth Killian (screenplay), Brandon Rice (story)',
      actors:'Anthony Tyler Quinn, Danielle Bisutti, Jay Underwood, Seth Axen',
      plot:'Jeff and Heather Baker were life long sweethearts and happily married... for a time. But at her greatest moment of weakness, Heather abandons Jeff, forcing Jeff to raise their young son ...',
      language:'English',
      country:'USA',
      awards:'N/A',
      image:'http://ia.media-imdb.com/images/M/MV5BMTU3MjI4ODA0Ml5BMl5BanBnXkFtZTcwODAwNTcxMw@@._V1_SX300.jpg',
      metascore:'N/A',
      imdbRating:'6.1',
      imdbVotes:'366',
      imdbID:'tt1225703',
      type:'movie',
      response:'True'
    },
    {
      title: 'Child Star: The Shirley Temple Story',
      year:'2001',
      rated:'N/A',
      released:'13 May 2001',
      runtime:'95 min',
      genre:'Biography, Drama, Family',
      director:'Nadia Tass',
      writer:'Shirley Temple (book), Joe Wiesenfeld (teleplay)',
      actors:'Connie Britton, Colin Friels, Hinton Battle, Emily Hart',
      plot:'The life, laughters, and luck of one of the most famous and beloved child stars, Shirley Temple.',
      language:'English',
      country:'USA, Australia',
      awards:'2 nominations.',
      image:'http://ia.media-imdb.com/images/M/MV5BMTUzOTg4NjQ1NF5BMl5BanBnXkFtZTcwODgzOTIyMQ@@._V1_SX300.jpg',
      metascore:'N/A',
      imdbRating:'6.2',
      imdbVotes:'379',
      imdbID:'tt0233274',
      type:'movie',
      response:'True'
    },
    {
      title: 'Armageddon',
      year:'1998',
      rated:'PG-13',
      released:'01 Jul 1998',
      runtime:'151 min',
      genre:'Action, Adventure, Sci-Fi',
      director:'Michael Bay',
      writer:'Jonathan Hensleigh (screenplay), J.J. Abrams (screenplay), Tony Gilroy (adaptation), Shane Salerno (adaptation), Robert Roy Pool (story), Jonathan Hensleigh (story)',
      actors:'Bruce Willis, Billy Bob Thornton, Ben Affleck, Liv Tyler',
      plot:'After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, N.A.S.A. recruits a misfit team of deep core drillers to save the planet.',
      language:'English, Russian, Indonesian',
      country:'USA',
      awards:'Nominated for 4 Oscars. Another 12 wins & 33 nominations.',
      image:'http://ia.media-imdb.com/images/M/MV5BMTc3NzA4MDIyNV5BMl5BanBnXkFtZTcwMzc1OTM2MQ@@._V1_SX300.jpg',
      metascore:'42',
      imdbRating:'6.6',
      imdbVotes:'302,256',
      imdbID:'tt0120591',
      type:'movie',
      response:'True'
    },
    {
      title: 'How the Grinch Stole Christmas',
      year:'2000',
      rated:'PG',
      released:'17 Nov 2000',
      runtime:'104 min',
      genre:'Comedy, Family, Fantasy',
      director:'Ron Howard',
      writer:'Dr. Seuss (book), Jeffrey Price (screenplay), Peter S. Seaman (screenplay)',
      actors:'Jim Carrey, Taylor Momsen, Kelley, Jeffrey Tambor',
      plot:'A creature is intent on stealing Christmas.',
      language:'English',
      country:'USA, Germany',
      awards:'Won 1 Oscar. Another 17 wins & 34 nominations.',
      image:'http://ia.media-imdb.com/images/M/MV5BMTM2NzgzNTk2Nl5BMl5BanBnXkFtZTcwMjUxNjUyMQ@@._V1_SX300.jpg',
      metascore:'46',
      imdbRating:'6.0',
      imdbVotes:'128,299',
      imdbID:'tt0170016',
      type:'movie',
      response:'True'
    },
{
title: 'Shanghai Knights',
year:'2003',
rated:'PG-13',
released:'07 Feb 2003',
runtime:'114 min',
genre:'Action, Adventure, Comedy',
director:'David Dobkin',
writer:'Alfred Gough (characters), Miles Millar (characters), Alfred Gough, Miles Millar',
actors:'Jackie Chan, Owen Wilson, Aaron Taylor-Johnson, Tom Fisher',
plot:'When a Chinese rebel murders Chon\'s estranged father and escapes to England, Chon and Roy make their way to London with revenge on their minds.',
language:'English, Mandarin',
country:'USA, Hong Kong',
awards:'4 nominations.',
image:'http://ia.media-imdb.com/images/M/MV5BMTMxMTgwOTI3Nl5BMl5BanBnXkFtZTYwMTI2NDQ3._V1_SX300.jpg',
metascore:'58',
imdbRating:'6.2',
imdbVotes:'75,775',
imdbID:'tt0300471',
type:'movie',
response:'True'
},
{
title: 'Friday Night Lights',
year:'2004',
rated:'PG-13',
released:'08 Oct 2004',
runtime:'118 min',
genre:'Action, Drama, Sport',
director:'Peter Berg',
writer:'Buzz Bissinger (book), David Aaron Cohen (screenplay), Peter Berg (screenplay)',
actors:'Billy Bob Thornton, Lucas Black, Garrett Hedlund, Derek Luke',
plot:'Based on H.G. Bissinger\'s book, which profiled the economically depressed town of Odessa, Texas and their heroic high school football team, The Permian High Panthers.',
language:'English',
country:'USA',
awards:'2 wins & 5 nominations.',
image:'http://ia.media-imdb.com/images/M/MV5BMTcxMDI5MTM4Ml5BMl5BanBnXkFtZTcwNjA4MDcyMQ@@._V1_SX300.jpg',
metascore:'70',
imdbRating:'7.3',
imdbVotes:'43,614',
imdbID:'tt0390022',
type:'movie',
response:'True'
},
{
title: 'Mr. & Mrs. Smith',
year:'2005',
rated:'PG-13',
released:'10 Jun 2005',
runtime:'120 min',
genre:'Action, Comedy, Crime',
director:'Doug Liman',
writer:'Simon Kinberg',
actors:'Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody',
plot:'A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.',
language:'English, Spanish',
country:'USA',
awards:'9 wins & 17 nominations.',
image:'http://ia.media-imdb.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg',
metascore:'55',
imdbRating:'6.5',
imdbVotes:'314,986',
imdbID:'tt0356910',
type:'movie',
response:'True'
},
{
title: 'The Legend of Drunken Master',
year:'1994',
rated:'R',
released:'20 Oct 2000',
runtime:'102 min',
genre:'Action, Comedy',
director:'Chia-Liang Liu',
writer:'Edward Tang (screenplay), Man-Ming Tong (screenplay), Kai-Chi Yuen (screenplay), Rod Dean (english adaptation)',
actors:'Jackie Chan, Lung Ti, Anita Mui, Felix Wong',
plot:'A young martial artist is caught between respecting his pacifist father\'s wishes or stopping a group of disrespectful foreigners from stealing precious artifacts.',
language:'Cantonese',
country:'Hong Kong',
awards:'3 wins & 1 nomination.',
image:'http://ia.media-imdb.com/images/M/MV5BMTM4OTkwNzE0MF5BMl5BanBnXkFtZTcwNTg4NjAyMQ@@._V1_SX300.jpg',
metascore:'74',
imdbRating:'7.6',
imdbVotes:'32,419',
imdbID:'tt0111512',
type:'movie',
response:'True'
},
{
title: 'Gorgeous',
year:'1999',
rated:'PG-13',
released:'06 Feb 1999',
runtime:'121 min',
genre:'Action, Comedy, Drama',
director:'Vincent Kok',
writer:'Jackie Chan, Ivy Ho (story), Vincent Kok, Yiu Fai Lo',
actors:'Jackie Chan, Qi Shu, Tony Chiu Wai Leung, Emil Chau',
plot:'A romantic girl travels to Hong Kong in search of certain love but instead meets a kind-hearted professional fighter with whom she begins to fall for instead.',
language:'Cantonese, English, Mandarin, Japanese, Min Nan',
country:'Hong Kong, Taiwan',
awards:'2 nominations.',
image:'http://ia.media-imdb.com/images/M/MV5BMjE1NjMzODkxNV5BMl5BanBnXkFtZTcwMzk2NDMyMQ@@._V1_SX300.jpg',
metascore:'N/A',
imdbRating:'6.0',
imdbVotes:'8,412',
imdbID:'tt0184526',
type:'movie',
response:'True'
},
{
title: 'Prancer Returns',
year:'2001',
rated:'N/A',
released:'20 Nov 2001',
runtime:'91 min',
genre:'Family, Drama, Fantasy',
director:'Joshua Butler',
writer:'Greg Taylor',
actors:'John Corbett, Stacy Edwards, Michael O\'Keefe, Jack Palance',
plot:'Preteen brothers from a broken marriage live with their mother, Denise, in a rural town. Ryan, the cheeky elder boy, wants to go live with their father, Matt, in Chicago. This confuses shy ...',
language:'English',
country:'Canada, USA',
awards:'7 wins & 5 nominations.',
image:'http://ia.media-imdb.com/images/M/MV5BMTYxMzk5MzA3MV5BMl5BanBnXkFtZTcwMTYwMjg1Nw@@._V1_SX300.jpg',
metascore:'N/A',
imdbRating:'5.8',
imdbVotes:'372',
imdbID:'tt0273995',
type:'movie',
response:'True'
},
{
  title: 'The Patriot',
  year:'2000',
  rated:'R',
  released:'28 Jun 2000',
  runtime:'165 min',
  genre:'Action, Drama, History',
  director:'Roland Emmerich',
  writer:'Robert Rodat',
  actors:'Mel Gibson, Heath Ledger, Joely Richardson, Jason Isaacs',
  plot:'Peaceful farmer Benjamin Martin is driven to lead the Colonial Militia during the American Revolution when a sadistic British officer murders his son.',
  language:'English',
  country:'USA, Germany',
  awards:'Nominated for 3 Oscars. Another 8 wins & 18 nominations.',
  image:'http://ia.media-imdb.com/images/M/MV5BMTkzMjE4ODU0MV5BMl5BanBnXkFtZTYwNTI2OTk2._V1_SX300.jpg',
  metascore:'63',
  imdbRating:'7.1',
  imdbVotes:'195,834',
  imdbID:'tt0187393',
  type:'movie',
  response:'True'
},
{
  title: 'Click',
  year:'2006',
  rated:'PG-13',
  released:'23 Jun 2006',
  runtime:'107 min',
  genre:'Comedy, Drama, Fantasy',
  director:'Frank Coraci',
  writer:'Steve Koren, Mark O\'Keefe',
  actors:'Adam Sandler, Kate Beckinsale, Christopher Walken, David Hasselhoff',
  plot:'A workaholic architect finds a universal remote that allows him to fast-forward and rewind to different parts of his life. Complications arise when the remote starts to overrule his choices.',language:'English, Portuguese, Japanese',country:'USA',awards:'Nominated for 1 Oscar. Another 3 wins & 11 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjEyODM5MzY2N15BMl5BanBnXkFtZTcwNjcyMTIzMQ@@._V1_SX300.jpg',
  metascore:'45',
  imdbRating:'6.4',
  imdbVotes:'230,600',
  imdbID:'tt0389860',
  type:'movie',
  response:'True'
},
{
title: 'Do You Believe?',year:'2015',rated:'PG-13',released:'20 Mar 2015',runtime:'120 min',genre:'Drama',director:'Jon Gunn',writer:'Chuck Konzelman, Cary Solomon',actors:'Senyo Amoaku, Sean Astin, Brian Bosworth, Valerie Domínguez',plot:'When a pastor is shaken by the visible faith of a street-corner preacher, he is reminded that true belief always requires action. His response ignites a journey that impacts everyone it touches in ways that only God could orchestrate.',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMjE5MzAxMjUyMl5BMl5BanBnXkFtZTgwNDk1OTMwNDE@._V1_SX300.jpg',metascore:'22',imdbRating:'5.7',imdbVotes:'3,781',imdbID:'tt4056738',type:'movie',response:'True'
},
{
title: 'Insurgent',year:'2015',rated:'PG-13',released:'20 Mar 2015',runtime:'119 min',genre:'Adventure, Sci-Fi, Thriller',director:'Robert Schwentke',writer:'Brian Duffield (screenplay), Akiva Goldsman (screenplay), Mark Bomback (screenplay), Veronica Roth (novel)',actors:'Kate Winslet, Jai Courtney, Mekhi Phifer, Shailene Woodley',plot:'Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart with the help from others on her side.',language:'English',country:'USA',awards:'2 wins & 6 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTgxOTYxMTg3OF5BMl5BanBnXkFtZTgwMDgyMzA2NDE@._V1_SX300.jpg',metascore:'42',imdbRating:'6.4',imdbVotes:'104,121',imdbID:'tt2908446',type:'movie',response:'True'
},
{
title: 'Shrek',year:'2001',rated:'PG',released:'18 May 2001',runtime:'90 min',genre:'Animation, Adventure, Comedy',director:'Andrew Adamson, Vicky Jenson',writer:'William Steig (book), Ted Elliott (screenplay), Terry Rossio (screenplay), Joe Stillman (screenplay), Roger S.H. Schulman (screenplay), Cody Cameron (additional dialogue), Chris Miller (additional dialogue), Conrad Vernon (additional dialogue)',actors:'Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow',plot:'After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.',language:'English',country:'USA',awards:'Won 1 Oscar. Another 35 wins & 52 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg',metascore:'84',imdbRating:'7.9',imdbVotes:'430,155',imdbID:'tt0126029',type:'movie',response:'True'
},
{
title: 'Shrek the Third',
year:'2007',
rated:'PG',
released:'18 May 2007',
runtime:'93 min',
genre:'Animation, Adventure, Comedy',
director:'Chris Miller, Raman Hui',
writer:'William Steig (book), Andrew Adamson (story), Jeffrey Price (screenplay), Peter S. Seaman (screenplay), Chris Miller (screenplay), Aron Warner (screenplay), Jeff Snow (story)',actors:'Mike Myers, Eddie Murphy, Cameron Diaz, Antonio Banderas',plot:'When his new father-in-law, King Harold falls ill, Shrek is looked at as the heir to the land of Far, Far Away. Not one to give up his beloved swamp, Shrek recruits his friends Donkey and Puss in Boots to install the rebellious Artie as the new king. Princess Fiona, however, rallies a band of royal girlfriends to fend off a coup d\'etat by the jilted Prince Charming.',language:'English',country:'USA',awards:'Nominated for 1 BAFTA Film Award. Another 5 wins & 14 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTMyMjE1Mjc1NF5BMl5BanBnXkFtZTcwMzY0MjEzMw@@._V1_SX300.jpg',metascore:'58',imdbRating:'6.1',imdbVotes:'194,530',imdbID:'tt0413267',type:'movie',response:'True'
},
{
title: 'Shrek 2',year:'2004',rated:'PG',released:'19 May 2004',runtime:'93 min',genre:'Animation, Adventure, Comedy',director:'Andrew Adamson, Kelly Asbury, Conrad Vernon',writer:'William Steig (book), Andrew Adamson (story), Andrew Adamson (screenplay), Joe Stillman (screenplay), J. David Stem (screenplay), David N. Weiss (screenplay), Cody Cameron (additional dialogue), Walt Dohrn (additional dialogue), Chris Miller (additional dialogue), David P. Smith (additional dialogue), Conrad Vernon (additional dialogue), Jeff Snow (story)',actors:'Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews',plot:'Princess Fiona\'s parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.',language:'English',country:'USA',awards:'Nominated for 2 Oscars. Another 15 wins & 42 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg',metascore:'75',imdbRating:'7.2',imdbVotes:'287,041',imdbID:'tt0298148',type:'movie',response:'True'
},
{
title: 'Grind',year:'2003',rated:'PG-13',released:'15 Aug 2003',runtime:'105 min',genre:'Adventure, Comedy, Sport',director:'Casey La Scala',writer:'Ralph Sall',actors:'Mike Vogel, Vince Vieluf, Adam Brody, Joey Kern',plot:'Four skaters follow their idol on his summer tour in an attempt to get noticed, get sponsored, and become stars themselves.',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BNTQ0MDY1NDU4Nl5BMl5BanBnXkFtZTYwMjE2NzQ3._V1_SX300.jpg',metascore:'30',imdbRating:'5.9',imdbVotes:'9,972',imdbID:'tt0338077',type:'movie',response:'True'
},
{
title: 'Hercules',year:'1997',rated:'G',released:'27 Jun 1997',runtime:'93 min',genre:'Animation, Adventure, Comedy',director:'Ron Clements, John Musker',writer:'Ron Clements (animation screenplay), John Musker (animation screenplay), Don McEnery (animation screenplay), Bob Shaw (animation screenplay), Irene Mecchi (animation screenplay), Kaan Kalyon (story), Kelly Wightman (story), Randy Cartwright (story), John Ramirez (story), Jeff Snow (story), Vance Gerry (story), Kirk Hanson (story), Francis Glebas (story), Mark Kennedy (story), Bruce Morris (story), Don Dougherty (story), Thom Enriquez (story)',actors:'Tate Donovan, Josh Keaton, Roger Bart, Danny DeVito',plot:'The son of the Greek Gods Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it.',language:'English, Spanish, Greek',country:'USA',awards:'Nominated for 1 Oscar. Another 9 wins & 15 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTI5NTI3OTAyOV5BMl5BanBnXkFtZTcwMTg3ODkxMQ@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'7.2',imdbVotes:'126,096',imdbID:'tt0119282',type:'movie',response:'True'
},
{
title: 'Indiana Jones and the Temple of Doom',year:'1984',rated:'PG',released:'23 May 1984',runtime:'118 min',genre:'Action, Adventure',director:'Steven Spielberg',writer:'Willard Huyck (screenplay), Gloria Katz (screenplay), George Lucas (story)',actors:'Harrison Ford, Kate Capshaw, Jonathan Ke Quan, Amrish Puri',plot:'After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees, and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.',language:'English, Sinhalese',country:'USA',awards:'Won 1 Oscar. Another 6 wins & 20 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTMyNzI4OTA5OV5BMl5BanBnXkFtZTcwMDQ2MjAxNA@@._V1_SX300.jpg',metascore:'57',imdbRating:'7.6',imdbVotes:'300,028',imdbID:'tt0087469',type:'movie',response:'True'
},
{
title: 'Mrs. Doubtfire',year:'1993',rated:'PG-13',released:'24 Nov 1993',runtime:'125 min',genre:'Comedy, Drama, Family',director:'Chris Columbus',writer:'Anne Fine (novel), Randi Mayem Singer (screenplay), Leslie Dixon (screenplay)',actors:'Robin Williams, Sally Field, Pierce Brosnan, Harvey Fierstein',plot:'After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children held in custody by his former wife.',language:'English',country:'USA',awards:'Won 1 Oscar. Another 9 wins & 6 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjExMDUzODE1N15BMl5BanBnXkFtZTgwNTU5NTYxMTE@._V1_SX300.jpg',metascore:'53',imdbRating:'6.9',imdbVotes:'166,727',imdbID:'tt0107614',type:'movie',response:'True'
},
{
title: 'City of Angels',year:'1998',rated:'PG-13',released:'10 Apr 1998',runtime:'114 min',genre:'Drama, Fantasy, Romance',director:'Brad Silberling',writer:'Wim Wenders (screenplay), Peter Handke (screenplay), Richard Reitinger (screenplay), Dana Stevens (screenplay)',actors:'Nicolas Cage, Meg Ryan, Andre Braugher, Dennis Franz',plot:'Inspired by the modern classic, Wings of Desire, City involves an angel (Cage) who is spotted by a doctor in an operating room. Franz plays Cage\'s buddy who somehow knows a lot about angels.',language:'English',country:'Germany, USA',awards:'Nominated for 1 Golden Globe. Another 10 wins & 11 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTIxMzk4Nzg0Nl5BMl5BanBnXkFtZTcwNzMzMzEyMQ@@._V1_SX300.jpg',metascore:'54',imdbRating:'6.7',imdbVotes:'89,347',imdbID:'tt0120632',type:'movie',response:'True'
},
{
title: 'Walk the Line',year:'2005',rated:'PG-13',released:'18 Nov 2005',runtime:'136 min',genre:'Biography, Drama, Music',director:'James Mangold',writer:'Johnny Cash (book), Johnny Cash (book), Gill Dennis, James Mangold',actors:'Joaquin Phoenix, Reese Witherspoon, Ginnifer Goodwin, Robert Patrick',plot:'A chronicle of country music legend Johnny Cash\'s life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis and Carl Perkins.',language:'English, Russian',country:'USA, Germany',awards:'Won 1 Oscar. Another 40 wins & 36 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjIyOTU3MjUxOF5BMl5BanBnXkFtZTcwMTQ0NjYzMw@@._V1_SX300.jpg',metascore:'72',imdbRating:'7.9',imdbVotes:'179,464',imdbID:'tt0358273',type:'movie',response:'True'
},
{
title: 'Cinderella Man',year:'2005',rated:'PG-13',released:'03 Jun 2005',runtime:'144 min',genre:'Biography, Drama, Sport',director:'Ron Howard',writer:'Cliff Hollingsworth (screenplay), Akiva Goldsman (screenplay), Cliff Hollingsworth (story)',actors:'Russell Crowe, Renée Zellweger, Paul Giamatti, Craig Bierko',plot:'The story of James Braddock, a supposedly washed-up boxer who came back to become a champion and an inspiration in the 1930s.',language:'English',country:'USA',awards:'Nominated for 3 Oscars. Another 15 wins & 36 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTI3OTg5NTkyOV5BMl5BanBnXkFtZTcwNjI4NzIzMQ@@._V1_SX300.jpg',metascore:'69',imdbRating:'8.0',imdbVotes:'140,875',imdbID:'tt0352248',type:'movie',response:'True'
},
{
title: 'The A-Team',year:'2010',rated:'PG-13',released:'11 Jun 2010',runtime:'117 min',genre:'Action, Adventure, Comedy',director:'Joe Carnahan',writer:'Joe Carnahan, Brian Bloom, Skip Woods, Frank Lupo (television series \'The A-Team\'), Stephen J. Cannell (television series \'The A-Team\')',actors:'Liam Neeson, Bradley Cooper, Jessica Biel, Quinton \'Rampage\' Jackson',plot:'A group of Iraq War veterans looks to clear their name with the U.S. military, who suspect the four men of committing a crime for which they were framed.',language:'English, Spanish, French, Swahili, German',country:'USA',awards:'1 win & 4 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTc4ODc4NTQ1N15BMl5BanBnXkFtZTcwNDUxODUyMw@@._V1_SX300.jpg',metascore:'47',imdbRating:'6.8',imdbVotes:'199,539',imdbID:'tt0429493',type:'movie',response:'True'
},
{
title: 'Universal Soldier: The Return',year:'1999',rated:'R',released:'20 Aug 1999',runtime:'83 min',genre:'Action, Sci-Fi',director:'Mic Rodgers',writer:'Richard Rothstein (characters), Christopher Leitch (characters), Dean Devlin (characters), William Malone, John Fasano',actors:'Jean-Claude Van Damme, Michael Jai White, Heidi Schanz, Xander Berkeley',plot:'The \'universal soldiers\' must fight the whole army. When the military\'s supercomputer S.E.T.H gets out of control',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMjAwNTk4NzYxNl5BMl5BanBnXkFtZTcwNDQ0ODUxMQ@@._V1_SX300.jpg',metascore:'24',imdbRating:'4.1',imdbVotes:'23,506',imdbID:'tt0176269',type:'movie',response:'True'
},
{
title: 'For Richer or Poorer',year:'1997',rated:'PG-13',released:'12 Dec 1997',runtime:'115 min',genre:'Comedy',director:'Bryan Spicer',writer:'Jana Howington, Steve LuKanic',actors:'Tim Allen, Kirstie Alley, Jay O. Sanders, Michael Lerner',plot:'A real estate hustler and his wife hide from the IRS among the Amish.',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTk4MzQ4ODM3OV5BMl5BanBnXkFtZTYwMjcwNzg4._V1_SX300.jpg',metascore:'N/A',imdbRating:'5.7',imdbVotes:'7,700',imdbID:'tt0119142',type:'movie',response:'True'
},
{
title: 'Act of Valor',year:'2012',rated:'R',released:'24 Feb 2012',runtime:'110 min',genre:'Action, Thriller, War',director:'Mike McCoy, Scott Waugh',writer:'Kurt Johnstad',actors:'Rorke Denver, Dave, Sonny, Weimy',plot:'An elite team of Navy SEALs embark on a covert mission to recover a kidnapped CIA agent.',language:'English, Russian',country:'USA',awards:'Nominated for 1 Golden Globe. Another 1 win & 6 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTY3NDQxMDAzM15BMl5BanBnXkFtZTcwNzEyNjgzNw@@._V1_SX300.jpg',metascore:'40',imdbRating:'6.5',imdbVotes:'55,557',imdbID:'tt1591479',type:'movie',response:'True'
},
{
title: 'xXx: State of the Union',year:'2005',rated:'PG-13',released:'29 Apr 2005',runtime:'101 min',genre:'Action, Adventure, Crime',director:'Lee Tamahori',writer:'Rich Wilkes (characters), Simon Kinberg',actors:'Willem Dafoe, Samuel L. Jackson, Ice Cube, Scott Speedman',plot:'Darius Stone, a new agent in the XXX program, is sent to Washington, DC to defuse a power struggle amongst national leaders.',language:'English',country:'USA',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BMzU0Mzc3NzU4MV5BMl5BanBnXkFtZTcwODI4NDEzMQ@@._V1_SX300.jpg',metascore:'37',imdbRating:'4.3',imdbVotes:'48,107',imdbID:'tt0329774',type:'movie',response:'True'
},
{
title: 'Tuxedo',year:'1995',rated:'N/A',released:'N/A',runtime:'11 min',genre:'Short',director:'Daniel Kaufman',writer:'Daniel Kaufman',actors:'Jeffrey Kalamar, Charles Levin, Tom Dahlgren, Kathy Dehetre',plot:'N/A',language:'English',country:'USA',awards:'N/A',image:'N/A',metascore:'N/A',imdbRating:'5.8',imdbVotes:'11',imdbID:'tt0346068',type:'movie',response:'True'
},
{
title: 'The Dark Knight Rises',year:'2012',rated:'PG-13',released:'20 Jul 2012',runtime:'165 min',genre:'Action, Thriller',director:'Christopher Nolan',writer:'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',actors:'Christian Bale, Gary Oldman, Tom Hardy, Joseph Gordon-Levitt',plot:'Eight years after the Joker\'s reign of anarchy, the Dark Knight is forced to return from his imposed exile to save Gotham City from the brutal guerrilla terrorist Bane with the help of the enigmatic Selina.',language:'English',country:'USA, UK',awards:'Nominated for 1 BAFTA Film Award. Another 42 wins & 88 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',metascore:'78',imdbRating:'8.5',imdbVotes:'1,030,777',imdbID:'tt1345836',type:'movie',response:'True'
},
{
title: 'The Dark Knight',year:'2008',rated:'PG-13',released:'18 Jul 2008',runtime:'152 min',genre:'Action, Crime, Drama',director:'Christopher Nolan',writer:'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',actors:'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',language:'English, Mandarin',country:'USA, UK',awards:'Won 2 Oscars. Another 128 wins & 120 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',metascore:'82',imdbRating:'9.0',imdbVotes:'1,512,033',imdbID:'tt0468569',type:'movie',response:'True'
},
{
title: 'Batman Begins',year:'2005',rated:'PG-13',released:'15 Jun 2005',runtime:'140 min',genre:'Action, Adventure',director:'Christopher Nolan',writer:'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',actors:'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',plot:'After training with his mentor, Batman begins his war on crime to free the crime-ridden Gotham City from corruption that the Scarecrow and the League of Shadows have cast upon it.',language:'English, Urdu, Mandarin',country:'USA, UK',awards:'Nominated for 1 Oscar. Another 16 wins & 62 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',metascore:'70',imdbRating:'8.3',imdbVotes:'883,872',imdbID:'tt0372784',type:'movie',response:'True'
},
{
title: 'The Notebook',year:'2004',rated:'PG-13',released:'25 Jun 2004',runtime:'123 min',genre:'Drama, Romance',director:'Nick Cassavetes',writer:'Jeremy Leven (screenplay), Jan Sardi (adaptation), Nicholas Sparks (novel)',actors:'Tim Ivey, Gena Rowlands, Starletta DuPois, James Garner',plot:'A poor and passionate young man falls in love with a rich young woman and gives her a sense of freedom. They soon are separated by their social differences.',language:'English',country:'USA',awards:'11 wins & 7 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_SX300.jpg',metascore:'53',imdbRating:'7.9',imdbVotes:'364,650',imdbID:'tt0332280',type:'movie',response:'True'
},
{
title: 'I Am Legend',year:'2007',rated:'PG-13',released:'14 Dec 2007',runtime:'101 min',genre:'Drama, Sci-Fi, Thriller',director:'Francis Lawrence',writer:'Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington',actors:'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',plot:'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',language:'English',country:'USA',awards:'9 wins & 21 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',metascore:'65',imdbRating:'7.2',imdbVotes:'482,949',imdbID:'tt0480249',type:'movie',response:'True'
},
{
title: 'The Bourne Ultimatum',year:'2007',rated:'PG-13',released:'03 Aug 2007',runtime:'115 min',genre:'Action, Thriller',director:'Paul Greengrass',writer:'Tony Gilroy (screenplay), Scott Z. Burns (screenplay), George Nolfi (screenplay), Tony Gilroy (screen story), Robert Ludlum (novel)',actors:'Matt Damon, Julia Stiles, David Strathairn, Scott Glenn',plot:'Jason Bourne dodges a ruthless CIA official and his agents from a new assassination program while searching for the origins of his life as a trained killer.',language:'English, French, Arabic, Russian, Spanish',country:'USA, Germany',awards:'Won 3 Oscars. Another 24 wins & 36 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTgzNjMwOTM3N15BMl5BanBnXkFtZTcwMzA5MDY0MQ@@._V1_SX300.jpg',metascore:'85',imdbRating:'8.1',imdbVotes:'446,633',imdbID:'tt0440963',type:'movie',response:'True'
},
{
title: 'Transporter 2',year:'2005',rated:'PG-13',released:'02 Sep 2005',runtime:'87 min',genre:'Action, Crime, Thriller',director:'Louis Leterrier',writer:'Luc Besson (characters), Robert Mark Kamen (characters), Luc Besson, Robert Mark Kamen',actors:'Jason Statham, Alessandro Gassman, Amber Valletta, Kate Nauta',plot:'Mercenary Frank Martin, who specializes moving goods of all kinds, surfaces again this time in Miami, Florida when he\'s implicated in the kidnapping of the young son of a powerful USA official.',language:'English, French, Italian',country:'France, USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTQ5MDM0MTI2N15BMl5BanBnXkFtZTcwNTM5NDczMw@@._V1_SX300.jpg',metascore:'56',imdbRating:'6.3',imdbVotes:'144,485',imdbID:'tt0388482',type:'movie',response:'True'
},
{
title: 'The Bible',year:'2013',rated:'TV-14',released:'N/A',runtime:'600 min',genre:'Action, Drama',director:'N/A',writer:'N/A',actors:'Keith David, Robert Powell, Diogo Morgado, Darwin Shaw',plot:'The story of God\'s creation of the Earth and the landmark events leading up to the Crucifixion of Jesus Christ.',language:'English',country:'USA, UK',awards:'Nominated for 3 Primetime Emmys. Another 1 win & 4 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BNjU2OTM4MTE4OV5BMl5BanBnXkFtZTgwMDUwNzE2MDE@._V1_SX300.jpg',metascore:'N/A',imdbRating:'7.4',imdbVotes:'7,410',imdbID:'tt2245988',type:'series',response:'True'
},
{
title: 'Get Smart',year:'2008',rated:'PG-13',released:'20 Jun 2008',runtime:'110 min',genre:'Action, Adventure, Comedy',director:'Peter Segal',writer:'Tom J. Astle, Matt Ember, Mel Brooks (characters), Buck Henry (characters)',actors:'Steve Carell, Anne Hathaway, Dwayne Johnson, Alan Arkin',plot:'A highly intellectual but socially awkward spy is tasked with preventing a terrorist attack from a Russian spy agency.',language:'English, Russian, Panjabi, Arabic',country:'USA',awards:'2 wins & 6 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjAzOTM1MzE0OF5BMl5BanBnXkFtZTYwNDE0Nzc4._V1_SX300.jpg',metascore:'54',imdbRating:'6.5',imdbVotes:'160,027',imdbID:'tt0425061',type:'movie',response:'True'
},
{
title: 'The Hunger Games',year:'2012',rated:'PG-13',released:'23 Mar 2012',runtime:'142 min',genre:'Adventure, Drama, Sci-Fi',director:'Gary Ross',writer:'Gary Ross (screenplay), Suzanne Collins (screenplay), Billy Ray (screenplay), Suzanne Collins (novel)',actors:'Stanley Tucci, Wes Bentley, Jennifer Lawrence, Willow Shields',plot:'Katniss Everdeen voluntarily takes her younger sister\'s place in the Hunger Games, a televised fight to the death in which two teenagers from each of the twelve Districts of Panem are chosen at random to compete.',language:'English',country:'USA',awards:'Nominated for 1 Golden Globe. Another 33 wins & 41 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg',metascore:'67',imdbRating:'7.3',imdbVotes:'647,222',imdbID:'tt1392170',type:'movie',response:'True'
},
{
title: 'Big Momma\'s House',year:'2000',rated:'PG-13',released:'02 Jun 2000',runtime:'99 min',genre:'Action, Comedy, Crime',director:'Raja Gosnell',writer:'Darryl Quarles (story), Darryl Quarles (screenplay), Don Rhymer (screenplay)',actors:'Martin Lawrence, Nia Long, Paul Giamatti, Jascha Washington',plot:'To protect a woman (Nia Long) and her son (Jascha Washington) from a robber (Terrence Howard), a male FBI agent (Martin Lawrence) disguises as a large grandmother.',language:'English',country:'USA, Germany',awards:'1 win & 8 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTc4NTc0NzQ0OV5BMl5BanBnXkFtZTYwNDkxMjY5._V1_SX300.jpg',metascore:'33',imdbRating:'5.0',imdbVotes:'62,559',imdbID:'tt0208003',type:'movie',response:'True'
},
{
title: 'Battle Los Angeles',year:'2011',rated:'PG-13',released:'11 Mar 2011',runtime:'116 min',genre:'Action, Sci-Fi',director:'Jonathan Liebesman',writer:'Christopher Bertolini',actors:'Aaron Eckhart, Ramon Rodriguez, Will Rothhaar, Cory Hardrict',plot:'A squadron of U.S. Marines becomes the last line of defense against a global invasion.',language:'English',country:'USA',awards:'1 win & 2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjA2MjQ2MzMwMV5BMl5BanBnXkFtZTcwMjIwODgzNA@@._V1_SX300.jpg',metascore:'37',imdbRating:'5.8',imdbVotes:'149,804',imdbID:'tt1217613',type:'movie',response:'True'
},
{
title: 'The Bourne Legacy',year:'2012',rated:'PG-13',released:'10 Aug 2012',runtime:'135 min',genre:'Action, Adventure, Mystery',director:'Tony Gilroy',writer:'Tony Gilroy (screenplay), Dan Gilroy (screenplay), Tony Gilroy (story)',actors:'Jeremy Renner, Scott Glenn, Stacy Keach, Edward Norton',plot:'An expansion of the universe from Robert Ludlum\'s novels, centered on a new hero whose stakes have been triggered by the events of the previous three films.',language:'English, Russian, Filipino',country:'Japan, USA',awards:'1 win & 11 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTc4Njk3MDM1Nl5BMl5BanBnXkFtZTcwODgyOTMxOA@@._V1_SX300.jpg',metascore:'61',imdbRating:'6.7',imdbVotes:'211,738',imdbID:'tt1194173',type:'movie',response:'True'
},
{
title: 'Mission: Impossible - Ghost Protocol',year:'2011',rated:'PG-13',released:'21 Dec 2011',runtime:'133 min',genre:'Action, Adventure, Thriller',director:'Brad Bird',writer:'Josh Appelbaum, André Nemec, Bruce Geller (television series \'Mission: Impossible\')',actors:'Tom Cruise, Paula Patton, Simon Pegg, Jeremy Renner',plot:'The IMF is shut down when it\'s implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization\'s name.',language:'English, Russian, French, Arabic, Swedish',country:'USA, United Arab Emirates, Czech Republic',awards:'5 wins & 31 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg',metascore:'73',imdbRating:'7.4',imdbVotes:'338,778',imdbID:'tt1229238',type:'movie',response:'True'
},
{

title: 'Joy Ride',year:'2001',rated:'R',released:'05 Oct 2001',runtime:'97 min',genre:'Mystery, Thriller',director:'John Dahl',writer:'Clay Tarver, J.J. Abrams',actors:'Steve Zahn, Paul Walker, Leelee Sobieski, Jessica Bowman',plot:'Three young people on a road trip from Colorado to New Jersey talk to a trucker on their CB radio, then must escape when he turns out to be a psychotic killer.',language:'English',country:'USA',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BNjI3NTk3MTc0Nl5BMl5BanBnXkFtZTcwMTcwNTEyMQ@@._V1_SX300.jpg',metascore:'75',imdbRating:'6.6',imdbVotes:'50,770',imdbID:'tt0206314',type:'movie',response:'True'
},
{
title: 'The Expendables 2',year:'2012',rated:'R',released:'17 Aug 2012',runtime:'103 min',genre:'Action, Adventure, Thriller',director:'Simon West',writer:'Richard Wenk (screenplay), Sylvester Stallone (screenplay), Ken Kaufman (story), David Agosto (story), Richard Wenk (story), Dave Callaham (characters)',actors:'Sylvester Stallone, Jason Statham, Jet Li, Dolph Lundgren',plot:'Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.',language:'English',country:'USA',awards:'3 wins & 5 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQzODkwNDQxNV5BMl5BanBnXkFtZTcwNTQ1ODAxOA@@._V1_SX300.jpg',metascore:'51',imdbRating:'6.7',imdbVotes:'231,224',imdbID:'tt1764651',type:'movie',response:'True'
},
{
title: 'The Lord of the Rings',year:'1978',rated:'PG',released:'15 Nov 1978',runtime:'132 min',genre:'Animation, Adventure, Fantasy',director:'Ralph Bakshi',writer:'Chris Conkling (screenplay), Peter S. Beagle (screenplay), J.R.R. Tolkien (novels)',actors:'Christopher Guard, William Squire, Michael Scholes, John Hurt',plot:'The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron\'s reign over Middle Earth.',language:'English, Sindarin',country:'USA',awards:'Nominated for 1 Golden Globe. Another 1 win & 2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTcxMzU2MDc5Ml5BMl5BanBnXkFtZTcwMjUxNDcyMg@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'6.1',imdbVotes:'23,168',imdbID:'tt0077869',type:'movie',response:'True'
},
{
title: 'Robin Hood: Men in Tights',year:'1993',rated:'PG-13',released:'28 Jul 1993',runtime:'104 min',genre:'Adventure, Comedy, Musical',director:'Mel Brooks',writer:'J.D. Shapiro (story), Evan Chandler (story), Mel Brooks (screenplay), Evan Chandler (screenplay), J.D. Shapiro (screenplay)',actors:'Cary Elwes, Richard Lewis, Roger Rees, Amy Yasbeck',plot:'A spoof of Robin Hood in general and Robin Hood: Prince of Thieves (1991) in particular.',language:'English',country:'France, USA',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BMTA2OTYyODU3MDheQTJeQWpwZ15BbWU3MDA5MjIwNDE@._V1_SX300.jpg',metascore:'N/A',imdbRating:'6.7',imdbVotes:'84,916',imdbID:'tt0107977',type:'movie',response:'True'
},
{
title: 'Robin Hood: Prince of Thieves',year:'1991',rated:'PG-13',released:'14 Jun 1991',runtime:'143 min',genre:'Action, Adventure, Drama',director:'Kevin Reynolds',writer:'Pen Densham (story), Pen Densham (screenplay), John Watson (screenplay)',actors:'Kevin Costner, Morgan Freeman, Mary Elizabeth Mastrantonio, Christian Slater',plot:'When Robin and his Moorish companion come to England and the tyranny of the Sheriff of Nottingham, he decides to fight back as an outlaw.',language:'English',country:'USA',awards:'Nominated for 1 Oscar. Another 15 wins & 17 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTg0OTg5MjExN15BMl5BanBnXkFtZTgwMjg3OTgzMTE@._V1_SX300.jpg',metascore:'N/A',imdbRating:'6.9',imdbVotes:'136,468',imdbID:'tt0102798',type:'movie',response:'True'
},
{
title: 'The Fox and the Hound',year:'1981',rated:'G',released:'10 Jul 1981',runtime:'83 min',genre:'Animation, Adventure, Drama',director:'Ted Berman, Richard Rich, Art Stevens',writer:'Daniel P. Mannix (based on the book by), Larry Clemmons (story), Ted Berman (story), David Michener (story), Peter Young (story), Burny Mattinson (story), Steve Hulett (story), Earl Kress (story), Vance Gerry (story)',actors:'Mickey Rooney, Kurt Russell, Pearl Bailey, Jack Albertson',plot:'Two childhood friends find themselves forced to become enemies.',language:'English',country:'USA',awards:'1 win & 2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQ3Njc0MjU4NF5BMl5BanBnXkFtZTcwMzcxMzUzMQ@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'7.3',imdbVotes:'58,313',imdbID:'tt0082406',type:'movie',response:'True'
},
{
title: 'Inception',year:'2010',rated:'PG-13',released:'16 Jul 2010',runtime:'148 min',genre:'Action, Mystery, Sci-Fi',director:'Christopher Nolan',writer:'Christopher Nolan',actors:'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',plot:'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',language:'English, Japanese, French',country:'USA, UK',awards:'Won 4 Oscars. Another 138 wins & 192 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',metascore:'74',imdbRating:'8.8',imdbVotes:'1,312,194',imdbID:'tt1375666',type:'movie',response:'True'
},
{

title: 'The Expendables',year:'2010',rated:'R',released:'13 Aug 2010',runtime:'103 min',genre:'Action, Adventure, Thriller',director:'Sylvester Stallone',writer:'Dave Callaham (screenplay), Sylvester Stallone (screenplay), Dave Callaham (story)',actors:'Sylvester Stallone, Jason Statham, Jet Li, Dolph Lundgren',plot:'A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent.',language:'English, Spanish',country:'USA',awards:'3 wins & 5 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_SX300.jpg',metascore:'45',imdbRating:'6.5',imdbVotes:'250,760',imdbID:'tt1320253',type:'movie',response:'True'
},
{
title: 'Equilibrium',year:'2002',rated:'R',released:'06 Dec 2002',runtime:'107 min',genre:'Action, Drama, Sci-Fi',director:'Kurt Wimmer',writer:'Kurt Wimmer',actors:'Christian Bale, Dominic Purcell, Sean Bean, Christian Kahrmann',plot:'In a Fascist future where all forms of feeling are illegal, a man in charge of enforcing the law rises to overthrow the system.',language:'English',country:'USA',awards:'2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTkzMzA1OTI3N15BMl5BanBnXkFtZTYwMzUyMDg5._V1_SX300.jpg',metascore:'33',imdbRating:'7.5',imdbVotes:'245,645',imdbID:'tt0238380',type:'movie',response:'True'
},
{
title: 'The Bourne Identity',year:'2002',rated:'PG-13',released:'14 Jun 2002',runtime:'119 min',genre:'Action, Mystery, Thriller',director:'Doug Liman',writer:'Tony Gilroy (screenplay), W. Blake Herron (screenplay), Robert Ludlum (novel)',actors:'Matt Damon, Franka Potente, Chris Cooper, Clive Owen',plot:'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and regain his memory.',language:'English, French, German, Dutch, Italian',country:'USA, Germany, Czech Republic',awards:'3 wins & 4 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQ3MDA4MDIyN15BMl5BanBnXkFtZTYwOTg0Njk4._V1_SX300.jpg',metascore:'68',imdbRating:'7.9',imdbVotes:'372,933',imdbID:'tt0258463',type:'movie',response:'True'
},
{
title: 'The Protector',year:'2005',rated:'R',released:'08 Sep 2006',runtime:'81 min',genre:'Action, Crime, Drama',director:'Prachya Pinkaew',writer:'Napalee, Piyaros Thongdee, Joe Wannapin, Kongdej Jaturanrasamee, Prachya Pinkaew (story)',actors:'Tony Jaa, Petchtai Wongkamlao, Bongkoj Khongmalai, Xing Jing',plot:'A young fighter named Kham must go to Australia to retrieve his stolen elephant. With the help of a Thai-born Australian detective, Kham must take on all comers, including a gang led by an evil woman and her two deadly bodyguards.',language:'Thai, English, Mandarin, Vietnamese',country:'Thailand, USA, Hong Kong',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTc2NjE0NTA5M15BMl5BanBnXkFtZTcwNTkxNDUzMQ@@._V1_SX300.jpg',metascore:'52',imdbRating:'7.1',imdbVotes:'28,722',imdbID:'tt0427954',type:'movie',response:'True'
},
{
title: 'Warrior',year:'2011',rated:'PG-13',released:'09 Sep 2011',runtime:'140 min',genre:'Drama, Sport',director:'Gavin O\'Connor',writer:'Gavin O\'Connor (screenplay), Anthony Tambakis (screenplay), Cliff Dorfman (screenplay), Gavin O\'Connor (story), Cliff Dorfman (story)',actors:'Joel Edgerton, Tom Hardy, Nick Nolte, Jennifer Morrison',plot:'The youngest son of an alcoholic former boxer returns home, where he\'s trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.',language:'English, Spanish',country:'USA',awards:'Nominated for 1 Oscar. Another 6 wins & 17 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_SX300.jpg',metascore:'71',imdbRating:'8.2',imdbVotes:'296,673',imdbID:'tt1291584',type:'movie',response:'True'
},
{
title: 'When the Game Stands Tall',year:'2014',rated:'PG',released:'22 Aug 2014',runtime:'115 min',genre:'Drama, Sport',director:'Thomas Carter',writer:'Scott Marshall Smith (screenplay), Scott Marshall Smith (story), David Zelon (story), Neil Hayes (book)',actors:'Jim Caviezel, Michael Chiklis, Alexander Ludwig, Clancy Brown',plot:'The journey of legendary football coach Bob Ladouceur, who took the De La Salle High School Spartans from obscurity to a 151-game winning streak that shattered all records for any American sport.',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTQ5NDMzOTI3MV5BMl5BanBnXkFtZTgwMjU4MTMyMjE@._V1_SX300.jpg',metascore:'41',imdbRating:'6.6',imdbVotes:'10,869',imdbID:'tt2247476',type:'movie',response:'True'
},
{
title: 'Hatfields and McCoys: Bad Blood',year:'2012',rated:'PG-13',released:'05 Jun 2012',runtime:'82 min',genre:'Drama, Western',director:'Fred Olen Ray',writer:'Fred Olen Ray',actors:'Jeff Fahey, Christian Slater, Perry King, Priscilla Barnes',plot:'A Union soldier on his way home runs afoul of Jim Vance and his nephew Ellison Hatfield. Confederate sympathizers, they\'re furious with the idea of one of their neighbors fighting for the Union.',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTYxNjMzNDQ2NV5BMl5BanBnXkFtZTcwMzg0NDE0OQ@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'3.9',imdbVotes:'360',imdbID:'tt2136759',type:'movie',response:'True'
},
{
title: 'Live Free or Die Hard',year:'2007',rated:'PG-13',released:'27 Jun 2007',runtime:'128 min',genre:'Action, Adventure, Thriller',director:'Len Wiseman',writer:'Mark Bomback (screenplay), Mark Bomback (story), David Marconi (story), John Carlin (article), Roderick Thorp (certain original characters)',actors:'Bruce Willis, Timothy Olyphant, Justin Long, Maggie Q',plot:'John McClane and a young hacker join forces to take down master cyber-terrorist Thomas Gabriel in Washington D.C.',language:'English, Italian, French',country:'USA, UK',awards:'3 wins & 16 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BNDQxMDE1OTg4NV5BMl5BanBnXkFtZTcwMTMzOTQzMw@@._V1_SX300.jpg',metascore:'69',imdbRating:'7.2',imdbVotes:'320,035',imdbID:'tt0337978',type:'movie',response:'True'
},
{
title: 'Fracture',year:'2007',rated:'R',released:'20 Apr 2007',runtime:'113 min',genre:'Crime, Drama, Mystery',director:'Gregory Hoblit',writer:'Daniel Pyne (screenplay), Glenn Gers (screenplay), Daniel Pyne (story)',actors:'Anthony Hopkins, Ryan Gosling, David Strathairn, Rosamund Pike',plot:'An attorney, intent on climbing the career ladder toward success, finds an unlikely opponent in a manipulative criminal he is trying to prosecute.',language:'English',country:'USA, Germany',awards:'1 win & 2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMzIzNjQyMzkwM15BMl5BanBnXkFtZTcwOTg5ODQ0MQ@@._V1_SX300.jpg',metascore:'68',imdbRating:'7.2',imdbVotes:'131,662',imdbID:'tt0488120',type:'movie',response:'True'
},
{
title: 'Wild Hogs',year:'2007',rated:'PG-13',released:'02 Mar 2007',runtime:'100 min',genre:'Action, Adventure, Comedy',director:'Walt Becker',writer:'Brad Copeland',actors:'Tim Allen, John Travolta, Martin Lawrence, William H. Macy',plot:'A group of suburban biker wannabes looking for adventure hit the open road, but get more than they bargained for when they encounter a New Mexico gang called the Del Fuegos.',language:'English',country:'USA',awards:'3 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQ4MTE5MjY5OV5BMl5BanBnXkFtZTcwNDEwMzUzMw@@._V1_SX300.jpg',metascore:'27',imdbRating:'5.9',imdbVotes:'95,775',imdbID:'tt0486946',type:'movie',response:'True'
},
{
title: 'Here Comes the Boom',year:'2012',rated:'PG',released:'12 Oct 2012',runtime:'105 min',genre:'Action, Comedy, Sport',director:'Frank Coraci',writer:'Allan Loeb, Kevin James',actors:'Kevin James, Salma Hayek, Henry Winkler, Greg Germann',plot:'A high school biology teacher looks to become a successful mixed-martial arts fighter in an effort to raise money to prevent extra-curricular activities from being axed at his cash-strapped school.',language:'English, Dutch',country:'USA',awards:'3 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTUxMzEzNDQ0Nl5BMl5BanBnXkFtZTcwMDI2NTY1OA@@._V1_SX300.jpg',metascore:'40',imdbRating:'6.5',imdbVotes:'70,431',imdbID:'tt1648179',type:'movie',response:'True'
},
{
title: 'The Fast and the Furious: Tokyo Drift',year:'2006',rated:'PG-13',released:'16 Jun 2006',runtime:'104 min',genre:'Action, Crime, Drama',director:'Justin Lin',writer:'Chris Morgan',actors:'Lucas Black, Damien Marzette, Trula M. Marcus, Zachery Ty Bryan',plot:'A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.',language:'English, Japanese',country:'USA',awards:'4 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg',metascore:'46',imdbRating:'6.0',imdbVotes:'161,776',imdbID:'tt0463985',type:'movie',response:'True'
},
{
title: 'Extreme Ops',year:'2002',rated:'PG-13',released:'27 Nov 2002',runtime:'93 min',genre:'Action, Adventure, Thriller',director:'Christian Duguay',writer:'Timothy Scott Bogart (story), Mark Mullin (story), Michael Zaidan (screenplay)',actors:'Devon Sawa, Bridgette Wilson-Sampras, Rupert Graves, Rufus Sewell',plot:'While filming a advertisment, some extreme sports enthusiasts unwittingly stop a group of terrorists.',language:'English, German, Japanese, Serbo-Croatian',country:'UK, Germany, Luxembourg',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BMTg2NTkzMTgzOF5BMl5BanBnXkFtZTYwMzYwMDg5._V1_SX300.jpg',metascore:'17',imdbRating:'4.4',imdbVotes:'4,739',imdbID:'tt0283160',type:'movie',response:'True'


},
{
title: 'Jack Ryan: Shadow Recruit',year:'2014',rated:'PG-13',released:'17 Jan 2014',runtime:'105 min',genre:'Action, Thriller',director:'Kenneth Branagh',writer:'Adam Cozad, David Koepp, Tom Clancy (based on characters created by)',actors:'Chris Pine, Keira Knightley, Kevin Costner, Kenneth Branagh',plot:'Jack Ryan, as a young covert CIA analyst, uncovers a Russian plot to crash the U.S. economy with a terrorist attack.',language:'English, Russian',country:'USA, Russia',awards:'2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTY2MDkxNzYwNl5BMl5BanBnXkFtZTgwOTM2MjE5MDE@._V1_SX300.jpg',metascore:'57',imdbRating:'6.2',imdbVotes:'91,022',imdbID:'tt1205537',type:'movie',response:'True'
},
{
title: 'Pirates of the Caribbean',year:'2003',rated:'N/A',released:'01 Jul 2003',runtime:'N/A',genre:'Adventure, Fantasy, Horror',director:'N/A',writer:'N/A',actors:'Keira Knightley, Nat Benchley, Garrett Brawith, Arnold Chon',plot:'I don\'t know, but Keira Knightley is a narrator and she is awesome.',language:'English',country:'USA',awards:'N/A',image:'N/A',metascore:'N/A',imdbRating:'7.6',imdbVotes:'490',imdbID:'tt0368925',type:'game',response:'True'
},
{
title: 'Independence Day',year:'1996',rated:'PG-13',released:'03 Jul 1996',runtime:'145 min',genre:'Action, Adventure, Sci-Fi',director:'Roland Emmerich',writer:'Dean Devlin, Roland Emmerich',actors:'Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell',plot:'The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind\'s best weapon is the will to survive.',language:'English',country:'USA',awards:'Won 1 Oscar. Another 30 wins & 32 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTMwODY3NzQzNF5BMl5BanBnXkFtZTcwNzUxNjc0MQ@@._V1_SX300.jpg',metascore:'59',imdbRating:'6.9',imdbVotes:'396,296',imdbID:'tt0116629',type:'movie',response:'True'
},
{
title: 'Open Season',year:'2006',rated:'PG',released:'29 Sep 2006',runtime:'83 min',genre:'Animation, Adventure, Comedy',director:'Roger Allers, Jill Culton, Anthony Stacchi',writer:'Steve Bencich (screenplay), Ron J. Friedman (screenplay), Nat Mauldin (screenplay), Jill Culton (screen story), Anthony Stacchi (screen story), Steve Moore (original story), John B. Carls (original story), Sam Harper (additional story material), Dan Wilson (additional story material), David Gilbreth (additional story material)',actors:'Martin Lawrence, Ashton Kutcher, Gary Sinise, Debra Messing',plot:'Boog, a domesticated 900lb. Grizzly bear finds himself stranded in the woods 3 days before Open Season. Forced to rely on Elliot, a fast-talking mule deer, the two form an unlikely friendship and must quickly rally other forest animals if they are to form a rag-tag army against the hunters.',language:'English',country:'USA',awards:'1 win & 8 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQwOTg2MjU0OV5BMl5BanBnXkFtZTcwMzIzNTQzMQ@@._V1_SX300.jpg',metascore:'49',imdbRating:'6.2',imdbVotes:'60,223',imdbID:'tt0400717',type:'movie',response:'True'
},
{
title: 'Madagascar',year:'2005',rated:'PG',released:'27 May 2005',runtime:'86 min',genre:'Animation, Adventure, Comedy',director:'Eric Darnell, Tom McGrath',writer:'Mark Burton, Billy Frolick, Eric Darnell, Tom McGrath',actors:'Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith',plot:'Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs',language:'English, Portuguese, Spanish, German, French',country:'USA',awards:'4 wins & 25 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg',metascore:'57',imdbRating:'6.9',imdbVotes:'239,510',imdbID:'tt0351283',type:'movie',response:'True'
},
{
title: 'Over the Hedge',year:'2006',rated:'PG',released:'19 May 2006',runtime:'83 min',genre:'Animation, Adventure, Comedy',director:'Tim Johnson, Karey Kirkpatrick',writer:'Len Blum (screenplay), Lorne Cameron (screenplay), David Hoselton (screenplay), Karey Kirkpatrick (screenplay), Michael Fry (comic strip characters), T. Lewis (comic strip characters), Chris Poche (additional dialogue), Mike de Seve (story), Eric Forsberg (additional dialogue)',actors:'Bruce Willis, Garry Shandling, Steve Carell, Wanda Sykes',plot:'A scheming raccoon fools a mismatched family of forest creatures into helping him repay a debt of food, by invading the new suburban sprawl that popped up while they were hibernating...and learns a lesson about family himself.',language:'English',country:'USA',awards:'6 wins & 17 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQwMTQxNTcwOF5BMl5BanBnXkFtZTcwMzQ1NzUzMQ@@._V1_SX300.jpg',metascore:'67',imdbRating:'6.8',imdbVotes:'119,212',imdbID:'tt0327084',type:'movie',response:'True'
},
{
title: 'Snow White and the Seven Dwarfs',year:'1937',rated:'APPROVED',released:'10 Jan 1938',runtime:'83 min',genre:'Animation, Family, Fantasy',director:'William Cottrell, David Hand, Wilfred Jackson, Larry Morey, Perce Pearce, Ben Sharpsteen',writer:'Jacob Grimm (fairy tales), Wilhelm Grimm (fairy tales), Ted Sears (story), Richard Creedon (story), Otto Englander (story), Dick Rickard (story), Earl Hurd (story), Merrill De Maris (story), Dorothy Ann Blank (story), Webb Smith (story)',actors:'Roy Atwell, Stuart Buchanan, Adriana Caselotti, Hall Johnson Choir',plot:'Snow White, pursued by a jealous queen, hides with the Dwarfs, but the queen learns of this and prepares to feed her a poison apple.',language:'English, Arabic',country:'USA',awards:'Nominated for 1 Oscar. Another 11 wins & 4 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'7.7',imdbVotes:'120,443',imdbID:'tt0029583',type:'movie',response:'True'
},
{
title: 'Sweet Home Alabama',year:'2002',rated:'PG-13',released:'27 Sep 2002',runtime:'108 min',genre:'Comedy, Romance',director:'Andy Tennant',writer:'Douglas J. Eboch (story), C. Jay Cox (screenplay)',actors:'Reese Witherspoon, Josh Lucas, Patrick Dempsey, Candice Bergen',plot:'A young woman with a Southern background runs away from her husband in Alabama and reinvents herself as a New York socialite.',language:'English',country:'USA',awards:'3 wins & 6 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_SX300.jpg',metascore:'45',imdbRating:'6.1',imdbVotes:'78,954',imdbID:'tt0256415',type:'movie',response:'True'


},
{
title: 'The Karate Kid',year:'1987',rated:'N/A',released:'N/A',runtime:'N/A',genre:'Sport',director:'Jimmy Simeone',writer:'N/A',actors:'N/A',plot:'N/A',language:'English',country:'USA',awards:'N/A',image:'N/A',metascore:'N/A',imdbRating:'6.3',imdbVotes:'50',imdbID:'tt0186264',type:'game',response:'True'
},
{
title: 'Vehicle 19',year:'2013',rated:'R',released:'07 Feb 2013',runtime:'82 min',genre:'Action, Thriller',director:'Mukunda Michael Dewil',writer:'Mukunda Michael Dewil',actors:'Paul Walker, Naima McLean, Gys de Villiers, Leyla Haidarian',plot:'In Johannesburg, an American parole breaker unknowingly picks up a rental car that will tie him to a web of corrupt local police.',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTk0NDU4ODc4OF5BMl5BanBnXkFtZTcwMjIwMTU1OQ@@._V1_SX300.jpg',metascore:'29',imdbRating:'4.9',imdbVotes:'11,280',imdbID:'tt1911662',type:'movie',response:'True'
},
{
title: 'The Bourne Supremacy',year:'2004',rated:'PG-13',released:'23 Jul 2004',runtime:'108 min',genre:'Action, Thriller',director:'Paul Greengrass',writer:'Robert Ludlum (novel), Tony Gilroy (screenplay)',actors:'Matt Damon, Franka Potente, Brian Cox, Julia Stiles',plot:'When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.',language:'English, Russian, German, Italian',country:'USA, Germany',awards:'5 wins & 20 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTAxODk0MjEyMjZeQTJeQWpwZ15BbWU2MDgzMzExNw@@._V1_SX300.jpg',metascore:'73',imdbRating:'7.8',imdbVotes:'316,830',imdbID:'tt0372183',type:'movie',response:'True'

},
{
title: 'Brick Mansions',year:'2014',rated:'PG-13',released:'25 Apr 2014',runtime:'90 min',genre:'Action, Crime, Drama',director:'Camille Delamarre',writer:'Luc Besson (screenplay), Luc Besson (screenplay), Bibi Naceri (screenplay)',actors:'Paul Walker, David Belle, RZA, Gouchy Boy',plot:'An undercover Detroit cop navigates a dangerous neighborhood that\'s surrounded by a containment wall with the help of an ex-con in order to bring down a crime lord and his plot to devastate the entire city.',language:'English, Chinese',country:'France, Canada',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BOTI0ODQ2MzY5NF5BMl5BanBnXkFtZTgwNTcxNzQxMTE@._V1_SX300.jpg',metascore:'40',imdbRating:'5.7',imdbVotes:'28,750',imdbID:'tt1430612',type:'movie',response:'True'

},
{
title: 'Fast & Furious',year:'2009',rated:'PG-13',released:'03 Apr 2009',runtime:'107 min',genre:'Action, Crime, Drama',director:'Justin Lin',writer:'Chris Morgan, Gary Scott Thompson (characters)',actors:'Vin Diesel, Paul Walker, Jordana Brewster, Michelle Rodriguez',plot:'Brian O\'Conner, now working for the FBI in LA, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.',language:'English',country:'USA',awards:'4 wins & 2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQwNDA2MTg3Nl5BMl5BanBnXkFtZTcwNTg3MzIyMg@@._V1_SX300.jpg',metascore:'45',imdbRating:'6.6',imdbVotes:'186,122',imdbID:'tt1013752',type:'movie',response:'True'
},
{
title: 'The Fast and the Furious',year:'2001',rated:'PG-13',released:'22 Jun 2001',runtime:'106 min',genre:'Action, Crime, Thriller',director:'Rob Cohen',writer:'Ken Li (magazine article \'Racer X\'), Gary Scott Thompson (screen story), Gary Scott Thompson (screenplay), Erik Bergquist (screenplay), David Ayer (screenplay)',actors:'Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster',plot:'Los Angeles police officer Brian O\'Connor must decide where his loyalties really lie when he becomes enamored with the street racing world he has been sent undercover to destroy.',language:'English',country:'USA, Germany',awards:'9 wins & 12 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjAwNTQ0Nzc2M15BMl5BanBnXkFtZTcwNTk1MDIwNA@@._V1_SX300.jpg',metascore:'58',imdbRating:'6.7',imdbVotes:'250,562',imdbID:'tt0232500',type:'movie',response:'True'
},
{
title: 'Couples Retreat',year:'2009',rated:'PG-13',released:'09 Oct 2009',runtime:'113 min',genre:'Comedy',director:'Peter Billingsley',writer:'Jon Favreau, Vince Vaughn, Dana Fox',actors:'Vince Vaughn, Jason Bateman, Faizon Love, Jon Favreau',plot:'A comedy centered around four couples who settle into a tropical-island resort for a vacation. While one of the couples is there to work on the marriage, the others fail to realize that participation in the resort\'s therapy sessions is not optional.',language:'English',country:'USA',awards:'1 win & 4 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQxMjI1Nzc0M15BMl5BanBnXkFtZTcwMTc0Mzg2Mg@@._V1_SX300.jpg',metascore:'23',imdbRating:'5.5',imdbVotes:'79,241',imdbID:'tt1078940',type:'movie',response:'True'

},
{
title: 'Pearl Harbor',year:'2001',rated:'PG-13',released:'25 May 2001',runtime:'183 min',genre:'Action, Drama, Romance',director:'Michael Bay',writer:'Randall Wallace',actors:'Ben Affleck, Josh Hartnett, Kate Beckinsale, William Lee Scott',plot:'Pearl Harbor follows the story of two best friends, Rafe and Danny, and their love lives as they go off to join the war.',language:'English, Japanese, French',country:'USA',awards:'Won 1 Oscar. Another 10 wins & 42 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTQ3MDc0MDc1NF5BMl5BanBnXkFtZTYwODI1ODY2._V1_SX300.jpg',metascore:'44',imdbRating:'6.0',imdbVotes:'236,675',imdbID:'tt0213149',type:'movie',response:'True'
},
{
title: 'A Fearless Journey: A Look at Jet Li\'s \'Fearless\'',year:'2006',rated:'N/A',released:'22 Dec 2006',runtime:'16 min',genre:'Short',director:'Stanley J. Orzel',writer:'Stanley J. Orzel',actors:'Jet Li, Beau Weaver, Ronny Yu',plot:'An in-depth conversation with superstar Jet Li on his personal philosophy and the making of his final Wuxia Film.',language:'English',country:'Hong Kong',awards:'N/A',image:'N/A',metascore:'N/A',imdbRating:'6.5',imdbVotes:'15',imdbID:'tt0940808',type:'movie',response:'True'
},
{
title: 'Gladiator',year:'2000',rated:'R',released:'05 May 2000',runtime:'155 min',genre:'Action, Drama',director:'Ridley Scott',writer:'David Franzoni (story), David Franzoni (screenplay), John Logan (screenplay), William Nicholson (screenplay)',actors:'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed',plot:'When a Roman general is betrayed and his family murdered by an emperor\'s corrupt son, he comes to Rome as a gladiator to seek revenge.',language:'English',country:'USA, UK',awards:'Won 5 Oscars. Another 52 wins & 100 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SX300.jpg',metascore:'64',imdbRating:'8.5',imdbVotes:'894,849',imdbID:'tt0172495',type:'movie',response:'True'
},
{
title: 'Come What May',year:'2009',rated:'N/A',released:'17 Mar 2009',runtime:'N/A',genre:'Drama, Romance',director:'Manny Edwards, George D. Escobar',writer:'Ben Adams (additional story), Manny Edwards (story), George D. Escobar (story), Michael Dr. Farris (additional story), David Halbrook (story)',actors:'Austin Kearney, Victoria Emmons, Karen Jezek, Kenneth Jezek',plot:'Caleb and Rachel team up to lead the Patrick Henry College team in the intense world of collegiate moot court competition. Caleb looks to date Rachel, but she\'s waiting for courtship. ...',language:'English',country:'USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMjE2MzU4NTUzOF5BMl5BanBnXkFtZTcwOTkwMDA0Mg@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'5.8',imdbVotes:'134',imdbID:'tt1090754',type:'movie',response:'True'
},
{
title: 'Downton Abbey',year:'2010–',rated:'TV-PG',released:'09 Jan 2011',runtime:'65 min',genre:'Drama, Romance',director:'N/A',writer:'Julian Fellowes',actors:'Hugh Bonneville, Laura Carmichael, Jim Carter, Brendan Coyle',plot:'A chronicle of the lives of the Crawley family and their servants, beginning in the years leading up to World War I.',language:'English',country:'UK, USA',awards:'Won 3 Golden Globes. Another 43 wins & 166 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTg2ODI2NTUwN15BMl5BanBnXkFtZTgwMTMwMzU0MjE@._V1_SX300.jpg',metascore:'N/A',imdbRating:'8.7',imdbVotes:'96,583',imdbID:'tt1606375',type:'series',response:'True'
},
{
title: 'Tears of the Sun',year:'2003',rated:'R',released:'07 Mar 2003',runtime:'121 min',genre:'Action, Drama, Thriller',director:'Antoine Fuqua',writer:'Alex Lasker, Patrick Cirillo',actors:'Bruce Willis, Monica Bellucci, Cole Hauser, Eamonn Walker',plot:'A Special-Ops commander leads his team into the Nigerian jungle in order to rescue a doctor who will only join them if they agree to save 70 refugees too.',language:'English',country:'USA',awards:'2 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjA2MDkwNTg1MF5BMl5BanBnXkFtZTYwNjY1MTA3._V1_SX300.jpg',metascore:'48',imdbRating:'6.6',imdbVotes:'87,934',imdbID:'tt0314353',type:'movie',response:'True'
},
{
title: 'The Making of \'Left Behind II: Tribulation Force\'',year:'2002',rated:'N/A',released:'25 Sep 2002',runtime:'30 min',genre:'Documentary, Short',director:'N/A',writer:'N/A',actors:'Bob Carlisle, Russ Lee, Bill Corcoran, Kirk Cameron',plot:'Documentary of the making of the second part of the Left Behind series.',language:'English',country:'Canada, USA',awards:'N/A',image:'http://ia.media-imdb.com/images/M/MV5BMTAwNDg4MDAyOTReQTJeQWpwZ15BbWU3MDg5MTEwMDE@._V1_SX300.jpg',metascore:'N/A',imdbRating:'5.4',imdbVotes:'36',imdbID:'tt0347480',type:'movie',response:'True'
},
{
title: 'Left Behind: World at War',year:'2005',rated:'PG-13',released:'21 Oct 2005',runtime:'95 min',genre:'Action, Drama, Fantasy',director:'Craig R. Baxley',writer:'Jean Brincko (additional dialogue), Jean Brincko (script consultant), Paul Duran (additional dialogue), Jerry B. Jenkins (novel), Tim LaHaye (novel), Paul Lalonde (screenplay), Peter Lalonde (screenplay), John Patus (additional dialogue), John Patus (script consultant), André van Heerden (screenplay)',actors:'Louis Gossett Jr., Kirk Cameron, Brad Johnson, Jessica Steen',plot:'The world falls into chaos as Nicolae Carpathia detonates nuclear devices across the globe and stages multiple devastating attacks against both the Tribulation Force and an international militia, led by U.S. President Gerald Fitzhugh.',language:'English',country:'USA, Canada',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BMTI5ODg4NDUxMF5BMl5BanBnXkFtZTcwODc4MjIzMQ@@._V1_SX300.jpg',metascore:'N/A',imdbRating:'4.7',imdbVotes:'2,783',imdbID:'tt0443567',type:'movie',response:'True'

},
{
title: 'The Animal',year:'2001',rated:'PG-13',released:'01 Jun 2001',runtime:'84 min',genre:'Comedy',director:'Luke Greenfield',writer:'Tom Brady (story), Tom Brady (screenplay), Rob Schneider (screenplay)',actors:'Rob Schneider, Colleen Haskell, John C. McGinley, Edward Asner',plot:'After receiving organ transplants from various animal donors, a man finds himself taking on the traits of those animals.',language:'English',country:'USA',awards:'5 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMjE1OTExNTEzMV5BMl5BanBnXkFtZTYwNDQ3MDk2._V1_SX300.jpg',metascore:'43',imdbRating:'4.8',imdbVotes:'44,875',imdbID:'tt0255798',type:'movie',response:'True'
},
{
title: 'Joe Somebody',year:'2001',rated:'PG',released:'21 Dec 2001',runtime:'98 min',genre:'Comedy, Drama',director:'John Pasquin',writer:'John Scott Shepherd',actors:'Tim Allen, Julie Bowen, Kelly Lynch, Greg Germann',plot:'When Joe is beat up by a co-worker in front of his daughter on \'Bring Your Child To Work Day\', he decides to fight back.',language:'English',country:'USA',awards:'1 nomination.',image:'http://ia.media-imdb.com/images/M/MV5BMTI0NjExNzg2MF5BMl5BanBnXkFtZTYwNjQxMzU3._V1_SX300.jpg',metascore:'42',imdbRating:'5.4',imdbVotes:'8,132',imdbID:'tt0279889',type:'movie',response:'True'

},
{
title: 'The Goonies',year:'1985',rated:'PG',released:'07 Jun 1985',runtime:'114 min',genre:'Adventure, Comedy, Family',director:'Richard Donner',writer:'Steven Spielberg (story), Chris Columbus (screenplay)',actors:'Sean Astin, Josh Brolin, Jeff Cohen, Corey Feldman',plot:'In order to save their home from foreclosure, a group of misfits set out to find a pirate\'s ancient treasure.',language:'English, Spanish, Cantonese, Italian',country:'USA',awards:'2 wins & 6 nominations.',image:'http://ia.media-imdb.com/images/M/MV5BMTEyMzM3NDQyMjJeQTJeQWpwZ15BbWU4MDE4ODY0NjEx._V1_SX300.jpg',metascore:'60',imdbRating:'7.8',imdbVotes:'164,913',imdbID:'tt0089218',type:'movie',response:'True'
}
    ];
}]);