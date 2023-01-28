declare global {
	interface Window {
		TallyConfig: unknown;
	}
}

window.TallyConfig = window.TallyConfig || "SomeValue";