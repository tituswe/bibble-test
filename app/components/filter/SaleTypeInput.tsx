'use client';

import { toCamelCase } from '@/app/utils/toCamelCase';
import { SaleType } from '@prisma/client';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import {
	AiOutlineCloud,
	AiOutlineMedicineBox,
	AiOutlineShop,
} from 'react-icons/ai';

enum Position {
	LEFT,
	MIDDLE,
	RIGHT,
}

interface SaleTypeOptionProps {
	label: string;
	icon: IconType;
	type: SaleType | '';
	description: string;
	position?: Position;
	selected?: boolean;
	onClick?: (e: any) => void;
}

const SaleTypeOption: React.FC<SaleTypeOptionProps> = ({
	label,
	icon: Icon,
	position,
	description,
	selected,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={`
			flex 
			flex-col 
			p-4 
			border-[1px] 
			${
				position === Position.LEFT
					? 'rounded-l-2xl'
					: position === Position.RIGHT
					? 'rounded-r-2xl'
					: 'rounded-none'
			}
			w-[200px]
			items-center
			cursor-pointer
			transition
			hover:shadow-inner
			hover:bg-neutral-100
			${selected && 'bg-neutral-100'}
		`}
		>
			<div className="flex flex-row items-center gap-2">
				<div className="font-semibold">{toCamelCase(label)}</div>
				<div className="text-lg text-neutral-500">
					<Icon />
				</div>
			</div>
			<div className="text-sm text-neutral-500">{description}</div>
		</div>
	);
};

interface SaleTypeInputProps {
	selected: SaleType | '';
	setSelected: (e: SaleType | '') => void;
}

const SaleTypeInput: React.FC<SaleTypeInputProps> = ({
	selected,
	setSelected,
}) => {
	const onClick = useCallback(
		(e: SaleType | '') => {
			setSelected(e);
		},
		[setSelected]
	);

	const saleTypes: SaleTypeOptionProps[] = [
		{
			label: 'any',
			type: '',
			icon: AiOutlineCloud,
			description: 'Any type',
		},
		{
			label: 'sale',
			type: SaleType.PURCHASE,
			icon: AiOutlineShop,
			description: 'From a verified seller',
		},
		{
			label: 'rescue',
			type: SaleType.ADOPT,
			icon: AiOutlineMedicineBox,
			description: 'From an adoption home',
		},
	];

	return (
		<div className="flex flex-col justify-center gap-6">
			<div className="font-semibold text-2xl">Purchase Type</div>
			<div className="flex flex-row justify-center">
				{saleTypes.map((item, i) => (
					<SaleTypeOption
						key={i}
						label={item.label}
						type={item.type}
						icon={item.icon}
						description={item.description}
						position={
							i === 0
								? Position.LEFT
								: i === saleTypes.length - 1
								? Position.RIGHT
								: Position.MIDDLE
						}
						selected={selected === item.type}
						onClick={() => onClick(item.type)}
					/>
				))}
			</div>
			<div className="font-light text-sm">
				Find a pet from one of our verified sellers or loving adoption homes.
			</div>
		</div>
	);
};
export default SaleTypeInput;
