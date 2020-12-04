#!/bin/bash

# repo="${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}"
#
# if [ -n "$CIRCLE_PR_USERNAME" ] && [ "$CIRCLE_PROJECT_USERNAME" != "$CIRCLE_PR_USERNAME" ]; then
#   echo "This branch is on a fork: ${CIRCLE_PR_USERNAME}/${CIRCLE_PR_REPONAME}"
#   echo
#   echo "Automated browser tests are disabled for pull requests from forks."
#   echo "Please merge this branch locally and test it before merging the "
#   echo "associated pull request to ${repo}."
#   echo
#   exit 0
# fi

# get the URL from our node script
url=$(node __tests__/utility/url.js)

echo "testing URL: ${url}"

if [ "$GITHUB_SHA" != "" ]; then
  commit_url="${url}/commit.txt"

  echo "fetching Federalist commit data..."

  check_federalist_commit() {
    current_sha=`curl -s $commit_url`
    if [ "$current_sha" == "$GITHUB_SHA" ]; then
        echo "SHA1 match!"
        return 1
    else
        echo "current SHA1 '${current_sha}' != '${GITHUB_SHA}'"
        return 0
    fi
  }

  while check_federalist_commit; do
    echo "waiting for Federalist to build..."
    sleep 5
  done
fi
