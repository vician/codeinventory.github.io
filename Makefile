jekyll=/home/martin/.gem/ruby/2.3.0/bin/jekyll

serve:
	${jekyll} serve

build:
	${jekyll} build

clean:
	${jekyll} clean

deploy:
	ln -sf _config.production.yml _config.yml
	${jekyll} build
	ln -sf _config.local.yml _config.yml
  rsync -avz -e ssh --delete ./_site/ vf.vician.cz:/var/www/vician.cz/
  rsync -avz -e ssh --delete ./_site/ vf2.vician.cz:/var/www/vician.cz/
