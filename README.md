<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Significand

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an integer corresponding to the significand of a [single-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float32-base-significand
```

</section>

<section class="usage">

## Usage

```javascript
var significandf = require( '@stdlib/number-float32-base-significand' );
```

#### significandf( x )

Returns an `integer` corresponding to the significand of a [single-precision floating-point number][ieee754].

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );

var s = significandf( toFloat32( 3.14e34 ) ); // => 10000011000010001110111
// returns 4293751

s = significandf( toFloat32( 3.14e-34 ) ); // => 10100001011000001010101
// returns 5288021

s = significandf( toFloat32( -3.14 ) ); // => 10010001111010111000011
// returns 4781507

s = significandf( 0.0 ); // => 00000000000000000000000
// returns 0

s = significandf( NaN ); // => 10000000000000000000000
// returns 4194304
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var significandf = require( '@stdlib/number-float32-base-significand' );

var frac;
var exp;
var x;
var s;
var i;

// Generate random numbers and extract their significands...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = round( randu()*44.0 ) - 22;
    x = frac * pow( 10.0, exp );
    x = toFloat32( x );
    s = significandf( x );
    console.log( 'x: %d. significand: %d.', x, s );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-significand.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-significand

[test-image]: https://github.com/stdlib-js/number-float32-base-significand/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/number-float32-base-significand/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-significand/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-significand?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-significand.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-significand/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-significand/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
