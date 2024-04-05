
# Languify 🗣️

Add support for .lang files in your project !


## Features 🚀

- Parse .lang files into javascript objects
- Really fast (2 ms)
- Lightweight (3 files not combined)
- Supports Comments (//)


## Guide ❓

### How to install ? 👨‍💻
Use `npm`, `yarn` or `pnpm`
- `npm i languify`
- `yarn add languify`
- `pnpm i languify`

### How to parse a .lang file ? 👅
To parse a .lang file into a javascript object, you can use the `parse(filepath)` function in languify !

```js
import * as languify from "languify"
// or
const languify = require("languify")

let lang = languify.parse("/path/to/file") // Not obligatory to put .lang after the name but still recomended !

console.log(lang.bar) // foo
```

(file.lang):
```lang
foo = bar
bar = foo
foobar = Hello %s !
```

### Replacing %s variables 🔄️
You can use the node/util function: format() but there is a shortcut directly in languify !
```
console.log(languify.format(lang.foobar, "User")) // Hello User !
```
## Documentation 🫡

`parse(filepath)` - Parses a .lang file into a javascript object.
- `filename` : The file path where is located your .lang file !

`format(string, ...args)` - A quick access for node/util's format function
- `string` : The string to format
- `...args` : A sequence of elements to replace the %s or others
## Authors

- [@Its0xyToan](https://www.github.com/Its0xyToan) 😄

