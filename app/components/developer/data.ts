import { Breed, Country, Pet, Species } from '@prisma/client';
import {
	getRandomBoolean,
	getRandomDate,
	getRandomGender,
	getRandomHairCoat,
	getRandomId,
	getRandomPrice,
	getRandomSaleType,
	getRandomShuffle,
} from './utils';

const genders = ['MALE', 'FEMALE'];

const hairCoats = ['SHORT', 'MEDIUM', 'LONG'];

const saleTypes = ['PURCHASE', 'RESCUE', 'ADOPT'];

export const speciesData: Omit<Species, 'id'>[] = [
	{ name: 'Dog' },
	{ name: 'Cat' },
	{ name: 'Bird' },
	{ name: 'Hamster' },
	{ name: 'Rabbit' },
];

export const breedsData: Omit<Breed, 'id'>[] = [
	{ name: 'Labrador Retriever', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'German Shepherd', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Golden Retriever', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'French Bulldog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Bulldog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Poodle', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Beagle', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Rottweiler', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Yorkshire Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Boxer', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Dachshund', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Siberian Husky', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Doberman Pinscher', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Great Dane', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Shih Tzu', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Pembroke Welsh Corgi', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Pomeranian', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Australian Shepherd', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Border Collie', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Chihuahua', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Shetland Sheepdog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Bichon Frise', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Pug', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Boston Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Havanese', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Maltese', speciesId: '64ce0d940b45376b879caf7e' },
	{
		name: 'Cavalier King Charles Spaniel',
		speciesId: '64ce0d940b45376b879caf7e',
	},
	{ name: 'Papillon', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Collie', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Bernese Mountain Dog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Basset Hound', speciesId: '64ce0d940b45376b879caf7e' },
	{
		name: 'West Highland White Terrier',
		speciesId: '64ce0d940b45376b879caf7e',
	},
	{ name: 'Newfoundland', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Bullmastiff', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Dalmatian', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Cocker Spaniel', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Schnauzer', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Chinese Shar-Pei', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Whippet', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Cane Corso', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Alaskan Malamute', speciesId: '64ce0d940b45376b879caf7e' },
	{
		name: 'Soft Coated Wheaten Terrier',
		speciesId: '64ce0d940b45376b879caf7e',
	},
	{ name: 'Pointer', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Samoyed', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Schipperke', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'St. Bernard', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Scottish Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'English Springer Spaniel', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Pekingese', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Shiba Inu', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Vizsla', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Italian Greyhound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Afghan Hound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Borzoi', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Basenji', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'American Eskimo Dog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Miniature Schnauzer', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Dogue de Bordeaux', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Anatolian Shepherd Dog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Leonberger', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Irish Wolfhound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Puli', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Ibizan Hound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Keeshond', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Akita', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Cardigan Welsh Corgi', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Brussels Griffon', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Belgian Malinois', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Cairn Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Greater Swiss Mountain Dog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Giant Schnauzer', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Irish Setter', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Belgian Tervuren', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Japanese Chin', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Portuguese Water Dog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Black Russian Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Border Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Tibetan Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Airedale Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Irish Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Wire Fox Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Miniature Pinscher', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Lhasa Apso', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Glen of Imaal Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Lowchen', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Pharaoh Hound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Dandie Dinmont Terrier', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Tibetan Spaniel', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Plott', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Komondor', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Canaan Dog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Xoloitzcuintli', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Swedish Vallhund', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Otterhound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Norwegian Elkhound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Polish Lowland Sheepdog', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Spinone Italiano', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Scottish Deerhound', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'Neapolitan Mastiff', speciesId: '64ce0d940b45376b879caf7e' },
	{ name: 'American Foxhound', speciesId: '64ce0d940b45376b879caf7e' },
];

export const countriesData: Omit<Country, 'id'>[] = [
	{ name: 'Canada' },
	{ name: 'Japan' },
	{ name: 'Australia' },
	{ name: 'Germany' },
	{ name: 'France' },
	{ name: 'United Kingdom' },
	{ name: 'Italy' },
	{ name: 'Netherlands' },
	{ name: 'Spain' },
	{ name: 'Sweden' },
	{ name: 'Belgium' },
	{ name: 'Brazil' },
	{ name: 'China' },
	{ name: 'South Korea' },
	{ name: 'United States' },
	{ name: 'Mexico' },
	{ name: 'Russia' },
	{ name: 'United Arab Emirates' },
	{ name: 'South Africa' },
	{ name: 'New Zealand' },
];

export const imagesData: string[] = [
	'https://res.cloudinary.com/dcbphkd0o/image/upload/v1691233383/juam8bpb5ezi7ealzhdy.png',
	'https://res.cloudinary.com/dcbphkd0o/image/upload/v1690820540/plmvf6ibs8a4yirrratv.jpg',
	'https://res.cloudinary.com/dcbphkd0o/image/upload/v1690375771/anu3st8ku369dljcdxfw.jpg',
	'https://res.cloudinary.com/dcbphkd0o/image/upload/v1690097226/nacy1lcldosbuuocnlk5.jpg',
	'https://res.cloudinary.com/dcbphkd0o/image/upload/v1690037486/dzm4dumhd5sbrduqowue.jpg',
	'https://res.cloudinary.com/dcbphkd0o/image/upload/v1690103429/szhsrx7svfyggmi92eal.jpg',
];

export const createPetsData = (
	breeds: Breed[],
	countries: Country[],
	users: Array<any>
): Omit<Pet, 'id'>[] => {
	let data: Omit<Pet, 'id'>[] = [];

	for (let i: number = 0; i < 8; i++) {
		data.push({
			name: null,
			speciesId: '64ce515e4b302a2efb975b74',
			saleType: getRandomSaleType(),
			gender: getRandomGender(),
			breedId: getRandomId(breeds),
			birthday: getRandomDate(),
			originId: getRandomId(countries),
			listerId: '64bbee4b6e42e77be7720e93',
			images: getRandomShuffle(imagesData),
			price: getRandomPrice(),
			postedAt: getRandomDate(),
			isHealthTested: getRandomBoolean(),
			isHdbApproved: getRandomBoolean(),
			// need to do avsLicense
			// need to do vaccines
			isNeutered: getRandomBoolean(),
			isHypoallergenic: getRandomBoolean(),
			hairCoat: getRandomHairCoat(),
			isPottyTrained: getRandomBoolean(),
			locationValue: '', // need to do locationValue
		});
	}

	return data;
};