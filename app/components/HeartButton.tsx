'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import useFavorite from '../hooks/useFavorite';
import { SafeUser } from '../types';

interface HeartButtonProps {
	petId: string;
	currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({ petId, currentUser }) => {
	const { hasFavorited, toggleFavorite } = useFavorite({ petId, currentUser });
	return (
		<>
			<div
				onClick={toggleFavorite}
				className="
        relative
        hover:opacity-80
        transition
        cursor-opinter
      "
			>
				<AiOutlineHeart
					size={28}
					className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
				/>
				<AiFillHeart
					size={24}
					className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
				/>
			</div>
		</>
	);
};

export default HeartButton;