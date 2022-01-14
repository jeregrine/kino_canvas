# KinoCanvas

KinoCanvas allows you to interact and draw on a canvas via livebook cell. The API is a `snake_cased` version of the [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) with the addition of `set` and `call` if you need to set a property or call a function I don't support. 

## Example

Generate a 300x300 canvas and draw to it.

```elixir
KinoCanvas.new(300, 300)
|> KinoCanvas.API.set_line_width(10)
|> KinoCanvas.API.stroke_rect(100, 100, 100, 100)
|> KinoCanvas.API.fill_rect(0, 0, 100, 100)
|> KinoCanvas.API.fill(100)
|> KinoCanvas.render()
```
## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `kino_canvas` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:kino_canvas, "~> 0.1.0"}
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at <https://hexdocs.pm/kino_canvas>.

