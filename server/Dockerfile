FROM elixir:1.7.3 as dev

WORKDIR /app

COPY . /app

# recommended force for non-interactive use
RUN mix local.hex --force
RUN mix archive.install --force \
    https://github.com/phoenixframework/archives/raw/master/phx_new.ez

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
