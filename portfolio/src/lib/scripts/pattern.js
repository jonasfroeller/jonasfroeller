// @ts-nocheck
export default class RegexPatterns {
	static usernamePattern = '[A-z0-9]+'
	static textPattern = '[A-z]+'
	static numberPattern = '[0-9]+'
	static emailPattern =
		'^[A-z]+([-_.A-z0-9]+)*[A-z0-9]+@[A-z0-9]+([-_.A-z0-9]+)*[A-z0-9]+.[A-z0-9]+([-_.A-z0-9]+)*[A-z]+$'
	static phoneNumberPattern = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'
	static passwordPattern = '^[A-Za-z0-9!@#$%^&*]{8,}$'
	static cardPattern = '[-.,0-9]+'
}
