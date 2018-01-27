# SHA2.js

 This Javascript library for web browsers implements [the **SHA-2 (Secure Hash Algorithm 2)** cryptographic hash function family](https://en.wikipedia.org/wiki/SHA-2) designed by _the United States National Security Agency (NSA)_<sub> ― **SHA-224**, **SHA-256**, **SHA-384**, **SHA-512**, and **SHA-512/t** (including **SHA-512/224** and **SHA-512/256**)</sub>.


## Installation ⤓

 Two types of `SHA2.js` are available; [one](./ES6-module/SHA2.js) for an [_ECMAScript 2015_ module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) use, another [one](./non-ES6-module/SHA2.js) that assigns global variables `SHA2Core` and `SHA2`.

 As for _Node.js_, I recommend using [the `sha2` module](https://www.npmjs.com/package/sha2) instead.


## Usage

### Importing

 If you're using [the _ECMAScript 2015_ module](./ES6-module/SHA2.js), it `export`s `SHA2` as a `default` exporting value; so `import` it to use it.

```javascript
import SHA2 from "./SHA2.js";
```

 Otherwise, just use global variable `SHA2`.

 You might find [the destructuring assignment syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) useful.

```javascript
const {SHA256, SHA384} = SHA2;
```


### Method aliases

 Choose your preferred naming convention!

```javascript
const print_data = arraybuffer =>
	console.log(Array.from(new Uint8Array(arraybuffer)).map(x => x.toString(16).padStart(2, 0)).join(""));

const input = "QuelI->{Cls(ih) {EXmY[aaz]->{Cls(secta f iyon) {EX[lic]->{secta f ih}}}}}->ExeC->{UW};";

// SHA-224
print_data(SHA2["SHA-224"](input));
print_data(SHA2.SHA_224(input));
print_data(SHA2.SHA224(input));
print_data(SHA2["sha-224"](input));
print_data(SHA2.sha_224(input));
print_data(SHA2.sha224(input));
// All of them print `443f5cde159f29dcd85b1c71dcf910f60d4fcf7bca91c855d7438ed2`.

// SHA-512/80
print_data(SHA2["SHA-512/t"](80, input));
print_data(SHA2.SHA_512_t(80, input));
print_data(SHA2.SHA512_t(80, input));
print_data(SHA2.SHA_512t(80, input));
print_data(SHA2.SHA512t(80, input));
print_data(SHA2["sha-512/t"](80, input));
print_data(SHA2.sha_512_t(80, input));
print_data(SHA2.sha512_t(80, input));
print_data(SHA2.sha_512t(80, input));
print_data(SHA2.sha512t(80, input));
// All of them print `1824eebf46c6ea4ab692`.
```

### Available input types

 They accept a string to be encoded in UTF-8, or an `Uint8Array`.

```javascript
// SHA-384
const {SHA384} = SHA2;

const print_data = arraybuffer =>
	console.log(Array.from(new Uint8Array(arraybuffer)).map(x => x.toString(16).padStart(2, 0)).join(""));

// Input: "Green chá" in UTF-8.
print_data(SHA384("Green chá"));
// 63f2633ff2bc1e247776129b7697660a7013347f8bade2e5c12c5ae8e05313e59e7b748468c9baab378f795b034285c2

// Input: 0xC0FFEE.
print_data(SHA384(new Uint8Array([0xC0, 0xFF, 0xEE])));
// 011f360db636cfa4c7a61768ad917fe3d95a6bd88a7968ce437b00b63a32b0da911329488b8571224e4245250b62ba86
```

### Working with the outputs

 They return an `ArrayBuffer`, so you may do what you may do with an `ArrayBuffer`.

```javascript
// SHA-256
const {SHA256} = require("sha2");

const nyanarrbuf = SHA256(`
░░░░░░░▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄░░░░░░
░░░░░░█░░▄▀▀▀▀▀▀▀▀▀▀▀▀▀▄░░█░░░░░
░░░░░░█░█░▀░░░░░▀░░▀░░░░█░█░░░░░
░░░░░░█░█░░░░░░░░▄▀▀▄░▀░█░█▄▀▀▄░
█▀▀█▄░█░█░░▀░░░░░█░░░▀▄▄█▄▀░░░█░
▀▄▄░▀██░█▄░▀░░░▄▄▀░░░░░░░░░░░░▀▄
░░▀█▄▄█░█░░░░▄░░█░░░▄█░░░▄░▄█░░█
░░░░░▀█░▀▄▀░░░░░█░██░▄░░▄░░▄░███
░░░░░▄█▄░░▀▀▀▀▀▀▀▀▄░░▀▀▀▀▀▀▀░▄▀░
░░░░█░░▄█▀█▀▀█▀▀▀▀▀▀█▀▀█▀█▀▀█░░░
░░░░▀▀▀▀░░▀▀▀░░░░░░░░▀▀▀░░▀▀░░░░
`);
console.log(nyanarrbuf);
// ArrayBuffer(32) {}

console.log(new Uint8Array(nyanarrbuf));
// Uint8Array(32) [145, 122, 241, 89, 230, 168, 122, 43, 61, 60, 209, 108, 213, 241,
// 167, 137, 183, 236, 144, 7, 117, 173, 208, 82, 22, 115, 5, 211, 151, 233, 133, 242]

console.log(Array.from(new Uint8Array(nyanarrbuf)));
// Array(32) [145, 122, 241, 89, 230, 168, 122, 43, 61, 60, 209, 108, 213, 241, 167,
// 137, 183, 236, 144, 7, 117, 173, 208, 82, 22, 115, 5, 211, 151, 233, 133, 242]

const arraybuffer_to_hex = arraybuffer => Array
	.from(new Uint8Array(arraybuffer))
	.map(x => x.toString(16).padStart(2, 0))
	.join("");
console.log(arraybuffer_to_hex(nyanarrbuf));
// "917af159e6a87a2b3d3cd16cd5f1a789b7ec900775add052167305d397e985f2"

const arraybuffers_are_equal = (a, b) => ((new Uint8Array(a)).toString() === (new Uint8Array(b)).toString());
console.log(arraybuffers_are_equal(nyanarrbuf, nyanarrbuf));
// true
```


## Methods ⚙️

- For **SHA-224**
  - `SHA2["SHA-224"](source)`
  - `SHA2.SHA_224(source)`
  - `SHA2.SHA224(source)`
  - `SHA2["sha-224"](source)`
  - `SHA2.sha_224(source)`
  - `SHA2.sha224(source)`
- For **SHA-256**
  - `SHA2["SHA-256"](source)`
  - And so on.
- For **SHA-384**
  - `SHA2["SHA-384"](source)`
  - And so on.
- For **SHA-512**
  - `SHA2["SHA-512"](source)`
  - And so on.
- For **SHA-512/t** <sub>(_t_ must satisfy 1 ≤ _t_ ≤ 511 and _t_ ≠ 384. And only _t_ that is a multiple of 8 is supported.)</sub>
  - `SHA2["SHA-512/t"](t, source)`
  - `SHA2.SHA_512_t(t, source)`
  - `SHA2.SHA512_t(t, source)`
  - `SHA2.SHA_512t(t, source)`
  - `SHA2.SHA512t(t, source)`
  - `SHA2["sha-512/t"](t, source)`
  - `SHA2.sha_512_t(t, source)`
  - `SHA2.sha512_t(t, source)`
  - `SHA2.sha_512t(t, source)`
  - `SHA2.sha512t(t, source)`
- For **SHA-512/224**
  - `SHA2["SHA-512/224"](source)`
  - And so on.
  - You may also use the method for the SHA-512/t.
- For **SHA-512/256**
  - `SHA2["SHA-512/256"](source)`
  - And so on.
  - You may also use the method for the SHA-512/t.


## Warning ⚠️

### Hashing passwords

 Making a hash of a password with one of the algorithms of the SHA-2 family and keeping it, is **not recommended**.
For that purpose, use slow hash functions which are slow by design such as [PBKDF2](http://en.wikipedia.org/wiki/PBKDF2), [bcrypt](https://en.wikipedia.org/wiki/bcrypt), and [scrypt](http://www.tarsnap.com/scrypt.html), instead.

- [How to securely hash passwords? <sub>(_Information security Stack Exchange_)</sub>](https://security.stackexchange.com/a/31846/135187)
- [Salted Password Hashing - Doing it Right <sub>(_CrackStation_)</sub>](https://crackstation.net/hashing-security.htm)
- [How To Safely Store A Password <sub>(_Coda Hale_)</sub>](https://codahale.com/how-to-safely-store-a-password/)


## Web browser compatibility ✔️

 The following shows the minimum required versions for web browsers to support this library. Note that the information may be incorrect.

|                              | `ArrayBuffer` input | `String` input |
|:----------------------------:|:-------------------:|:--------------:|
|          **Chrome**          |          49         |       49       |
|          **Firefox**         |          45         |       45       |
|           **Opera**          |          43         |       43       |
|          **Safari**          |          9          |      10.1      |
|           **Edge**           |          14         |  _Unsupported_ |
|     **Internet Explorer**    |    _Unsupported_    |  _Unsupported_ |
|      **Android Webview**     |          62         |       62       |
|    **Chrome for Android**    |          62         |       62       |
|    **Firefox for Android**   |          57         |       57       |
|     **Opera for Android**    |          37         |       37       |
|        **Opera Mini**        |    _Unsupported_    |  _Unsupported_ |
|        **iOS Safari**        |         9.2         |       9.2      |
| **Internet Explorer Mobile** |    _Unsupported_    |  _Unsupported_ |
|     **Samsung Internet**     |          5          |        5       |
|    **Blackberry Browser**    |    _Unsupported_    |  _Unsupported_ |
|  **UC Browser for Android**  |    _Unsupported_    |  _Unsupported_ |
|        **QQ Browser**        |    _Unsupported_    |  _Unsupported_ |
|       **Baidu Browser**      |         7.12        |      7.12      |


## Specification reference 📖

### [Request for Comments #6234<sup>(RFC 6234)</sup> <sub>‘US Secure Hash Algorithms (SHA and SHA-based HMAC and HKDF)’</sub>](https://tools.ietf.org/html/rfc6234)

- **§1**: Overview of Contents.
- **§2**: Notation for Bit Strings and Integers.
- **§3**: Operations on Words.
- **§4**: Message Padding and Parsing.
- **§5**: Functions and Constants Used.
- **§6**: Computing the Message Digest.

written by _Donald E. Eastlake 3rd_, and _Tony Hansen_ in May 2011.

### [Federal Information Processing Standards Publication 180-4<sup>(FIPS PUB 180-4)</sup> <sub>‘Secure Hash Standard (SHS)’</sub>](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf)

- **§5.3.6**: SHA-512/t.

published by _National Institute of Standards and Technology (NIST)_ in August 2015.


## License 📜

 This Javascript library has been licensed under [**the MIT license**](./LICENSE).
