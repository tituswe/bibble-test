import { TimeUnit } from '../types';

export default function getBirthdate(age: number, timeUnit: TimeUnit): Date {
	const today = new Date();

	if (timeUnit === 'months') {
		today.setMonth(today.getMonth() - age + 1);
	} else if (timeUnit === 'years') {
		today.setFullYear(today.getFullYear() - age + 1);
	} else {
		throw new Error('Invalid timeUnit');
	}

	today.setDate(1);
	today.setHours(0, 0, 0, 0);

	return today;
}
