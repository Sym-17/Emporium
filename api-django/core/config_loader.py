import toml
from pydantic import BaseModel


class ConfigLoader:
    def __init__(self, config_filepath):
        self.config_filepath = config_filepath

    def load_config(self):
        with open(self.config_filepath, "r", encoding="utf-8") as file:
            return toml.load(file)


class ServerConfig(BaseModel):
    debug: bool
    env: str
    secret_key: str


class Config(BaseModel):
    server: ServerConfig
