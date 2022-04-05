#!/bin/sh

query=$(printf "%s" "$*")
cp "$query" "./colors.css"
