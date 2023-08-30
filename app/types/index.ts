import { AvsLicense, Breed, Chat, ChatParticipant, Country, Pet, Profile, Species, User } from '@prisma/client';

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'
> & {
	profile: Profile;
	chats: Array<ChatParticipant & { chat: Chat & { participants: Array<ChatParticipant>} }>;
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};

export type SafePet = Omit<Pet, 'birthday' | 'postedAt'> & {
	birthday: string;
	postedAt: string;
	species: Species;
	lister: SafeUser;
	breed: Breed;
	origin: Country;
	avsLicense?: AvsLicense | null;
};

export type GeocodeResponse = {
	results: [
		{
			address_components: [
				{
					long_name: string;
					short_name: string;
					types: [string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: number;
					short_name: number;
					types: [string];
				}
			];
			formatted_address: string;
			geometry: {
				location: {
					lat: number;
					lng: number;
				};
				location_type: string;
				viewport: {
					northeast: {
						lat: number;
						lng: number;
					};
					southwest: {
						lat: number;
						lng: number;
					};
				};
			};
			place_id: string;
			plus_code: {
				compound_code: string;
				global_code: string;
			};
			types: [string];
		}
	];
	status: string;
};

export type TimeUnit = 'months' | 'years';
