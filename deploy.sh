#!/bin/bash

cd $(dirname $0)

ln -sf _config.production.yml _config.yml

jekyll b
ln -sf _config.local.yml _config.yml

# VF
rsync -avz -e ssh --delete ./_site/ vf.vician.cz:/var/www/vician.cz/
# VF2
rsync -avz -e ssh --delete ./_site/ vf2.vician.cz:/var/www/vician.cz/
