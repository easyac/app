.PHONY: run-android

run-android:
	ionic run android -l

run-browser:
	ionic serve -l

build:
	./scripts.sh
