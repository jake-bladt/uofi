#! /bin/bash

while read line
do
  echo $line
  sleep 1
done < ./echome.sh
