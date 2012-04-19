## Operators

### Precedence

In order of highest to lowest.

1. all other special characters
2. `* / %`
3. `+ -`
4. `:`
5. `= !`
6. `< >`
7. `&`
8. `^`
9. `|`
10. all letters: `[a-zA-Z]`

See *[Scala Reference][]*.

### Declaration

- `X unary_~` - `~` is a unary operator &rarr; `~x`
- `X :~(x: X)` - `~` is left associative &rarr; `x :~ y` == `x.:~(y)`
- `X ~:(x: X)` - `~` is right associative &arr; `y ~: x` == `x.~:(y)`


[Scala Reference]: http://www.scala-lang.org/docu/files/ScalaReference.pdf