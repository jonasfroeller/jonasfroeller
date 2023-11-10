export default class RegexPatterns {
	static get usernamePattern() {
		return '[A-z0-9]+';
	}

	static get textPattern() {
		return '[A-z]+';
	}

	static get numberPattern() {
		return '[0-9]+';
	}

	static get emailPattern() {
		return '^[A-z]+([-_.A-z0-9]+)*[A-z0-9]+@[A-z0-9]+([-_.A-z0-9]+)*[A-z0-9]+.[A-z0-9]+([-_.A-z0-9]+)*[A-z]+$';
	}

	static get phoneNumberPattern() {
		return '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$';
	}

	static get passwordPattern() {
		return '^[A-Za-z0-9!@#$%^&*]{8,}$';
	}

	static get cardPattern() {
		return '[-.,0-9]+';
	}
}
