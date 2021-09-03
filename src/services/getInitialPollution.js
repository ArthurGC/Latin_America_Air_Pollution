import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';

export const latinCountriesLatLong = [
  {
    country: 'Peru',
    latitude: '-9.18',
    longitude: '-75.01',
    link: '../../assets/Peru.png',
  },
  {
    country: 'Argentina',
    latitude: '-38.42',
    longitude: '-63.62',
    link: '../../assets/Argentina.png',
  },
  {
    country: 'Bolivia',
    latitude: '-16.29',
    longitude: '-63.59',
    link: '../../assets/Bolivia.png',
  },
  {
    country: 'Brasil',
    latitude: '-14.24',
    longitude: '-51.93',
    link: '../../assets/Brasil.png',
  },
  {
    country: 'Chile',
    latitude: '-35.68',
    longitude: '-71.54',
    link: '../../assets/Chile.png',
  },
  {
    country: 'Colombia',
    latitude: '4.57',
    longitude: '-74.30',
    link: '../../assets/Colombia.png',
  },
  {
    country: 'Ecuador',
    latitude: '-1.83',
    longitude: '-78.18',
    link: '../../assets/Ecuador.png',
  },
  {
    country: 'Paraguay',
    latitude: '-23.44',
    longitude: '-58.44',
    link: '../../assets/Paraguay.png',
  },
  {
    country: 'Uruguay',
    latitude: '-32.52',
    longitude: '-55.77',
    link: '../../assets/Uruguay.png',
  },
  {
    country: 'Venezuela',
    latitude: '6.42',
    longitude: '-66.59',
    link: '../../assets/Venezuela.png',
  },
];

const getInitialPollution = async () => {
  const pollution = [];
  for (let i = 0; i < latinCountriesLatLong.length; i += 1) {
    const country = latinCountriesLatLong[i];
    // eslint-disable-next-line no-await-in-loop
    const response = await axios.get(`${baseURL}lat=${country.latitude}&lon=${country.longitude}&appid=4138d7a8121dd6bb5e48faf547cf65cd`);
    pollution.push({
      name: `${response.country}`,
      air: `${response.list[0].main.aqi}`,
      components: `${response.list[0].components}`,
    });
  }
  return pollution;
};

export default getInitialPollution;
