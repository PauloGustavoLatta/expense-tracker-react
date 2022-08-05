import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: var(--white);
	}

	html, body, #root {
		max-height: 100vh;
		max-width: 100vw;
		height: 100%;
		width: 100%;
	}

	*, button, input {
		border: 0;
		background: none;
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, Sans-serif;
	}

	html {
		background: var(--primary);
	}
`; 