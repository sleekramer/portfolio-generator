# Portfolio Generator

## Purpose

Portfolio Generator offers a simple solution to creating an online portfolio. Users simply need to sign up for an account and they will have a portfolio pre-generated for them. With a simple to use interface, the user is able to add the desired information about themselves and their past work.

## Summary

The backend is built with Rails, and the frontend with AngularJS. The frontend assets are managed with Bower, and the app is built on top of a PostgreSQL database.

## Setup

In order to run the app locally, you must have Ruby, Rails, PostgreSQL and Bower installed locally.  If you unfamiliar with Bower it is a command line utility for front-end assets, which can be installed via npm.

### Run Locally

If you have already installed Bower, run `$ bower install` to install the frontend assets.  Then, follow setup for a rails apps:

```
$ bundle install
$ rake db:setup
$ rake db:migrate
$ rails server
```

After those three commands, you should be up and running locally.  Just navigate to your default localhost port in your favorited browser.
