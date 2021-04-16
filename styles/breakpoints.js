// breakpoints.{js,ts,tsx}
const size = {
	sm: '400px',
	md: '769px',
	lg: '1024px',
	xl: '1300px',
}

const mq = (braeakSize, string, theme) => {
	return `@media (min-width: ${size[braeakSize]}) { ${string} }`
}
export default mq