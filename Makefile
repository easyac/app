.PHONY: run-android

run-android:
	ionic run android -l

run-browser:
	ionic serve -l

build:
	exec ./scripts/build.sh
