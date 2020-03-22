printf "Removing dist folder..\n"
rm -rf "dist"
sleep 1
printf "Removed! \n\n"

printf "Building the project..\n"
yarn tsc
sleep 1
printf "Builded! \n\n"

printf "Copying required files for npm..\n"
cp "./package.json" "./dist/"
cp "./README.md" "./dist/"
cp "./.npmignore" "./dist/"
printf "Copied! \n\n"

printf "Ready to publish!"