import "../styles/style.css"

export const metadata = {
	title: 'Hello',
	description: 'Abdullox'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	)
}
