FROM elixir:1.7.3 as dev

WORKDIR /home/elixir

# TODO:: consider combining copies into one layer
COPY mix.exs /home/elixir
COPY mix.lock /home/elixir

# Recommended force for non-interactive use
RUN mix local.hex --force \
    && mix local.rebar --force \
    && mix archive.install --force \
       https://github.com/phoenixframework/archives/raw/master/phx_new.ez

RUN mix deps.get

RUN mix compile

COPY . /home/elixir

CMD [ "iex", "-S", "mix", "phx.server" ]

# Production Image

FROM elixir:1.7.3 as production

RUN addgroup --gid 999 elixir

RUN adduser --gecos \
    --disabled-password \
    --uid 999 \
    --gid 999 \
    elixir

USER elixir

# TODO :: copy compiled project, run as elixir
