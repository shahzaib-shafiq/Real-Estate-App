// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'LAHORE',
    address: 'Maraghzar Colony Thoker Niaz Baig, Lahore, Punjab',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '11000000',
    agent: {
      image: Agent2,
      name: 'Ahmed Ali',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'ISLAMABAD',
    address: ' JINNAH AVENUE 2ND FLOOR 9-A SHOP MASCO PLAZA, F 6/1 Blue Area, Islamabad, Islamabad Capital Territory 44000',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '14000000',
    agent: {
      image: Agent2,
      name: 'Salman khan',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'KARACHI',
    address: 'Plot FL 9, Junaid Plaza, Block 6 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 75300',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '17000000',
    agent: {
      image: Agent3,
      name: 'Amjad Hussain',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'KARACHI',
    address: '175 29th St, DHA Karachi Phase VIII Zone A Zone A Phase 8 Defence Housing Authority, Karachi, Karachi City, Sindh 75500',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '20000000',
    agent: {
      image: Agent9,
      name: 'Zawar Ahmed',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'PESHAWAR',
    address: ' chowk, Qissa Khawani Bazaar Mohallah Baqir Shah, Peshawar, Khyber Pakhtunkhwa',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '21000000',
    agent: {
      image: Agent5,
      name: 'Ehsan Khan',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'LAHORE',
    address: '8-KM, 38 DA Raiwind Rd, Bhobtian Dream Avenue Lahore, Lahore, Punjab 53720    ',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '22000000',
    agent: {
      image: Agent3,
      name: 'Zaryab Ahmed',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'HYDERABAD',
    address: 'opposite to Total Parco Pump, University Town, HYDERABAD, SINDH 25000',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '2000000',
    agent: {
      image: Agent7,
      name: 'Huzaifa shakeel',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'ISLAMABAD',
    address: 'house 1 Blue Area, Islamabad, Islamabad Capital Territory 44000',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '3000000',
    agent: {
      image: Agent9,
      name: 'Sohail ',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'GUJRANWALA',
    address: 'Near Chenab Gate Main GT rd، NH 5, Gujranwala, Punjab 52250',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '4000000',
    agent: {
      image: Agent9,
      name: 'talha',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'RAWALPINDI',
    address: 'Near DHA Gate Main GT rd، NH 5, Rawalpindi, Punjab 5200',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '11700000',
    agent: {
      image: Agent12,
      name: 'Tanveer',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'SUKKUR',
    address: 'Akhuwat Nagar Society Friends Co-operative Housing Society, Sukkur, Sindh',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '14500000',
    agent: {
      image: Agent2,
      name: 'Shahrukh',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'SADIQABAD',
    address: 'Water supply Road sadiqabad, Sadiqabad, Rahim Yar Khan, Punjab 64220',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '13900000',
    agent: {
      image: Agent12,
      name: 'Amir',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'GUJRAT',
    address: 'Chain Road , Gujrat, Punjab 64220',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '18000000',
    agent: {
      image: Agent1,
      name: 'Farhan',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'FAISALABAD',
    address: 'Jaranwala Rd, Kohinoor City Faisalabad, Punjab',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '21300000',
    agent: {
      image: Agent2,
      name: 'Zain',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'MULTAN',
    address: 'Ismail Homes, Millat Rd, Green Town, Multan, Punjab',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '22100000',
    agent: {
      image: Agent3,
      name: 'khawar',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'MANSEHRA',
    address: 'Faizan E Madina Road, End Corner, Green Belt Rd, Madina Town, Mansehra, Punjab 38000',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '2100000',
    agent: {
      image: Agent4,
      name: 'Azlan',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'TIBAT',
    address: 'House 2  15th St, Tibat, 10011, Tibat ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '3200000',
    agent: {
      image: Agent5,
      name: 'Sunil',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'QUETTA',
    address: 'Gardenia Hotel,, Chaman Housing Scheme, Quetta, Balochistan',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '3800000',
    agent: {
      image: Agent6,
      name: 'Kamran',
      phone: '0123 456 78910',
    },
  },
];
