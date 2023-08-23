export default function KennelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="py-20">{children}</section>;
}