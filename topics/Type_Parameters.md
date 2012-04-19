## Type Parameters

Type parameters are defined as `identifier[T]`, where *`T`* is the type parameter for *`identifier`* of a type, class, trait, or method. Type parameters may also define variance, bounds and constraints.

- `type Identifier[T]`
- `class Identifier[T]`
- `trait Identifier[T]`
- `def identifier[T]`

### Type Variances

- `[+T]` - where `T` is *[Covariant][]*
- `[-T]` - where `T` is *[Contravariant][]*

### Type Bounds

- `[T <: Type]` - `T` is *[Upper Type Bound][]* by `Type` &rarr; `T` inherits from `Type`
- `[T >: Type]` - `T` is *[Lower Type Bound][]* &rarr; `Type` inherits from `T` 
- `[T <% Type]` - `T` is *[View Bound][]* &rarr; `T` viewable as a `Type`, either `T` derives from `Type` or an implicit conversion exists `T=>Type`
- `[T : Type]`&nbsp;&nbsp; - `T` is *[Context Bound][]* &rarr; `Type` parameterized by `T`, via an implicit value within context.

### Type Constraints

Type Constraints are similar to Type Parameter Bounds, except they apply to function arguments. I include this here, because it can be applied as an alternative.

- `f(x: T =:= Type)` - `T` is `Type`, not inherit from `Type`
- `f(x: T <:< Type)` - `T` inherits from `Type`, similar to *[Upper Type Bound][]*
- `f(x: T <%< Type)` - `T` viewable as `Type`, similar to *[View Bound][]*


[Lower Type Bound]: http://www.scala-lang.org/node/137
[Upper Type Bound]: http://www.scala-lang.org/node/136
[View Bound]: http://stackoverflow.com/questions/4465948/what-are-scala-context-and-view-bounds/4467012#4467012
[Context Bound]: http://stackoverflow.com/questions/4465948/what-are-scala-context-and-view-bounds/4467012#4467012
[Covariant]: http://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)
[Contravariant]: http://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)