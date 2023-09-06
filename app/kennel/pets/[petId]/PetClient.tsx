'use client';

import { SafePet, SafeUser } from '@/app/types';
import { Breed, Country, Profile, Species, Vaccine } from '@prisma/client';

import AppointmentBox from '@/app/components/AppointmentBox';
import Container from '@/app/components/Container';
import ListerInfo from '@/app/components/pets/ListerInfo';
import PetHead from '@/app/components/pets/PetHead';
import PetInfo from '@/app/components/pets/PetInfo';

interface PetClientProps {
	pet: (SafePet & {
		lister: SafeUser & {
			profile: Profile | null,
		};
		origin: Country;
		species: Species;
		breed: Breed;
	});
	currentUser: SafeUser | null;
	vaccines: Array<Vaccine>;
}

const PetClient: React.FC<PetClientProps> = ({ pet, currentUser, vaccines }) => {

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto my-10">
				<div className="flex flex-col gap-4">
					<PetHead id={pet.id} pet={pet} currentUser={currentUser} />
					
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
						<div className='lg:col-span-3'>
							<PetInfo pet={pet} vaccines={vaccines}/>
						</div>
						<div className='lg:col-span-2'>
							<AppointmentBox pet={pet} currentUser={currentUser}/>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<ListerInfo lister={pet.lister} />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PetClient;