import os
from core.config_loader import ConfigLoader, Config

BASE_DIR = f"{os.getcwd()}"

config_loader = ConfigLoader(config_filepath=f"{BASE_DIR}/core/config/app.conf")
config = Config(**config_loader.load_config())
