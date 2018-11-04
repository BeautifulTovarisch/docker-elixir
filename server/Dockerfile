FROM elixir:1.7.3 as dev

RUN addgroup --gid 999 elixir
RUN adduser --gecos \
    --disabled-password \
    --uid 999 \
    --gid 999 \
    elixir

USER elixir

WORKDIR /home/elixir

COPY --chown=elixir:elixir . /home/elixir

# recommended force for non-interactive use
RUN mix local.hex --force
RUN mix deps.get
