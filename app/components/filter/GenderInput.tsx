'use client';

import { Gender } from '@prisma/client';
import { useCallback } from 'react';
import { BiMaleSign } from 'react-icons/bi';
import Box from '../Box';

interface GenderInputProps {
	selected: Gender | '';
	setSelected: (e: Gender | '') => void;
}

const GenderInput: React.FC<GenderInputProps> = ({ selected, setSelected }) => {
	const onClick = useCallback(
		(e: Gender) => {
			if (selected === e) {
				setSelected('');
			} else {
				setSelected(e);
			}
		},
		[selected, setSelected]
	);

	return (
		<div
			className="
				flex
				flex-col
				gap-6
			"
		>
			<div className="font-semibold text-2xl">Gender</div>
			<div
				className="
				flex
				flex-row
				justify-center
			"
			>
				<div
					onClick={() => onClick(Gender.MALE)}
					className="
						flex
						justify-center
						w-full
						p-4
						cursor-pointer
						hover:shadow-inner
						hover:bg-neutral-200
						border-[1px]
						rounded-l-3xl
						transition
					"
				>
					<Box
						key={0}
						label={'male'}
						icon={BiMaleSign}
						selected={selected === Gender.MALE}
						onClick={() => onClick(Gender.MALE)}
					/>
				</div>
				<div
					onClick={() => onClick(Gender.FEMALE)}
					className="
						flex
						justify-center
						w-full
						p-4
						cursor-pointer
						hover:shadow-inner
						hover:bg-neutral-200
						border-[1px]
						rounded-r-3xl
						transition
					"
				>
					<Box
						key={1}
						label={'female'}
						icon={BiMaleSign}
						selected={selected === Gender.FEMALE}
						onClick={() => onClick(Gender.FEMALE)}
					/>
				</div>
			</div>
		</div>
	);
};
export default GenderInput;
