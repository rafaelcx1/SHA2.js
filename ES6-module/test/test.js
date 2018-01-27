// 80
////////////////////////////////////////////////////////////////////////////////

/*
	test.js
	(Javascript code for testing SHA2.js (ES6 module) for web browsers)

		developed
			by K. (https://github.com/wlzla000)
			on January 27, 2018,

		licensed under


		the MIT license

		Copyright (c) 2018 K.

		 Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or
		sell copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		 The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
*/

"use strict";

import SHA2 from "../SHA2.js";
const {SHA224, SHA256, SHA384, SHA512, SHA512_224, SHA512_256, SHA512_t} = SHA2;

const everythings_equal = array => ((new Set(array)).size === 1);
const every_arraybuffers_equal = arraybuffers => {
	return arraybuffers.every(ab => {
		const abstr1 = (new Uint8Array(ab)).toString();
		const abstr2 = (new Uint8Array(arraybuffers[0])).toString();
		return abstr1 === abstr2;
	});
};
const hex_to_arraybuffer = hex => (new Uint8Array(hex.match(/.{2}/g)
	.map(xs => Number.parseInt(xs, 16)))).buffer;

// A test for the method aliases
console.info("Testing the method aliases.");
const SHA224_names = [
	"SHA-224", "SHA_224", "SHA224",
	"sha-224", "sha_224", "sha224"
];
const SHA256_names = [
	"SHA-256", "SHA_256", "SHA256",
	"sha-256", "sha_256", "sha256"
];
const SHA384_names = [
	"SHA-384", "SHA_384", "SHA384",
	"sha-384", "sha_384", "sha384"
];
const SHA512_names = [
	"SHA-512", "SHA_512", "SHA512",
	"sha-512", "sha_512", "sha512"
];
const SHA512224_names = [
	"SHA-512/224", "SHA_512_224", "SHA512_224", "SHA_512224", "SHA512224",
	"sha-512/224", "sha_512_224", "sha512_224", "sha_512224", "sha512224"
];
const SHA512256_names = [
	"SHA-512/256", "SHA_512_256", "SHA512_256", "SHA_512256", "SHA512256",
	"sha-512/256", "sha_512_256", "sha512_256", "sha_512256", "sha512256"
];
const SHA512t_names = [
	"SHA-512/t", "SHA_512_t", "SHA512_t", "SHA_512t", "SHA512t",
	"sha-512/t", "sha_512_t", "sha512_t", "sha_512t", "sha512t"
];
const SHA224_methods = SHA224_names.map(name => SHA2[name]);
const SHA256_methods = SHA256_names.map(name => SHA2[name]);
const SHA384_methods = SHA384_names.map(name => SHA2[name]);
const SHA512_methods = SHA512_names.map(name => SHA2[name]);
const SHA512224_methods = SHA512224_names.map(name => SHA2[name]);
const SHA512256_methods = SHA512256_names.map(name => SHA2[name]);
const SHA512t_methods = SHA512t_names.map(name => SHA2[name]);
console.assert(everythings_equal(SHA224_methods));
console.assert(everythings_equal(SHA256_methods));
console.assert(everythings_equal(SHA384_methods));
console.assert(everythings_equal(SHA512_methods));
console.assert(everythings_equal(SHA512224_methods));
console.assert(everythings_equal(SHA512256_methods));
console.assert(everythings_equal(SHA512t_methods));

const input1 = new Uint8Array([0xC0, 0xFF, 0xEE]);
const input2 = "Green chá";

// A test for the SHA-224 implementation
console.info("Testing the SHA-224 implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"26FB46CB822BA82F43339CB247EC" +
		"D111770783F572A9B9A5CF34CD46"
	),
	SHA224(input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"0911CC3F1706191ADE7BCBADFA95" +
		"1428F609CAA2F176E5F7E4FED6E7"
	),
	SHA224(input2)
]));

// A test for the SHA-256 implementation
console.info("Testing the SHA-256 implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"C47A10DC272B1221F0380A2AE0F7D7FA" +
		"830B3E378F2F5309BBF13F61AD211913"
	),
	SHA256(input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"C309778A5D6F3F683DCE435DFB722F85" +
		"394F552FA5D2421A5ECABD3BE37ADF2C"
	),
	SHA256(input2)
]));

// A test for the SHA-384 implementation
console.info("Testing the SHA-384 implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"011F360DB636CFA4C7A61768AD917FE3D95A6BD88A7968CE" +
		"437B00B63A32B0DA911329488B8571224E4245250B62BA86"
	),
	SHA384(input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"63F2633FF2BC1E247776129B7697660A7013347F8BADE2E5" +
		"C12C5AE8E05313E59E7B748468C9BAAB378F795B034285C2"
	),
	SHA384(input2)
]));

// A test for the SHA-512 implementation
console.info("Testing the SHA-512 implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"D6F3D166B443B394F2505C48A5C6904C" +
		"682D5A6FBE360D6C337A98F7EA6675F1" +
		"95157B33F599B600E39783C72024F91B" +
		"4718651B4CFD08AFCF6C06B9CDB6508C"
	),
	SHA512(input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"4F5E9243624C7CA4019ED48A612F7678" +
		"8C209EDAD82DB2F58FC9A309F00EB70C" +
		"7CEE8E3E8FAB23FAF8CD4BAD2098F636" +
		"5D471C2B5D16CCE513AAB0D722A54D7E"
	),
	SHA512(input2)
]));

// A test for the SHA-512/224 implementation
console.info("Testing the SHA-512/224 implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"F16F1E9CF96B5B9CAA0D5ABD0AA2" +
		"A10BDD0636D0D1C3DE2B4C11E312"
	),
	SHA512_224(input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"28E72ECF6C0D3BFBA248007A560A" +
		"514636CCCF9E8FF9C2944DF47852"
	),
	SHA512_224(input2)
]));

// A test for the SHA-512/256 implementation
console.info("Testing the SHA-512/256 implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"22680446A2D2EC571AE5EC2B45F59C70" +
		"211B5FCF44894C02BD242F7B05B24870"
	),
	SHA512_256(input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"E4B004A4576B3EC326664A7502FED27D" +
		"484E9E9F14B17EEBA48C029B380C885C"
	),
	SHA512_256(input2)
]));

// A test for the SHA-512/t (t = 8 here) implementation
console.info("Testing the SHA-512/t implementation.");
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer(
		"B1"
	),
	SHA512_t(8, input1)
]));
console.assert(every_arraybuffers_equal([
	hex_to_arraybuffer("9C"),
	SHA512_t(8, input2)
]));

console.info("No assertion failure means it is working properly.");
