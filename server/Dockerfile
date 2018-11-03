FROM elixir:1.7.3 as dev

WORKDIR /app

RUN mix local.hex

RUN mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez
