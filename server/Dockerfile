FROM elixir:1.7.3 as dev

RUN addgroup --gid 999 elixir

RUN adduser --gecos \
    --disabled-password \
    --uid 999 \
    --gid 999 \
    elixir

USER elixir

WORKDIR /home/elixir

# TODO:: consider combining copies into one layer
COPY --chown=elixir:elixir mix.exs /home/elixir
COPY --chown=elixir:elixir mix.lock /home/elixir

# Recommended force for non-interactive use
RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install --force \
    https://github.com/phoenixframework/archives/raw/master/phx_new.ez

RUN mix deps.get

COPY --chown=elixir:elixir . /home/elixir

CMD [ "iex", "-S", "mix", "phx.server" ]

# Production Image

FROM elixir:1.7.3 as production

# TODO :: copy compiled project, run as elixir
