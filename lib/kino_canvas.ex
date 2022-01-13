defmodule KinoCanvas do
  use Kino.JS, assets_path: "lib/assets"

  def new() do
    %{width: nil, height: nil, ops: []}
  end

  def new(width, height) do
    %{width: width, height: height, ops: []}
  end

  def push_op(ctx, op) do
    Map.update!(ctx, :ops, fn ops -> [op | ops] end)
  end

  def render(ctx) do
    ctx = Map.update!(ctx, :ops, fn ops -> Enum.reverse(ops) end)
    Kino.JS.new(__MODULE__, ctx)
  end
end

