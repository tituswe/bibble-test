'use client';

import { Breed, Country, Species } from '@prisma/client';
import Container from '../components/Container';
import BreedsButton from '../components/developer/BreedsButton';
import CountriesButton from '../components/developer/CountriesButton';
import PetsButton from '../components/developer/PetsButton';
import SpeciesButton from '../components/developer/SpeciesButton';

interface DeveloperClientProps {
	users: Array<any>;
	species: Species[];
	breeds: Breed[];
	countries: Country[];
}

const DeveloperClient: React.FC<DeveloperClientProps> = ({
	users,
	species,
	breeds,
	countries,
}) => {
	return (
		<Container>
			<div
				className="
						pt-24
						grid
						grid-cols-1
						sm:grid-cols-2
						md:grid-cols-2
						lg:grid-cols-3
						xl:grid-cols-4
						2xl:grid-cols-5
						gap-8
					"
			>
				<SpeciesButton />
				<BreedsButton />
				<CountriesButton />
				<PetsButton
					users={users}
					species={species}
					breeds={breeds}
					countries={countries}
				/>
			</div>
		</Container>
	);
};

export default DeveloperClient;